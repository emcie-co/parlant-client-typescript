/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../../../../index";
/**
 * @example
 *     {
 *         kind: "message",
 *         source: "customer",
 *         message: "Hello, I need help with my order"
 *     }
 */
export interface EventCreationParams {
    /**
     * Content moderation level for the event
     */
    moderation?: Parlant.Moderation;
    kind: Parlant.EventKindDto;
    source: Parlant.EventSourceDto;
    /** Event payload data, format depends on kind */
    message?: string;
    actions?: Parlant.UtteranceRequest[];
}
