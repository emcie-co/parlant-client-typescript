/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import { GuidelinePropositionInspection } from "./GuidelinePropositionInspection";
import { GenerationInfo } from "./GenerationInfo";
export const PreparationIterationGenerations = core.serialization.object({
    guidelineProposition: core.serialization.property("guideline_proposition", GuidelinePropositionInspection),
    toolCalls: core.serialization.property("tool_calls", core.serialization.list(GenerationInfo)),
});
