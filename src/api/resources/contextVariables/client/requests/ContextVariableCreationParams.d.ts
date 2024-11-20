/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../../../../index";
/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface ContextVariableCreationParams {
    name: string;
    description?: string;
    toolId?: Parlant.ToolId;
    freshnessRules?: Parlant.FreshnessRules;
}