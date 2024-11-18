/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const ContextVariableAndValue: core.serialization.ObjectSchema<serializers.ContextVariableAndValue.Raw, Parlant.ContextVariableAndValue>;
export declare namespace ContextVariableAndValue {
    interface Raw {
        id: string;
        name: string;
        description: string;
        key: string;
        value?: unknown;
    }
}
