/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as Parlant from "../../../../../api/index";
import * as core from "../../../../../core";
import { CustomerExtraUpdateParams } from "../../../../types/CustomerExtraUpdateParams";
import { CustomerTagUpdateParams } from "../../../../types/CustomerTagUpdateParams";
export declare const CustomerUpdateParams: core.serialization.Schema<serializers.CustomerUpdateParams.Raw, Parlant.CustomerUpdateParams>;
export declare namespace CustomerUpdateParams {
    interface Raw {
        name?: string | null;
        extra?: CustomerExtraUpdateParams.Raw | null;
        tags?: CustomerTagUpdateParams.Raw | null;
    }
}
