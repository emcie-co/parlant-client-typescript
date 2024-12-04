/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Configuration parameters for OpenAPI-based service integration.
 *
 * OpenAPI services are integrated using their OpenAPI/Swagger specification,
 * enabling automatic generation of client code and documentation.
 */
export interface OpenApiServiceParams {
    /** Base URL for the service. Must include http:// or https:// scheme. */
    url: string;
    /**
     * URL or filesystem path to the OpenAPI specification.
     * For URLs, must be publicly accessible.
     * For filesystem paths, the server must have read permissions.
     */
    source: string;
}
