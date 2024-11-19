/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as Parlant from "../../../index";
export declare namespace ContextVariables {
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
export declare class ContextVariables {
    protected readonly _options: ContextVariables.Options;
    constructor(_options: ContextVariables.Options);
    /**
     * @param {string} agentId
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.list("agent_id")
     */
    list(agentId: string, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableListResponse>;
    /**
     * @param {string} agentId
     * @param {Parlant.ContextVariableCreationParams} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.create("agent_id", {
     *         name: "name"
     *     })
     */
    create(agentId: string, request: Parlant.ContextVariableCreationParams, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableCreationResponse>;
    /**
     * @param {string} agentId
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.deleteMany("agent_id")
     */
    deleteMany(agentId: string, requestOptions?: ContextVariables.RequestOptions): Promise<void>;
    /**
     * @param {string} agentId
     * @param {string} variableId
     * @param {Parlant.ContextVariablesRetrieveRequest} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.retrieve("agent_id", "variable_id")
     */
    retrieve(agentId: string, variableId: string, request?: Parlant.ContextVariablesRetrieveRequest, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableReadResponse>;
    /**
     * @param {string} agentId
     * @param {string} variableId
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.delete("agent_id", "variable_id")
     */
    delete(agentId: string, variableId: string, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableDeletionResponse>;
    /**
     * @param {string} agentId
     * @param {string} variableId
     * @param {string} key
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.getValue("agent_id", "variable_id", "key")
     */
    getValue(agentId: string, variableId: string, key: string, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableValue>;
    /**
     * @param {string} agentId
     * @param {string} variableId
     * @param {string} key
     * @param {Parlant.ContextVariableValueUpdateParams} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.setValue("string", "string", "string", {
     *         data: {
     *             "key": "value"
     *         }
     *     })
     */
    setValue(agentId: string, variableId: string, key: string, request: Parlant.ContextVariableValueUpdateParams, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableValueUpdateResponse>;
    /**
     * @param {string} agentId
     * @param {string} variableId
     * @param {string} key
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.deleteValue("agent_id", "variable_id", "key")
     */
    deleteValue(agentId: string, variableId: string, key: string, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableValueDeletionResponse>;
}
