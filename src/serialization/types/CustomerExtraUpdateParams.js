/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
export const CustomerExtraUpdateParams = core.serialization.object({
    add: core.serialization.record(core.serialization.string(), core.serialization.string().optional()).optional(),
    remove: core.serialization.list(core.serialization.string()).optional(),
});
