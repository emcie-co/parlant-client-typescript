"use strict";
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.capabilities = exports.evaluations = exports.journeys = exports.relationships = exports.guidelines = exports.contextVariables = exports.cannedResponses = exports.customers = exports.glossary = exports.tags = exports.services = exports.sessions = exports.agents = void 0;
exports.agents = __importStar(require("./agents"));
exports.sessions = __importStar(require("./sessions"));
exports.services = __importStar(require("./services"));
exports.tags = __importStar(require("./tags"));
exports.glossary = __importStar(require("./glossary"));
exports.customers = __importStar(require("./customers"));
exports.cannedResponses = __importStar(require("./cannedResponses"));
exports.contextVariables = __importStar(require("./contextVariables"));
exports.guidelines = __importStar(require("./guidelines"));
exports.relationships = __importStar(require("./relationships"));
exports.journeys = __importStar(require("./journeys"));
exports.evaluations = __importStar(require("./evaluations"));
exports.capabilities = __importStar(require("./capabilities"));
__exportStar(require("./agents/client/requests"), exports);
__exportStar(require("./sessions/client/requests"), exports);
__exportStar(require("./services/client/requests"), exports);
__exportStar(require("./tags/client/requests"), exports);
__exportStar(require("./glossary/client/requests"), exports);
__exportStar(require("./customers/client/requests"), exports);
__exportStar(require("./cannedResponses/client/requests"), exports);
__exportStar(require("./contextVariables/client/requests"), exports);
__exportStar(require("./guidelines/client/requests"), exports);
__exportStar(require("./relationships/client/requests"), exports);
__exportStar(require("./journeys/client/requests"), exports);
__exportStar(require("./evaluations/client/requests"), exports);
__exportStar(require("./capabilities/client/requests"), exports);
