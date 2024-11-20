/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as Parlant from "../../api/index";
import * as core from "../../core";
import { Tag } from "./Tag";
export declare const ListTagsResponse: core.serialization.ObjectSchema<serializers.ListTagsResponse.Raw, Parlant.ListTagsResponse>;
export declare namespace ListTagsResponse {
    interface Raw {
        tags: Tag.Raw[];
    }
}