/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const Guideline: core.serialization.ObjectSchema<serializers.Guideline.Raw, Parlant.Guideline>;
export declare namespace Guideline {
    interface Raw {
        id: string;
        predicate: string;
        action: string;
    }
}
