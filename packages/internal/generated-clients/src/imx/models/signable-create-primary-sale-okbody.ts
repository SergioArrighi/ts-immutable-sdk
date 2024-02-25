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


// May contain unused imports in some cases
// @ts-ignore
import { SignableCreatePrimarySaleOKBodyFeesItems } from './signable-create-primary-sale-okbody-fees-items';

/**
 * 
 * @export
 * @interface SignableCreatePrimarySaleOKBody
 */
export interface SignableCreatePrimarySaleOKBody {
    /**
     * Ethereum address of the payer of the primary sale
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'buyer_ether_key': string;
    /**
     * Stark key of the buyer
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'buyer_stark_key': string;
    /**
     * Vault ID of the buyer
     * @type {number}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'buyer_vault_id': number;
    /**
     * Time the primary sale expires
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'expiration_timestamp': string;
    /**
     * 
     * @type {Array<SignableCreatePrimarySaleOKBodyFeesItems>}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'fees'?: Array<SignableCreatePrimarySaleOKBodyFeesItems>;
    /**
     * Ethereum address of the items receiver
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'items_recipient_ether_key': string;
    /**
     * Nonce of transaction
     * @type {number}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'nonce': number;
    /**
     * Hash of the StarkEx payload
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'payload_hash': string;
    /**
     * Fee exclusive amount of the transfer
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'payment_amount': string;
    /**
     * Asset ID of payment token
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'payment_asset_id': string;
    /**
     * Ethereum address of the recipient of the sale proceedings
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'payment_recipient_ether_key': string;
    /**
     * Stark key of the payment receiver
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'payment_recipient_stark_key': string;
    /**
     * Vault ID of the payment receiver
     * @type {number}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'payment_recipient_vault_id': number;
    /**
     * Hashed Ethereum payload of the request
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'signable_message': string;
    /**
     * Arbitrary data defined by the selling party (e.g. game studio) to identify the primary sale. We suggest signing this payload to verify authenticity when processing.
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'studio_data': string;
    /**
     * Ethereum address of the studio operating the primary sale, will be used to verify in completion
     * @type {string}
     * @memberof SignableCreatePrimarySaleOKBody
     */
    'studio_ether_key': string;
}

