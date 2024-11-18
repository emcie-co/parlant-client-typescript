import { ParlantClient } from '../src';
import {
    Agent,
    CreateAgentRequest,
    GuidelineContent,
    GuidelinePayload,
    GuidelineInvoice,
    GuidelineWithConnectionsAndToolAssociations,
    CreateSdkServiceRequest,
    GuidelineToolAssociationsPatch,
    Term
} from '../src/api/types';

const SERVER_ADDRESS = 'http://localhost:8000'; // adjust as needed
const PLUGIN_ADDRESS = 'http://host.docker.internal:8010'; // adjust as needed

function makeParlantClient(baseUrl: string): ParlantClient {
    const client = new ParlantClient({ environment: baseUrl });
    console.log(`ParlantClient created with server=\`${baseUrl}\``);
    return client;
}

async function makeApiAgent(client: ParlantClient, name: string): Promise<Agent> {
    const createAgentRequest: CreateAgentRequest = { name };
    const createAgentResponse = await client.createAgent(createAgentRequest);
    console.log(`Agent \`${name}\` created.`);
    return createAgentResponse.agent;
}

async function makeGuideline(
    client: ParlantClient,
    agentId: string,
    action: string,
    predicate: string
): Promise<GuidelineWithConnectionsAndToolAssociations> {
    const guidelinePayload: GuidelinePayload = {
        content: {
            action,
            predicate
        } as GuidelineContent,
        kind: 'guideline',
        operation: 'add',
        coherenceCheck: true,
        connectionProposition: true,
    };

    const createEvaluationResponse = await client.createEvaluation({
        agentId,
        payloads: [guidelinePayload]
    });

    console.log(`Evaluation created with id=\`${createEvaluationResponse.evaluationId}\``);

    // Poll for evaluation completion
    while (true) {
        const readEvaluationResponse = await client.readEvaluation(createEvaluationResponse.evaluationId);

        if (readEvaluationResponse.status === 'running') {
            await new Promise(resolve => setTimeout(resolve, 1000));
            continue;
        }

        if (readEvaluationResponse.status !== 'completed') {
            throw new Error(readEvaluationResponse.status);
        }

        const guidelinesInvoices: GuidelineInvoice[] = readEvaluationResponse.invoices
            .filter(invoice => invoice.data !== null)
            .map(invoice => ({
                payload: invoice.payload,
                checksum: invoice.checksum,
                approved: invoice.approved,
                data: {
                    coherenceChecks: invoice.data?.coherenceChecks || [],
                    connectionPropositions: invoice.data?.connectionPropositions || [],
                },
                error: invoice.error
            }));

        const guidelinesCreateResponse = await client.createGuidelines(agentId, {
            invoices: guidelinesInvoices
        });

        console.log(`Created Guideline item=\`${guidelinesCreateResponse.items[0]}\``);
        return guidelinesCreateResponse.items[0];
    }
}

async function makeTerm(
    client: ParlantClient,
    agentId: string,
    name: string,
    description: string,
    synonyms?: string[]
): Promise<Term> {
    const createTermResponse = await client.createTerm(
        agentId,
        { name, description, synonyms },
    );
    console.log(`Created Term \`${name}~${synonyms}\`='${description}'`);
    return createTermResponse.term;
}

async function makeServiceToolAssociation(
    client: ParlantClient,
    agentId: string,
    guidelineId: string,
    toolName: string,
    toolUrl: string
): Promise<void> {
    await client.upsertService(toolName, { url: toolUrl } as CreateSdkServiceRequest);

    const service = await client.readService(toolName);
    if (!service.tools) throw new Error('No tools found in service');

    const toolRandomsFlip = service.tools[1];
    const toolRandomsRoll = service.tools[2];
    console.log('Got tools from service.');

    await client.patchGuideline(agentId, guidelineId, {
        toolAssociations: {
            add: [
                { serviceName: service.name, toolName: toolRandomsFlip.name },
                { serviceName: service.name, toolName: toolRandomsRoll.name }
            ]
        } as GuidelineToolAssociationsPatch
    });
    console.log('Patched guideline with relevant tools.');
}

describe('Parlant Client Integration', () => {
    it('should handle the happy path scenario', async () => {
        const client = makeParlantClient(SERVER_ADDRESS);

        const agent = await makeApiAgent(client, 'demo-agent');
        expect(agent).toBeDefined();

        const guidelineRandoms = await makeGuideline(
            client,
            agent.id,
            'Use the randoms tool to either flip coins or roll dice.',
            'The users wants a random number.'
        );
        expect(guidelineRandoms).toBeDefined();

        const term = await makeTerm(
            client,
            agent.id,
            'Melupapepkin',
            "A word that's meaning should be ignored. Serves as an arbitrary identifier.",
            ['Shoshanna', 'Moshe']
        );
        expect(term).toBeDefined();

        await makeServiceToolAssociation(
            client,
            agent.id,
            guidelineRandoms.guideline.id,
            'randoms',
            PLUGIN_ADDRESS
        );

        const createSessionResponse = await client.createSession({
            endUserId: 'end_user',
            agentId: agent.id
        });
        expect(createSessionResponse).toBeDefined();
        const demoSession = createSessionResponse.session;

        const createEventResponse = await client.createEvent(demoSession.id, {
            kind: 'message',
            source: 'end_user',
            content: 'Heads or tails?',
            moderation: 'auto'
        });
        expect(createEventResponse).toBeDefined();

        const lastKnownOffset = createEventResponse.event.offset;
        const listInteractionResponse = await client.listInteractions(demoSession.id, {
            minEventOffset: lastKnownOffset,
            source: 'ai_agent',
            wait: true
        });

        for (const interaction of listInteractionResponse.interactions) {
            expect(interaction.data).toBeDefined();
            console.log(interaction.data);
        }
    }, 30000); // Increased timeout for integration test
});