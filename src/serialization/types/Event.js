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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const core = __importStar(require("../../core"));
const EventSourceDto_1 = require("./EventSourceDto");
const EventKindDto_1 = require("./EventKindDto");
exports.Event = core.serialization.object({
    id: core.serialization.string(),
    source: EventSourceDto_1.EventSourceDto,
    kind: EventKindDto_1.EventKindDto,
    offset: core.serialization.number(),
    creationUtc: core.serialization.property("creation_utc", core.serialization.date()),
    correlationId: core.serialization.property("correlation_id", core.serialization.string()),
    data: core.serialization.unknown(),
    deleted: core.serialization.boolean(),
});
