/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Parlant from "../../../../api/index";
import * as core from "../../../../core";
import { Event } from "../../../types/Event";
export declare const Response: core.serialization.Schema<serializers.sessions.listEvents.Response.Raw, Parlant.Event[]>;
export declare namespace Response {
    type Raw = Event.Raw[];
}
