# RateDetailDDU


## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `actualShippingCost`                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The actual shipping cost prior to any conversion optimization settings being applied                              |                                                                                                                   |
| `carrier`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The optimal carrier picked for this shipment                                                                      |                                                                                                                   |
| `days`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The number of days from pick up for the shipment to reach its destination                                         |                                                                                                                   |
| `discountedShippingCost`                                                                                          | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The cost for this shipment after discounted                                                                       |                                                                                                                   |
| `hashKey`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The unique key of individual rate                                                                                 |                                                                                                                   |
| `insurance`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The cost to insure this shipment                                                                                  |                                                                                                                   |
| `shippingCost`                                                                                                    | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The shipping cost for the order to be returned to the customer after conversion optimization settings are applied |                                                                                                                   |