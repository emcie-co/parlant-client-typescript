/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const ConnectionKindDto: core.serialization.Schema<serializers.ConnectionKindDto.Raw, Parlant.ConnectionKindDto>;
export declare namespace ConnectionKindDto {
    type Raw = "entails" | "suggests";
}
