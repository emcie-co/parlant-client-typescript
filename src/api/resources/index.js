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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customers = exports.tags = exports.services = exports.evaluations = exports.sessions = exports.contextVariables = exports.glossary = exports.guidelines = exports.agents = void 0;
exports.agents = __importStar(require("./agents"));
exports.guidelines = __importStar(require("./guidelines"));
exports.glossary = __importStar(require("./glossary"));
exports.contextVariables = __importStar(require("./contextVariables"));
exports.sessions = __importStar(require("./sessions"));
exports.evaluations = __importStar(require("./evaluations"));
exports.services = __importStar(require("./services"));
exports.tags = __importStar(require("./tags"));
exports.customers = __importStar(require("./customers"));
__exportStar(require("./agents/client/requests"), exports);
__exportStar(require("./guidelines/client/requests"), exports);
__exportStar(require("./glossary/client/requests"), exports);
__exportStar(require("./contextVariables/client/requests"), exports);
__exportStar(require("./sessions/client/requests"), exports);
__exportStar(require("./evaluations/client/requests"), exports);
__exportStar(require("./services/client/requests"), exports);
__exportStar(require("./tags/client/requests"), exports);
__exportStar(require("./customers/client/requests"), exports);
