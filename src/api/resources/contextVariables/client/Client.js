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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextVariables = void 0;
const core = __importStar(require("../../../../core"));
const Parlant = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization/index"));
const errors = __importStar(require("../../../../errors/index"));
class ContextVariables {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * @param {string} agentId
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.list("agent_id")
     */
    list(agentId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables`),
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
                return serializers.contextVariables.list.Response.parseOrThrow(_response.body, {
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
    create(agentId, request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables`),
                method: "POST",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                body: serializers.ContextVariableCreationParams.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.ContextVariable.parseOrThrow(_response.body, {
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
     * @param {string} agentId
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.deleteMany("agent_id")
     */
    deleteMany(agentId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables`),
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
    retrieve(agentId, variableId, request = {}, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { includeValues } = request;
            const _queryParams = {};
            if (includeValues != null) {
                _queryParams["include_values"] = includeValues.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables/${encodeURIComponent(variableId)}`),
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
                return serializers.ContextVariableReadResult.parseOrThrow(_response.body, {
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
     * @param {string} agentId
     * @param {string} variableId
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.delete("agent_id", "variable_id")
     */
    delete(agentId, variableId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables/${encodeURIComponent(variableId)}`),
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
     * @param {string} agentId
     * @param {string} variableId
     * @param {Parlant.ContextVariableUpdateParams} request
     * @param {ContextVariables.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.contextVariables.update("agent_id", "variable_id")
     */
    update(agentId, variableId, request = {}, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables/${encodeURIComponent(variableId)}`),
                method: "PATCH",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                body: serializers.ContextVariableUpdateParams.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.ContextVariable.parseOrThrow(_response.body, {
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
    getValue(agentId, variableId, key, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables/${encodeURIComponent(variableId)}/${encodeURIComponent(key)}`),
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
                return serializers.ContextVariableValue.parseOrThrow(_response.body, {
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
    setValue(agentId, variableId, key, request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables/${encodeURIComponent(variableId)}/${encodeURIComponent(key)}`),
                method: "PUT",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                body: serializers.ContextVariableValueUpdateParams.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.ContextVariableValue.parseOrThrow(_response.body, {
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
    deleteValue(agentId, variableId, key, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/context-variables/${encodeURIComponent(variableId)}/${encodeURIComponent(key)}`),
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
exports.ContextVariables = ContextVariables;
