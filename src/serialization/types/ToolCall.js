/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import { ToolResult } from "./ToolResult";
export const ToolCall = core.serialization.object({
    toolId: core.serialization.property("tool_id", core.serialization.string()),
    arguments: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    result: ToolResult,
});
