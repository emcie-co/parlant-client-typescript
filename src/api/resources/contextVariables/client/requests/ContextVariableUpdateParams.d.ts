/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../../../../index";
/**
 * @example
 *     {
 *         name: "CustomerBalance",
 *         freshnessRules: {
 *             hours: [8, 12, 16],
 *             minutes: [0]
 *         }
 *     }
 */
export interface ContextVariableUpdateParams {
    /** Name of the context variable */
    name?: string;
    /** Description of the context variable's purpose */
    description?: string;
    toolId?: Parlant.ToolId;
    /** Rules for data freshness validation */
    freshnessRules?: Parlant.FreshnessRules;
}
