/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
/**
 * Details about a service integration. The tools list is only included when retrieving a specific service.
 */
export interface Service {
    /** User assigned name of the service */
    name: string;
    kind: Parlant.ToolServiceKindDto;
    /** The URL of the tool service */
    url: string;
    /** Optional list of tools associated with this service */
    tools?: Parlant.Tool[];
}
