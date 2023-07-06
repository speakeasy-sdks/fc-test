/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Piece extends SpeakeasyBase {
    /**
     * Category this item would fall in
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Category" })
    category?: string[];

    /**
     * Description of the item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Description" })
    description: string;

    /**
     * HS Code for the item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "HSCode" })
    hsCode: string;

    /**
     * Height of the parcel
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Height" })
    height?: number;

    /**
     * Length of the parcel
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Length" })
    length?: number;

    /**
     * Material the item is made of
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Material" })
    material?: string;

    /**
     * Origin country of the item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "OriginCountryCode" })
    originCountryCode: string;

    /**
     * Number of items
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Quantity" })
    quantity: number;

    /**
     * Product SKU
     */
    @SpeakeasyMetadata()
    @Expose({ name: "SKU" })
    sku?: string;

    /**
     * Price of the item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "SalePrice" })
    salePrice: number;

    /**
     * weight of the piece
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Weight" })
    weight: number;

    /**
     * Width of the parcel
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Width" })
    width?: number;
}