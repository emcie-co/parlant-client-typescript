/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../../index";
/**
 * @example
 *     {
 *         minEventOffset: 1,
 *         source: Parlant.EventSourceDto.EndUser
 *     }
 */
export interface ListInteractionsRequest {
    minEventOffset: number;
    source: Parlant.EventSourceDto;
    wait?: boolean;
}
