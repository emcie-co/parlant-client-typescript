/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
export interface Interaction {
    kind: Parlant.InteractionKindDto;
    source: Parlant.EventSourceDto;
    correlationId: string;
    data?: unknown;
    toolCalls: Parlant.ToolCall[];
}
