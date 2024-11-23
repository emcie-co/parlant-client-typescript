/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { Event } from "./Event";
import { EventTrace } from "./EventTrace";
export declare const EventInspectionResult: core.serialization.ObjectSchema<serializers.EventInspectionResult.Raw, Parlant.EventInspectionResult>;
export declare namespace EventInspectionResult {
    interface Raw {
        session_id: string;
        event: Event.Raw;
        trace?: EventTrace.Raw | null;
    }
}