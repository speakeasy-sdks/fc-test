/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RateDetailDDU extends SpeakeasyBase {
    /**
     * The actual shipping cost prior to any conversion optimization settings being applied
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ActualShippingCost" })
    actualShippingCost: number;

    /**
     * The optimal carrier picked for this shipment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Carrier" })
    carrier: string;

    /**
     * The number of days from pick up for the shipment to reach its destination
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Days" })
    days: string;

    /**
     * The cost for this shipment after discounted
     */
    @SpeakeasyMetadata()
    @Expose({ name: "DiscountedShippingCost" })
    discountedShippingCost: number;

    /**
     * The unique key of individual rate
     */
    @SpeakeasyMetadata()
    @Expose({ name: "HashKey" })
    hashKey: string;

    /**
     * The cost to insure this shipment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Insurance" })
    insurance: number;

    /**
     * The shipping cost for the order to be returned to the customer after conversion optimization settings are applied
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ShippingCost" })
    shippingCost: number;
}
