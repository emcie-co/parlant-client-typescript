/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Parlant from "../../../../api/index";
import * as core from "../../../../core";
import { Term } from "../../../types/Term";
export declare const Response: core.serialization.Schema<serializers.glossary.listTerms.Response.Raw, Parlant.Term[]>;
export declare namespace Response {
    type Raw = Term.Raw[];
}
