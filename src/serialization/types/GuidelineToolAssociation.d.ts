/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { ToolId } from "./ToolId";
export declare const GuidelineToolAssociation: core.serialization.ObjectSchema<serializers.GuidelineToolAssociation.Raw, Parlant.GuidelineToolAssociation>;
export declare namespace GuidelineToolAssociation {
    interface Raw {
        id: string;
        guideline_id: string;
        tool_id: ToolId.Raw;
    }
}
