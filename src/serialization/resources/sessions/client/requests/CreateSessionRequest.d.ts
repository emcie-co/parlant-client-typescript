/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as Parlant from "../../../../../api/index";
import * as core from "../../../../../core";
export declare const CreateSessionRequest: core.serialization.Schema<serializers.CreateSessionRequest.Raw, Omit<Parlant.CreateSessionRequest, "allowGreeting">>;
export declare namespace CreateSessionRequest {
    interface Raw {
        end_user_id: string;
        agent_id: string;
        title?: string | null;
    }
}