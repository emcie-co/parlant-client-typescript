/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as Parlant from "../../../../../api/index";
import * as core from "../../../../../core";
export declare const TermUpdateParams: core.serialization.Schema<serializers.TermUpdateParams.Raw, Parlant.TermUpdateParams>;
export declare namespace TermUpdateParams {
    interface Raw {
        name?: string | null;
        description?: string | null;
        synonyms?: string[] | null;
    }
}
