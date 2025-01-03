/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { EventSourceDto } from "./EventSourceDto";
import { EventKindDto } from "./EventKindDto";
export declare const Event: core.serialization.ObjectSchema<serializers.Event.Raw, Parlant.Event>;
export declare namespace Event {
    interface Raw {
        id: string;
        source: EventSourceDto.Raw;
        kind: EventKindDto.Raw;
        offset: number;
        creation_utc: string;
        correlation_id: string;
        data?: unknown;
        deleted: boolean;
    }
}
