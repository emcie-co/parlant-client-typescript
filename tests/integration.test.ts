import { ParlantClient } from "../src";
import {
  Agent,
  GuidelineContent,
  GuidelinePayload,
  GuidelineInvoice,
  GuidelineWithConnectionsAndToolAssociations,
  Term,
  Payload,
} from "../src/api/types";

const SERVER_ADDRESS = 'http://localhost:8012'; // adjust as needed
const PLUGIN_ADDRESS = 'http://localhost:8002'; // adjust as needed

function makeParlantClient(baseUrl: string): ParlantClient {
  const client = new ParlantClient({ environment: baseUrl });
  console.log(`ParlantClient created with server=\`${baseUrl}\``);
  return client;
}

async function makeApiAgent(
  client: ParlantClient,
  name: string,
): Promise<Agent> {
  const createAgentResponse = await client.agents.create({ name });
  console.log(`Agent \`${name}\` created.`);
  return createAgentResponse.agent;
}

async function makeGuideline(
  client: ParlantClient,
  agentId: string,
  action: string,
  condition: string,
): Promise<GuidelineWithConnectionsAndToolAssociations> {
  const guidelinePayload: Payload = {
    kind: "guideline",
    guideline: {
      content: {
        action,
        condition,
      } as GuidelineContent,
      operation: "add",
      coherenceCheck: true,
      connectionProposition: true,
    },
  };

  const createEvaluationResponse = await client.evaluations.create({
    agentId,
    payloads: [guidelinePayload],
  });

  console.log(
    `Evaluation created with id=\`${createEvaluationResponse.evaluationId}\``,
  );

  // Poll for evaluation completion
  while (true) {
    const retrieveEvaluationResponse = await client.evaluations.retrieve(
      createEvaluationResponse.evaluationId,
    );

    if (retrieveEvaluationResponse.status === "running") {
      await new Promise(resolve => setTimeout(resolve, 1000));
      continue;
    }

    if (retrieveEvaluationResponse.status !== "completed") {
      throw new Error(retrieveEvaluationResponse.status);
    }

    const guidelinesInvoices: GuidelineInvoice[] =
      retrieveEvaluationResponse.invoices
        .filter(invoice => invoice.data !== null)
        .map(invoice => ({
          payload: invoice.payload.guideline!,
          checksum: invoice.checksum,
          approved: invoice.approved,
          data: {
            coherenceChecks: invoice.data?.guideline?.coherenceChecks || [],
            connectionPropositions:
              invoice.data?.guideline?.connectionPropositions || [],
          },
          error: invoice.error,
        }));

    const guidelinesCreateResponse = await client.guidelines.create(agentId, {
      invoices: guidelinesInvoices,
    });

    console.log(
      `Created Guideline item=\`${guidelinesCreateResponse.items[0]}\``,
    );
    return guidelinesCreateResponse.items[0];
  }
}

async function makeTerm(
  client: ParlantClient,
  agentId: string,
  name: string,
  description: string,
  synonyms?: string[],
): Promise<Term> {
  const createTermResponse = await client.glossary.createTerm(agentId, {
    name,
    description,
    synonyms,
  });
  console.log(`Created Term \`${name}~${synonyms}\`='${description}'`);
  return createTermResponse.term;
}

async function makeServiceToolAssociation(
  client: ParlantClient,
  agentId: string,
  guidelineId: string,
  serviceName: string,
  serviceUrl: string,
): Promise<void> {
  await client.services.createOrUpdate(serviceName, {
    kind: "sdk",
    sdk: {
      url: serviceUrl,
    },
  });

  const service = await client.services.retrieve(serviceName);
  if (!service.tools) throw new Error("No tools found in service");

  const toolRandomsFlip = service.tools[1];
  const toolRandomsRoll = service.tools[2];
  console.log("Got tools from service.");

  await client.guidelines.update(agentId, guidelineId, {
    toolAssociations: {
      add: [
        { serviceName: service.name, toolName: toolRandomsFlip.name },
        { serviceName: service.name, toolName: toolRandomsRoll.name },
      ],
    },
  });
  console.log("Patched guideline with relevant tools.");
}

describe("Parlant Client Integration", () => {
  it("should handle the happy path scenario", async () => {
    const client = makeParlantClient(SERVER_ADDRESS);

    const agent = await makeApiAgent(client, "demo-agent");
    expect(agent).toBeDefined();

    const guidelineRandoms = await makeGuideline(
      client,
      agent.id,
      "Use the randoms tool to either flip coins or roll dice.",
      "The users wants a random number.",
    );
    expect(guidelineRandoms).toBeDefined();

    const term = await makeTerm(
      client,
      agent.id,
      "Melupapepkin",
      "A word that's meaning should be ignored. Serves as an arbitrary identifier.",
      ["Shoshanna", "Moshe"],
    );
    expect(term).toBeDefined();

    await makeServiceToolAssociation(
      client,
      agent.id,
      guidelineRandoms.guideline.id,
      "randoms",
      PLUGIN_ADDRESS,
    );

    const createSessionResponse = await client.sessions.create({
      endUserId: "end_user",
      agentId: agent.id,
    });
    expect(createSessionResponse).toBeDefined();
    const demoSession = createSessionResponse.session;

    const createEventResponse = await client.sessions.createEvent(
      demoSession.id,
      {
        kind: "message",
        source: "end_user",
        content: "Heads or tails?",
        moderation: "auto",
      },
    );
    expect(createEventResponse).toBeDefined();

    const lastKnownOffset = createEventResponse.event.offset;
    const listInteractionResponse = await client.sessions.listInteractions(
      demoSession.id,
      {
        minEventOffset: lastKnownOffset,
        source: "ai_agent",
        wait: true,
      },
    );

    for (const interaction of listInteractionResponse.interactions) {
      expect(interaction.data).toBeDefined();
      console.log(interaction.data);
    }
  }, 60000); // Increased timeout for integration test
});
