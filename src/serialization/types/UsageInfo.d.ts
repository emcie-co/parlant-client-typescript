/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const UsageInfo: core.serialization.ObjectSchema<serializers.UsageInfo.Raw, Parlant.UsageInfo>;
export declare namespace UsageInfo {
    interface Raw {
        input_tokens: number;
        output_tokens: number;
        extra?: Record<string, number | null | undefined> | null;
    }
}
