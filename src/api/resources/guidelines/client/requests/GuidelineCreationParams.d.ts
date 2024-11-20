/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../../../../index";
/**
 * @example
 *     {
 *         invoices: [{
 *                 payload: {
 *                     content: {
 *                         condition: "condition",
 *                         action: "action"
 *                     },
 *                     operation: Parlant.GuidelinePayloadOperationDto.Add,
 *                     coherenceCheck: true,
 *                     connectionProposition: true
 *                 },
 *                 checksum: "checksum",
 *                 approved: true,
 *                 data: {
 *                     coherenceChecks: [{
 *                             kind: Parlant.CoherenceCheckKindDto.ContradictionWithExistingGuideline,
 *                             first: {
 *                                 condition: "condition",
 *                                 action: "action"
 *                             },
 *                             second: {
 *                                 condition: "condition",
 *                                 action: "action"
 *                             },
 *                             issue: "issue",
 *                             severity: 1
 *                         }]
 *                 }
 *             }]
 *     }
 */
export interface GuidelineCreationParams {
    invoices: Parlant.GuidelineInvoice[];
}