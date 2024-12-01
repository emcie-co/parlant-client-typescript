/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * A context variable and its current value.
 */
export interface ContextVariableAndValue {
    /** Unique identifier for the context variable */
    id: string;
    /** The name of the context variable */
    name: string;
    /** The description text assigned to this variable */
    description: string;
    /** This is the key which can be used to identify the variable */
    key: string;
    value?: unknown;
}
