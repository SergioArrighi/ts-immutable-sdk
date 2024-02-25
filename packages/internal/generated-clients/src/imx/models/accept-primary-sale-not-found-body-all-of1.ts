/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * Immutable X API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface AcceptPrimarySaleNotFoundBodyAllOf1
 */
export interface AcceptPrimarySaleNotFoundBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof AcceptPrimarySaleNotFoundBodyAllOf1
     */
    'code': AcceptPrimarySaleNotFoundBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof AcceptPrimarySaleNotFoundBodyAllOf1
     */
    'details': object | null;
}

export const AcceptPrimarySaleNotFoundBodyAllOf1CodeEnum = {
    ResourceNotFound: 'RESOURCE_NOT_FOUND'
} as const;

export type AcceptPrimarySaleNotFoundBodyAllOf1CodeEnum = typeof AcceptPrimarySaleNotFoundBodyAllOf1CodeEnum[keyof typeof AcceptPrimarySaleNotFoundBodyAllOf1CodeEnum];


