/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const DeleteSessionResponse: core.serialization.ObjectSchema<serializers.DeleteSessionResponse.Raw, Parlant.DeleteSessionResponse>;
export declare namespace DeleteSessionResponse {
    interface Raw {
        session_id: string;
    }
}
