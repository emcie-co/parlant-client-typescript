/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
export declare const Agent: core.serialization.ObjectSchema<serializers.Agent.Raw, Parlant.Agent>;
export declare namespace Agent {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        creation_utc: string;
        max_engine_iterations: number;
    }
}
