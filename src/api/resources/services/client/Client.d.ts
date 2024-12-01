/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as Parlant from "../../../index";
export declare namespace Services {
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
export declare class Services {
    protected readonly _options: Services.Options;
    constructor(_options: Services.Options);
    /**
     * Get details about a specific service including all its tools.
     *
     * - Tools list may be empty if service is still initializing
     * - Parameters marked as required must be provided when using a tool
     * - Enum parameters restrict inputs to the listed values
     *
     * @param {string} name - User assigned name of the service
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     * @throws {@link Parlant.ServiceUnavailableError}
     *
     * @example
     *     await client.services.retrieve("name")
     */
    retrieve(name: string, requestOptions?: Services.RequestOptions): Promise<Parlant.Service>;
    /**
     * Create a new service or update an existing one.
     *
     * - For SDK services, the target server must implement the Parlant SDK protocol
     * - For OpenAPI services, the spec must be accessible and compatible with OpenAPI 3.0
     * - Service names must be unique and should be kebab-case
     * - Updates cause a brief service interruption while reconnecting
     *
     * @param {string} name - The name of service to update
     * @param {Parlant.ServiceUpdateParams} request
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.services.createOrUpdate("name", {
     *         kind: "sdk"
     *     })
     */
    createOrUpdate(name: string, request: Parlant.ServiceUpdateParams, requestOptions?: Services.RequestOptions): Promise<Parlant.Service>;
    /**
     * Remove a service integration.
     *
     * - Active connections are terminated immediately
     * - Tools from this service become unavailable to agents
     * - Historical data about tool usage is preserved
     *
     * @param {string} name - User assigned name of the service
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.services.delete("name")
     */
    delete(name: string, requestOptions?: Services.RequestOptions): Promise<void>;
    /**
     * Returns basic info about all registered services. Tool details are omitted for performance.
     *
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.services.list()
     */
    list(requestOptions?: Services.RequestOptions): Promise<Parlant.Service[]>;
}
