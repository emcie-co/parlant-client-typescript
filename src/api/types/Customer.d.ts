/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Parlant from "../index";
export interface Customer {
    id: string;
    creationUtc: Date;
    name: string;
    extra: Record<string, Parlant.CustomerDtoExtraValue>;
    tags: string[];
}
