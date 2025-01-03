/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const Customer: core.serialization.ObjectSchema<serializers.Customer.Raw, Parlant.Customer>;
export declare namespace Customer {
    interface Raw {
        id: string;
        creation_utc: string;
        name: string;
        extra: Record<string, string>;
        tags: string[];
    }
}
