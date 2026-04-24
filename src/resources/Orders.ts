// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {LineItem} from './LineItems.js';
import {Discount} from './Discounts.js';
import {Application} from './Applications.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {PaymentIntent} from './PaymentIntents.js';
import {Account} from './Accounts.js';
import {ShippingRate} from './ShippingRates.js';
import {TaxRate} from './TaxRates.js';
import {
  Emptyable,
  MetadataParam,
  Decimal,
  AddressParam,
  Address,
  PaginationParams,
  Metadata,
} from '../shared.js';
import {RequestOptions, ApiListPromise, Response, ApiList} from '../lib.js';

export class OrderResource extends StripeResource {
  /**
   * Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.
   */
  list(
    params?: OrderListParams,
    options?: RequestOptions
  ): ApiListPromise<Order> {
    return this._makeRequest('GET', '/v1/orders', params, options, {
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                line_items: {
                  kind: 'object',
                  fields: {
                    data: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          price: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                currency_options: {
                                  kind: 'array',
                                  element: {
                                    kind: 'object',
                                    fields: {
                                      tiers: {
                                        kind: 'array',
                                        element: {
                                          kind: 'object',
                                          fields: {
                                            flat_amount_decimal: {
                                              kind: 'nullable',
                                              inner: {kind: 'decimal_string'},
                                            },
                                            unit_amount_decimal: {
                                              kind: 'nullable',
                                              inner: {kind: 'decimal_string'},
                                            },
                                          },
                                        },
                                      },
                                      unit_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                tiers: {
                                  kind: 'array',
                                  element: {
                                    kind: 'object',
                                    fields: {
                                      flat_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      unit_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                unit_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }) as any;
  }
  /**
   * Creates a new open order object.
   */
  create(
    params: OrderCreateParams,
    options?: RequestOptions
  ): Promise<Response<Order>> {
    return this._makeRequest('POST', '/v1/orders', params, options, {
      requestSchema: {
        kind: 'object',
        fields: {
          line_items: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                price_data: {
                  kind: 'object',
                  fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
      responseSchema: {
        kind: 'object',
        fields: {
          line_items: {
            kind: 'object',
            fields: {
              data: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          currency_options: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {
                                tiers: {
                                  kind: 'array',
                                  element: {
                                    kind: 'object',
                                    fields: {
                                      flat_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      unit_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                unit_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          tiers: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {
                                flat_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                                unit_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          unit_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }) as any;
  }
  /**
   * Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.
   */
  retrieve(
    id: string,
    params?: OrderRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Order>> {
    return this._makeRequest('GET', `/v1/orders/${id}`, params, options, {
      responseSchema: {
        kind: 'object',
        fields: {
          line_items: {
            kind: 'object',
            fields: {
              data: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          currency_options: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {
                                tiers: {
                                  kind: 'array',
                                  element: {
                                    kind: 'object',
                                    fields: {
                                      flat_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      unit_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                unit_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          tiers: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {
                                flat_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                                unit_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          unit_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }) as any;
  }
  /**
   * Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   */
  update(
    id: string,
    params?: OrderUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Order>> {
    return this._makeRequest('POST', `/v1/orders/${id}`, params, options, {
      requestSchema: {
        kind: 'object',
        fields: {
          line_items: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                price_data: {
                  kind: 'object',
                  fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
      responseSchema: {
        kind: 'object',
        fields: {
          line_items: {
            kind: 'object',
            fields: {
              data: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          currency_options: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {
                                tiers: {
                                  kind: 'array',
                                  element: {
                                    kind: 'object',
                                    fields: {
                                      flat_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      unit_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                unit_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          tiers: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {
                                flat_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                                unit_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          unit_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }) as any;
  }
  /**
   * Submitting an Order transitions the status to processing and creates a PaymentIntent object so the order can be paid. If the Order has an amount_total of 0, no PaymentIntent object will be created. Once the order is submitted, its contents cannot be changed, unless the [reopen](https://docs.stripe.com/api#reopen_order) method is called.
   */
  submit(
    id: string,
    params: OrderSubmitParams,
    options?: RequestOptions
  ): Promise<Response<Order>> {
    return this._makeRequest(
      'POST',
      `/v1/orders/${id}/submit`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            line_items: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      price: {
                        kind: 'nullable',
                        inner: {
                          kind: 'object',
                          fields: {
                            currency_options: {
                              kind: 'array',
                              element: {
                                kind: 'object',
                                fields: {
                                  tiers: {
                                    kind: 'array',
                                    element: {
                                      kind: 'object',
                                      fields: {
                                        flat_amount_decimal: {
                                          kind: 'nullable',
                                          inner: {kind: 'decimal_string'},
                                        },
                                        unit_amount_decimal: {
                                          kind: 'nullable',
                                          inner: {kind: 'decimal_string'},
                                        },
                                      },
                                    },
                                  },
                                  unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: {kind: 'decimal_string'},
                                  },
                                },
                              },
                            },
                            tiers: {
                              kind: 'array',
                              element: {
                                kind: 'object',
                                fields: {
                                  flat_amount_decimal: {
                                    kind: 'nullable',
                                    inner: {kind: 'decimal_string'},
                                  },
                                  unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: {kind: 'decimal_string'},
                                  },
                                },
                              },
                            },
                            unit_amount_decimal: {
                              kind: 'nullable',
                              inner: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }
    ) as any;
  }
}
export interface Order {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'order';

  /**
   * Order cost before any discounts or taxes are applied. A positive integer representing the subtotal of the order in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency).
   */
  amount_subtotal: number;

  /**
   * Total order cost after discounts and taxes are applied. A positive integer representing the cost of the order in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). To submit an order, the total must be either 0 or at least $0.50 USD or [equivalent in charge currency](https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts).
   */
  amount_total: number;

  /**
   * ID of the Connect application that created the Order, if any.
   */
  application: string | Application | null;

  automatic_tax?: Order.AutomaticTax;

  /**
   * Customer billing details associated with the order.
   */
  billing_details: Order.BillingDetails | null;

  /**
   * The client secret of this Order. Used for client-side retrieval using a publishable key.
   *
   * The client secret can be used to complete a payment for an Order from your frontend. It should not be stored, logged, embedded in URLs, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   *
   * Refer to our docs for [creating and processing an order](https://docs.stripe.com/orders-beta/create-and-process) to learn about how client_secret should be handled.
   */
  client_secret: string | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The customer which this orders belongs to.
   */
  customer: string | Customer | DeletedCustomer | null;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string | null;

  /**
   * The discounts applied to the order. Use `expand[]=discounts` to expand each discount.
   */
  discounts: Array<string | Discount> | null;

  /**
   * A recent IP address of the purchaser used for tax reporting and tax location inference.
   */
  ip_address: string | null;

  /**
   * A list of line items the customer is ordering. Each line item includes information about the product, the quantity, and the resulting cost. There is a maximum of 100 line items.
   */
  line_items?: ApiList<LineItem>;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  payment: Order.Payment;

  /**
   * The details of the customer cost of shipping, including the customer chosen ShippingRate.
   */
  shipping_cost: Order.ShippingCost | null;

  /**
   * Customer shipping information associated with the order.
   */
  shipping_details: Order.ShippingDetails | null;

  /**
   * The overall status of the order.
   */
  status: Order.Status;

  tax_details?: Order.TaxDetails;

  total_details: Order.TotalDetails;
}
export namespace Order {
  export interface AutomaticTax {
    /**
     * Whether Stripe automatically computes tax on this Order.
     */
    enabled: boolean;

    /**
     * The status of the most recent automated tax calculation for this Order.
     */
    status: AutomaticTax.Status | null;
  }

  export interface BillingDetails {
    /**
     * Billing address for the order.
     */
    address: Address | null;

    /**
     * Email address for the order.
     */
    email: string | null;

    /**
     * Full name for the order.
     */
    name: string | null;

    /**
     * Billing phone number for the order (including extension).
     */
    phone: string | null;
  }

  export interface Payment {
    /**
     * ID of the payment intent associated with this order. Null when the order is `open`.
     */
    payment_intent: string | PaymentIntent | null;

    /**
     * Settings describing how the order should configure generated PaymentIntents.
     */
    settings: Payment.Settings | null;

    /**
     * The status of the underlying payment associated with this order, if any. Null when the order is `open`.
     */
    status: Payment.Status | null;
  }

  export interface ShippingCost {
    /**
     * Total shipping cost before any discounts or taxes are applied.
     */
    amount_subtotal: number;

    /**
     * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
     */
    amount_tax: number;

    /**
     * Total shipping cost after discounts and taxes are applied.
     */
    amount_total: number;

    /**
     * The ID of the ShippingRate for this order.
     */
    shipping_rate: string | ShippingRate | null;

    /**
     * The taxes applied to the shipping rate.
     */
    taxes?: Array<ShippingCost.Tax>;
  }

  export interface ShippingDetails {
    /**
     * Recipient shipping address. Required if the order includes products that are shippable.
     */
    address: Address | null;

    /**
     * Recipient name.
     */
    name: string | null;

    /**
     * Recipient phone (including extension).
     */
    phone: string | null;
  }

  export type Status =
    | 'canceled'
    | 'complete'
    | 'open'
    | 'processing'
    | 'submitted';

  export interface TaxDetails {
    /**
     * Describes the purchaser's tax exemption status. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt: TaxDetails.TaxExempt;

    /**
     * The purchaser's tax IDs to be used in calculation of tax for this Order.
     */
    tax_ids: Array<TaxDetails.TaxId>;
  }

  export interface TotalDetails {
    /**
     * This is the sum of all the discounts.
     */
    amount_discount: number;

    /**
     * This is the sum of all the shipping amounts.
     */
    amount_shipping: number | null;

    /**
     * This is the sum of all the tax amounts.
     */
    amount_tax: number;

    breakdown?: TotalDetails.Breakdown;
  }

  export namespace AutomaticTax {
    export type Status = 'complete' | 'failed' | 'requires_location_inputs';
  }

  export namespace Payment {
    export interface Settings {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
       */
      application_fee_amount: number | null;

      /**
       * Indicates whether order has been opted into using [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) to manage payment method types.
       */
      automatic_payment_methods: Settings.AutomaticPaymentMethods | null;

      /**
       * PaymentMethod-specific configuration to provide to the order's PaymentIntent.
       */
      payment_method_options: Settings.PaymentMethodOptions | null;

      /**
       * The list of [payment method types](https://docs.stripe.com/payments/payment-methods/overview) to provide to the order's PaymentIntent. Do not include this attribute if you prefer to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types: Array<Settings.PaymentMethodType> | null;

      /**
       * The URL to redirect the customer to after they authenticate their payment.
       */
      return_url: string | null;

      /**
       * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
       */
      statement_descriptor: string | null;

      /**
       * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
       */
      statement_descriptor_suffix: string | null;

      /**
       * Provides configuration for completing a transfer for the order after it is paid.
       */
      transfer_data: Settings.TransferData | null;
    }

    export type Status =
      | 'canceled'
      | 'complete'
      | 'not_required'
      | 'processing'
      | 'requires_action'
      | 'requires_capture'
      | 'requires_confirmation'
      | 'requires_payment_method';

    export namespace Settings {
      export interface AutomaticPaymentMethods {
        /**
         * Whether this Order has been opted into managing payment method types via the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
         */
        enabled: boolean;
      }

      export interface PaymentMethodOptions {
        acss_debit?: PaymentMethodOptions.AcssDebit;

        afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

        alipay?: PaymentMethodOptions.Alipay;

        bancontact?: PaymentMethodOptions.Bancontact;

        card?: PaymentMethodOptions.Card;

        customer_balance?: PaymentMethodOptions.CustomerBalance;

        ideal?: PaymentMethodOptions.Ideal;

        klarna?: PaymentMethodOptions.Klarna;

        link?: PaymentMethodOptions.Link;

        oxxo?: PaymentMethodOptions.Oxxo;

        p24?: PaymentMethodOptions.P24;

        paypal?: PaymentMethodOptions.Paypal;

        sepa_debit?: PaymentMethodOptions.SepaDebit;

        sofort?: PaymentMethodOptions.Sofort;

        wechat_pay?: PaymentMethodOptions.WechatPay;
      }

      export type PaymentMethodType =
        | 'acss_debit'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'card'
        | 'customer_balance'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'link'
        | 'oxxo'
        | 'p24'
        | 'paypal'
        | 'sepa_debit'
        | 'sofort'
        | 'wechat_pay';

      export interface TransferData {
        /**
         * The amount that will be transferred automatically when the order is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount: number | null;

        /**
         * ID of the Connected account receiving the transfer.
         */
        destination: string | Account;
      }

      export namespace PaymentMethodOptions {
        export interface AcssDebit {
          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: AcssDebit.SetupFutureUsage;

          /**
           * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
           */
          target_date?: string;

          /**
           * Bank account verification method. The default value is `automatic`.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        export interface AfterpayClearpay {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: AfterpayClearpay.CaptureMethod;

          /**
           * Order identifier shown to the user in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
           */
          reference: string | null;

          /**
           * Indicates that you intend to make future payments with the payment method.
           *
           * Providing this parameter will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://docs.stripe.com/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export interface Alipay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: Alipay.SetupFutureUsage;
        }

        export interface Bancontact {
          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           */
          preferred_language: Bancontact.PreferredLanguage;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: Bancontact.SetupFutureUsage;
        }

        export interface Card {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method: Card.CaptureMethod;

          /**
           * Indicates that you intend to make future payments with the payment method.
           *
           * Providing this parameter will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://docs.stripe.com/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Card.SetupFutureUsage;
        }

        export interface CustomerBalance {
          bank_transfer?: CustomerBalance.BankTransfer;

          /**
           * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
           */
          funding_type: 'bank_transfer' | null;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: 'none';
        }

        export interface Ideal {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: Ideal.SetupFutureUsage;
        }

        export interface Klarna {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: 'manual';

          /**
           * Preferred locale of the Klarna checkout page that the customer is redirected to.
           */
          preferred_locale: string | null;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: Klarna.SetupFutureUsage;
        }

        export interface Link {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: 'manual';

          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           * @deprecated
           */
          persistent_token: string | null;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: Link.SetupFutureUsage;
        }

        export interface Oxxo {
          /**
           * The number of calendar days before an OXXO invoice expires. For example, if you create an OXXO invoice on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
           */
          expires_after_days: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: 'none';
        }

        export interface P24 {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: 'none';
        }

        export interface Paypal {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: 'manual';

          /**
           * The line items purchased by the customer.
           */
          line_items?: Array<Paypal.LineItem>;

          /**
           * Preferred locale of the PayPal checkout page that the customer is redirected to.
           */
          preferred_locale: string | null;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference: string | null;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference_id?: string | null;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: Paypal.SetupFutureUsage;

          /**
           * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
           */
          subsellers?: Array<string>;
        }

        export interface SepaDebit {
          mandate_options?: SepaDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: SepaDebit.SetupFutureUsage;

          /**
           * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
           */
          target_date?: string;
        }

        export interface Sofort {
          /**
           * Preferred language of the SOFORT authorization page that the customer is redirected to.
           */
          preferred_language: Sofort.PreferredLanguage | null;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: Sofort.SetupFutureUsage;
        }

        export interface WechatPay {
          /**
           * The app ID registered with WeChat Pay. Only required when client is ios or android.
           */
          app_id: string | null;

          /**
           * The client type that the end customer will pay from
           */
          client: WechatPay.Client | null;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           */
          setup_future_usage?: 'none';
        }

        export namespace AcssDebit {
          export interface MandateOptions {
            /**
             * A URL for custom mandate text
             */
            custom_mandate_url?: string;

            /**
             * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description: string | null;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule: MandateOptions.PaymentSchedule | null;

            /**
             * Transaction type of the mandate.
             */
            transaction_type: MandateOptions.TransactionType | null;
          }

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          export type VerificationMethod =
            | 'automatic'
            | 'instant'
            | 'microdeposits';

          export namespace MandateOptions {
            export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

            export type TransactionType = 'business' | 'personal';
          }
        }

        export namespace AfterpayClearpay {
          export type CaptureMethod =
            | 'automatic'
            | 'automatic_async'
            | 'manual';
        }

        export namespace Alipay {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Bancontact {
          export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Card {
          export type CaptureMethod =
            | 'automatic'
            | 'automatic_async'
            | 'manual';

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        export namespace CustomerBalance {
          export interface BankTransfer {
            eu_bank_transfer?: BankTransfer.EuBankTransfer;

            /**
             * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
             *
             * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
             */
            requested_address_types?: Array<BankTransfer.RequestedAddressType>;

            /**
             * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
             */
            type: BankTransfer.Type | null;
          }

          export namespace BankTransfer {
            export interface EuBankTransfer {
              /**
               * The desired country code of the bank account information. Permitted values include: `DE`, `FR`, `IE`, or `NL`.
               */
              country: EuBankTransfer.Country;
            }

            export type RequestedAddressType =
              | 'aba'
              | 'iban'
              | 'sepa'
              | 'sort_code'
              | 'spei'
              | 'swift'
              | 'zengin';

            export type Type =
              | 'eu_bank_transfer'
              | 'gb_bank_transfer'
              | 'jp_bank_transfer'
              | 'mx_bank_transfer'
              | 'us_bank_transfer';

            export namespace EuBankTransfer {
              export type Country = 'BE' | 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
            }
          }
        }

        export namespace Ideal {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Klarna {
          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        export namespace Link {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Paypal {
          export interface LineItem {
            /**
             * Type of the line item.
             */
            category?: LineItem.Category;

            /**
             * Description of the line item.
             */
            description?: string;

            /**
             * Descriptive name of the line item.
             */
            name: string;

            /**
             * Quantity of the line item. Cannot be a negative number.
             */
            quantity: number;

            /**
             * Client facing stock keeping unit, article number or similar.
             */
            sku?: string;

            /**
             * The Stripe account ID of the connected account that sells the item. This is only needed when using [Separate Charges and Transfers](https://docs.stripe.com/connect/separate-charges-and-transfers).
             */
            sold_by?: string;

            tax?: LineItem.Tax;

            /**
             * Price for a single unit of the line item in minor units. Cannot be a negative number.
             */
            unit_amount: number;
          }

          export type SetupFutureUsage = 'none' | 'off_session';

          export namespace LineItem {
            export type Category =
              | 'digital_goods'
              | 'donation'
              | 'physical_goods';

            export interface Tax {
              /**
               * The tax for a single unit of the line item in minor units. Cannot be a negative number.
               */
              amount: number;

              /**
               * The tax behavior for the line item.
               */
              behavior: Tax.Behavior;
            }

            export namespace Tax {
              export type Behavior = 'exclusive' | 'inclusive';
            }
          }
        }

        export namespace SepaDebit {
          export interface MandateOptions {
            /**
             * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
             */
            reference_prefix?: string;
          }

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        export namespace Sofort {
          export type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';

          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace WechatPay {
          export type Client = 'android' | 'ios' | 'web';
        }
      }
    }
  }

  export namespace ShippingCost {
    export interface Tax {
      /**
       * Amount of tax applied for this rate.
       */
      amount: number;

      /**
       * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
       *
       * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
       */
      rate: TaxRate;

      /**
       * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
       */
      taxability_reason: Tax.TaxabilityReason | null;

      /**
       * The amount on which tax is calculated, in cents (or local equivalent).
       */
      taxable_amount: number | null;
    }

    export namespace Tax {
      export type TaxabilityReason =
        | 'customer_exempt'
        | 'not_collecting'
        | 'not_subject_to_tax'
        | 'not_supported'
        | 'portion_product_exempt'
        | 'portion_reduced_rated'
        | 'portion_standard_rated'
        | 'product_exempt'
        | 'product_exempt_holiday'
        | 'proportionally_rated'
        | 'reduced_rated'
        | 'reverse_charge'
        | 'standard_rated'
        | 'taxable_basis_reduced'
        | 'zero_rated';
    }
  }

  export namespace TaxDetails {
    export type TaxExempt = 'exempt' | 'none' | 'reverse';

    export interface TaxId {
      /**
       * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `pl_nip`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `lk_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, `aw_tin`, `az_tin`, `bd_bin`, `bj_ifu`, `et_tin`, `kg_tin`, `la_tin`, `cm_niu`, `cv_nif`, `bf_ifu`, or `unknown`
       */
      type: TaxId.Type;

      /**
       * The value of the tax ID.
       */
      value: string | null;
    }

    export namespace TaxId {
      export type Type =
        | 'ad_nrt'
        | 'ae_trn'
        | 'al_tin'
        | 'am_tin'
        | 'ao_tin'
        | 'ar_cuit'
        | 'au_abn'
        | 'au_arn'
        | 'aw_tin'
        | 'az_tin'
        | 'ba_tin'
        | 'bb_tin'
        | 'bd_bin'
        | 'bf_ifu'
        | 'bg_uic'
        | 'bh_vat'
        | 'bj_ifu'
        | 'bo_tin'
        | 'br_cnpj'
        | 'br_cpf'
        | 'bs_tin'
        | 'by_tin'
        | 'ca_bn'
        | 'ca_gst_hst'
        | 'ca_pst_bc'
        | 'ca_pst_mb'
        | 'ca_pst_sk'
        | 'ca_qst'
        | 'cd_nif'
        | 'ch_uid'
        | 'ch_vat'
        | 'cl_tin'
        | 'cm_niu'
        | 'cn_tin'
        | 'co_nit'
        | 'cr_tin'
        | 'cv_nif'
        | 'de_stn'
        | 'do_rcn'
        | 'ec_ruc'
        | 'eg_tin'
        | 'es_cif'
        | 'et_tin'
        | 'eu_oss_vat'
        | 'eu_vat'
        | 'gb_vat'
        | 'ge_vat'
        | 'gn_nif'
        | 'hk_br'
        | 'hr_oib'
        | 'hu_tin'
        | 'id_npwp'
        | 'il_vat'
        | 'in_gst'
        | 'is_vat'
        | 'jp_cn'
        | 'jp_rn'
        | 'jp_trn'
        | 'ke_pin'
        | 'kg_tin'
        | 'kh_tin'
        | 'kr_brn'
        | 'kz_bin'
        | 'la_tin'
        | 'li_uid'
        | 'li_vat'
        | 'lk_vat'
        | 'ma_vat'
        | 'md_vat'
        | 'me_pib'
        | 'mk_vat'
        | 'mr_nif'
        | 'mx_rfc'
        | 'my_frp'
        | 'my_itn'
        | 'my_sst'
        | 'ng_tin'
        | 'no_vat'
        | 'no_voec'
        | 'np_pan'
        | 'nz_gst'
        | 'om_vat'
        | 'pe_ruc'
        | 'ph_tin'
        | 'pl_nip'
        | 'ro_tin'
        | 'rs_pib'
        | 'ru_inn'
        | 'ru_kpp'
        | 'sa_vat'
        | 'sg_gst'
        | 'sg_uen'
        | 'si_tin'
        | 'sn_ninea'
        | 'sr_fin'
        | 'sv_nit'
        | 'th_vat'
        | 'tj_tin'
        | 'tr_tin'
        | 'tw_vat'
        | 'tz_vat'
        | 'ua_vat'
        | 'ug_tin'
        | 'unknown'
        | 'us_ein'
        | 'uy_ruc'
        | 'uz_tin'
        | 'uz_vat'
        | 've_rif'
        | 'vn_tin'
        | 'za_vat'
        | 'zm_tin'
        | 'zw_tin';
    }
  }

  export namespace TotalDetails {
    export interface Breakdown {
      /**
       * The aggregated discounts.
       */
      discounts: Array<Breakdown.Discount>;

      /**
       * The aggregated tax amounts by rate.
       */
      taxes: Array<Breakdown.Tax>;
    }

    export namespace Breakdown {
      export interface Discount {
        /**
         * The amount discounted.
         */
        amount: number;

        /**
         * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
         * It contains information about when the discount began, when it will end, and what it is applied to.
         *
         * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
         */
        discount: Discount;
      }

      export interface Tax {
        /**
         * Amount of tax applied for this rate.
         */
        amount: number;

        /**
         * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
         *
         * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
         */
        rate: TaxRate;

        /**
         * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
         */
        taxability_reason: Tax.TaxabilityReason | null;

        /**
         * The amount on which tax is calculated, in cents (or local equivalent).
         */
        taxable_amount: number | null;
      }

      export namespace Tax {
        export type TaxabilityReason =
          | 'customer_exempt'
          | 'not_collecting'
          | 'not_subject_to_tax'
          | 'not_supported'
          | 'portion_product_exempt'
          | 'portion_reduced_rated'
          | 'portion_standard_rated'
          | 'product_exempt'
          | 'product_exempt_holiday'
          | 'proportionally_rated'
          | 'reduced_rated'
          | 'reverse_charge'
          | 'standard_rated'
          | 'taxable_basis_reduced'
          | 'zero_rated';
      }
    }
  }
}
export interface OrderCreateParams {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * A list of line items the customer is ordering. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  line_items: Array<OrderCreateParams.LineItem>;

  /**
   * Settings for automatic tax calculation for this order.
   */
  automatic_tax?: OrderCreateParams.AutomaticTax;

  /**
   * Billing details for the customer. If a customer is provided, this will be automatically populated with values from that customer if override values are not provided.
   */
  billing_details?: Emptyable<OrderCreateParams.BillingDetails>;

  /**
   * The customer associated with this order.
   */
  customer?: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * The coupons, promotion codes, and/or discounts to apply to the order.
   */
  discounts?: Emptyable<Array<OrderCreateParams.Discount>>;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The IP address of the purchaser for this order.
   */
  ip_address?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * Payment information associated with the order, including payment settings.
   */
  payment?: OrderCreateParams.Payment;

  /**
   * Settings for the customer cost of shipping for this order.
   */
  shipping_cost?: Emptyable<OrderCreateParams.ShippingCost>;

  /**
   * Shipping details for the order.
   */
  shipping_details?: Emptyable<OrderCreateParams.ShippingDetails>;

  /**
   * Additional tax details about the purchaser to be used for this order.
   */
  tax_details?: OrderCreateParams.TaxDetails;
}
export namespace OrderCreateParams {
  export interface LineItem {
    /**
     * The description for the line item. Will default to the name of the associated product.
     */
    description?: string;

    /**
     * The discounts applied to this line item.
     */
    discounts?: Emptyable<Array<LineItem.Discount>>;

    /**
     * The ID of a [Price](https://docs.stripe.com/api/prices) to add to the Order.
     *
     * The `price` parameter is an alternative to using the `product` parameter. If each of your products are sold at a single price, you can set `Product.default_price` and then pass the `product` parameter when creating a line item. If your products are sold at several possible prices, use the `price` parameter to explicitly specify which one to use.
     */
    price?: string;

    /**
     * Data used to generate a new Price object inline.
     *
     * The `price_data` parameter is an alternative to using the `product` or `price` parameters. If you create a Product upfront and configure a `Product.default_price`, pass the `product` parameter when creating a line item. If you prefer not to define Products upfront, or if you charge variable prices, pass the `price_data` parameter to describe the price for this line item.
     *
     * Each time you pass `price_data` we create a Price for the Product. This Price is hidden in both the Dashboard and API lists and cannot be reused.
     */
    price_data?: LineItem.PriceData;

    /**
     * The ID of a [Product](https://docs.stripe.com/api/products) to add to the Order.
     *
     * The Product must have a `default_price` specified. Otherwise, specify the price by passing the `price` or `price_data` parameter.
     */
    product?: string;

    /**
     * Defines a [Product](https://docs.stripe.com/api/products) inline and adds it to the Order.
     *
     * `product_data` is an alternative to the `product` parameter. If you created a Product upfront, use the `product` parameter to refer to the existing Product. But if you prefer not to create Products upfront, pass the `product_data` parameter to define a Product inline as part of configuring the Order.
     *
     * `product_data` automatically creates a Product, just as if you had manually created the Product. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates.
     */
    product_data?: LineItem.ProductData;

    /**
     * The quantity of the line item.
     */
    quantity?: number;

    /**
     * The tax rates applied to this line item.
     */
    tax_rates?: Emptyable<Array<string>>;
  }

  export interface AutomaticTax {
    /**
     * Enable automatic tax calculation which will automatically compute tax rates on this order.
     */
    enabled: boolean;
  }

  export interface BillingDetails {
    /**
     * The billing address provided by the customer.
     */
    address?: AddressParam;

    /**
     * The billing email provided by the customer.
     */
    email?: string;

    /**
     * The billing name provided by the customer.
     */
    name?: string;

    /**
     * The billing phone number provided by the customer.
     */
    phone?: string;
  }

  export interface Discount {
    /**
     * ID of the coupon to create a new discount for.
     */
    coupon?: string;

    /**
     * ID of an existing discount on the object (or one of its ancestors) to reuse.
     */
    discount?: string;

    /**
     * ID of the promotion code to create a new discount for.
     */
    promotion_code?: string;
  }

  export interface Payment {
    /**
     * Settings describing how the order should configure generated PaymentIntents.
     */
    settings: Payment.Settings;
  }

  export interface ShippingCost {
    /**
     * The ID of the shipping rate to use for this order.
     */
    shipping_rate?: string;

    /**
     * Parameters to create a new ad-hoc shipping rate for this order.
     */
    shipping_rate_data?: ShippingCost.ShippingRateData;
  }

  export interface ShippingDetails {
    /**
     * The shipping address for the order.
     */
    address: AddressParam;

    /**
     * The name of the recipient of the order.
     */
    name: string;

    /**
     * The phone number (including extension) for the recipient of the order.
     */
    phone?: Emptyable<string>;
  }

  export interface TaxDetails {
    /**
     * The purchaser's tax exemption status. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: Emptyable<TaxDetails.TaxExempt>;

    /**
     * The purchaser's tax IDs to be used for this order.
     */
    tax_ids?: Array<TaxDetails.TaxId>;
  }

  export namespace LineItem {
    export interface Discount {
      /**
       * ID of the coupon to create a new discount for.
       */
      coupon?: string;

      /**
       * ID of an existing discount on the object (or one of its ancestors) to reuse.
       */
      discount?: string;
    }

    export interface PriceData {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * ID of the [Product](https://docs.stripe.com/api/products) this [Price](https://docs.stripe.com/api/prices) belongs to.
       *
       * Use this to implement a variable-pricing model in your integration. This is required if `product_data` is not specified.
       */
      product?: string;

      /**
       * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceData.TaxBehavior;

      /**
       * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: Decimal;
    }

    export interface ProductData {
      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description?: Emptyable<string>;

      /**
       * A unique identifier for this product.
       *
       * `product_data` automatically creates a Product with this ID. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates. If any of the fields in the existing Product are different from the values in `product_data`, `product_data` updates the existing Product with the new information. So set `product_data[id]` to the same string every time you sell the same product, but don't re-use the same string for different products.
       */
      id: string;

      /**
       * Other identifiers for this product.
       */
      identifiers?: ProductData.Identifiers;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images?: Emptyable<Array<string>>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Emptyable<MetadataParam>;

      /**
       * The product's name, meant to be displayable to the customer.
       */
      name: string;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions?: Emptyable<ProductData.PackageDimensions>;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable?: boolean;

      /**
       * A [tax code](https://docs.stripe.com/tax/tax-categories) ID.
       */
      tax_code?: Emptyable<string>;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url?: Emptyable<string>;
    }

    export namespace PriceData {
      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    export namespace ProductData {
      export interface Identifiers {
        /**
         * European Article Number (EAN) consisting of 8 or 13 digits and optional dashes. You may optionally provide a leading 0 for a total of 14 digits. The final digit is a validated check digit.
         */
        ean?: Emptyable<string>;

        /**
         * Global Trade Item Number (GTIN) consisting of 8, 12, 13, or 14 digits and optional dashes. The final digit is a validated check digit.
         */
        gtin?: Emptyable<string>;

        /**
         * International Standard Book Number (ISBN) consisting of 10 or 13 digits and optional dashes. The final digit is a validated check digit. For ISBN-10, the final digit may be a `X`.
         */
        isbn?: Emptyable<string>;

        /**
         * Japanese Article Number (JAN) consisting of 13 digits and optional dashes. The first two digits must either be `45` or `49`. The final digit is a validated check digit.
         */
        jan?: Emptyable<string>;

        /**
         * Manufacturer Part Number (MPN). May include up to 70 alphanumeric characters and dashes.
         */
        mpn?: Emptyable<string>;

        /**
         * National Stock Number (NSN) consisting of 13 digits and optional dashes. The seventh character may also be alphanumeric.
         */
        nsn?: Emptyable<string>;

        /**
         * Universal Product Code (UPC) consisting of 12 digits and optional dashes. The final digit is a validated check digit.
         */
        upc?: Emptyable<string>;
      }

      export interface PackageDimensions {
        /**
         * Height, in inches. Maximum precision is 2 decimal places.
         */
        height: number;

        /**
         * Length, in inches. Maximum precision is 2 decimal places.
         */
        length: number;

        /**
         * Weight, in ounces. Maximum precision is 2 decimal places.
         */
        weight: number;

        /**
         * Width, in inches. Maximum precision is 2 decimal places.
         */
        width: number;
      }
    }
  }

  export namespace Payment {
    export interface Settings {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
       */
      application_fee_amount?: number;

      /**
       * PaymentMethod-specific configuration to provide to the order's PaymentIntent.
       */
      payment_method_options?: Settings.PaymentMethodOptions;

      /**
       * The list of [payment method types](https://docs.stripe.com/payments/payment-methods/overview) to provide to the order's PaymentIntent. Do not include this attribute if you prefer to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types?: Array<Settings.PaymentMethodType>;

      /**
       * The URL to redirect the customer to after they authenticate their payment.
       */
      return_url?: string;

      /**
       * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * Provides configuration for completing a transfer for the order after it is paid.
       */
      transfer_data?: Settings.TransferData;
    }

    export namespace Settings {
      export interface PaymentMethodOptions {
        /**
         * If paying by `acss_debit`, this sub-hash contains details about the ACSS Debit payment method options to pass to the order's PaymentIntent.
         */
        acss_debit?: PaymentMethodOptions.AcssDebit;

        /**
         * If paying by `afterpay_clearpay`, this sub-hash contains details about the AfterpayClearpay payment method options to pass to the order's PaymentIntent.
         */
        afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

        /**
         * If paying by `alipay`, this sub-hash contains details about the Alipay payment method options to pass to the order's PaymentIntent.
         */
        alipay?: PaymentMethodOptions.Alipay;

        /**
         * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the order's PaymentIntent.
         */
        bancontact?: PaymentMethodOptions.Bancontact;

        /**
         * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the order's PaymentIntent.
         */
        card?: PaymentMethodOptions.Card;

        /**
         * If paying by `customer_balance`, this sub-hash contains details about the Customer Balance payment method options to pass to the order's PaymentIntent.
         */
        customer_balance?: PaymentMethodOptions.CustomerBalance;

        /**
         * If paying by `ideal`, this sub-hash contains details about the iDEAL payment method options to pass to the order's PaymentIntent.
         */
        ideal?: PaymentMethodOptions.Ideal;

        /**
         * If paying by `klarna`, this sub-hash contains details about the Klarna payment method options to pass to the order's PaymentIntent.
         */
        klarna?: PaymentMethodOptions.Klarna;

        /**
         * If paying by `link`, this sub-hash contains details about the Link payment method options to pass to the order's PaymentIntent.
         */
        link?: PaymentMethodOptions.Link;

        /**
         * If paying by `oxxo`, this sub-hash contains details about the OXXO payment method options to pass to the order's PaymentIntent.
         */
        oxxo?: PaymentMethodOptions.Oxxo;

        /**
         * If paying by `p24`, this sub-hash contains details about the P24 payment method options to pass to the order's PaymentIntent.
         */
        p24?: PaymentMethodOptions.P24;

        /**
         * If paying by `paypal`, this sub-hash contains details about the PayPal payment method options to pass to the order's PaymentIntent.
         */
        paypal?: PaymentMethodOptions.Paypal;

        /**
         * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Debit payment method options to pass to the order's PaymentIntent.
         */
        sepa_debit?: PaymentMethodOptions.SepaDebit;

        /**
         * If paying by `sofort`, this sub-hash contains details about the Sofort payment method options to pass to the order's PaymentIntent.
         */
        sofort?: PaymentMethodOptions.Sofort;

        /**
         * If paying by `wechat_pay`, this sub-hash contains details about the WeChat Pay payment method options to pass to the order's PaymentIntent.
         */
        wechat_pay?: PaymentMethodOptions.WechatPay;
      }

      export type PaymentMethodType =
        | 'acss_debit'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'card'
        | 'customer_balance'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'link'
        | 'oxxo'
        | 'p24'
        | 'paypal'
        | 'sepa_debit'
        | 'sofort'
        | 'wechat_pay';

      export interface TransferData {
        /**
         * The amount that will be transferred automatically when the order is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;

        /**
         * ID of the Connected account receiving the transfer.
         */
        destination: string;
      }

      export namespace PaymentMethodOptions {
        export interface AcssDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<AcssDebit.SetupFutureUsage>;

          /**
           * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
           */
          target_date?: string;

          /**
           * Bank account verification method. The default value is `automatic`.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        export interface AfterpayClearpay {
          /**
           * Controls when the funds are captured from the customer's account.
           *
           * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
           */
          capture_method?: AfterpayClearpay.CaptureMethod;

          /**
           * An internal identifier or reference this payment corresponds to. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
           */
          reference?: string;

          /**
           * Indicates that you intend to make future payments with the payment method.
           *
           * Providing this parameter will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://docs.stripe.com/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export interface Alipay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Alipay.SetupFutureUsage>;
        }

        export interface Bancontact {
          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           */
          preferred_language?: Bancontact.PreferredLanguage;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Bancontact.SetupFutureUsage>;
        }

        export interface Card {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: Card.CaptureMethod;

          /**
           * Indicates that you intend to make future payments with the payment method.
           *
           * Providing this parameter will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://docs.stripe.com/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Card.SetupFutureUsage;
        }

        export interface CustomerBalance {
          /**
           * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
           */
          bank_transfer?: CustomerBalance.BankTransfer;

          /**
           * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
           */
          funding_type?: 'bank_transfer';

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export interface Ideal {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Ideal.SetupFutureUsage>;
        }

        export interface Klarna {
          /**
           * Controls when the funds are captured from the customer's account.
           *
           * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
           */
          capture_method?: Emptyable<'manual'>;

          /**
           * On-demand details if setting up or charging an on-demand payment.
           */
          on_demand?: Klarna.OnDemand;

          /**
           * Preferred language of the Klarna authorization page that the customer is redirected to
           */
          preferred_locale?: Klarna.PreferredLocale;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Klarna.SetupFutureUsage;

          /**
           * Subscription details if setting up or charging a subscription.
           */
          subscriptions?: Emptyable<Array<Klarna.Subscription>>;

          /**
           * Supplementary Purchase Data for the corresponding Klarna payment
           */
          supplementary_purchase_data?: Emptyable<
            Klarna.SupplementaryPurchaseData
          >;
        }

        export interface Link {
          /**
           * Controls when the funds are captured from the customer's account.
           *
           * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
           */
          capture_method?: Emptyable<'manual'>;

          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           * @deprecated
           */
          persistent_token?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Link.SetupFutureUsage>;
        }

        export interface Oxxo {
          /**
           * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export interface P24 {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';

          /**
           * Confirm that the payer has accepted the P24 terms and conditions.
           */
          tos_shown_and_accepted?: boolean;
        }

        export interface Paypal {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: Emptyable<'manual'>;

          /**
           * The line items purchased by the customer.
           */
          line_items?: Array<Paypal.LineItem>;

          /**
           * [Preferred locale](https://docs.stripe.com/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
           */
          preferred_locale?: Paypal.PreferredLocale;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference?: string;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference_id?: string;

          /**
           * The risk correlation ID for an on-session payment using a saved PayPal payment method.
           */
          risk_correlation_id?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Paypal.SetupFutureUsage>;

          /**
           * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
           */
          subsellers?: Array<string>;
        }

        export interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<SepaDebit.SetupFutureUsage>;

          /**
           * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
           */
          target_date?: string;
        }

        export interface Sofort {
          /**
           * Language shown to the payer on redirect.
           */
          preferred_language?: Emptyable<Sofort.PreferredLanguage>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Sofort.SetupFutureUsage>;
        }

        export interface WechatPay {
          /**
           * The app ID registered with WeChat Pay. Only required when client is ios or android.
           */
          app_id?: string;

          /**
           * The client type that the end customer will pay from
           */
          client?: WechatPay.Client;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export namespace AcssDebit {
          export interface MandateOptions {
            /**
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Emptyable<string>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
          }

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          export type VerificationMethod =
            | 'automatic'
            | 'instant'
            | 'microdeposits';

          export namespace MandateOptions {
            export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

            export type TransactionType = 'business' | 'personal';
          }
        }

        export namespace AfterpayClearpay {
          export type CaptureMethod =
            | 'automatic'
            | 'automatic_async'
            | 'manual';
        }

        export namespace Alipay {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Bancontact {
          export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Card {
          export type CaptureMethod =
            | 'automatic'
            | 'automatic_async'
            | 'manual';

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        export namespace CustomerBalance {
          export interface BankTransfer {
            /**
             * Configuration for the eu_bank_transfer funding type.
             */
            eu_bank_transfer?: BankTransfer.EuBankTransfer;

            /**
             * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
             *
             * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
             */
            requested_address_types?: Array<BankTransfer.RequestedAddressType>;

            /**
             * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
             */
            type: BankTransfer.Type;
          }

          export namespace BankTransfer {
            export interface EuBankTransfer {
              /**
               * The desired country code of the bank account information. Permitted values include: `DE`, `FR`, `IE`, or `NL`.
               */
              country: string;
            }

            export type RequestedAddressType =
              | 'aba'
              | 'iban'
              | 'sepa'
              | 'sort_code'
              | 'spei'
              | 'swift'
              | 'zengin';

            export type Type =
              | 'eu_bank_transfer'
              | 'gb_bank_transfer'
              | 'jp_bank_transfer'
              | 'mx_bank_transfer'
              | 'us_bank_transfer';
          }
        }

        export namespace Ideal {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Klarna {
          export interface OnDemand {
            /**
             * Your average amount value. You can use a value across your customer base, or segment based on customer type, country, etc.
             */
            average_amount?: number;

            /**
             * The maximum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
             */
            maximum_amount?: number;

            /**
             * The lowest or minimum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
             */
            minimum_amount?: number;

            /**
             * Interval at which the customer is making purchases
             */
            purchase_interval?: OnDemand.PurchaseInterval;

            /**
             * The number of `purchase_interval` between charges
             */
            purchase_interval_count?: number;
          }

          export type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-CH'
            | 'de-DE'
            | 'el-GR'
            | 'en-AT'
            | 'en-AU'
            | 'en-BE'
            | 'en-CA'
            | 'en-CH'
            | 'en-CZ'
            | 'en-DE'
            | 'en-DK'
            | 'en-ES'
            | 'en-FI'
            | 'en-FR'
            | 'en-GB'
            | 'en-GR'
            | 'en-IE'
            | 'en-IT'
            | 'en-NL'
            | 'en-NO'
            | 'en-NZ'
            | 'en-PL'
            | 'en-PT'
            | 'en-RO'
            | 'en-SE'
            | 'en-US'
            | 'es-ES'
            | 'es-US'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-CA'
            | 'fr-CH'
            | 'fr-FR'
            | 'it-CH'
            | 'it-IT'
            | 'nb-NO'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'ro-RO'
            | 'sv-FI'
            | 'sv-SE';

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          export interface Subscription {
            /**
             * Unit of time between subscription charges.
             */
            interval: Subscription.Interval;

            /**
             * The number of intervals (specified in the `interval` attribute) between subscription charges. For example, `interval=month` and `interval_count=3` charges every 3 months.
             */
            interval_count?: number;

            /**
             * Name for subscription.
             */
            name?: string;

            /**
             * Describes the upcoming charge for this subscription.
             */
            next_billing?: Subscription.NextBilling;

            /**
             * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
             */
            reference: string;
          }

          export interface SupplementaryPurchaseData {
            /**
             * Supplementary bus reservation details.
             */
            bus_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.BusReservationDetail>
            >;

            /**
             * Supplementary event reservation details.
             */
            event_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.EventReservationDetail>
            >;

            /**
             * Supplementary ferry reservation details.
             */
            ferry_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.FerryReservationDetail>
            >;

            /**
             * Supplementary insurance details.
             */
            insurances?: Emptyable<Array<SupplementaryPurchaseData.Insurance>>;

            /**
             * Supplementary marketplace seller details.
             */
            marketplace_sellers?: Emptyable<
              Array<SupplementaryPurchaseData.MarketplaceSeller>
            >;

            /**
             * Supplementary round trip reservation details.
             */
            round_trip_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.RoundTripReservationDetail>
            >;

            /**
             * Supplementary train reservation details.
             */
            train_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.TrainReservationDetail>
            >;

            /**
             * Voucher details, such as a gift card or discount code.
             */
            vouchers?: Emptyable<Array<SupplementaryPurchaseData.Voucher>>;
          }

          export namespace OnDemand {
            export type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
          }

          export namespace Subscription {
            export type Interval = 'day' | 'month' | 'week' | 'year';

            export interface NextBilling {
              /**
               * The amount of the next charge for the subscription.
               */
              amount: number;

              /**
               * The date of the next charge for the subscription in YYYY-MM-DD format.
               */
              date: string;
            }
          }

          export namespace SupplementaryPurchaseData {
            export interface BusReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: BusReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: BusReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<BusReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<BusReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: BusReservationDetail.TicketClass;
            }

            export interface EventReservationDetail {
              /**
               * Indicates if the tickets are digitally checked when entering the venue.
               */
              access_controlled_venue?: boolean;

              /**
               * Address of the event.
               */
              address?: EventReservationDetail.Address;

              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * End timestamp of the event.
               */
              ends_at?: number;

              /**
               * Company selling the ticket.
               */
              event_company_name?: string;

              /**
               * Name of the event.
               */
              event_name?: string;

              /**
               * Type of the event.
               */
              event_type?: EventReservationDetail.EventType;

              /**
               * List of insurances for this event.
               */
              insurances?: Array<EventReservationDetail.Insurance>;

              /**
               * Start timestamp of the event.
               */
              starts_at?: number;

              /**
               * Name of the venue where the event takes place.
               */
              venue_name?: string;
            }

            export interface FerryReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: FerryReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: FerryReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<FerryReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<FerryReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: FerryReservationDetail.TicketClass;
            }

            export interface Insurance {
              /**
               * Insurance currency.
               */
              currency?: string;

              /**
               * Name of the company providing the insurance.
               */
              insurance_company_name?: string;

              /**
               * Type of insurance
               */
              insurance_type?: Insurance.InsuranceType;

              /**
               * Price of insurance in cents.
               */
              price?: number;
            }

            export interface MarketplaceSeller {
              /**
               * The references to line items for purchases with multiple associated sub-sellers.
               */
              line_item_references?: Array<string>;

              /**
               * The address of the selling or delivering merchant.
               */
              marketplace_seller_address?: MarketplaceSeller.MarketplaceSellerAddress;

              /**
               * The name of the marketplace seller.
               */
              marketplace_seller_name?: string;

              /**
               * The unique identifier for the marketplace seller.
               */
              marketplace_seller_reference?: string;

              /**
               * The number of transactions the sub-seller completed in the last 12 months.
               */
              number_of_transactions?: number;

              /**
               * The category of the product.
               */
              product_category?: MarketplaceSeller.ProductCategory;

              /**
               * The date when the seller's account with the marketplace was last logged in.
               */
              seller_last_login_at?: number;

              /**
               * The current rating of the marketplace seller. If the marketplace uses numeric ranking, map these to the enum values.
               */
              seller_rating?: MarketplaceSeller.SellerRating;

              /**
               * The date when the seller's account with the marketplace was created.
               */
              seller_registered_at?: number;

              /**
               * The date when the seller's account with the marketplace was last updated.
               */
              seller_updated_at?: number;

              /**
               * The references to shipping addresses for purchases with multiple associated sub-sellers.
               */
              shipping_references?: Array<string>;

              /**
               * The accumulated amount of sales transactions made by the sub-merchant or sub-seller within the past 12 months in the payment currency. These transactions are in minor currency units.
               */
              volume_of_transactions?: number;
            }

            export interface RoundTripReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: RoundTripReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: RoundTripReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<RoundTripReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<RoundTripReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: RoundTripReservationDetail.TicketClass;
            }

            export interface TrainReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: TrainReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: TrainReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<TrainReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<TrainReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: TrainReservationDetail.TicketClass;
            }

            export interface Voucher {
              /**
               * Name of associated or partner company for this voucher.
               */
              affiliate_name?: string;

              /**
               * The voucher validity end time.
               */
              ends_at?: number;

              /**
               * The voucher validity start time.
               */
              starts_at?: number;

              /**
               * The issuer or provider of this voucher.
               */
              voucher_company?: string;

              /**
               * The name or reference to identify the voucher.
               */
              voucher_name?: string;

              /**
               * The type of this voucher.
               */
              voucher_type?: Voucher.VoucherType;
            }

            export namespace BusReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace EventReservationDetail {
              export interface Address {
                /**
                 * The city or town.
                 */
                city?: string;

                /**
                 * The country in ISO 3166-1 alpha-2 format.
                 */
                country?: string;

                /**
                 * The postal code formatted according to country.
                 */
                postal_code?: string;

                /**
                 * The state, county, province, or region formatted according to country.
                 */
                region?: string;

                /**
                 * Line 1 of the street address.
                 */
                street_address?: string;

                /**
                 * Line 2 of the street address.
                 */
                street_address2?: string;
              }

              export type EventType =
                | 'concert'
                | 'conference'
                | 'digital_education'
                | 'expo'
                | 'festival'
                | 'in_person_education'
                | 'sport'
                | 'tour';

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace FerryReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace Insurance {
              export type InsuranceType =
                | 'bankruptcy'
                | 'cancelation'
                | 'emergency'
                | 'medical';
            }

            export namespace MarketplaceSeller {
              export interface MarketplaceSellerAddress {
                /**
                 * The city or town.
                 */
                city?: string;

                /**
                 * The country in ISO 3166-1 alpha-2 format.
                 */
                country?: string;

                /**
                 * The postal code formatted according to country.
                 */
                postal_code?: string;

                /**
                 * The state, county, province, or region formatted according to country.
                 */
                region?: string;

                /**
                 * Line 1 of the street address.
                 */
                street_address?: string;

                /**
                 * Line 2 of the street address.
                 */
                street_address2?: string;
              }

              export type ProductCategory =
                | 'accessories'
                | 'appliances'
                | 'apps_and_games'
                | 'arts_crafts_and_sewing'
                | 'automotive'
                | 'baby'
                | 'baby_clothing'
                | 'bags_and_purses'
                | 'beauty'
                | 'books'
                | 'cds_and_vinyl'
                | 'cell_phones_and_accessories'
                | 'collectibles_and_fine_arts'
                | 'digital_music'
                | 'electronics'
                | 'grocery_and_gourmet_food'
                | 'handmade'
                | 'health_and_personal_care'
                | 'home_and_kitchen'
                | 'industrial_and_scientific'
                | 'luggage_and_travel_gear'
                | 'magazine_subscriptions'
                | 'men_clothing'
                | 'musical_instruments'
                | 'office_products'
                | 'patio_lawn_and_garden'
                | 'pet_supplies'
                | 'shoes'
                | 'software'
                | 'sports_and_outdoors'
                | 'tools_and_home_improvement'
                | 'toys_and_games'
                | 'video_games'
                | 'women_clothing';

              export type SellerRating =
                | 'high'
                | 'low'
                | 'medium'
                | 'very_high'
                | 'very_low';
            }

            export namespace RoundTripReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace TrainReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace Voucher {
              export type VoucherType =
                | 'digital_product'
                | 'discount'
                | 'gift_card'
                | 'physical_product'
                | 'services';
            }
          }
        }

        export namespace Link {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Paypal {
          export interface LineItem {
            /**
             * Type of the line item.
             */
            category?: LineItem.Category;

            /**
             * Description of the line item.
             */
            description?: string;

            /**
             * Descriptive name of the line item.
             */
            name: string;

            /**
             * Quantity of the line item. Must be a positive number.
             */
            quantity: number;

            /**
             * Client facing stock keeping unit, article number or similar.
             */
            sku?: string;

            /**
             * The Stripe account ID of the connected account that sells the item.
             */
            sold_by?: string;

            /**
             * The tax information for the line item.
             */
            tax?: LineItem.Tax;

            /**
             * Price for a single unit of the line item in minor units. Cannot be a negative number.
             */
            unit_amount: number;
          }

          export type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-DE'
            | 'de-LU'
            | 'el-GR'
            | 'en-GB'
            | 'en-US'
            | 'es-ES'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-FR'
            | 'fr-LU'
            | 'hu-HU'
            | 'it-IT'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sk-SK'
            | 'sv-SE';

          export type SetupFutureUsage = 'none' | 'off_session';

          export namespace LineItem {
            export type Category =
              | 'digital_goods'
              | 'donation'
              | 'physical_goods';

            export interface Tax {
              /**
               * The tax for a single unit of the line item in minor units. Cannot be a negative number.
               */
              amount: number;

              /**
               * The tax behavior for the line item.
               */
              behavior: Tax.Behavior;
            }

            export namespace Tax {
              export type Behavior = 'exclusive' | 'inclusive';
            }
          }
        }

        export namespace SepaDebit {
          export interface MandateOptions {
            /**
             * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
             */
            reference_prefix?: Emptyable<string>;
          }

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        export namespace Sofort {
          export type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';

          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace WechatPay {
          export type Client = 'android' | 'ios' | 'web';
        }
      }
    }
  }

  export namespace ShippingCost {
    export interface ShippingRateData {
      /**
       * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      delivery_estimate?: ShippingRateData.DeliveryEstimate;

      /**
       * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      display_name: string;

      /**
       * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
       */
      fixed_amount?: ShippingRateData.FixedAmount;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: ShippingRateData.TaxBehavior;

      /**
       * A [tax code](https://docs.stripe.com/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
       */
      tax_code?: string;

      /**
       * The type of calculation to use on the shipping rate.
       */
      type?: 'fixed_amount';
    }

    export namespace ShippingRateData {
      export interface DeliveryEstimate {
        /**
         * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
         */
        maximum?: DeliveryEstimate.Maximum;

        /**
         * The lower bound of the estimated range. If empty, represents no lower bound.
         */
        minimum?: DeliveryEstimate.Minimum;
      }

      export interface FixedAmount {
        /**
         * A non-negative integer in cents representing how much to charge.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: FixedAmount.CurrencyOptions;
        };
      }

      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

      export namespace DeliveryEstimate {
        export interface Maximum {
          /**
           * A unit of time.
           */
          unit: Maximum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        export interface Minimum {
          /**
           * A unit of time.
           */
          unit: Minimum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        export namespace Maximum {
          export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }

        export namespace Minimum {
          export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }
      }

      export namespace FixedAmount {
        export interface CurrencyOptions {
          /**
           * A non-negative integer in cents representing how much to charge.
           */
          amount: number;

          /**
           * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
           */
          tax_behavior?: CurrencyOptions.TaxBehavior;
        }

        export namespace CurrencyOptions {
          export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }
    }
  }

  export namespace TaxDetails {
    export type TaxExempt = 'exempt' | 'none' | 'reverse';

    export interface TaxId {
      /**
       * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `lk_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `pl_nip`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
       */
      type: TaxId.Type;

      /**
       * Value of the tax ID.
       */
      value: string;
    }

    export namespace TaxId {
      export type Type =
        | 'ad_nrt'
        | 'ae_trn'
        | 'al_tin'
        | 'am_tin'
        | 'ao_tin'
        | 'ar_cuit'
        | 'au_abn'
        | 'au_arn'
        | 'aw_tin'
        | 'az_tin'
        | 'ba_tin'
        | 'bb_tin'
        | 'bd_bin'
        | 'bf_ifu'
        | 'bg_uic'
        | 'bh_vat'
        | 'bj_ifu'
        | 'bo_tin'
        | 'br_cnpj'
        | 'br_cpf'
        | 'bs_tin'
        | 'by_tin'
        | 'ca_bn'
        | 'ca_gst_hst'
        | 'ca_pst_bc'
        | 'ca_pst_mb'
        | 'ca_pst_sk'
        | 'ca_qst'
        | 'cd_nif'
        | 'ch_uid'
        | 'ch_vat'
        | 'cl_tin'
        | 'cm_niu'
        | 'cn_tin'
        | 'co_nit'
        | 'cr_tin'
        | 'cv_nif'
        | 'de_stn'
        | 'do_rcn'
        | 'ec_ruc'
        | 'eg_tin'
        | 'es_cif'
        | 'et_tin'
        | 'eu_oss_vat'
        | 'eu_vat'
        | 'gb_vat'
        | 'ge_vat'
        | 'gn_nif'
        | 'hk_br'
        | 'hr_oib'
        | 'hu_tin'
        | 'id_npwp'
        | 'il_vat'
        | 'in_gst'
        | 'is_vat'
        | 'jp_cn'
        | 'jp_rn'
        | 'jp_trn'
        | 'ke_pin'
        | 'kg_tin'
        | 'kh_tin'
        | 'kr_brn'
        | 'kz_bin'
        | 'la_tin'
        | 'li_uid'
        | 'li_vat'
        | 'lk_vat'
        | 'ma_vat'
        | 'md_vat'
        | 'me_pib'
        | 'mk_vat'
        | 'mr_nif'
        | 'mx_rfc'
        | 'my_frp'
        | 'my_itn'
        | 'my_sst'
        | 'ng_tin'
        | 'no_vat'
        | 'no_voec'
        | 'np_pan'
        | 'nz_gst'
        | 'om_vat'
        | 'pe_ruc'
        | 'ph_tin'
        | 'pl_nip'
        | 'ro_tin'
        | 'rs_pib'
        | 'ru_inn'
        | 'ru_kpp'
        | 'sa_vat'
        | 'sg_gst'
        | 'sg_uen'
        | 'si_tin'
        | 'sn_ninea'
        | 'sr_fin'
        | 'sv_nit'
        | 'th_vat'
        | 'tj_tin'
        | 'tr_tin'
        | 'tw_vat'
        | 'tz_vat'
        | 'ua_vat'
        | 'ug_tin'
        | 'us_ein'
        | 'uy_ruc'
        | 'uz_tin'
        | 'uz_vat'
        | 've_rif'
        | 'vn_tin'
        | 'za_vat'
        | 'zm_tin'
        | 'zw_tin';
    }
  }
}
export interface OrderRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface OrderUpdateParams {
  /**
   * Settings for automatic tax calculation for this order.
   */
  automatic_tax?: OrderUpdateParams.AutomaticTax;

  /**
   * Billing details for the customer. If a customer is provided, this will be automatically populated with values from that customer if override values are not provided.
   */
  billing_details?: Emptyable<OrderUpdateParams.BillingDetails>;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;

  /**
   * The customer associated with this order.
   */
  customer?: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: Emptyable<string>;

  /**
   * The coupons, promotion codes, and/or discounts to apply to the order. Pass the empty string `""` to unset this field.
   */
  discounts?: Emptyable<Array<OrderUpdateParams.Discount>>;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The IP address of the purchaser for this order.
   */
  ip_address?: string;

  /**
   * A list of line items the customer is ordering. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  line_items?: Array<OrderUpdateParams.LineItem>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Payment information associated with the order, including payment settings.
   */
  payment?: OrderUpdateParams.Payment;

  /**
   * Settings for the customer cost of shipping for this order.
   */
  shipping_cost?: Emptyable<OrderUpdateParams.ShippingCost>;

  /**
   * Shipping details for the order.
   */
  shipping_details?: Emptyable<OrderUpdateParams.ShippingDetails>;

  /**
   * Additional tax details about the purchaser to be used for this order.
   */
  tax_details?: OrderUpdateParams.TaxDetails;
}
export namespace OrderUpdateParams {
  export interface AutomaticTax {
    /**
     * Enable automatic tax calculation which will automatically compute tax rates on this order.
     */
    enabled: boolean;
  }

  export interface BillingDetails {
    /**
     * The billing address provided by the customer.
     */
    address?: AddressParam;

    /**
     * The billing email provided by the customer.
     */
    email?: string;

    /**
     * The billing name provided by the customer.
     */
    name?: string;

    /**
     * The billing phone number provided by the customer.
     */
    phone?: string;
  }

  export interface Discount {
    /**
     * ID of the coupon to create a new discount for.
     */
    coupon?: string;

    /**
     * ID of an existing discount on the object (or one of its ancestors) to reuse.
     */
    discount?: string;

    /**
     * ID of the promotion code to create a new discount for.
     */
    promotion_code?: string;
  }

  export interface LineItem {
    /**
     * The description for the line item. Will default to the name of the associated product.
     */
    description?: string;

    /**
     * The discounts applied to this line item.
     */
    discounts?: Emptyable<Array<LineItem.Discount>>;

    /**
     * The ID of an existing line item on the order.
     */
    id?: string;

    /**
     * The ID of a [Price](https://docs.stripe.com/api/prices) to add to the Order.
     *
     * The `price` parameter is an alternative to using the `product` parameter. If each of your products are sold at a single price, you can set `Product.default_price` and then pass the `product` parameter when creating a line item. If your products are sold at several possible prices, use the `price` parameter to explicitly specify which one to use.
     */
    price?: string;

    /**
     * Data used to generate a new Price object inline.
     *
     * The `price_data` parameter is an alternative to using the `product` or `price` parameters. If you create a Product upfront and configure a `Product.default_price`, pass the `product` parameter when creating a line item. If you prefer not to define Products upfront, or if you charge variable prices, pass the `price_data` parameter to describe the price for this line item.
     *
     * Each time you pass `price_data` we create a Price for the Product. This Price is hidden in both the Dashboard and API lists and cannot be reused.
     */
    price_data?: LineItem.PriceData;

    /**
     * The ID of a [Product](https://docs.stripe.com/api/products) to add to the Order.
     *
     * The Product must have a `default_price` specified. Otherwise, specify the price by passing the `price` or `price_data` parameter.
     */
    product?: string;

    /**
     * Defines a [Product](https://docs.stripe.com/api/products) inline and adds it to the Order.
     *
     * `product_data` is an alternative to the `product` parameter. If you created a Product upfront, use the `product` parameter to refer to the existing Product. But if you prefer not to create Products upfront, pass the `product_data` parameter to define a Product inline as part of configuring the Order.
     *
     * `product_data` automatically creates a Product, just as if you had manually created the Product. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates.
     */
    product_data?: LineItem.ProductData;

    /**
     * The quantity of the line item.
     */
    quantity?: number;

    /**
     * The tax rates applied to this line item.
     */
    tax_rates?: Emptyable<Array<string>>;
  }

  export interface Payment {
    /**
     * Settings describing how the order should configure generated PaymentIntents.
     */
    settings: Payment.Settings;
  }

  export interface ShippingCost {
    /**
     * The ID of the shipping rate to use for this order.
     */
    shipping_rate?: string;

    /**
     * Parameters to create a new ad-hoc shipping rate for this order.
     */
    shipping_rate_data?: ShippingCost.ShippingRateData;
  }

  export interface ShippingDetails {
    /**
     * The shipping address for the order.
     */
    address: AddressParam;

    /**
     * The name of the recipient of the order.
     */
    name: string;

    /**
     * The phone number (including extension) for the recipient of the order.
     */
    phone?: Emptyable<string>;
  }

  export interface TaxDetails {
    /**
     * The purchaser's tax exemption status. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: Emptyable<TaxDetails.TaxExempt>;

    /**
     * The purchaser's tax IDs to be used for this order.
     */
    tax_ids?: Array<TaxDetails.TaxId>;
  }

  export namespace LineItem {
    export interface Discount {
      /**
       * ID of the coupon to create a new discount for.
       */
      coupon?: string;

      /**
       * ID of an existing discount on the object (or one of its ancestors) to reuse.
       */
      discount?: string;
    }

    export interface PriceData {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * ID of the [Product](https://docs.stripe.com/api/products) this [Price](https://docs.stripe.com/api/prices) belongs to.
       *
       * Use this to implement a variable-pricing model in your integration. This is required if `product_data` is not specified.
       */
      product?: string;

      /**
       * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceData.TaxBehavior;

      /**
       * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: Decimal;
    }

    export interface ProductData {
      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description?: Emptyable<string>;

      /**
       * A unique identifier for this product.
       *
       * `product_data` automatically creates a Product with this ID. If a Product with the same ID already exists, then `product_data` re-uses it to avoid duplicates. If any of the fields in the existing Product are different from the values in `product_data`, `product_data` updates the existing Product with the new information. So set `product_data[id]` to the same string every time you sell the same product, but don't re-use the same string for different products.
       */
      id: string;

      /**
       * Other identifiers for this product.
       */
      identifiers?: ProductData.Identifiers;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images?: Emptyable<Array<string>>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Emptyable<MetadataParam>;

      /**
       * The product's name, meant to be displayable to the customer.
       */
      name: string;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions?: Emptyable<ProductData.PackageDimensions>;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable?: boolean;

      /**
       * A [tax code](https://docs.stripe.com/tax/tax-categories) ID.
       */
      tax_code?: Emptyable<string>;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url?: Emptyable<string>;
    }

    export namespace PriceData {
      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    export namespace ProductData {
      export interface Identifiers {
        /**
         * European Article Number (EAN) consisting of 8 or 13 digits and optional dashes. You may optionally provide a leading 0 for a total of 14 digits. The final digit is a validated check digit.
         */
        ean?: Emptyable<string>;

        /**
         * Global Trade Item Number (GTIN) consisting of 8, 12, 13, or 14 digits and optional dashes. The final digit is a validated check digit.
         */
        gtin?: Emptyable<string>;

        /**
         * International Standard Book Number (ISBN) consisting of 10 or 13 digits and optional dashes. The final digit is a validated check digit. For ISBN-10, the final digit may be a `X`.
         */
        isbn?: Emptyable<string>;

        /**
         * Japanese Article Number (JAN) consisting of 13 digits and optional dashes. The first two digits must either be `45` or `49`. The final digit is a validated check digit.
         */
        jan?: Emptyable<string>;

        /**
         * Manufacturer Part Number (MPN). May include up to 70 alphanumeric characters and dashes.
         */
        mpn?: Emptyable<string>;

        /**
         * National Stock Number (NSN) consisting of 13 digits and optional dashes. The seventh character may also be alphanumeric.
         */
        nsn?: Emptyable<string>;

        /**
         * Universal Product Code (UPC) consisting of 12 digits and optional dashes. The final digit is a validated check digit.
         */
        upc?: Emptyable<string>;
      }

      export interface PackageDimensions {
        /**
         * Height, in inches. Maximum precision is 2 decimal places.
         */
        height: number;

        /**
         * Length, in inches. Maximum precision is 2 decimal places.
         */
        length: number;

        /**
         * Weight, in ounces. Maximum precision is 2 decimal places.
         */
        weight: number;

        /**
         * Width, in inches. Maximum precision is 2 decimal places.
         */
        width: number;
      }
    }
  }

  export namespace Payment {
    export interface Settings {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
       */
      application_fee_amount?: Emptyable<number>;

      /**
       * PaymentMethod-specific configuration to provide to the order's PaymentIntent.
       */
      payment_method_options?: Settings.PaymentMethodOptions;

      /**
       * The list of [payment method types](https://docs.stripe.com/payments/payment-methods/overview) to provide to the order's PaymentIntent. Do not include this attribute if you prefer to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types?: Array<Settings.PaymentMethodType>;

      /**
       * The URL to redirect the customer to after they authenticate their payment.
       */
      return_url?: Emptyable<string>;

      /**
       * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * Provides configuration for completing a transfer for the order after it is paid.
       */
      transfer_data?: Emptyable<Settings.TransferData>;
    }

    export namespace Settings {
      export interface PaymentMethodOptions {
        /**
         * If paying by `acss_debit`, this sub-hash contains details about the ACSS Debit payment method options to pass to the order's PaymentIntent.
         */
        acss_debit?: Emptyable<PaymentMethodOptions.AcssDebit>;

        /**
         * If paying by `afterpay_clearpay`, this sub-hash contains details about the AfterpayClearpay payment method options to pass to the order's PaymentIntent.
         */
        afterpay_clearpay?: Emptyable<PaymentMethodOptions.AfterpayClearpay>;

        /**
         * If paying by `alipay`, this sub-hash contains details about the Alipay payment method options to pass to the order's PaymentIntent.
         */
        alipay?: Emptyable<PaymentMethodOptions.Alipay>;

        /**
         * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the order's PaymentIntent.
         */
        bancontact?: Emptyable<PaymentMethodOptions.Bancontact>;

        /**
         * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the order's PaymentIntent.
         */
        card?: Emptyable<PaymentMethodOptions.Card>;

        /**
         * If paying by `customer_balance`, this sub-hash contains details about the Customer Balance payment method options to pass to the order's PaymentIntent.
         */
        customer_balance?: Emptyable<PaymentMethodOptions.CustomerBalance>;

        /**
         * If paying by `ideal`, this sub-hash contains details about the iDEAL payment method options to pass to the order's PaymentIntent.
         */
        ideal?: Emptyable<PaymentMethodOptions.Ideal>;

        /**
         * If paying by `klarna`, this sub-hash contains details about the Klarna payment method options to pass to the order's PaymentIntent.
         */
        klarna?: Emptyable<PaymentMethodOptions.Klarna>;

        /**
         * If paying by `link`, this sub-hash contains details about the Link payment method options to pass to the order's PaymentIntent.
         */
        link?: Emptyable<PaymentMethodOptions.Link>;

        /**
         * If paying by `oxxo`, this sub-hash contains details about the OXXO payment method options to pass to the order's PaymentIntent.
         */
        oxxo?: Emptyable<PaymentMethodOptions.Oxxo>;

        /**
         * If paying by `p24`, this sub-hash contains details about the P24 payment method options to pass to the order's PaymentIntent.
         */
        p24?: Emptyable<PaymentMethodOptions.P24>;

        /**
         * If paying by `paypal`, this sub-hash contains details about the PayPal payment method options to pass to the order's PaymentIntent.
         */
        paypal?: Emptyable<PaymentMethodOptions.Paypal>;

        /**
         * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Debit payment method options to pass to the order's PaymentIntent.
         */
        sepa_debit?: Emptyable<PaymentMethodOptions.SepaDebit>;

        /**
         * If paying by `sofort`, this sub-hash contains details about the Sofort payment method options to pass to the order's PaymentIntent.
         */
        sofort?: Emptyable<PaymentMethodOptions.Sofort>;

        /**
         * If paying by `wechat_pay`, this sub-hash contains details about the WeChat Pay payment method options to pass to the order's PaymentIntent.
         */
        wechat_pay?: Emptyable<PaymentMethodOptions.WechatPay>;
      }

      export type PaymentMethodType =
        | 'acss_debit'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'card'
        | 'customer_balance'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'link'
        | 'oxxo'
        | 'p24'
        | 'paypal'
        | 'sepa_debit'
        | 'sofort'
        | 'wechat_pay';

      export interface TransferData {
        /**
         * The amount that will be transferred automatically when the order is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;

        /**
         * ID of the Connected account receiving the transfer.
         */
        destination: string;
      }

      export namespace PaymentMethodOptions {
        export interface AcssDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<AcssDebit.SetupFutureUsage>;

          /**
           * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
           */
          target_date?: string;

          /**
           * Bank account verification method. The default value is `automatic`.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        export interface AfterpayClearpay {
          /**
           * Controls when the funds are captured from the customer's account.
           *
           * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
           */
          capture_method?: AfterpayClearpay.CaptureMethod;

          /**
           * An internal identifier or reference this payment corresponds to. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
           */
          reference?: string;

          /**
           * Indicates that you intend to make future payments with the payment method.
           *
           * Providing this parameter will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://docs.stripe.com/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export interface Alipay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Alipay.SetupFutureUsage>;
        }

        export interface Bancontact {
          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           */
          preferred_language?: Bancontact.PreferredLanguage;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Bancontact.SetupFutureUsage>;
        }

        export interface Card {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: Card.CaptureMethod;

          /**
           * Indicates that you intend to make future payments with the payment method.
           *
           * Providing this parameter will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the order's Customer, if present, after the order's PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://docs.stripe.com/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Card.SetupFutureUsage;
        }

        export interface CustomerBalance {
          /**
           * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
           */
          bank_transfer?: CustomerBalance.BankTransfer;

          /**
           * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
           */
          funding_type?: 'bank_transfer';

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export interface Ideal {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Ideal.SetupFutureUsage>;
        }

        export interface Klarna {
          /**
           * Controls when the funds are captured from the customer's account.
           *
           * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
           */
          capture_method?: Emptyable<'manual'>;

          /**
           * On-demand details if setting up or charging an on-demand payment.
           */
          on_demand?: Klarna.OnDemand;

          /**
           * Preferred language of the Klarna authorization page that the customer is redirected to
           */
          preferred_locale?: Klarna.PreferredLocale;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Klarna.SetupFutureUsage;

          /**
           * Subscription details if setting up or charging a subscription.
           */
          subscriptions?: Emptyable<Array<Klarna.Subscription>>;

          /**
           * Supplementary Purchase Data for the corresponding Klarna payment
           */
          supplementary_purchase_data?: Emptyable<
            Klarna.SupplementaryPurchaseData
          >;
        }

        export interface Link {
          /**
           * Controls when the funds are captured from the customer's account.
           *
           * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
           */
          capture_method?: Emptyable<'manual'>;

          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           * @deprecated
           */
          persistent_token?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Link.SetupFutureUsage>;
        }

        export interface Oxxo {
          /**
           * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export interface P24 {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';

          /**
           * Confirm that the payer has accepted the P24 terms and conditions.
           */
          tos_shown_and_accepted?: boolean;
        }

        export interface Paypal {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: Emptyable<'manual'>;

          /**
           * The line items purchased by the customer.
           */
          line_items?: Array<Paypal.LineItem>;

          /**
           * [Preferred locale](https://docs.stripe.com/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
           */
          preferred_locale?: Paypal.PreferredLocale;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference?: string;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference_id?: string;

          /**
           * The risk correlation ID for an on-session payment using a saved PayPal payment method.
           */
          risk_correlation_id?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Paypal.SetupFutureUsage>;

          /**
           * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
           */
          subsellers?: Array<string>;
        }

        export interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<SepaDebit.SetupFutureUsage>;

          /**
           * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
           */
          target_date?: string;
        }

        export interface Sofort {
          /**
           * Language shown to the payer on redirect.
           */
          preferred_language?: Emptyable<Sofort.PreferredLanguage>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Emptyable<Sofort.SetupFutureUsage>;
        }

        export interface WechatPay {
          /**
           * The app ID registered with WeChat Pay. Only required when client is ios or android.
           */
          app_id?: string;

          /**
           * The client type that the end customer will pay from
           */
          client?: WechatPay.Client;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
           *
           * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
           *
           * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
           *
           * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        export namespace AcssDebit {
          export interface MandateOptions {
            /**
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Emptyable<string>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
          }

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          export type VerificationMethod =
            | 'automatic'
            | 'instant'
            | 'microdeposits';

          export namespace MandateOptions {
            export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

            export type TransactionType = 'business' | 'personal';
          }
        }

        export namespace AfterpayClearpay {
          export type CaptureMethod =
            | 'automatic'
            | 'automatic_async'
            | 'manual';
        }

        export namespace Alipay {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Bancontact {
          export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Card {
          export type CaptureMethod =
            | 'automatic'
            | 'automatic_async'
            | 'manual';

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        export namespace CustomerBalance {
          export interface BankTransfer {
            /**
             * Configuration for the eu_bank_transfer funding type.
             */
            eu_bank_transfer?: BankTransfer.EuBankTransfer;

            /**
             * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
             *
             * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
             */
            requested_address_types?: Array<BankTransfer.RequestedAddressType>;

            /**
             * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
             */
            type: BankTransfer.Type;
          }

          export namespace BankTransfer {
            export interface EuBankTransfer {
              /**
               * The desired country code of the bank account information. Permitted values include: `DE`, `FR`, `IE`, or `NL`.
               */
              country: string;
            }

            export type RequestedAddressType =
              | 'aba'
              | 'iban'
              | 'sepa'
              | 'sort_code'
              | 'spei'
              | 'swift'
              | 'zengin';

            export type Type =
              | 'eu_bank_transfer'
              | 'gb_bank_transfer'
              | 'jp_bank_transfer'
              | 'mx_bank_transfer'
              | 'us_bank_transfer';
          }
        }

        export namespace Ideal {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Klarna {
          export interface OnDemand {
            /**
             * Your average amount value. You can use a value across your customer base, or segment based on customer type, country, etc.
             */
            average_amount?: number;

            /**
             * The maximum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
             */
            maximum_amount?: number;

            /**
             * The lowest or minimum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
             */
            minimum_amount?: number;

            /**
             * Interval at which the customer is making purchases
             */
            purchase_interval?: OnDemand.PurchaseInterval;

            /**
             * The number of `purchase_interval` between charges
             */
            purchase_interval_count?: number;
          }

          export type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-CH'
            | 'de-DE'
            | 'el-GR'
            | 'en-AT'
            | 'en-AU'
            | 'en-BE'
            | 'en-CA'
            | 'en-CH'
            | 'en-CZ'
            | 'en-DE'
            | 'en-DK'
            | 'en-ES'
            | 'en-FI'
            | 'en-FR'
            | 'en-GB'
            | 'en-GR'
            | 'en-IE'
            | 'en-IT'
            | 'en-NL'
            | 'en-NO'
            | 'en-NZ'
            | 'en-PL'
            | 'en-PT'
            | 'en-RO'
            | 'en-SE'
            | 'en-US'
            | 'es-ES'
            | 'es-US'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-CA'
            | 'fr-CH'
            | 'fr-FR'
            | 'it-CH'
            | 'it-IT'
            | 'nb-NO'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'ro-RO'
            | 'sv-FI'
            | 'sv-SE';

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          export interface Subscription {
            /**
             * Unit of time between subscription charges.
             */
            interval: Subscription.Interval;

            /**
             * The number of intervals (specified in the `interval` attribute) between subscription charges. For example, `interval=month` and `interval_count=3` charges every 3 months.
             */
            interval_count?: number;

            /**
             * Name for subscription.
             */
            name?: string;

            /**
             * Describes the upcoming charge for this subscription.
             */
            next_billing?: Subscription.NextBilling;

            /**
             * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
             */
            reference: string;
          }

          export interface SupplementaryPurchaseData {
            /**
             * Supplementary bus reservation details.
             */
            bus_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.BusReservationDetail>
            >;

            /**
             * Supplementary event reservation details.
             */
            event_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.EventReservationDetail>
            >;

            /**
             * Supplementary ferry reservation details.
             */
            ferry_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.FerryReservationDetail>
            >;

            /**
             * Supplementary insurance details.
             */
            insurances?: Emptyable<Array<SupplementaryPurchaseData.Insurance>>;

            /**
             * Supplementary marketplace seller details.
             */
            marketplace_sellers?: Emptyable<
              Array<SupplementaryPurchaseData.MarketplaceSeller>
            >;

            /**
             * Supplementary round trip reservation details.
             */
            round_trip_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.RoundTripReservationDetail>
            >;

            /**
             * Supplementary train reservation details.
             */
            train_reservation_details?: Emptyable<
              Array<SupplementaryPurchaseData.TrainReservationDetail>
            >;

            /**
             * Voucher details, such as a gift card or discount code.
             */
            vouchers?: Emptyable<Array<SupplementaryPurchaseData.Voucher>>;
          }

          export namespace OnDemand {
            export type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
          }

          export namespace Subscription {
            export type Interval = 'day' | 'month' | 'week' | 'year';

            export interface NextBilling {
              /**
               * The amount of the next charge for the subscription.
               */
              amount: number;

              /**
               * The date of the next charge for the subscription in YYYY-MM-DD format.
               */
              date: string;
            }
          }

          export namespace SupplementaryPurchaseData {
            export interface BusReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: BusReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: BusReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<BusReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<BusReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: BusReservationDetail.TicketClass;
            }

            export interface EventReservationDetail {
              /**
               * Indicates if the tickets are digitally checked when entering the venue.
               */
              access_controlled_venue?: boolean;

              /**
               * Address of the event.
               */
              address?: EventReservationDetail.Address;

              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * End timestamp of the event.
               */
              ends_at?: number;

              /**
               * Company selling the ticket.
               */
              event_company_name?: string;

              /**
               * Name of the event.
               */
              event_name?: string;

              /**
               * Type of the event.
               */
              event_type?: EventReservationDetail.EventType;

              /**
               * List of insurances for this event.
               */
              insurances?: Array<EventReservationDetail.Insurance>;

              /**
               * Start timestamp of the event.
               */
              starts_at?: number;

              /**
               * Name of the venue where the event takes place.
               */
              venue_name?: string;
            }

            export interface FerryReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: FerryReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: FerryReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<FerryReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<FerryReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: FerryReservationDetail.TicketClass;
            }

            export interface Insurance {
              /**
               * Insurance currency.
               */
              currency?: string;

              /**
               * Name of the company providing the insurance.
               */
              insurance_company_name?: string;

              /**
               * Type of insurance
               */
              insurance_type?: Insurance.InsuranceType;

              /**
               * Price of insurance in cents.
               */
              price?: number;
            }

            export interface MarketplaceSeller {
              /**
               * The references to line items for purchases with multiple associated sub-sellers.
               */
              line_item_references?: Array<string>;

              /**
               * The address of the selling or delivering merchant.
               */
              marketplace_seller_address?: MarketplaceSeller.MarketplaceSellerAddress;

              /**
               * The name of the marketplace seller.
               */
              marketplace_seller_name?: string;

              /**
               * The unique identifier for the marketplace seller.
               */
              marketplace_seller_reference?: string;

              /**
               * The number of transactions the sub-seller completed in the last 12 months.
               */
              number_of_transactions?: number;

              /**
               * The category of the product.
               */
              product_category?: MarketplaceSeller.ProductCategory;

              /**
               * The date when the seller's account with the marketplace was last logged in.
               */
              seller_last_login_at?: number;

              /**
               * The current rating of the marketplace seller. If the marketplace uses numeric ranking, map these to the enum values.
               */
              seller_rating?: MarketplaceSeller.SellerRating;

              /**
               * The date when the seller's account with the marketplace was created.
               */
              seller_registered_at?: number;

              /**
               * The date when the seller's account with the marketplace was last updated.
               */
              seller_updated_at?: number;

              /**
               * The references to shipping addresses for purchases with multiple associated sub-sellers.
               */
              shipping_references?: Array<string>;

              /**
               * The accumulated amount of sales transactions made by the sub-merchant or sub-seller within the past 12 months in the payment currency. These transactions are in minor currency units.
               */
              volume_of_transactions?: number;
            }

            export interface RoundTripReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: RoundTripReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: RoundTripReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<RoundTripReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<RoundTripReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: RoundTripReservationDetail.TicketClass;
            }

            export interface TrainReservationDetail {
              /**
               * Name of associated or partner company for the service.
               */
              affiliate_name?: string;

              /**
               * Arrival details.
               */
              arrival?: TrainReservationDetail.Arrival;

              /**
               * Name of transportation company.
               */
              carrier_name?: string;

              /**
               * Currency.
               */
              currency?: string;

              /**
               * Departure details.
               */
              departure?: TrainReservationDetail.Departure;

              /**
               * List of insurances for this reservation.
               */
              insurances?: Array<TrainReservationDetail.Insurance>;

              /**
               * List of passengers that this reservation applies to.
               */
              passengers?: Array<TrainReservationDetail.Passenger>;

              /**
               * Price in cents.
               */
              price?: number;

              /**
               * Ticket class.
               */
              ticket_class?: TrainReservationDetail.TicketClass;
            }

            export interface Voucher {
              /**
               * Name of associated or partner company for this voucher.
               */
              affiliate_name?: string;

              /**
               * The voucher validity end time.
               */
              ends_at?: number;

              /**
               * The voucher validity start time.
               */
              starts_at?: number;

              /**
               * The issuer or provider of this voucher.
               */
              voucher_company?: string;

              /**
               * The name or reference to identify the voucher.
               */
              voucher_name?: string;

              /**
               * The type of this voucher.
               */
              voucher_type?: Voucher.VoucherType;
            }

            export namespace BusReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace EventReservationDetail {
              export interface Address {
                /**
                 * The city or town.
                 */
                city?: string;

                /**
                 * The country in ISO 3166-1 alpha-2 format.
                 */
                country?: string;

                /**
                 * The postal code formatted according to country.
                 */
                postal_code?: string;

                /**
                 * The state, county, province, or region formatted according to country.
                 */
                region?: string;

                /**
                 * Line 1 of the street address.
                 */
                street_address?: string;

                /**
                 * Line 2 of the street address.
                 */
                street_address2?: string;
              }

              export type EventType =
                | 'concert'
                | 'conference'
                | 'digital_education'
                | 'expo'
                | 'festival'
                | 'in_person_education'
                | 'sport'
                | 'tour';

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace FerryReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace Insurance {
              export type InsuranceType =
                | 'bankruptcy'
                | 'cancelation'
                | 'emergency'
                | 'medical';
            }

            export namespace MarketplaceSeller {
              export interface MarketplaceSellerAddress {
                /**
                 * The city or town.
                 */
                city?: string;

                /**
                 * The country in ISO 3166-1 alpha-2 format.
                 */
                country?: string;

                /**
                 * The postal code formatted according to country.
                 */
                postal_code?: string;

                /**
                 * The state, county, province, or region formatted according to country.
                 */
                region?: string;

                /**
                 * Line 1 of the street address.
                 */
                street_address?: string;

                /**
                 * Line 2 of the street address.
                 */
                street_address2?: string;
              }

              export type ProductCategory =
                | 'accessories'
                | 'appliances'
                | 'apps_and_games'
                | 'arts_crafts_and_sewing'
                | 'automotive'
                | 'baby'
                | 'baby_clothing'
                | 'bags_and_purses'
                | 'beauty'
                | 'books'
                | 'cds_and_vinyl'
                | 'cell_phones_and_accessories'
                | 'collectibles_and_fine_arts'
                | 'digital_music'
                | 'electronics'
                | 'grocery_and_gourmet_food'
                | 'handmade'
                | 'health_and_personal_care'
                | 'home_and_kitchen'
                | 'industrial_and_scientific'
                | 'luggage_and_travel_gear'
                | 'magazine_subscriptions'
                | 'men_clothing'
                | 'musical_instruments'
                | 'office_products'
                | 'patio_lawn_and_garden'
                | 'pet_supplies'
                | 'shoes'
                | 'software'
                | 'sports_and_outdoors'
                | 'tools_and_home_improvement'
                | 'toys_and_games'
                | 'video_games'
                | 'women_clothing';

              export type SellerRating =
                | 'high'
                | 'low'
                | 'medium'
                | 'very_high'
                | 'very_low';
            }

            export namespace RoundTripReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace TrainReservationDetail {
              export interface Arrival {
                /**
                 * Address of the arrival location.
                 */
                address?: Arrival.Address;

                /**
                 * Identifier name or reference for the arrival location.
                 */
                arrival_location?: string;
              }

              export interface Departure {
                /**
                 * Address of the departure location.
                 */
                address?: Departure.Address;

                /**
                 * Timestamp of departure.
                 */
                departs_at?: number;

                /**
                 * Identifier name or reference for the origin location.
                 */
                departure_location?: string;
              }

              export interface Insurance {
                /**
                 * Insurance currency.
                 */
                currency?: string;

                /**
                 * Name of the company providing the insurance.
                 */
                insurance_company_name?: string;

                /**
                 * Type of insurance.
                 */
                insurance_type?: Insurance.InsuranceType;

                /**
                 * Price of insurance in cents.
                 */
                price?: number;
              }

              export interface Passenger {
                /**
                 * The family name of the person.
                 */
                family_name?: string;

                /**
                 * The given name of the person.
                 */
                given_name?: string;
              }

              export type TicketClass =
                | 'business'
                | 'economy'
                | 'first_class'
                | 'premium_economy';

              export namespace Arrival {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Departure {
                export interface Address {
                  /**
                   * The city or town.
                   */
                  city?: string;

                  /**
                   * The country in ISO 3166-1 alpha-2 format.
                   */
                  country?: string;

                  /**
                   * The postal code formatted according to country.
                   */
                  postal_code?: string;

                  /**
                   * The state, county, province, or region formatted according to country.
                   */
                  region?: string;

                  /**
                   * Line 1 of the street address.
                   */
                  street_address?: string;

                  /**
                   * Line 2 of the street address.
                   */
                  street_address2?: string;
                }
              }

              export namespace Insurance {
                export type InsuranceType =
                  | 'baggage'
                  | 'bankruptcy'
                  | 'cancelation'
                  | 'emergency'
                  | 'medical';
              }
            }

            export namespace Voucher {
              export type VoucherType =
                | 'digital_product'
                | 'discount'
                | 'gift_card'
                | 'physical_product'
                | 'services';
            }
          }
        }

        export namespace Link {
          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace Paypal {
          export interface LineItem {
            /**
             * Type of the line item.
             */
            category?: LineItem.Category;

            /**
             * Description of the line item.
             */
            description?: string;

            /**
             * Descriptive name of the line item.
             */
            name: string;

            /**
             * Quantity of the line item. Must be a positive number.
             */
            quantity: number;

            /**
             * Client facing stock keeping unit, article number or similar.
             */
            sku?: string;

            /**
             * The Stripe account ID of the connected account that sells the item.
             */
            sold_by?: string;

            /**
             * The tax information for the line item.
             */
            tax?: LineItem.Tax;

            /**
             * Price for a single unit of the line item in minor units. Cannot be a negative number.
             */
            unit_amount: number;
          }

          export type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-DE'
            | 'de-LU'
            | 'el-GR'
            | 'en-GB'
            | 'en-US'
            | 'es-ES'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-FR'
            | 'fr-LU'
            | 'hu-HU'
            | 'it-IT'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sk-SK'
            | 'sv-SE';

          export type SetupFutureUsage = 'none' | 'off_session';

          export namespace LineItem {
            export type Category =
              | 'digital_goods'
              | 'donation'
              | 'physical_goods';

            export interface Tax {
              /**
               * The tax for a single unit of the line item in minor units. Cannot be a negative number.
               */
              amount: number;

              /**
               * The tax behavior for the line item.
               */
              behavior: Tax.Behavior;
            }

            export namespace Tax {
              export type Behavior = 'exclusive' | 'inclusive';
            }
          }
        }

        export namespace SepaDebit {
          export interface MandateOptions {
            /**
             * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
             */
            reference_prefix?: Emptyable<string>;
          }

          export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        export namespace Sofort {
          export type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';

          export type SetupFutureUsage = 'none' | 'off_session';
        }

        export namespace WechatPay {
          export type Client = 'android' | 'ios' | 'web';
        }
      }
    }
  }

  export namespace ShippingCost {
    export interface ShippingRateData {
      /**
       * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      delivery_estimate?: ShippingRateData.DeliveryEstimate;

      /**
       * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      display_name: string;

      /**
       * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
       */
      fixed_amount?: ShippingRateData.FixedAmount;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: ShippingRateData.TaxBehavior;

      /**
       * A [tax code](https://docs.stripe.com/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
       */
      tax_code?: string;

      /**
       * The type of calculation to use on the shipping rate.
       */
      type?: 'fixed_amount';
    }

    export namespace ShippingRateData {
      export interface DeliveryEstimate {
        /**
         * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
         */
        maximum?: DeliveryEstimate.Maximum;

        /**
         * The lower bound of the estimated range. If empty, represents no lower bound.
         */
        minimum?: DeliveryEstimate.Minimum;
      }

      export interface FixedAmount {
        /**
         * A non-negative integer in cents representing how much to charge.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: FixedAmount.CurrencyOptions;
        };
      }

      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

      export namespace DeliveryEstimate {
        export interface Maximum {
          /**
           * A unit of time.
           */
          unit: Maximum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        export interface Minimum {
          /**
           * A unit of time.
           */
          unit: Minimum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        export namespace Maximum {
          export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }

        export namespace Minimum {
          export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }
      }

      export namespace FixedAmount {
        export interface CurrencyOptions {
          /**
           * A non-negative integer in cents representing how much to charge.
           */
          amount: number;

          /**
           * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
           */
          tax_behavior?: CurrencyOptions.TaxBehavior;
        }

        export namespace CurrencyOptions {
          export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }
    }
  }

  export namespace TaxDetails {
    export type TaxExempt = 'exempt' | 'none' | 'reverse';

    export interface TaxId {
      /**
       * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `lk_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `pl_nip`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
       */
      type: TaxId.Type;

      /**
       * Value of the tax ID.
       */
      value: string;
    }

    export namespace TaxId {
      export type Type =
        | 'ad_nrt'
        | 'ae_trn'
        | 'al_tin'
        | 'am_tin'
        | 'ao_tin'
        | 'ar_cuit'
        | 'au_abn'
        | 'au_arn'
        | 'aw_tin'
        | 'az_tin'
        | 'ba_tin'
        | 'bb_tin'
        | 'bd_bin'
        | 'bf_ifu'
        | 'bg_uic'
        | 'bh_vat'
        | 'bj_ifu'
        | 'bo_tin'
        | 'br_cnpj'
        | 'br_cpf'
        | 'bs_tin'
        | 'by_tin'
        | 'ca_bn'
        | 'ca_gst_hst'
        | 'ca_pst_bc'
        | 'ca_pst_mb'
        | 'ca_pst_sk'
        | 'ca_qst'
        | 'cd_nif'
        | 'ch_uid'
        | 'ch_vat'
        | 'cl_tin'
        | 'cm_niu'
        | 'cn_tin'
        | 'co_nit'
        | 'cr_tin'
        | 'cv_nif'
        | 'de_stn'
        | 'do_rcn'
        | 'ec_ruc'
        | 'eg_tin'
        | 'es_cif'
        | 'et_tin'
        | 'eu_oss_vat'
        | 'eu_vat'
        | 'gb_vat'
        | 'ge_vat'
        | 'gn_nif'
        | 'hk_br'
        | 'hr_oib'
        | 'hu_tin'
        | 'id_npwp'
        | 'il_vat'
        | 'in_gst'
        | 'is_vat'
        | 'jp_cn'
        | 'jp_rn'
        | 'jp_trn'
        | 'ke_pin'
        | 'kg_tin'
        | 'kh_tin'
        | 'kr_brn'
        | 'kz_bin'
        | 'la_tin'
        | 'li_uid'
        | 'li_vat'
        | 'lk_vat'
        | 'ma_vat'
        | 'md_vat'
        | 'me_pib'
        | 'mk_vat'
        | 'mr_nif'
        | 'mx_rfc'
        | 'my_frp'
        | 'my_itn'
        | 'my_sst'
        | 'ng_tin'
        | 'no_vat'
        | 'no_voec'
        | 'np_pan'
        | 'nz_gst'
        | 'om_vat'
        | 'pe_ruc'
        | 'ph_tin'
        | 'pl_nip'
        | 'ro_tin'
        | 'rs_pib'
        | 'ru_inn'
        | 'ru_kpp'
        | 'sa_vat'
        | 'sg_gst'
        | 'sg_uen'
        | 'si_tin'
        | 'sn_ninea'
        | 'sr_fin'
        | 'sv_nit'
        | 'th_vat'
        | 'tj_tin'
        | 'tr_tin'
        | 'tw_vat'
        | 'tz_vat'
        | 'ua_vat'
        | 'ug_tin'
        | 'us_ein'
        | 'uy_ruc'
        | 'uz_tin'
        | 'uz_vat'
        | 've_rif'
        | 'vn_tin'
        | 'za_vat'
        | 'zm_tin'
        | 'zw_tin';
    }
  }
}
export interface OrderListParams extends PaginationParams {
  /**
   * Only return orders for the given customer.
   */
  customer?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface OrderSubmitParams {
  /**
   * `expected_total` should always be set to the order's `amount_total` field. If they don't match, submitting the order will fail. This helps detect race conditions where something else concurrently modifies the order.
   */
  expected_total: number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
