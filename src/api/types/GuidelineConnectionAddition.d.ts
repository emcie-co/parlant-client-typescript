/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Used to add connections between Guidelines.
 */
export interface GuidelineConnectionAddition {
    /** `id` of guideline that is source of this connection. */
    source: string;
    /** `id` of guideline that is target of this connection. */
    target: string;
}
