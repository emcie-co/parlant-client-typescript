/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
export interface CoherenceCheck {
    kind: Parlant.CoherenceCheckKindDto;
    first: Parlant.GuidelineContent;
    second: Parlant.GuidelineContent;
    issue: string;
    severity: number;
}
