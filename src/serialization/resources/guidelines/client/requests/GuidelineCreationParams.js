/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../../core";
import { Invoice } from "../../../../types/Invoice";
export const GuidelineCreationParams = core.serialization.object({
    invoices: core.serialization.list(Invoice),
});
