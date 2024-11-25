/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import { ToolCall } from "./ToolCall";
import { MessageGenerationInspection } from "./MessageGenerationInspection";
import { PreparationIteration } from "./PreparationIteration";
export const EventTrace = core.serialization.object({
    toolCalls: core.serialization.property("tool_calls", core.serialization.list(ToolCall)),
    messageGenerations: core.serialization.property("message_generations", core.serialization.list(MessageGenerationInspection)),
    preparationIterations: core.serialization.property("preparation_iterations", core.serialization.list(PreparationIteration)),
});
