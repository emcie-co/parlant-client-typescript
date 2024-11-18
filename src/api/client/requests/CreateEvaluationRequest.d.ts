/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../../index";
/**
 * @example
 *     {
 *         agentId: "agent_id",
 *         payloads: [{
 *                 kind: "guideline",
 *                 content: {
 *                     condition: "condition",
 *                     action: "action"
 *                 },
 *                 operation: Parlant.GuidelinePayloadOperationDto.Add,
 *                 coherenceCheck: true,
 *                 connectionProposition: true
 *             }]
 *     }
 */
export interface CreateEvaluationRequest {
    agentId: string;
    payloads: Parlant.GuidelinePayload[];
}
