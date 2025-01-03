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
     * Lists all context variables set for the provided agent
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.list("agent_id")
     */
    list(agentId: string, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariable[]>;
    /**
     * Creates a new context variable for tracking customer-specific or tag-specific data.
     *
     * Example uses:
     *
     * - Track subscription tiers to control feature access
     * - Store usage patterns for personalized recommendations
     * - Remember customer preferences for tailored responses
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {Parlant.ContextVariableCreationParams} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.create("agent_id", {
     *         name: "UserBalance",
     *         description: "Stores the account balances of users",
     *         toolId: {
     *             serviceName: "finance_service",
     *             toolName: "balance_checker"
     *         },
     *         freshnessRules: "freshness_rules"
     *     })
     */
    create(agentId: string, request: Parlant.ContextVariableCreationParams, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariable>;
    /**
     * Deletes all context variables and their values for the provided agent ID
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.deleteMany("agent_id")
     */
    deleteMany(agentId: string, requestOptions?: ContextVariables.RequestOptions): Promise<void>;
    /**
     * Retrieves a context variable's details and optionally its values.
     *
     * Can return all customer or tag values for this variable type if include_values=True.
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {string} variableId - Unique identifier for the context variable
     * @param {Parlant.ContextVariablesRetrieveRequest} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.retrieve("agent_id", "variable_id")
     */
    retrieve(agentId: string, variableId: string, request?: Parlant.ContextVariablesRetrieveRequest, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableReadResult>;
    /**
     * Deletes a specific context variable and all its values.
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {string} variableId - Unique identifier for the context variable
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.delete("agent_id", "variable_id")
     */
    delete(agentId: string, variableId: string, requestOptions?: ContextVariables.RequestOptions): Promise<void>;
    /**
     * Updates an existing context variable.
     *
     * Only provided fields will be updated; others remain unchanged.
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {string} variableId - Unique identifier for the context variable
     * @param {Parlant.ContextVariableUpdateParams} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.update("agent_id", "variable_id", {
     *         name: "CustomerBalance",
     *         freshnessRules: "freshness_rules"
     *     })
     */
    update(agentId: string, variableId: string, request?: Parlant.ContextVariableUpdateParams, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariable>;
    /**
     * Retrieves the value of a context variable for a specific customer or tag.
     *
     * The key should be a customer identifier or a customer tag in the format `tag:{tag_id}`.
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {string} variableId - Unique identifier for the context variable
     * @param {string} key - Key for the variable value
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.getValue("agent_id", "variable_id", "key")
     */
    getValue(agentId: string, variableId: string, key: string, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableValue>;
    /**
     * Updates the value of a context variable.
     *
     * The `key` represents a customer identifier or a customer tag in the format `tag:{tag_id}`.
     * If `key="DEFAULT"`, the update applies to all customers.
     * The `params` parameter contains the actual context information being stored.
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {string} variableId - Unique identifier for the context variable
     * @param {string} key - Key for the variable value
     * @param {Parlant.ContextVariableValueUpdateParams} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.setValue("agent_id", "variable_id", "key", {
     *         data: {
     *             "balance": 5000.5,
     *             "currency": "USD",
     *             "last_transaction": "2024-03-23T15:30:00Z",
     *             "status": "active"
     *         }
     *     })
     */
    setValue(agentId: string, variableId: string, key: string, request: Parlant.ContextVariableValueUpdateParams, requestOptions?: ContextVariables.RequestOptions): Promise<Parlant.ContextVariableValue>;
    /**
     * Deletes a specific customer's or tag's value for this context variable.
     *
     * The key should be a customer identifier or a customer tag in the format `tag:{tag_id}`.
     * Removes only the value for the specified key while keeping the variable's configuration.
     *
     * @param {string} agentId - Unique identifier of the agent
     * @param {string} variableId - Unique identifier for the context variable
     * @param {string} key - Key for the variable value
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.deleteValue("agent_id", "variable_id", "key")
     */
    deleteValue(agentId: string, variableId: string, key: string, requestOptions?: ContextVariables.RequestOptions): Promise<void>;
}
