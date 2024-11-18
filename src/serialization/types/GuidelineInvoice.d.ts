/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { GuidelinePayload } from "./GuidelinePayload";
import { GuidelineInvoiceData } from "./GuidelineInvoiceData";
export declare const GuidelineInvoice: core.serialization.ObjectSchema<serializers.GuidelineInvoice.Raw, Parlant.GuidelineInvoice>;
export declare namespace GuidelineInvoice {
    interface Raw {
        payload: GuidelinePayload.Raw;
        checksum: string;
        approved: boolean;
        data: GuidelineInvoiceData.Raw;
        error?: string | null;
    }
}
