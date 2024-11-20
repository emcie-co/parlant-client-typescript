/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { Guideline } from "./Guideline";
export declare const GuidelineListResponse: core.serialization.ObjectSchema<serializers.GuidelineListResponse.Raw, Parlant.GuidelineListResponse>;
export declare namespace GuidelineListResponse {
    interface Raw {
        guidelines: Guideline.Raw[];
    }
}