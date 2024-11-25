/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import { ToolId } from "./ToolId";
import { FreshnessRules } from "./FreshnessRules";
export const ContextVariable = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    toolId: core.serialization.property("tool_id", ToolId.optional()),
    freshnessRules: core.serialization.property("freshness_rules", FreshnessRules.optional()),
});
