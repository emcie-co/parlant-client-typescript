/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as Parlant from "../../../../../api/index";
import * as core from "../../../../../core";
export declare const TermCreationParams: core.serialization.Schema<serializers.TermCreationParams.Raw, Parlant.TermCreationParams>;
export declare namespace TermCreationParams {
    interface Raw {
        name: string;
        description: string;
        synonyms?: string[] | null;
    }
}
