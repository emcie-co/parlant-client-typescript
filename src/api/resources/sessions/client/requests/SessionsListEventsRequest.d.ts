/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * @example
 *     {}
 */
export interface SessionsListEventsRequest {
    minOffset?: number;
    correlationId?: string;
    /**
     * If set, only list events of the specified kinds (separated by commas)
     */
    kinds?: string;
    waitForData?: number;
}
