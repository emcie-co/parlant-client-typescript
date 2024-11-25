/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../errors/index";
export class UnprocessableEntityError extends errors.ParlantError {
    constructor(body) {
        super({
            message: "UnprocessableEntityError",
            statusCode: 422,
            body: body,
        });
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }
}
