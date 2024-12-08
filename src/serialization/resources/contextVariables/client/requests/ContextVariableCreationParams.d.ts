/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as Parlant from "../../../../../api/index";
import * as core from "../../../../../core";
import { ToolId } from "../../../../types/ToolId";
import { FreshnessRules } from "../../../../types/FreshnessRules";
export declare const ContextVariableCreationParams: core.serialization.Schema<serializers.ContextVariableCreationParams.Raw, Parlant.ContextVariableCreationParams>;
export declare namespace ContextVariableCreationParams {
    interface Raw {
        name: string;
        description?: string | null;
        tool_id?: ToolId.Raw | null;
        freshness_rules?: FreshnessRules.Raw | null;
    }
}
