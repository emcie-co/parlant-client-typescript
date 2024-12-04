/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Represents a customer in the system.
 *
 * Customers are entities that interact with agents through sessions. Each customer
 * can have metadata stored in the extra field and can be tagged for categorization.
 */
export interface Customer {
    /** Unique identifier for the customer */
    id: string;
    /** UTC timestamp of when the agent was created */
    creationUtc: Date;
    /** An arbitrary string that indentifies and/or describes the customer */
    name: string;
    /** Key-value pairs (`str: str`) to describe the customer */
    extra: Record<string, string>;
    /** Collection of ids of tags that describe the customer */
    tags: string[];
}
