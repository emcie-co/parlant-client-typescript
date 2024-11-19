/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { GuidelineContent } from "./GuidelineContent";
import { GuidelinePayloadOperationDto } from "./GuidelinePayloadOperationDto";
export declare const GuidelinePayload: core.serialization.ObjectSchema<serializers.GuidelinePayload.Raw, Parlant.GuidelinePayload>;
export declare namespace GuidelinePayload {
    interface Raw {
        content: GuidelineContent.Raw;
        operation: GuidelinePayloadOperationDto.Raw;
        updated_id?: string | null;
        coherence_check: boolean;
        connection_proposition: boolean;
    }
}
