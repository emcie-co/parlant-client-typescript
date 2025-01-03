/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { ToolId } from "./ToolId";
export declare const GuidelineToolAssociationUpdateParams: core.serialization.ObjectSchema<serializers.GuidelineToolAssociationUpdateParams.Raw, Parlant.GuidelineToolAssociationUpdateParams>;
export declare namespace GuidelineToolAssociationUpdateParams {
    interface Raw {
        add?: ToolId.Raw[] | null;
        remove?: ToolId.Raw[] | null;
    }
}
