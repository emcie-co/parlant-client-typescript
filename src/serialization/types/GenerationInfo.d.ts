/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { UsageInfo } from "./UsageInfo";
export declare const GenerationInfo: core.serialization.ObjectSchema<serializers.GenerationInfo.Raw, Parlant.GenerationInfo>;
export declare namespace GenerationInfo {
    interface Raw {
        schema_name: string;
        model: string;
        duration: number;
        usage: UsageInfo.Raw;
    }
}
