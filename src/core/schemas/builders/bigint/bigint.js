import { SchemaType } from "../../Schema";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { getSchemaUtils } from "../schema-utils";
export function bigint() {
    const baseSchema = {
        parse: (raw, { breadcrumbsPrefix = [] } = {}) => {
            if (typeof raw !== "string") {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(raw, "string"),
                        },
                    ],
                };
            }
            return {
                ok: true,
                value: BigInt(raw),
            };
        },
        json: (bigint, { breadcrumbsPrefix = [] } = {}) => {
            if (typeof bigint === "bigint") {
                return {
                    ok: true,
                    value: bigint.toString(),
                };
            }
            else {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(bigint, "bigint"),
                        },
                    ],
                };
            }
        },
        getType: () => SchemaType.BIGINT,
    };
    return Object.assign(Object.assign({}, maybeSkipValidation(baseSchema)), getSchemaUtils(baseSchema));
}
