/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
/**
 * Represents a type of customer or tag data that the agent tracks.
 *
 * Context variables store information that helps the agent provide
 * personalized responses based on each customer's or group's specific situation,
 * such as their subscription tier, usage patterns, or preferences.
 */
export interface ContextVariable {
    /** Unique identifier for the context variable */
    id: string;
    /** Name of the context variable */
    name: string;
    /** Description of the context variable's purpose */
    description?: string;
    toolId?: Parlant.ToolId;
    /** Cron expression defining the freshness rules */
    freshnessRules?: string;
}
