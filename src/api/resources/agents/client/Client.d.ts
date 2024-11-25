/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as Parlant from "../../../index";
export declare namespace Agents {
    interface Options {
        environment: core.Supplier<string>;
    }
    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}
export declare class Agents {
    protected readonly _options: Agents.Options;
    constructor(_options: Agents.Options);
    /**
     * @param {Agents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.agents.list()
     */
    list(requestOptions?: Agents.RequestOptions): Promise<Parlant.Agent[]>;
    /**
     * @param {Parlant.AgentCreationParams} request
     * @param {Agents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.agents.create({
     *         name: "name"
     *     })
     */
    create(request: Parlant.AgentCreationParams, requestOptions?: Agents.RequestOptions): Promise<Parlant.Agent>;
    /**
     * @param {string} agentId
     * @param {Agents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.agents.retrieve("agent_id")
     */
    retrieve(agentId: string, requestOptions?: Agents.RequestOptions): Promise<Parlant.Agent>;
    /**
     * @param {string} agentId
     * @param {Agents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.agents.delete("agent_id")
     */
    delete(agentId: string, requestOptions?: Agents.RequestOptions): Promise<void>;
    /**
     * @param {string} agentId
     * @param {Parlant.AgentUpdateParams} request
     * @param {Agents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.agents.update("agent_id")
     */
    update(agentId: string, request?: Parlant.AgentUpdateParams, requestOptions?: Agents.RequestOptions): Promise<Parlant.Agent>;
}
