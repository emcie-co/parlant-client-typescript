/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../../core";
import { GuidelineConnectionUpdateParams } from "../../../../types/GuidelineConnectionUpdateParams";
import { GuidelineToolAssociationUpdateParams } from "../../../../types/GuidelineToolAssociationUpdateParams";
export const GuidelineUpdateParams = core.serialization.object({
    connections: GuidelineConnectionUpdateParams.optional(),
    toolAssociations: core.serialization.property("tool_associations", GuidelineToolAssociationUpdateParams.optional()),
});
