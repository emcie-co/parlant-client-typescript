/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as Parlant from "../../../index";
export declare namespace Sessions {
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
export declare class Sessions {
    protected readonly _options: Sessions.Options;
    constructor(_options: Sessions.Options);
    /**
     * Lists all sessions matching the specified filters.
     *
     * Can filter by agent_id and/or customer_id. Returns all sessions if no
     * filters are provided.
     *
     * @param {Parlant.SessionsListRequest} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.list()
     */
    list(request?: Parlant.SessionsListRequest, requestOptions?: Sessions.RequestOptions): Promise<Parlant.Session[]>;
    /**
     * Creates a new session between an agent and customer.
     *
     * The session will be initialized with the specified agent and optional customer.
     * If no customer_id is provided, a guest customer will be created.
     *
     * @param {Parlant.SessionCreationParams} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.create({
     *         agentId: "ag_123xyz",
     *         customerId: "cust_123xy",
     *         title: "Product inquiry session"
     *     })
     */
    create(request: Parlant.SessionCreationParams, requestOptions?: Sessions.RequestOptions): Promise<Parlant.Session>;
    /**
     * Deletes all sessions matching the specified filters.
     *
     * Can filter by agent_id and/or customer_id. Will delete all sessions if no
     * filters are provided.
     *
     * @param {Parlant.SessionsDeleteManyRequest} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.deleteMany()
     */
    deleteMany(request?: Parlant.SessionsDeleteManyRequest, requestOptions?: Sessions.RequestOptions): Promise<void>;
    /**
     * Retrieves details of a specific session by ID.
     *
     * @param {string} sessionId - Unique identifier for the session
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.retrieve("session_id")
     */
    retrieve(sessionId: string, requestOptions?: Sessions.RequestOptions): Promise<Parlant.Session>;
    /**
     * Deletes a session and all its associated events.
     *
     * The operation is idempotent - deleting a non-existent session will return 404.
     *
     * @param {string} sessionId - Unique identifier for the session
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.delete("session_id")
     */
    delete(sessionId: string, requestOptions?: Sessions.RequestOptions): Promise<void>;
    /**
     * Updates an existing session's attributes.
     *
     * Only provided attributes will be updated; others remain unchanged.
     *
     * @param {string} sessionId - Unique identifier for the session
     * @param {Parlant.SessionUpdateParams} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.update("session_id", {
     *         consumptionOffsets: {
     *             client: 42
     *         },
     *         title: "Updated session title"
     *     })
     */
    update(sessionId: string, request?: Parlant.SessionUpdateParams, requestOptions?: Sessions.RequestOptions): Promise<Parlant.Session>;
    /**
     * Lists events from a session with optional filtering and waiting capabilities.
     *
     * This endpoint retrieves events from a specified session and can:
     *
     * 1. Filter events by their offset, source, type, and correlation ID
     * 2. Wait for new events to arrive if requested
     * 3. Return events in chronological order based on their offset
     *
     * Notes:
     * Long Polling Behavior: - When wait_for_data = 0:
     * Returns immediately with any existing events that match the criteria - When wait_for_data > 0: - If new matching events arrive within the timeout period, returns with those events - If no new events arrive before timeout, raises 504 Gateway Timeout - If matching events already exist, returns immediately with those events
     *
     * @param {string} sessionId - Unique identifier for the session
     * @param {Parlant.SessionsListEventsRequest} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     * @throws {@link Parlant.GatewayTimeoutError}
     *
     * @example
     *     await client.sessions.listEvents("session_id")
     */
    listEvents(sessionId: string, request?: Parlant.SessionsListEventsRequest, requestOptions?: Sessions.RequestOptions): Promise<Parlant.Event[]>;
    /**
     * Creates a new event in the specified session.
     *
     * Currently supports creating message events from customer and human agent sources.
     *
     * @param {string} sessionId - Unique identifier for the session
     * @param {Parlant.EventCreationParams} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.createEvent("session_id", {
     *         kind: "message",
     *         source: "customer",
     *         message: "Hello, I need help with my order"
     *     })
     */
    createEvent(sessionId: string, request: Parlant.EventCreationParams, requestOptions?: Sessions.RequestOptions): Promise<Parlant.Event>;
    /**
     * Deletes events from a session with offset >= the specified value.
     *
     * This operation is permanent and cannot be undone.
     *
     * @param {string} sessionId - Unique identifier for the session
     * @param {Parlant.SessionsDeleteEventsRequest} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.deleteEvents("session_id", {
     *         minOffset: 1
     *     })
     */
    deleteEvents(sessionId: string, request: Parlant.SessionsDeleteEventsRequest, requestOptions?: Sessions.RequestOptions): Promise<void>;
    /**
     * Retrieves detailed inspection information about an event.
     *
     * For AI agent message events, includes information about message generation,
     * tool calls, and preparation iterations.
     *
     * @param {string} sessionId - Unique identifier for the session
     * @param {string} eventId - Unique identifier for the event
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.sessions.inspectEvent("session_id", "event_id")
     */
    inspectEvent(sessionId: string, eventId: string, requestOptions?: Sessions.RequestOptions): Promise<Parlant.EventInspectionResult>;
}
