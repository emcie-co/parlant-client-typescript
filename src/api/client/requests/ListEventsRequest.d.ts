/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * @example
 *     {}
 */
export interface ListEventsRequest {
    minOffset?: number;
    /**
     * If set, only list events of the specified kinds (separated by commas)
     */
    kinds?: string;
    wait?: boolean;
}
