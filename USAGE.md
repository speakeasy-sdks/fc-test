<!-- Start SDK Example Usage -->


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
        "distinctio",
        "quibusdam",
        "unde",
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
        "corrupti",
        "illum",
        "vel",
        "error",
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
        "suscipit",
        "iure",
        "magnam",
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
    addressLine3: "ipsa",
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
    addressLine2: "delectus",
    addressLine3: "tempora",
    attentionName: "Flavorcloud Canada",
    city: "Vancouver",
    country: "CA",
    email: "contact@flavorcloud.com",
    federalTaxId: "suscipit",
    name: "Bradley Walsh",
    phone: "6094120178",
    state: "BC",
    stateTaxId: "molestiae",
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
<!-- End SDK Example Usage -->