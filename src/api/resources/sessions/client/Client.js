"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sessions = void 0;
const core = __importStar(require("../../../../core"));
const Parlant = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization/index"));
const errors = __importStar(require("../../../../errors/index"));
class Sessions {
    constructor(_options) {
        this._options = _options;
    }
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
    list(request = {}, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { agentId, customerId } = request;
            const _queryParams = {};
            if (agentId != null) {
                _queryParams["agent_id"] = agentId;
            }
            if (customerId != null) {
                _queryParams["customer_id"] = customerId;
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), "sessions"),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.sessions.list.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    create(request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { allowGreeting } = request, _body = __rest(request, ["allowGreeting"]);
            const _queryParams = {};
            if (allowGreeting != null) {
                _queryParams["allow_greeting"] = allowGreeting.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), "sessions"),
                method: "POST",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                body: serializers.SessionCreationParams.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.Session.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    deleteMany(request = {}, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { agentId, customerId } = request;
            const _queryParams = {};
            if (agentId != null) {
                _queryParams["agent_id"] = agentId;
            }
            if (customerId != null) {
                _queryParams["customer_id"] = customerId;
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), "sessions"),
                method: "DELETE",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    retrieve(sessionId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `sessions/${encodeURIComponent(sessionId)}`),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.Session.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Parlant.NotFoundError(_response.error.body);
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    delete(sessionId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `sessions/${encodeURIComponent(sessionId)}`),
                method: "DELETE",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Parlant.NotFoundError(_response.error.body);
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    update(sessionId, request = {}, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `sessions/${encodeURIComponent(sessionId)}`),
                method: "PATCH",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                body: serializers.SessionUpdateParams.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.Session.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Parlant.NotFoundError(_response.error.body);
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    listEvents(sessionId, request = {}, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { minOffset, source, correlationId, kinds, waitForData } = request;
            const _queryParams = {};
            if (minOffset != null) {
                _queryParams["min_offset"] = minOffset.toString();
            }
            if (source != null) {
                _queryParams["source"] = source;
            }
            if (correlationId != null) {
                _queryParams["correlation_id"] = correlationId;
            }
            if (kinds != null) {
                _queryParams["kinds"] = kinds;
            }
            if (waitForData != null) {
                _queryParams["wait_for_data"] = waitForData.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `sessions/${encodeURIComponent(sessionId)}/events`),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.sessions.listEvents.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Parlant.NotFoundError(_response.error.body);
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    case 504:
                        throw new Parlant.GatewayTimeoutError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    createEvent(sessionId, request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { moderation } = request, _body = __rest(request, ["moderation"]);
            const _queryParams = {};
            if (moderation != null) {
                _queryParams["moderation"] = moderation;
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `sessions/${encodeURIComponent(sessionId)}/events`),
                method: "POST",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                body: serializers.EventCreationParams.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.Event.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Parlant.NotFoundError(_response.error.body);
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    deleteEvents(sessionId, request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { minOffset } = request;
            const _queryParams = {};
            _queryParams["min_offset"] = minOffset.toString();
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `sessions/${encodeURIComponent(sessionId)}/events`),
                method: "DELETE",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return;
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Parlant.NotFoundError(_response.error.body);
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
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
    inspectEvent(sessionId, eventId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `sessions/${encodeURIComponent(sessionId)}/events/${encodeURIComponent(eventId)}`),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.EventInspectionResult.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new Parlant.NotFoundError(_response.error.body);
                    case 422:
                        throw new Parlant.UnprocessableEntityError(_response.error.body);
                    default:
                        throw new errors.ParlantError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ParlantError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ParlantTimeoutError();
                case "unknown":
                    throw new errors.ParlantError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
}
exports.Sessions = Sessions;
