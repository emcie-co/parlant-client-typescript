/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as Parlant from "../../../../../api/index";
import * as core from "../../../../../core";
import { ToolServiceKindDto } from "../../../../types/ToolServiceKindDto";
import { SdkServiceParams } from "../../../../types/SdkServiceParams";
import { OpenApiServiceParams } from "../../../../types/OpenApiServiceParams";
export declare const ServiceUpdateParams: core.serialization.Schema<serializers.ServiceUpdateParams.Raw, Parlant.ServiceUpdateParams>;
export declare namespace ServiceUpdateParams {
    interface Raw {
        kind: ToolServiceKindDto.Raw;
        sdk?: SdkServiceParams.Raw | null;
        openapi?: OpenApiServiceParams.Raw | null;
    }
}