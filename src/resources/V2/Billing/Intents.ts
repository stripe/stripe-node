// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString, Decimal, MetadataParam} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {ActionResource} from './Intents/Actions.js';
import {Stripe} from '../../../stripe.core.js';
export class IntentResource extends StripeResource {
  actions: ActionResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.actions = new ActionResource(stripe);
  }
  /**
   * List Billing Intents.
   */
  list(
    params?: V2.Billing.IntentListParams,
    options?: RequestOptions
  ): V2ListPromise<Intent> {
    return this._makeRequest('GET', '/v2/billing/intents', params, options, {
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                billing_group_data: {
                  kind: 'object',
                  fields: {
                    billing_settings: {
                      kind: 'object',
                      fields: {
                        payment_method_options: {
                          kind: 'object',
                          fields: {
                            card: {
                              kind: 'object',
                              fields: {
                                mandate_options: {
                                  kind: 'object',
                                  fields: {amount: {kind: 'int64_string'}},
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
   * Create a Billing Intent.
   */
  create(
    params: V2.Billing.IntentCreateParams,
    options?: RequestOptions
  ): Promise<Response<Intent>> {
    return this._makeRequest('POST', '/v2/billing/intents', params, options, {
      requestSchema: {
        kind: 'object',
        fields: {
          actions: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                apply: {
                  kind: 'object',
                  fields: {
                    invoice_discount_rule: {
                      kind: 'object',
                      fields: {
                        percent_off: {
                          kind: 'object',
                          fields: {percent_off: {kind: 'decimal_string'}},
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          billing_group_data: {
            kind: 'object',
            fields: {
              billing_settings: {
                kind: 'object',
                fields: {
                  payment_method_options: {
                    kind: 'object',
                    fields: {
                      card: {
                        kind: 'object',
                        fields: {
                          mandate_options: {
                            kind: 'object',
                            fields: {amount: {kind: 'int64_string'}},
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
      responseSchema: {
        kind: 'object',
        fields: {
          billing_group_data: {
            kind: 'object',
            fields: {
              billing_settings: {
                kind: 'object',
                fields: {
                  payment_method_options: {
                    kind: 'object',
                    fields: {
                      card: {
                        kind: 'object',
                        fields: {
                          mandate_options: {
                            kind: 'object',
                            fields: {amount: {kind: 'int64_string'}},
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
   * Retrieve a Billing Intent.
   */
  retrieve(
    id: string,
    params?: V2.Billing.IntentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Intent>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/intents/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            billing_group_data: {
              kind: 'object',
              fields: {
                billing_settings: {
                  kind: 'object',
                  fields: {
                    payment_method_options: {
                      kind: 'object',
                      fields: {
                        card: {
                          kind: 'object',
                          fields: {
                            mandate_options: {
                              kind: 'object',
                              fields: {amount: {kind: 'int64_string'}},
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
  /**
   * Cancel a Billing Intent.
   */
  cancel(
    id: string,
    params?: V2.Billing.IntentCancelParams,
    options?: RequestOptions
  ): Promise<Response<Intent>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/intents/${encodeURIComponent(id)}/cancel`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            billing_group_data: {
              kind: 'object',
              fields: {
                billing_settings: {
                  kind: 'object',
                  fields: {
                    payment_method_options: {
                      kind: 'object',
                      fields: {
                        card: {
                          kind: 'object',
                          fields: {
                            mandate_options: {
                              kind: 'object',
                              fields: {amount: {kind: 'int64_string'}},
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
  /**
   * Commit a Billing Intent.
   */
  commit(
    id: string,
    params?: V2.Billing.IntentCommitParams,
    options?: RequestOptions
  ): Promise<Response<Intent>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/intents/${encodeURIComponent(id)}/commit`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            billing_group_data: {
              kind: 'object',
              fields: {
                billing_settings: {
                  kind: 'object',
                  fields: {
                    payment_method_options: {
                      kind: 'object',
                      fields: {
                        card: {
                          kind: 'object',
                          fields: {
                            mandate_options: {
                              kind: 'object',
                              fields: {amount: {kind: 'int64_string'}},
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
  /**
   * Release a Billing Intent.
   */
  releaseReservation(
    id: string,
    params?: V2.Billing.IntentReleaseReservationParams,
    options?: RequestOptions
  ): Promise<Response<Intent>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/intents/${encodeURIComponent(id)}/release_reservation`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            billing_group_data: {
              kind: 'object',
              fields: {
                billing_settings: {
                  kind: 'object',
                  fields: {
                    payment_method_options: {
                      kind: 'object',
                      fields: {
                        card: {
                          kind: 'object',
                          fields: {
                            mandate_options: {
                              kind: 'object',
                              fields: {amount: {kind: 'int64_string'}},
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
  /**
   * Reserve a Billing Intent.
   */
  reserve(
    id: string,
    params?: V2.Billing.IntentReserveParams,
    options?: RequestOptions
  ): Promise<Response<Intent>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/intents/${encodeURIComponent(id)}/reserve`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            billing_group_data: {
              kind: 'object',
              fields: {
                billing_settings: {
                  kind: 'object',
                  fields: {
                    payment_method_options: {
                      kind: 'object',
                      fields: {
                        card: {
                          kind: 'object',
                          fields: {
                            mandate_options: {
                              kind: 'object',
                              fields: {amount: {kind: 'int64_string'}},
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
export interface Intent {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.intent';

  /**
   * Breakdown of the amount for this Billing Intent.
   */
  amount_details: Intent.AmountDetails;

  /**
   * ID of an existing Billing Group to use.
   */
  billing_group?: string;

  /**
   * Data for creating a new Billing Group.
   */
  billing_group_data?: Intent.BillingGroupData;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Three-letter ISO currency code, in lowercase. Must be a supported currency.
   */
  currency: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Current status of the Billing Intent.
   */
  status: Intent.Status;

  /**
   * Timestamps for status transitions of the Billing Intent.
   */
  status_transitions: Intent.StatusTransitions;
}
export namespace Intent {
  export interface AmountDetails {
    /**
     * The outstanding amount after discount, tax, and customer balance application.
     */
    amount_due: string;

    /**
     * Three-letter ISO currency code, in lowercase. Must be a supported currency.
     */
    currency: string;

    /**
     * The customer's account balance applied to the amount.
     */
    customer_balance_applied: string;

    /**
     * Amount of discount applied.
     */
    discount: string;

    /**
     * Amount of shipping charges.
     */
    shipping: string;

    /**
     * Subtotal amount before tax and discounts.
     */
    subtotal: string;

    /**
     * Amount of tax.
     */
    tax: string;

    /**
     * Total amount for the Billing Intent.
     */
    total: string;
  }

  export interface BillingGroupData {
    /**
     * Billing setting overrides for the group. If omitted, the applicable defaults are used.
     */
    billing_settings?: BillingGroupData.BillingSettings;

    /**
     * The ID of the Customer object whose invoices are grouped.
     */
    customer: string;

    /**
     * The ID of the PaymentMethod object used by default. If unset, the customer's default payment method is used.
     */
    default_payment_method?: string;

    /**
     * The strategy used to group member invoices.
     */
    grouping_behavior?: BillingGroupData.GroupingBehavior;

    /**
     * An internal key you can use to find a particular billing group. Maximum length of 200 characters.
     */
    lookup_key?: string;
  }

  export type Status = 'canceled' | 'committed' | 'draft' | 'reserved';

  export interface StatusTransitions {
    /**
     * Time at which the Billing Intent was canceled.
     */
    canceled_at?: string;

    /**
     * Time at which the Billing Intent was committed.
     */
    committed_at?: string;

    /**
     * Time at which the Billing Intent was drafted.
     */
    drafted_at?: string;

    /**
     * Time at which the Billing Intent expires.
     */
    expires_at: string;

    /**
     * Time at which the Billing Intent was reserved.
     */
    reserved_at?: string;
  }

  export namespace BillingGroupData {
    export interface BillingSettings {
      /**
       * How Stripe collects payment.
       */
      collection_method: BillingSettings.CollectionMethod;

      /**
       * Email delivery setting.
       */
      email_delivery: BillingSettings.EmailDelivery;

      /**
       * Settings for invoice presentation.
       */
      invoice_presentation?: BillingSettings.InvoicePresentation;

      /**
       * The amount of time until the invoice is overdue for payment.
       */
      invoice_time_until_due: BillingSettings.InvoiceTimeUntilDue;

      /**
       * The ID of the payment method configuration, which controls which payment methods are displayed to your customers.
       */
      payment_method_configuration?: string;

      /**
       * Payment Method specific configuration to be stored on the object.
       */
      payment_method_options?: BillingSettings.PaymentMethodOptions;

      /**
       * Settings for calculating tax.
       */
      tax: BillingSettings.Tax;
    }

    export interface GroupingBehavior {
      /**
       * The cadence configuration when type is `by_cadence`.
       */
      by_cadence?: GroupingBehavior.ByCadence;

      /**
       * The grouping strategy.
       */
      type: GroupingBehavior.Type;
    }

    export namespace BillingSettings {
      export type CollectionMethod = 'charge_automatically' | 'send_invoice';

      export interface EmailDelivery {
        /**
         * Controls emails for when the payment is due.
         */
        payment_due: EmailDelivery.PaymentDue;
      }

      export interface InvoicePresentation {
        /**
         * The ID of the invoice rendering template to be used when generating invoices.
         */
        invoice_rendering_template?: string;
      }

      export interface InvoiceTimeUntilDue {
        /**
         * The interval unit for the time until due.
         */
        interval: InvoiceTimeUntilDue.Interval;

        /**
         * The number of interval units. For example, if interval=day and interval_count=30, the invoice is due in 30 days.
         */
        interval_count: number;
      }

      export interface PaymentMethodOptions {
        /**
         * This sub-hash contains details about the Canadian pre-authorized debit payment method options.
         */
        acss_debit?: PaymentMethodOptions.AcssDebit;

        /**
         * This sub-hash contains details about the Bancontact payment method.
         */
        bancontact?: PaymentMethodOptions.Bancontact;

        /**
         * This sub-hash contains details about the Card payment method options.
         */
        card?: PaymentMethodOptions.Card;

        /**
         * This sub-hash contains details about the Bank transfer payment method options.
         */
        customer_balance?: PaymentMethodOptions.CustomerBalance;

        /**
         * This sub-hash contains details about the Konbini payment method options.
         */
        konbini?: PaymentMethodOptions.Konbini;

        /**
         * This sub-hash contains details about the SEPA Direct Debit payment method options.
         */
        sepa_debit?: PaymentMethodOptions.SepaDebit;

        /**
         * This sub-hash contains details about the ACH direct debit payment method options.
         */
        us_bank_account?: PaymentMethodOptions.UsBankAccount;
      }

      export interface Tax {
        /**
         * Determines if tax is calculated automatically based on a product tax code or manually based on rules defined by the business.
         */
        type: Tax.Type;
      }

      export namespace EmailDelivery {
        export interface PaymentDue {
          /**
           * If true an email for the invoice would be generated and sent out.
           */
          enabled: boolean;

          /**
           * If true the payment link to hosted invoice page would be included in email and PDF of the invoice.
           */
          include_payment_link: boolean;
        }
      }

      export namespace InvoiceTimeUntilDue {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }

      export namespace PaymentMethodOptions {
        export interface AcssDebit {
          /**
           * Additional fields for Mandate creation.
           */
          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Verification method.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        export interface Bancontact {
          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           */
          preferred_language?: Bancontact.PreferredLanguage;
        }

        export interface Card {
          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options?: Card.MandateOptions;

          /**
           * Selected network to process the payment on. Depends on the available networks of the card.
           */
          network?: string;

          /**
           * An advanced option 3D Secure. We strongly recommend that you rely on our SCA Engine to automatically prompt your customers
           * for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication).
           * However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option.
           * Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure?: Card.RequestThreeDSecure;
        }

        export interface CustomerBalance {
          /**
           * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
           */
          bank_transfer?: CustomerBalance.BankTransfer;

          /**
           * The funding method type to be used when there are not enough funds in the customer balance. Currently the only supported value is `bank_transfer`.
           */
          funding_type?: CustomerBalance.FundingType;
        }

        export interface Konbini {}

        export interface SepaDebit {}

        export interface UsBankAccount {
          /**
           * Additional fields for Financial Connections Session creation.
           */
          financial_connections: UsBankAccount.FinancialConnections;

          /**
           * Verification method.
           */
          verification_method: UsBankAccount.VerificationMethod;
        }

        export namespace AcssDebit {
          export interface MandateOptions {
            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
          }

          export type VerificationMethod =
            | 'automatic'
            | 'instant'
            | 'microdeposits'
            | OtherString;

          export namespace MandateOptions {
            export type TransactionType = 'business' | 'personal' | OtherString;
          }
        }

        export namespace Bancontact {
          export type PreferredLanguage =
            | 'de'
            | 'en'
            | 'fr'
            | 'nl'
            | OtherString;
        }

        export namespace Card {
          export interface MandateOptions {
            /**
             * Amount to be charged for future payments.
             */
            amount?: bigint;

            /**
             * The AmountType for the mandate. One of `fixed` or `maximum`.
             */
            amount_type?: MandateOptions.AmountType;

            /**
             * A description of the mandate that is meant to be displayed to the customer.
             */
            description?: string;
          }

          export type RequestThreeDSecure =
            | 'any'
            | 'automatic'
            | 'challenge'
            | OtherString;

          export namespace MandateOptions {
            export type AmountType = 'fixed' | 'maximum' | OtherString;
          }
        }

        export namespace CustomerBalance {
          export interface BankTransfer {
            /**
             * Configuration for `eu_bank_transfer` funding type. Required if `type` is `eu_bank_transfer`.
             */
            eu_bank_transfer?: BankTransfer.EuBankTransfer;

            /**
             * The bank transfer type that can be used for funding.
             */
            type?: BankTransfer.Type;
          }

          export type FundingType = 'bank_transfer' | OtherString;

          export namespace BankTransfer {
            export interface EuBankTransfer {
              /**
               * The desired country code of the bank account information.
               */
              country: EuBankTransfer.Country;
            }

            export type Type =
              | 'eu_bank_transfer'
              | 'gb_bank_transfer'
              | 'jp_bank_transfer'
              | 'mx_bank_transfer'
              | 'us_bank_transfer'
              | OtherString;

            export namespace EuBankTransfer {
              export type Country =
                | 'BE'
                | 'DE'
                | 'ES'
                | 'FR'
                | 'IE'
                | 'NL'
                | OtherString;
            }
          }
        }

        export namespace UsBankAccount {
          export interface FinancialConnections {
            /**
             * Provide filters for the linked accounts that the customer can select for the payment method.
             */
            filters?: FinancialConnections.Filters;

            /**
             * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included.
             */
            permissions: Array<FinancialConnections.Permission>;

            /**
             * List of data features that you would like to retrieve upon account creation.
             */
            prefetch: Array<FinancialConnections.Prefetch>;
          }

          export type VerificationMethod =
            | 'automatic'
            | 'instant'
            | 'microdeposits'
            | OtherString;

          export namespace FinancialConnections {
            export interface Filters {
              /**
               * The account subcategories to use to filter for selectable accounts.
               */
              account_subcategories: Array<Filters.AccountSubcategory>;
            }

            export type Permission =
              | 'balances'
              | 'ownership'
              | 'payment_method'
              | 'transactions'
              | OtherString;

            export type Prefetch =
              | 'balances'
              | 'ownership'
              | 'transactions'
              | OtherString;

            export namespace Filters {
              export type AccountSubcategory =
                | 'checking'
                | 'savings'
                | OtherString;
            }
          }
        }
      }

      export namespace Tax {
        export type Type = 'automatic' | 'manual' | OtherString;
      }
    }

    export namespace GroupingBehavior {
      export interface ByCadence {
        /**
         * Timestamp that anchors the recurring grouping cadence.
         */
        billing_cycle_anchor?: string;

        /**
         * Daily cadence details.
         */
        day?: ByCadence.Day;

        /**
         * The number of interval units between groups.
         */
        interval_count: number;

        /**
         * Monthly cadence details.
         */
        month?: ByCadence.Month;

        /**
         * The interval unit for the cadence.
         */
        type: ByCadence.Type;

        /**
         * Weekly cadence details.
         */
        week?: ByCadence.Week;

        /**
         * Yearly cadence details.
         */
        year?: ByCadence.Year;
      }

      export type Type = 'by_cadence' | OtherString;

      export namespace ByCadence {
        export interface Day {
          /**
           * The time at which the daily grouping interval begins.
           */
          time: Day.Time;
        }

        export interface Month {
          /**
           * The day of month, from 1 through 31. For shorter months, the cadence anchors to the month's last day.
           */
          day_of_month?: number;

          /**
           * The month of year, from 1 through 12, from which occurrences are calculated.
           */
          month_of_year?: number;

          /**
           * The time at which the monthly grouping interval begins. Defaults to the time the billing group was created, in UTC.
           */
          time: Month.Time;
        }

        export type Type = 'day' | 'month' | 'week' | 'year' | OtherString;

        export interface Week {
          /**
           * The ISO-8601 day of week, from 1 for Monday through 7 for Sunday.
           */
          day_of_week?: number;

          /**
           * The time at which the weekly grouping interval begins.
           */
          time: Week.Time;
        }

        export interface Year {
          /**
           * The day of month, from 1 through 31. For shorter months, the cadence anchors to the month's last day.
           */
          day_of_month?: number;

          /**
           * The month of year, from 1 through 12.
           */
          month_of_year?: number;

          /**
           * The time at which the yearly grouping interval begins. Defaults to the time the billing group was created, in UTC.
           */
          time: Year.Time;
        }

        export namespace Day {
          export interface Time {
            /**
             * The hour, from 0 through 23.
             */
            hour: number;

            /**
             * The minute, from 0 through 59.
             */
            minute: number;

            /**
             * The second, from 0 through 59. Defaults to 0.
             */
            second?: number;
          }
        }

        export namespace Month {
          export interface Time {
            /**
             * The hour, from 0 through 23.
             */
            hour: number;

            /**
             * The minute, from 0 through 59.
             */
            minute: number;

            /**
             * The second, from 0 through 59. Defaults to 0.
             */
            second?: number;
          }
        }

        export namespace Week {
          export interface Time {
            /**
             * The hour, from 0 through 23.
             */
            hour: number;

            /**
             * The minute, from 0 through 59.
             */
            minute: number;

            /**
             * The second, from 0 through 59. Defaults to 0.
             */
            second?: number;
          }
        }

        export namespace Year {
          export interface Time {
            /**
             * The hour, from 0 through 23.
             */
            hour: number;

            /**
             * The minute, from 0 through 59.
             */
            minute: number;

            /**
             * The second, from 0 through 59. Defaults to 0.
             */
            second?: number;
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface IntentCreateParams {
      /**
       * Actions to be performed by this Billing Intent.
       */
      actions: Array<IntentCreateParams.Action>;

      /**
       * Three-letter ISO currency code, in lowercase. Must be a supported currency.
       */
      currency: string;

      /**
       * ID of an existing Billing Group to use.
       */
      billing_group?: string;

      /**
       * Data for creating a new Billing Group.
       */
      billing_group_data?: IntentCreateParams.BillingGroupData;
    }

    export namespace IntentCreateParams {
      export interface Action {
        /**
         * Details for an apply action.
         */
        apply?: Action.Apply;

        /**
         * Details for a deactivate action.
         */
        deactivate?: Action.Deactivate;

        /**
         * Details for a modify action.
         */
        modify?: Action.Modify;

        /**
         * Details for a remove action.
         */
        remove?: Action.Remove;

        /**
         * Details for a subscribe action.
         */
        subscribe?: Action.Subscribe;

        /**
         * Type of the Billing Intent action.
         */
        type: Action.Type;
      }

      export interface BillingGroupData {
        /**
         * Billing setting overrides for the group. If omitted, the applicable defaults are used.
         */
        billing_settings?: BillingGroupData.BillingSettings;

        /**
         * The ID of the Customer object whose invoices are grouped.
         */
        customer: string;

        /**
         * The ID of the PaymentMethod object used by default. If unset, the customer's default payment method is used.
         */
        default_payment_method?: string;

        /**
         * The strategy used to group member invoices.
         */
        grouping_behavior?: BillingGroupData.GroupingBehavior;

        /**
         * An internal key you can use to find a particular billing group. Maximum length of 200 characters.
         */
        lookup_key?: string;
      }

      export namespace Action {
        export interface Apply {
          /**
           * Details for applying a discount.
           */
          discount?: Apply.Discount;

          /**
           * When the apply action takes effect. If not specified, defaults to on_reserve.
           */
          effective_at?: Apply.EffectiveAt;

          /**
           * Details for applying a discount rule to future invoices.
           */
          invoice_discount_rule?: Apply.InvoiceDiscountRule;

          /**
           * Details for applying a spend modifier rule. Only present if type is spend_modifier_rule.
           */
          spend_modifier_rule?: Apply.SpendModifierRule;

          /**
           * Type of the apply action details.
           */
          type: Apply.Type;
        }

        export interface Deactivate {
          /**
           * Details about why the cancellation is being requested.
           */
          cancellation_details?: Deactivate.CancellationDetails;

          /**
           * When the invoice is collected. If not specified, the default behavior is on_effective_at.
           */
          collect_at?: Deactivate.CollectAt;

          /**
           * When the deactivate action takes effect. If not specified, the default behavior is on_reserve.
           */
          effective_at?: Deactivate.EffectiveAt;

          /**
           * Details for deactivating a pricing plan subscription.
           */
          pricing_plan_subscription_details: Deactivate.PricingPlanSubscriptionDetails;

          /**
           * Type of the action details.
           */
          type: Deactivate.Type;
        }

        export interface Modify {
          /**
           * When the invoice is collected. If not specified, the default behavior is next_billing_date.
           */
          collect_at?: Modify.CollectAt;

          /**
           * When the modify action takes effect. If not specified, the default behavior is on_reserve.
           */
          effective_at?: Modify.EffectiveAt;

          /**
           * Details for modifying a pricing plan subscription.
           */
          pricing_plan_subscription_details: Modify.PricingPlanSubscriptionDetails;

          /**
           * Type of the action details.
           */
          type: Modify.Type;
        }

        export interface Remove {
          /**
           * When the remove action takes effect. If not specified, defaults to on_reserve.
           */
          effective_at?: Remove.EffectiveAt;

          /**
           * The ID of the discount rule to remove for future invoices.
           */
          invoice_discount_rule?: string;

          /**
           * The ID of the spend modifier rule to remove.
           */
          spend_modifier_rule?: string;

          /**
           * Type of the remove action.
           */
          type: Remove.Type;
        }

        export interface Subscribe {
          /**
           * When the invoice is collected. If not specified, defaults to on_effective_at.
           */
          collect_at?: Subscribe.CollectAt;

          /**
           * When the subscribe action takes effect. If not specified, the default behavior is on_reserve.
           */
          effective_at?: Subscribe.EffectiveAt;

          /**
           * Details for subscribing to a pricing plan.
           */
          pricing_plan_subscription_details?: Subscribe.PricingPlanSubscriptionDetails;

          /**
           * Type of the action details.
           */
          type: Subscribe.Type;

          /**
           * Details for subscribing to a v1 subscription.
           */
          v1_subscription_details?: Subscribe.V1SubscriptionDetails;
        }

        export type Type =
          | 'apply'
          | 'deactivate'
          | 'modify'
          | 'remove'
          | 'subscribe'
          | OtherString;

        export namespace Apply {
          export interface Discount {
            /**
             * The ID of the Coupon to apply.
             */
            coupon?: string;

            /**
             * The ID of the PromotionCode to apply.
             */
            promotion_code?: string;

            /**
             * Type of the discount.
             */
            type: Discount.Type;
          }

          export interface EffectiveAt {
            /**
             * The timestamp at which the apply action takes effect. Only present if type is timestamp. Only allowed for discount actions.
             */
            timestamp?: string;

            /**
             * When the apply action takes effect.
             */
            type: EffectiveAt.Type;
          }

          export interface InvoiceDiscountRule {
            /**
             * The entity that the discount rule applies to, for example, the billing group.
             */
            applies_to: InvoiceDiscountRule.AppliesTo;

            /**
             * Configuration for percentage off discount.
             */
            percent_off?: InvoiceDiscountRule.PercentOff;

            /**
             * Type of the discount rule.
             */
            type: InvoiceDiscountRule.Type;
          }

          export interface SpendModifierRule {
            /**
             * What the spend modifier applies to.
             */
            applies_to: 'cadence';

            /**
             * Details for max billing period spend modifier. Only present if type is max_billing_period_spend.
             */
            max_billing_period_spend?: SpendModifierRule.MaxBillingPeriodSpend;

            /**
             * Type of the spend modifier.
             */
            type: SpendModifierRule.Type;
          }

          export type Type =
            | 'discount'
            | 'invoice_discount_rule'
            | 'spend_modifier_rule'
            | OtherString;

          export namespace Discount {
            export type Type = 'coupon' | 'promotion_code';
          }

          export namespace EffectiveAt {
            export type Type =
              | 'current_billing_period_end'
              | 'current_billing_period_start'
              | 'next_billing_period_start'
              | 'on_reserve'
              | 'timestamp';
          }

          export namespace InvoiceDiscountRule {
            export type AppliesTo = 'cadence' | 'group' | OtherString;

            export interface PercentOff {
              /**
               * The maximum number of times this discount can be applied for this billing group.
               */
              maximum_applications: PercentOff.MaximumApplications;

              /**
               * Percent that is taken off the amount. For example, a percent_off of 50.0 reduces a 100 USD amount to 50 USD.
               */
              percent_off: Decimal;
            }

            export type Type = 'percent_off' | OtherString;

            export namespace PercentOff {
              export interface MaximumApplications {
                /**
                 * The type of maximum applications configuration.
                 */
                type: MaximumApplications.Type;
              }

              export namespace MaximumApplications {
                export type Type = 'indefinite' | OtherString;
              }
            }
          }

          export namespace SpendModifierRule {
            export interface MaxBillingPeriodSpend {
              /**
               * The maximum amount allowed for the billing period.
               */
              amount: MaxBillingPeriodSpend.Amount;

              /**
               * The configuration for the overage rate for the custom pricing unit.
               */
              custom_pricing_unit_overage_rate: MaxBillingPeriodSpend.CustomPricingUnitOverageRate;
            }

            export type Type = 'max_billing_period_spend' | OtherString;

            export namespace MaxBillingPeriodSpend {
              export interface Amount {
                /**
                 * The custom pricing unit amount.
                 */
                custom_pricing_unit?: Amount.CustomPricingUnit;

                /**
                 * The type of the amount.
                 */
                type: 'custom_pricing_unit';
              }

              export interface CustomPricingUnitOverageRate {
                /**
                 * ID of the custom pricing unit overage rate.
                 */
                id: string;
              }

              export namespace Amount {
                export interface CustomPricingUnit {
                  /**
                   * The id of the custom pricing unit.
                   */
                  id?: string;

                  /**
                   * The value of the custom pricing unit.
                   */
                  value: string;
                }
              }
            }
          }
        }

        export namespace Deactivate {
          export interface CancellationDetails {
            /**
             * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
             */
            comment?: string;

            /**
             * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
             */
            feedback?: CancellationDetails.Feedback;
          }

          export type CollectAt =
            | 'next_billing_date'
            | 'on_effective_at'
            | OtherString;

          export interface EffectiveAt {
            /**
             * The timestamp at which the deactivate action takes effect. Only present if type is timestamp.
             */
            timestamp?: string;

            /**
             * When the deactivate action takes effect.
             */
            type: EffectiveAt.Type;
          }

          export interface PricingPlanSubscriptionDetails {
            /**
             * Configurations for overriding behaviors related to the subscription.
             */
            overrides?: PricingPlanSubscriptionDetails.Overrides;

            /**
             * ID of the pricing plan subscription to deactivate.
             */
            pricing_plan_subscription: string;
          }

          export type Type =
            | 'pricing_plan_subscription_details'
            | 'v1_subscription_details';

          export namespace CancellationDetails {
            export type Feedback =
              | 'customer_service'
              | 'low_quality'
              | 'missing_features'
              | 'other'
              | 'switched_service'
              | 'too_complex'
              | 'too_expensive'
              | 'unused'
              | OtherString;
          }

          export namespace EffectiveAt {
            export type Type =
              | 'current_billing_period_end'
              | 'current_billing_period_start'
              | 'on_reserve'
              | 'timestamp'
              | OtherString;
          }

          export namespace PricingPlanSubscriptionDetails {
            export interface Overrides {
              /**
               * Configurations for behaviors when the action takes effect during the service period.
               */
              partial_period_behaviors: Array<Overrides.PartialPeriodBehavior>;
            }

            export namespace Overrides {
              export interface PartialPeriodBehavior {
                /**
                 * Overrides the behavior for license fee components when the action takes effect during the service period.
                 */
                license_fee?: PartialPeriodBehavior.LicenseFee;

                /**
                 * The type of behavior to override.
                 */
                type: PartialPeriodBehavior.Type;
              }

              export namespace PartialPeriodBehavior {
                export interface LicenseFee {
                  /**
                   * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is deactivating. If not specified, defaults to none.
                   */
                  credit_proration_behavior: LicenseFee.CreditProrationBehavior;
                }

                export type Type =
                  | 'license_fee'
                  | 'recurring_credit_grant'
                  | OtherString;

                export namespace LicenseFee {
                  export type CreditProrationBehavior =
                    | 'none'
                    | 'prorated'
                    | OtherString;
                }
              }
            }
          }
        }

        export namespace Modify {
          export type CollectAt =
            | 'next_billing_date'
            | 'on_effective_at'
            | OtherString;

          export interface EffectiveAt {
            /**
             * The timestamp at which the modify action takes effect. Only present if type is timestamp.
             */
            timestamp?: string;

            /**
             * When the modify action takes effect.
             */
            type: EffectiveAt.Type;
          }

          export interface PricingPlanSubscriptionDetails {
            /**
             * New configurations for the components of the pricing plan.
             */
            component_configurations?: Array<
              PricingPlanSubscriptionDetails.ComponentConfiguration
            >;

            /**
             * The ID of the new Pricing Plan, if changing plans.
             */
            new_pricing_plan?: string;

            /**
             * The ID of the new Pricing Plan Version to use.
             */
            new_pricing_plan_version?: string;

            /**
             * Configurations for overriding behaviors related to the subscription.
             */
            overrides?: PricingPlanSubscriptionDetails.Overrides;

            /**
             * The ID of the Pricing Plan Subscription to modify.
             */
            pricing_plan_subscription: string;
          }

          export type Type =
            | 'pricing_plan_subscription_details'
            | 'v1_subscription_details';

          export namespace EffectiveAt {
            export type Type =
              | 'current_billing_period_start'
              | 'on_reserve'
              | 'timestamp'
              | OtherString;
          }

          export namespace PricingPlanSubscriptionDetails {
            export interface ComponentConfiguration {
              /**
               * Lookup key for the pricing plan component.
               */
              lookup_key?: string;

              /**
               * ID of the pricing plan component.
               */
              pricing_plan_component?: string;

              /**
               * Quantity of the component to be used.
               */
              quantity?: number;
            }

            export interface Overrides {
              /**
               * Configurations for behaviors when the action takes effect during the service period.
               */
              partial_period_behaviors: Array<Overrides.PartialPeriodBehavior>;
            }

            export namespace Overrides {
              export interface PartialPeriodBehavior {
                /**
                 * Overrides the behavior for license fee components when the action takes effect during the service period.
                 */
                license_fee?: PartialPeriodBehavior.LicenseFee;

                /**
                 * Overrides the behavior for recurring credit grant components when the action takes effect during the service period.
                 */
                recurring_credit_grant?: PartialPeriodBehavior.RecurringCreditGrant;

                /**
                 * The type of behavior to override.
                 */
                type: PartialPeriodBehavior.Type;
              }

              export namespace PartialPeriodBehavior {
                export interface LicenseFee {
                  /**
                   * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user modifies the subscription. If not specified, defaults to prorated.
                   */
                  credit_proration_behavior: LicenseFee.CreditProrationBehavior;

                  /**
                   * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user modifies the subscription. If not specified, defaults to prorated.
                   */
                  debit_proration_behavior: LicenseFee.DebitProrationBehavior;
                }

                export interface RecurringCreditGrant {
                  /**
                   * Controls credit grant creation behavior during partial periods. If not specified, defaults to full_credits.
                   */
                  create_behavior: RecurringCreditGrant.CreateBehavior;
                }

                export type Type =
                  | 'license_fee'
                  | 'recurring_credit_grant'
                  | OtherString;

                export namespace LicenseFee {
                  export type CreditProrationBehavior =
                    | 'none'
                    | 'prorated'
                    | OtherString;

                  export type DebitProrationBehavior =
                    | 'none'
                    | 'prorated'
                    | OtherString;
                }

                export namespace RecurringCreditGrant {
                  export type CreateBehavior =
                    | 'full_credits'
                    | 'none'
                    | OtherString;
                }
              }
            }
          }
        }

        export namespace Remove {
          export interface EffectiveAt {
            /**
             * When the remove action takes effect.
             */
            type: EffectiveAt.Type;
          }

          export type Type =
            | 'invoice_discount_rule'
            | 'spend_modifier_rule'
            | OtherString;

          export namespace EffectiveAt {
            export type Type =
              | 'current_billing_period_end'
              | 'on_reserve'
              | OtherString;
          }
        }

        export namespace Subscribe {
          export type CollectAt =
            | 'next_billing_date'
            | 'on_effective_at'
            | OtherString;

          export interface EffectiveAt {
            /**
             * The timestamp at which the subscribe action takes effect. Only present if type is timestamp.
             */
            timestamp?: string;

            /**
             * When the subscribe action takes effect.
             */
            type: EffectiveAt.Type;
          }

          export interface PricingPlanSubscriptionDetails {
            /**
             * Configurations for the components of the pricing plan.
             */
            component_configurations?: Array<
              PricingPlanSubscriptionDetails.ComponentConfiguration
            >;

            /**
             * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: MetadataParam;

            /**
             * Configurations for overriding behaviors related to the subscription.
             */
            overrides?: PricingPlanSubscriptionDetails.Overrides;

            /**
             * ID of the Pricing Plan to subscribe to.
             */
            pricing_plan: string;

            /**
             * Version of the Pricing Plan to use.
             */
            pricing_plan_version: string;
          }

          export type Type =
            | 'pricing_plan_subscription_details'
            | 'v1_subscription_details';

          export interface V1SubscriptionDetails {
            /**
             * The subscription's description, meant to be displayable to the customer.
             * Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
             */
            description?: string;

            /**
             * A list of up to 20 subscription items, each with an attached price.
             */
            items: Array<V1SubscriptionDetails.Item>;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: MetadataParam;
          }

          export namespace EffectiveAt {
            export type Type =
              | 'current_billing_period_start'
              | 'on_reserve'
              | 'timestamp'
              | OtherString;
          }

          export namespace PricingPlanSubscriptionDetails {
            export interface ComponentConfiguration {
              /**
               * Lookup key for the pricing plan component.
               */
              lookup_key?: string;

              /**
               * ID of the pricing plan component.
               */
              pricing_plan_component?: string;

              /**
               * Quantity of the component to be used.
               */
              quantity?: number;
            }

            export interface Overrides {
              /**
               * Configurations for behaviors when the action takes effect during the service period.
               */
              partial_period_behaviors: Array<Overrides.PartialPeriodBehavior>;
            }

            export namespace Overrides {
              export interface PartialPeriodBehavior {
                /**
                 * Overrides the behavior for license fee components when the action takes effect during the service period.
                 */
                license_fee?: PartialPeriodBehavior.LicenseFee;

                /**
                 * Overrides the behavior for recurring credit grant components when the action takes effect during the service period.
                 */
                recurring_credit_grant?: PartialPeriodBehavior.RecurringCreditGrant;

                /**
                 * The type of behavior to override.
                 */
                type: PartialPeriodBehavior.Type;
              }

              export namespace PartialPeriodBehavior {
                export interface LicenseFee {
                  /**
                   * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is subscribing. If not specified, defaults to prorated.
                   */
                  debit_proration_behavior: LicenseFee.DebitProrationBehavior;
                }

                export interface RecurringCreditGrant {
                  /**
                   * Controls credit grant creation behavior during partial periods. If not specified, defaults to full_credits.
                   */
                  create_behavior: RecurringCreditGrant.CreateBehavior;
                }

                export type Type =
                  | 'license_fee'
                  | 'recurring_credit_grant'
                  | OtherString;

                export namespace LicenseFee {
                  export type DebitProrationBehavior =
                    | 'none'
                    | 'prorated'
                    | OtherString;
                }

                export namespace RecurringCreditGrant {
                  export type CreateBehavior =
                    | 'full_credits'
                    | 'none'
                    | OtherString;
                }
              }
            }
          }

          export namespace V1SubscriptionDetails {
            export interface Item {
              /**
               * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
               */
              metadata?: MetadataParam;

              /**
               * The ID of the price object.
               */
              price: string;

              /**
               * Quantity for this item. If not provided, defaults to 1.
               */
              quantity?: number;
            }
          }
        }
      }

      export namespace BillingGroupData {
        export interface BillingSettings {
          /**
           * How Stripe collects payment.
           */
          collection_method?: BillingSettings.CollectionMethod;

          /**
           * Email delivery setting.
           */
          email_delivery?: BillingSettings.EmailDelivery;

          /**
           * Settings for invoice presentation.
           */
          invoice_presentation?: BillingSettings.InvoicePresentation;

          /**
           * The amount of time until the invoice is overdue for payment.
           */
          invoice_time_until_due?: BillingSettings.InvoiceTimeUntilDue;

          /**
           * The ID of the payment method configuration, which controls which payment methods are displayed to your customers.
           */
          payment_method_configuration?: string;

          /**
           * Payment Method specific configuration to be stored on the object.
           */
          payment_method_options?: BillingSettings.PaymentMethodOptions;

          /**
           * Settings for calculating tax.
           */
          tax?: BillingSettings.Tax;
        }

        export interface GroupingBehavior {
          /**
           * The cadence configuration when type is `by_cadence`.
           */
          by_cadence?: GroupingBehavior.ByCadence;

          /**
           * The grouping strategy.
           */
          type: GroupingBehavior.Type;
        }

        export namespace BillingSettings {
          export type CollectionMethod =
            | 'charge_automatically'
            | 'send_invoice';

          export interface EmailDelivery {
            /**
             * Controls emails for when the payment is due. Omit to use the applicable default.
             */
            payment_due?: EmailDelivery.PaymentDue;
          }

          export interface InvoicePresentation {
            /**
             * The ID of the invoice rendering template to be used when generating invoices. Omit to use the applicable default.
             */
            invoice_rendering_template?: string;
          }

          export interface InvoiceTimeUntilDue {
            /**
             * The interval unit for the time until due.
             */
            interval: InvoiceTimeUntilDue.Interval;

            /**
             * The number of interval units. For example, if interval=day and interval_count=30, the invoice is due in 30 days.
             */
            interval_count: number;
          }

          export interface PaymentMethodOptions {
            /**
             * This sub-hash contains details about the Canadian pre-authorized debit payment method options.
             */
            acss_debit?: PaymentMethodOptions.AcssDebit;

            /**
             * This sub-hash contains details about the Bancontact payment method.
             */
            bancontact?: PaymentMethodOptions.Bancontact;

            /**
             * This sub-hash contains details about the Card payment method options.
             */
            card?: PaymentMethodOptions.Card;

            /**
             * This sub-hash contains details about the Bank transfer payment method options.
             */
            customer_balance?: PaymentMethodOptions.CustomerBalance;

            /**
             * This sub-hash contains details about the Konbini payment method options.
             */
            konbini?: PaymentMethodOptions.Konbini;

            /**
             * This sub-hash contains details about the SEPA Direct Debit payment method options.
             */
            sepa_debit?: PaymentMethodOptions.SepaDebit;

            /**
             * This sub-hash contains details about the ACH direct debit payment method options.
             */
            us_bank_account?: PaymentMethodOptions.UsBankAccount;
          }

          export interface Tax {
            /**
             * Determines if tax is calculated automatically based on a product tax code or manually based on rules defined by the business. Omit to use the applicable default.
             */
            type?: Tax.Type;
          }

          export namespace EmailDelivery {
            export interface PaymentDue {
              /**
               * If true an email for the invoice would be generated and sent out.
               */
              enabled?: boolean;

              /**
               * If true the payment link to hosted invoice page would be included in email and PDF of the invoice.
               */
              include_payment_link?: boolean;
            }
          }

          export namespace InvoiceTimeUntilDue {
            export type Interval = 'day' | 'month' | 'week' | 'year';
          }

          export namespace PaymentMethodOptions {
            export interface AcssDebit {
              /**
               * Additional fields for Mandate creation.
               */
              mandate_options?: AcssDebit.MandateOptions;

              /**
               * Verification method.
               */
              verification_method?: AcssDebit.VerificationMethod;
            }

            export interface Bancontact {
              /**
               * Preferred language of the Bancontact authorization page that the customer is redirected to.
               */
              preferred_language?: Bancontact.PreferredLanguage;
            }

            export interface Card {
              /**
               * Configuration options for setting up an eMandate for cards issued in India.
               */
              mandate_options?: Card.MandateOptions;

              /**
               * Selected network to process the payment on. Depends on the available networks of the card.
               */
              network?: string;

              /**
               * An advanced option 3D Secure. We strongly recommend that you rely on our SCA Engine to automatically prompt your customers
               * for authentication based on risk level and [other requirements](https://docs.stripe.com/strong-customer-authentication).
               * However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option.
               * Read our guide on [manually requesting 3D Secure](https://docs.stripe.com/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
               */
              request_three_d_secure?: Card.RequestThreeDSecure;
            }

            export interface CustomerBalance {
              /**
               * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
               */
              bank_transfer?: CustomerBalance.BankTransfer;

              /**
               * The funding method type to be used when there are not enough funds in the customer balance. Currently the only supported value is `bank_transfer`.
               */
              funding_type?: CustomerBalance.FundingType;
            }

            export interface Konbini {}

            export interface SepaDebit {}

            export interface UsBankAccount {
              /**
               * Additional fields for Financial Connections Session creation.
               */
              financial_connections: UsBankAccount.FinancialConnections;

              /**
               * Verification method.
               */
              verification_method: UsBankAccount.VerificationMethod;
            }

            export namespace AcssDebit {
              export interface MandateOptions {
                /**
                 * Transaction type of the mandate.
                 */
                transaction_type?: MandateOptions.TransactionType;
              }

              export type VerificationMethod =
                | 'automatic'
                | 'instant'
                | 'microdeposits'
                | OtherString;

              export namespace MandateOptions {
                export type TransactionType =
                  | 'business'
                  | 'personal'
                  | OtherString;
              }
            }

            export namespace Bancontact {
              export type PreferredLanguage =
                | 'de'
                | 'en'
                | 'fr'
                | 'nl'
                | OtherString;
            }

            export namespace Card {
              export interface MandateOptions {
                /**
                 * Amount to be charged for future payments.
                 */
                amount?: bigint;

                /**
                 * The AmountType for the mandate. One of `fixed` or `maximum`.
                 */
                amount_type?: MandateOptions.AmountType;

                /**
                 * A description of the mandate that is meant to be displayed to the customer.
                 */
                description?: string;
              }

              export type RequestThreeDSecure =
                | 'any'
                | 'automatic'
                | 'challenge'
                | OtherString;

              export namespace MandateOptions {
                export type AmountType = 'fixed' | 'maximum' | OtherString;
              }
            }

            export namespace CustomerBalance {
              export interface BankTransfer {
                /**
                 * Configuration for `eu_bank_transfer` funding type. Required if `type` is `eu_bank_transfer`.
                 */
                eu_bank_transfer?: BankTransfer.EuBankTransfer;

                /**
                 * The bank transfer type that can be used for funding.
                 */
                type?: BankTransfer.Type;
              }

              export type FundingType = 'bank_transfer' | OtherString;

              export namespace BankTransfer {
                export interface EuBankTransfer {
                  /**
                   * The desired country code of the bank account information.
                   */
                  country: EuBankTransfer.Country;
                }

                export type Type =
                  | 'eu_bank_transfer'
                  | 'gb_bank_transfer'
                  | 'jp_bank_transfer'
                  | 'mx_bank_transfer'
                  | 'us_bank_transfer'
                  | OtherString;

                export namespace EuBankTransfer {
                  export type Country =
                    | 'BE'
                    | 'DE'
                    | 'ES'
                    | 'FR'
                    | 'IE'
                    | 'NL'
                    | OtherString;
                }
              }
            }

            export namespace UsBankAccount {
              export interface FinancialConnections {
                /**
                 * Provide filters for the linked accounts that the customer can select for the payment method.
                 */
                filters?: FinancialConnections.Filters;

                /**
                 * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included.
                 */
                permissions?: Array<FinancialConnections.Permission>;

                /**
                 * List of data features that you would like to retrieve upon account creation.
                 */
                prefetch?: Array<FinancialConnections.Prefetch>;
              }

              export type VerificationMethod =
                | 'automatic'
                | 'instant'
                | 'microdeposits'
                | OtherString;

              export namespace FinancialConnections {
                export interface Filters {
                  /**
                   * The account subcategories to use to filter for selectable accounts.
                   */
                  account_subcategories?: Array<Filters.AccountSubcategory>;
                }

                export type Permission =
                  | 'balances'
                  | 'ownership'
                  | 'payment_method'
                  | 'transactions'
                  | OtherString;

                export type Prefetch =
                  | 'balances'
                  | 'ownership'
                  | 'transactions'
                  | OtherString;

                export namespace Filters {
                  export type AccountSubcategory =
                    | 'checking'
                    | 'savings'
                    | OtherString;
                }
              }
            }
          }

          export namespace Tax {
            export type Type = 'automatic' | 'manual' | OtherString;
          }
        }

        export namespace GroupingBehavior {
          export interface ByCadence {
            /**
             * Timestamp that anchors the recurring grouping cadence.
             */
            billing_cycle_anchor?: string;

            /**
             * Daily cadence details.
             */
            day?: ByCadence.Day;

            /**
             * The number of interval units between groups. Defaults to 1.
             */
            interval_count?: number;

            /**
             * Monthly cadence details.
             */
            month?: ByCadence.Month;

            /**
             * The interval unit for the cadence.
             */
            type: ByCadence.Type;

            /**
             * Weekly cadence details.
             */
            week?: ByCadence.Week;

            /**
             * Yearly cadence details.
             */
            year?: ByCadence.Year;
          }

          export type Type = 'by_cadence' | OtherString;

          export namespace ByCadence {
            export interface Day {
              /**
               * The time at which the daily grouping interval begins.
               */
              time: Day.Time;
            }

            export interface Month {
              /**
               * The day of month, from 1 through 31. For shorter months, the cadence anchors to the month's last day.
               */
              day_of_month: number;

              /**
               * The month of year, from 1 through 12, from which occurrences are calculated. Defaults to the month when the billing group was created.
               */
              month_of_year?: number;

              /**
               * The time at which the monthly grouping interval begins. Defaults to the time the billing group is created, in UTC.
               */
              time?: Month.Time;
            }

            export type Type = 'day' | 'month' | 'week' | 'year' | OtherString;

            export interface Week {
              /**
               * The ISO-8601 day of week, from 1 for Monday through 7 for Sunday.
               */
              day_of_week: number;

              /**
               * The time at which the weekly grouping interval begins. Defaults to the time the billing group is created, in UTC.
               */
              time?: Week.Time;
            }

            export interface Year {
              /**
               * The day of month, from 1 through 31. For shorter months, the cadence anchors to the month's last day.
               */
              day_of_month: number;

              /**
               * The month of year, from 1 through 12.
               */
              month_of_year: number;

              /**
               * The time at which the yearly grouping interval begins. Defaults to the time the billing group is created, in UTC.
               */
              time?: Year.Time;
            }

            export namespace Day {
              export interface Time {
                /**
                 * The hour, from 0 through 23.
                 */
                hour: number;

                /**
                 * The minute, from 0 through 59.
                 */
                minute: number;

                /**
                 * The second, from 0 through 59.
                 */
                second: number;
              }
            }

            export namespace Month {
              export interface Time {
                /**
                 * The hour, from 0 through 23.
                 */
                hour: number;

                /**
                 * The minute, from 0 through 59.
                 */
                minute: number;

                /**
                 * The second, from 0 through 59.
                 */
                second: number;
              }
            }

            export namespace Week {
              export interface Time {
                /**
                 * The hour, from 0 through 23.
                 */
                hour: number;

                /**
                 * The minute, from 0 through 59.
                 */
                minute: number;

                /**
                 * The second, from 0 through 59.
                 */
                second: number;
              }
            }

            export namespace Year {
              export interface Time {
                /**
                 * The hour, from 0 through 23.
                 */
                hour: number;

                /**
                 * The minute, from 0 through 59.
                 */
                minute: number;

                /**
                 * The second, from 0 through 59.
                 */
                second: number;
              }
            }
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface IntentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface IntentListParams {
      /**
       * Optionally set the maximum number of results per page. Defaults to 10.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface IntentCancelParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface IntentCommitParams {
      /**
       * ID of the PaymentIntent associated with this commit.
       */
      payment_intent?: string;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface IntentReleaseReservationParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface IntentReserveParams {}
  }
}
