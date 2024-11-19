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
     * @param {string} name
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.services.retrieve("name")
     */
    retrieve(name: string, requestOptions?: Services.RequestOptions): Promise<Parlant.Service>;
    /**
     * @param {string} name
     * @param {Parlant.ServiceUpdateParams} request
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.services.createOrUpdate("name", {
     *         kind: Parlant.ToolServiceKindDto.Sdk
     *     })
     */
    createOrUpdate(name: string, request: Parlant.ServiceUpdateParams, requestOptions?: Services.RequestOptions): Promise<Parlant.ServiceUpdateResponse>;
    /**
     * @param {string} name
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.services.delete("name")
     */
    delete(name: string, requestOptions?: Services.RequestOptions): Promise<Parlant.ServiceDeletionResponse>;
    /**
     * @param {Services.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.services.list()
     */
    list(requestOptions?: Services.RequestOptions): Promise<Parlant.ServiceListResponse>;
}
