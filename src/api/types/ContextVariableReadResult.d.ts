/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
/**
 * Complete context variable data including its values.
 */
export interface ContextVariableReadResult {
    contextVariable: Parlant.ContextVariable;
    /** Collection of key-value pairs associated with the variable */
    keyValuePairs?: Record<string, Parlant.ContextVariableValue | undefined>;
}
