# rates

### Available Operations

* [getRates](#getrates) - GetRates

## getRates

This api call is used to return the rate for a shipment. All the details of the shipment should be provided to the api. Our route optimization engine, determines the best available route based on cost, service level and historical performance.

### Example Usage

```typescript
import { FcTest } from "fc-test";
import { GetRatesResponse } from "fc-test/dist/sdk/models/operations";
import { ServiceCode, TermsOfTrade } from "fc-test/dist/sdk/models/shared";

const sdk = new FcTest();

sdk.rates.getRates({
  appID: "7eF1nR4D0pC2vS9L3W6yX5jB2gU7mT4Q",
  currency: "USD",
  customerKey: "9eR7D2jL5pW1",
  dimensionUnit: "CM",
  includeLandedCost: true,
  insurance: "N",
  isReturn: "N",
  labelFormat: "PDF",
  package: {
    height: 5,
    length: 5,
    weight: 1,
    width: 5,
  },
  pieces: [
    {
      category: [
        "iusto",
        "excepturi",
        "nisi",
      ],
      description: "T-Shirt",
      hsCode: "610910",
      height: 5,
      length: 5,
      material: "Cotton",
      originCountryCode: "US",
      quantity: 3,
      sku: "SKU-01",
      salePrice: 5.99,
      weight: 1,
      width: 5,
    },
    {
      category: [
        "temporibus",
        "ab",
        "quis",
        "veritatis",
      ],
      description: "T-Shirt",
      hsCode: "610910",
      height: 5,
      length: 5,
      material: "Cotton",
      originCountryCode: "US",
      quantity: 3,
      sku: "SKU-01",
      salePrice: 5.99,
      weight: 1,
      width: 5,
    },
    {
      category: [
        "perferendis",
        "ipsam",
        "repellendus",
      ],
      description: "T-Shirt",
      hsCode: "610910",
      height: 5,
      length: 5,
      material: "Cotton",
      originCountryCode: "US",
      quantity: 3,
      sku: "SKU-01",
      salePrice: 5.99,
      weight: 1,
      width: 5,
    },
    {
      category: [
        "quo",
        "odit",
        "at",
        "at",
      ],
      description: "T-Shirt",
      hsCode: "610910",
      height: 5,
      length: 5,
      material: "Cotton",
      originCountryCode: "US",
      quantity: 3,
      sku: "SKU-01",
      salePrice: 5.99,
      weight: 1,
      width: 5,
    },
  ],
  reasonForExport: "merchandise",
  reference: "481234",
  restApiKey: "5K3zA9dP7R1cQ8mV6X2tJ4fG7hY0lN9bS5xW1vE",
  serviceCode: [
    ServiceCode.Standard,
    ServiceCode.Standard,
    ServiceCode.Standard,
    ServiceCode.Standard,
  ],
  shipFromAddress: {
    addressLine1: "200 Townsend Street",
    addressLine2: "Unit 21",
    addressLine3: "molestiae",
    attentionName: "Flavorcloud Inc.",
    city: "San Francisco",
    country: "US",
    email: "jake.krachman@flavorcloud.com",
    name: "Jake Krachman",
    phone: "6094120178",
    state: "CA",
    zip: "94107",
  },
  shipToAddress: {
    addressLine1: "305 Water St",
    addressLine2: "quod",
    addressLine3: "quod",
    attentionName: "Flavorcloud Canada",
    city: "Vancouver",
    country: "CA",
    email: "contact@flavorcloud.com",
    federalTaxId: "esse",
    name: "Bradley Walsh",
    phone: "6094120178",
    state: "BC",
    stateTaxId: "totam",
    zip: "V6B 1B9",
  },
  termsOfTrade: [
    TermsOfTrade.Ddp,
    TermsOfTrade.Ddp,
    TermsOfTrade.Ddp,
    TermsOfTrade.Ddp,
  ],
  weightUnit: "KG",
}).then((res: GetRatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.RateRequest](../../models/shared/raterequest.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetRatesResponse](../../models/operations/getratesresponse.md)>**

