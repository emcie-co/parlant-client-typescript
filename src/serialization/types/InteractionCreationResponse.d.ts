/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const InteractionCreationResponse: core.serialization.ObjectSchema<serializers.InteractionCreationResponse.Raw, Parlant.InteractionCreationResponse>;
export declare namespace InteractionCreationResponse {
    interface Raw {
        correlation_id: string;
    }
}
