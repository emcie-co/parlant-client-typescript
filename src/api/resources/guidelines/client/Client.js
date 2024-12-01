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
exports.Guidelines = void 0;
const core = __importStar(require("../../../../core"));
const Parlant = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization/index"));
const errors = __importStar(require("../../../../errors/index"));
class Guidelines {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * @param {string} agentId
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.list("agent_id")
     */
    list(agentId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/guidelines`),
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
                return serializers.guidelines.list.Response.parseOrThrow(_response.body, {
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
    create(agentId, request, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/guidelines`),
                method: "POST",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                body: serializers.GuidelineCreationParams.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.GuidelineCreationResult.parseOrThrow(_response.body, {
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
     * @param {string} guidelineId
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.retrieve("agent_id", "guideline_id")
     */
    retrieve(agentId, guidelineId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/guidelines/${encodeURIComponent(guidelineId)}`),
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
                return serializers.GuidelineWithConnectionsAndToolAssociations.parseOrThrow(_response.body, {
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
     * @param {string} guidelineId
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.delete("agent_id", "guideline_id")
     */
    delete(agentId, guidelineId, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/guidelines/${encodeURIComponent(guidelineId)}`),
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
     * @param {string} guidelineId
     * @param {Parlant.GuidelineUpdateParams} request
     * @param {Guidelines.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.guidelines.update("agent_id", "guideline_id")
     */
    update(agentId, guidelineId, request = {}, requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)(yield core.Supplier.get(this._options.environment), `agents/${encodeURIComponent(agentId)}/guidelines/${encodeURIComponent(guidelineId)}`),
                method: "PATCH",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                requestType: "json",
                body: serializers.GuidelineUpdateParams.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.GuidelineWithConnectionsAndToolAssociations.parseOrThrow(_response.body, {
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
}
exports.Guidelines = Guidelines;
