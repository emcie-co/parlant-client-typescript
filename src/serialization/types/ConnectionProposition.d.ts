/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { ConnectionPropositionKindDto } from "./ConnectionPropositionKindDto";
import { GuidelineContent } from "./GuidelineContent";
export declare const ConnectionProposition: core.serialization.ObjectSchema<serializers.ConnectionProposition.Raw, Parlant.ConnectionProposition>;
export declare namespace ConnectionProposition {
    interface Raw {
        check_kind: ConnectionPropositionKindDto.Raw;
        source: GuidelineContent.Raw;
        target: GuidelineContent.Raw;
    }
}
