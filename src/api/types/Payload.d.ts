/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
/**
 * A container for a guideline payload along with its kind
 *
 * Only `"guideline"` is available at this point.
 */
export interface Payload {
    kind: Parlant.PayloadKindDto;
    guideline?: Parlant.GuidelinePayload;
}
