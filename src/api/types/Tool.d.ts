/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
export interface Tool {
    creationUtc: Date;
    name: string;
    description: string;
    parameters: Record<string, Parlant.ToolParameter>;
    required: string[];
}
