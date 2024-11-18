/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const Term: core.serialization.ObjectSchema<serializers.Term.Raw, Parlant.Term>;
export declare namespace Term {
    interface Raw {
        id: string;
        name: string;
        description: string;
        synonyms?: string[] | null;
    }
}
