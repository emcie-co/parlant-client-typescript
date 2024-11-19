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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParlantClient = void 0;
const core = __importStar(require("./core"));
const errors = __importStar(require("./errors/index"));
const Client_1 = require("./api/resources/agents/client/Client");
const Client_2 = require("./api/resources/guidelines/client/Client");
const Client_3 = require("./api/resources/glossary/client/Client");
const Client_4 = require("./api/resources/contextVariables/client/Client");
const Client_5 = require("./api/resources/sessions/client/Client");
const Client_6 = require("./api/resources/evaluations/client/Client");
const Client_7 = require("./api/resources/services/client/Client");
class ParlantClient {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * @param {ParlantClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.rootGet()
     */
    rootGet(requestOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: yield core.Supplier.get(this._options.environment),
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
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ParlantError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
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
    get agents() {
        var _a;
        return ((_a = this._agents) !== null && _a !== void 0 ? _a : (this._agents = new Client_1.Agents(this._options)));
    }
    get guidelines() {
        var _a;
        return ((_a = this._guidelines) !== null && _a !== void 0 ? _a : (this._guidelines = new Client_2.Guidelines(this._options)));
    }
    get glossary() {
        var _a;
        return ((_a = this._glossary) !== null && _a !== void 0 ? _a : (this._glossary = new Client_3.Glossary(this._options)));
    }
    get contextVariables() {
        var _a;
        return ((_a = this._contextVariables) !== null && _a !== void 0 ? _a : (this._contextVariables = new Client_4.ContextVariables(this._options)));
    }
    get sessions() {
        var _a;
        return ((_a = this._sessions) !== null && _a !== void 0 ? _a : (this._sessions = new Client_5.Sessions(this._options)));
    }
    get evaluations() {
        var _a;
        return ((_a = this._evaluations) !== null && _a !== void 0 ? _a : (this._evaluations = new Client_6.Evaluations(this._options)));
    }
    get services() {
        var _a;
        return ((_a = this._services) !== null && _a !== void 0 ? _a : (this._services = new Client_7.Services(this._options)));
    }
}
exports.ParlantClient = ParlantClient;
