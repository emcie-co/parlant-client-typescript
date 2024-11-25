/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as Parlant from "../../../index";
export declare namespace Guidelines {
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
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}
export declare class Guidelines {
    protected readonly _options: Guidelines.Options;
    constructor(_options: Guidelines.Options);
    /**
     * @param {string} agentId
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.list("agent_id")
     */
    list(agentId: string, requestOptions?: Guidelines.RequestOptions): core.APIPromise<Parlant.Guideline[]>;
    /**
     * @param {string} agentId
     * @param {Parlant.GuidelineCreationParams} request
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.create("agent_id", {
     *         invoices: [{
     *                 payload: {
     *                     kind: "guideline"
     *                 },
     *                 checksum: "checksum",
     *                 approved: true
     *             }]
     *     })
     */
    create(agentId: string, request: Parlant.GuidelineCreationParams, requestOptions?: Guidelines.RequestOptions): core.APIPromise<Parlant.GuidelineCreationResult>;
    /**
     * @param {string} agentId
     * @param {string} guidelineId
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.retrieve("agent_id", "guideline_id")
     */
    retrieve(agentId: string, guidelineId: string, requestOptions?: Guidelines.RequestOptions): core.APIPromise<Parlant.GuidelineWithConnectionsAndToolAssociations>;
    /**
     * @param {string} agentId
     * @param {string} guidelineId
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.delete("agent_id", "guideline_id")
     */
    delete(agentId: string, guidelineId: string, requestOptions?: Guidelines.RequestOptions): core.APIPromise<void>;
    /**
     * @param {string} agentId
     * @param {string} guidelineId
     * @param {Parlant.GuidelineUpdateParams} request
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.update("agent_id", "guideline_id")
     */
    update(agentId: string, guidelineId: string, request?: Parlant.GuidelineUpdateParams, requestOptions?: Guidelines.RequestOptions): core.APIPromise<Parlant.GuidelineWithConnectionsAndToolAssociations>;
}
