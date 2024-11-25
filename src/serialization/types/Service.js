/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import { ToolServiceKindDto } from "./ToolServiceKindDto";
import { Tool } from "./Tool";
export const Service = core.serialization.object({
    name: core.serialization.string(),
    kind: ToolServiceKindDto,
    url: core.serialization.string(),
    tools: core.serialization.list(Tool).optional(),
});
