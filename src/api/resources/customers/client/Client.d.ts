/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as Parlant from "../../../index";
export declare namespace Customers {
    interface Options {
        environment: core.Supplier<string>;
    }
    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}
export declare class Customers {
    protected readonly _options: Customers.Options;
    constructor(_options: Customers.Options);
    /**
     * Retrieves a list of all customers in the system.
     *
     * Returns an empty list if no customers exist.
     * Customers are returned in no guaranteed order.
     *
     * @param {Customers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.customers.list()
     */
    list(requestOptions?: Customers.RequestOptions): Promise<Parlant.Customer[]>;
    /**
     * Creates a new customer in the system.
     *
     * A customer may be created with as little as a `name`.
     * `extra` key-value pairs and additional `tags` may be attached to a customer.
     *
     * @param {Parlant.CustomerCreationParams} request
     * @param {Customers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.customers.create({
     *         name: "Scooby",
     *         extra: {
     *             "VIP": "Yes",
     *             "email": "scooby@dooby.do"
     *         }
     *     })
     */
    create(request: Parlant.CustomerCreationParams, requestOptions?: Customers.RequestOptions): Promise<Parlant.Customer>;
    /**
     * Retrieves details of a specific customer by ID.
     *
     * Returns a complete customer object including their metadata and tags.
     * The customer must exist in the system.
     *
     * @param {string} customerId - Unique identifier for the customer
     * @param {Customers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.customers.retrieve("customer_id")
     */
    retrieve(customerId: string, requestOptions?: Customers.RequestOptions): Promise<Parlant.Customer>;
    /**
     * Deletes a customer from the agent.
     *
     * Deleting a non-existent customer will return 404.
     * No content will be returned from a successful deletion.
     *
     * @param {string} customerId - Unique identifier for the customer
     * @param {Customers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.customers.delete("customer_id")
     */
    delete(customerId: string, requestOptions?: Customers.RequestOptions): Promise<void>;
    /**
     * Updates an existing customer's attributes.
     *
     * Only provided attributes will be updated; others remain unchanged.
     * The customer's ID and creation timestamp cannot be modified.
     * Extra metadata and tags can be added or removed independently.
     *
     * @param {string} customerId - Unique identifier for the customer
     * @param {Parlant.CustomerUpdateParams} request
     * @param {Customers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Parlant.NotFoundError}
     * @throws {@link Parlant.UnprocessableEntityError}
     *
     * @example
     *     await client.customers.update("customer_id", {
     *         name: "Scooby",
     *         extra: {
     *             add: {
     *                 "VIP": "Yes",
     *                 "email": "scooby@dooby.do"
     *             },
     *             remove: ["old_email", "old_title"]
     *         },
     *         tags: {
     *             add: ["t9a8g703f4", "tag_456abc"],
     *             remove: ["tag_789def", "tag_012ghi"]
     *         }
     *     })
     */
    update(customerId: string, request?: Parlant.CustomerUpdateParams, requestOptions?: Customers.RequestOptions): Promise<Parlant.Customer>;
}
