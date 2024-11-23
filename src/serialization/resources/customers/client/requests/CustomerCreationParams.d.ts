/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as Parlant from "../../../../../api/index";
import * as core from "../../../../../core";
export declare const CustomerCreationParams: core.serialization.Schema<serializers.CustomerCreationParams.Raw, Parlant.CustomerCreationParams>;
export declare namespace CustomerCreationParams {
    interface Raw {
        name: string;
        extra?: Record<string, string | null | undefined> | null;
    }
}
