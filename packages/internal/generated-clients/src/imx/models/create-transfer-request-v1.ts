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
 * @interface CreateTransferRequestV1
 */
export interface CreateTransferRequestV1 {
    /**
     * Amount to transfer
     * @type {string}
     * @memberof CreateTransferRequestV1
     */
    'amount': string;
    /**
     * ID of the asset to transfer
     * @type {string}
     * @memberof CreateTransferRequestV1
     */
    'asset_id': string;
    /**
     * Expiration timestamp for this transfer
     * @type {number}
     * @memberof CreateTransferRequestV1
     */
    'expiration_timestamp': number;
    /**
     * Nonce of the transfer
     * @type {number}
     * @memberof CreateTransferRequestV1
     */
    'nonce': number;
    /**
     * Public stark key of the user receiving the transfer
     * @type {string}
     * @memberof CreateTransferRequestV1
     */
    'receiver_stark_key': string;
    /**
     * ID of the vault into which the asset will be transferred to
     * @type {number}
     * @memberof CreateTransferRequestV1
     */
    'receiver_vault_id': number;
    /**
     * Public stark key of the user sending the transfer
     * @type {string}
     * @memberof CreateTransferRequestV1
     */
    'sender_stark_key': string;
    /**
     * ID of the vault into which the asset is from
     * @type {number}
     * @memberof CreateTransferRequestV1
     */
    'sender_vault_id': number;
    /**
     * Transfer payload signature
     * @type {string}
     * @memberof CreateTransferRequestV1
     */
    'stark_signature': string;
}

