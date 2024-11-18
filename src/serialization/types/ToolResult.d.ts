/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const ToolResult: core.serialization.ObjectSchema<serializers.ToolResult.Raw, Parlant.ToolResult>;
export declare namespace ToolResult {
    interface Raw {
        data?: unknown;
        metadata: Record<string, unknown>;
    }
}
