// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {
  MetadataParam,
  OtherString,
  Metadata,
  Decimal,
} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {InvoiceResource} from './Groups/Invoices.js';
import {SpendModifierRuleResource} from './Groups/SpendModifierRules.js';
import {Stripe} from '../../../stripe.core.js';
export class GroupResource extends StripeResource {
  invoices: InvoiceResource;
  spendModifierRules: SpendModifierRuleResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.invoices = new InvoiceResource(stripe);
    this.spendModifierRules = new SpendModifierRuleResource(stripe);
  }
  /**
   * List Billing Groups.
   */
  list(
    params?: V2.Billing.GroupListParams,
    options?: RequestOptions
  ): V2ListPromise<Group> {
    return this._makeRequest('GET', '/v2/billing/groups', params, options, {
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
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
                invoice_discount_rules: {
                  kind: 'array',
                  element: {
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
      },
    }) as any;
  }
  /**
   * Create a BillingGroup.
   */
  create(
    params: V2.Billing.GroupCreateParams,
    options?: RequestOptions
  ): Promise<Response<Group>> {
    return this._makeRequest('POST', '/v2/billing/groups', params, options, {
      requestSchema: {
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
      responseSchema: {
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
          invoice_discount_rules: {
            kind: 'array',
            element: {
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
    }) as any;
  }
  /**
   * Retrieve a BillingGroup.
   */
  retrieve(
    id: string,
    params?: V2.Billing.GroupRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Group>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/groups/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
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
            invoice_discount_rules: {
              kind: 'array',
              element: {
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
      }
    ) as any;
  }
  /**
   * Update a BillingGroup.
   */
  update(
    id: string,
    params?: V2.Billing.GroupUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Group>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/groups/${encodeURIComponent(id)}`,
      params,
      options,
      {
        requestSchema: {
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
        responseSchema: {
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
            invoice_discount_rules: {
              kind: 'array',
              element: {
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
      }
    ) as any;
  }
  /**
   * Cancel a BillingGroup.
   */
  cancel(
    id: string,
    params?: V2.Billing.GroupCancelParams,
    options?: RequestOptions
  ): Promise<Response<Group>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/groups/${encodeURIComponent(id)}/cancel`,
      params,
      options,
      {
        responseSchema: {
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
            invoice_discount_rules: {
              kind: 'array',
              element: {
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
      }
    ) as any;
  }
}
export interface Group {
  /**
   * The ID of the BillingGroup object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.group';

  /**
   * The effective billing settings for the group. Returned only when `billing_settings` is included in the request.
   */
  billing_settings?: Group.BillingSettings;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

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
  grouping_behavior: Group.GroupingBehavior;

  /**
   * The discount rules applied to all invoices for the group's underlying cadence. Returned only when `invoice_discount_rules` is included in the request.
   */
  invoice_discount_rules?: Array<Group.InvoiceDiscountRule>;

  /**
   * Whether the billing group exists in live mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to find a particular billing group. Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of key-value pairs that you can attach to an object for storing additional structured information.
   */
  metadata?: Metadata;

  /**
   * The date when the billing group will next create a consolidated invoice.
   */
  next_billing_date: string;

  /**
   * The current status of the billing group.
   */
  status: Group.Status;

  /**
   * Timestamps for the billing group's status transitions.
   */
  status_transitions: Group.StatusTransitions;

  /**
   * The ID of the TestClock object associated with the billing group.
   */
  test_clock?: string;
}
export namespace Group {
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

  export interface InvoiceDiscountRule {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * Details if the discount is a percentage off.
     */
    percent_off?: InvoiceDiscountRule.PercentOff;

    /**
     * The type of the discount.
     */
    type: InvoiceDiscountRule.Type;
  }

  export type Status = 'active' | 'canceled' | OtherString;

  export interface StatusTransitions {
    /**
     * Timestamp of when the billing group became active.
     */
    activated_at?: string;

    /**
     * Timestamp of when the billing group was canceled.
     */
    canceled_at?: string;
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
        export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl' | OtherString;
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

  export namespace InvoiceDiscountRule {
    export interface PercentOff {
      /**
       * The maximum applications configuration for this discount.
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
         * The number of times this discount can be applied when the type is `times`.
         */
        times?: number;

        /**
         * Max applications type of this discount, ex: indefinite.
         */
        type: MaximumApplications.Type;
      }

      export namespace MaximumApplications {
        export type Type = 'indefinite' | 'times' | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface GroupCreateParams {
      /**
       * The ID of the Customer object whose invoices are grouped.
       */
      customer: string;

      /**
       * Billing setting overrides for the group. If omitted, the applicable defaults are used.
       */
      billing_settings?: GroupCreateParams.BillingSettings;

      /**
       * The ID of the PaymentMethod object used by default. If unset, the customer's default payment method is used.
       */
      default_payment_method?: string;

      /**
       * The strategy used to group member invoices.
       */
      grouping_behavior?: GroupCreateParams.GroupingBehavior;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<GroupCreateParams.Include>;

      /**
       * An internal key you can use to find a particular billing group. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs that you can attach to an object for storing additional structured information.
       */
      metadata?: MetadataParam;
    }

    export namespace GroupCreateParams {
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

      export type Include =
        | 'billing_settings'
        | 'invoice_discount_rules'
        | OtherString;

      export namespace BillingSettings {
        export type CollectionMethod = 'charge_automatically' | 'send_invoice';

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
export namespace V2 {
  export namespace Billing {
    export interface GroupRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<GroupRetrieveParams.Include>;
    }

    export namespace GroupRetrieveParams {
      export type Include =
        | 'billing_settings'
        | 'invoice_discount_rules'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface GroupUpdateParams {
      /**
       * Billing setting overrides to update. Set to null to restore all applicable defaults.
       */
      billing_settings?: GroupUpdateParams.BillingSettings;

      /**
       * The ID of the default PaymentMethod object. Set to null to use the customer's default payment method.
       */
      default_payment_method?: string;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<GroupUpdateParams.Include>;

      /**
       * An internal key you can use to find a particular billing group. Set to null to clear it. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs to add, update, or remove.
       */
      metadata?: MetadataParam;
    }

    export namespace GroupUpdateParams {
      export interface BillingSettings {
        /**
         * How Stripe collects payment. Set to null to restore the applicable default.
         */
        collection_method?: BillingSettings.CollectionMethod;

        /**
         * Email delivery setting. Set to null to restore the applicable default.
         */
        email_delivery?: BillingSettings.EmailDelivery;

        /**
         * Settings for invoice presentation. Set to null to restore the applicable defaults.
         */
        invoice_presentation?: BillingSettings.InvoicePresentation;

        /**
         * The amount of time until the invoice is overdue for payment. Set to null to restore the applicable default.
         */
        invoice_time_until_due?: BillingSettings.InvoiceTimeUntilDue;

        /**
         * The ID of the payment method configuration, which controls which payment methods are displayed to your customers. Set to null to restore the applicable default.
         */
        payment_method_configuration?: string;

        /**
         * Payment Method specific configuration to be stored on the object. Set to null to clear the stored value.
         */
        payment_method_options?: BillingSettings.PaymentMethodOptions;

        /**
         * Tax calculation settings. Set to null to restore the applicable default.
         */
        tax?: BillingSettings.Tax;
      }

      export type Include =
        | 'billing_settings'
        | 'invoice_discount_rules'
        | OtherString;

      export namespace BillingSettings {
        export type CollectionMethod = 'charge_automatically' | 'send_invoice';

        export interface EmailDelivery {
          /**
           * Controls emails for when the payment is due. Omit to leave unchanged. Set to null to restore the applicable default.
           */
          payment_due?: EmailDelivery.PaymentDue;
        }

        export interface InvoicePresentation {
          /**
           * The ID of the invoice rendering template to be used when generating invoices. Set to null to use no template.
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
             * If true an email for the invoice would be generated and sent out. Omit to leave unchanged. Set to null to restore the applicable default.
             */
            enabled?: boolean;

            /**
             * If true the payment link to hosted invoice page would be included in email and PDF of the invoice. Omit to leave unchanged. Set to null to restore the applicable default.
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
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface GroupListParams {
      /**
       * Filter billing groups by Customer ID. Mutually exclusive with test_clock.
       */
      customer?: string;

      /**
       * The maximum number of results per page. Defaults to 10.
       */
      limit?: number;

      /**
       * Filter billing groups by lookup keys. You can specify up to 10 lookup keys.
       */
      lookup_keys?: Array<string>;

      /**
       * Filter billing groups by TestClock ID. Mutually exclusive with customer.
       */
      test_clock?: string;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface GroupCancelParams {}
  }
}
