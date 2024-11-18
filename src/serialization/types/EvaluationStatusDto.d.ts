/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const EvaluationStatusDto: core.serialization.Schema<serializers.EvaluationStatusDto.Raw, Parlant.EvaluationStatusDto>;
export declare namespace EvaluationStatusDto {
    type Raw = "pending" | "running" | "completed" | "failed";
}
