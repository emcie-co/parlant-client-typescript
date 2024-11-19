/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../../../../index";
/**
 * @example
 *     {
 *         agentId: "agent_id",
 *         payloads: [{
 *                 kind: "guideline"
 *             }]
 *     }
 */
export interface EvaluationCreationParams {
    agentId: string;
    payloads: Parlant.Payload[];
}
