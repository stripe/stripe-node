// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {
  MetadataParam,
  OtherString,
  Metadata,
  Decimal,
} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {StatementResource} from './FinancialAccounts/Statements.js';
import {WalletExportResource} from './FinancialAccounts/WalletExport.js';
import {Stripe} from '../../../stripe.core.js';
export class FinancialAccountResource extends StripeResource {
  statements: StatementResource;
  walletExport: WalletExportResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.statements = new StatementResource(stripe);
    this.walletExport = new WalletExportResource(stripe);
  }
  /**
   * Returns a list of FinancialAccounts in your account that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.FinancialAccountListParams,
    options?: RequestOptions
  ): V2ListPromise<FinancialAccount> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/financial_accounts',
      params,
      options,
      {
        methodType: 'list',
        responseSchema: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  savings: {
                    kind: 'object',
                    fields: {
                      interest: {
                        kind: 'object',
                        fields: {
                          rate: {
                            kind: 'object',
                            fields: {percentage: {kind: 'decimal_string'}},
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
   * Creates a new FinancialAccount.
   * @throws Stripe.AlreadyExistsError
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.FinancialAccountCreateParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/financial_accounts',
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            savings: {
              kind: 'object',
              fields: {
                interest: {
                  kind: 'object',
                  fields: {
                    rate: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
   * Retrieves the details of an existing FinancialAccount.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/financial_accounts/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            savings: {
              kind: 'object',
              fields: {
                interest: {
                  kind: 'object',
                  fields: {
                    rate: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
   * Updates an existing FinancialAccount using the provided parameters.
   */
  update(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountUpdateParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/financial_accounts/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            savings: {
              kind: 'object',
              fields: {
                interest: {
                  kind: 'object',
                  fields: {
                    rate: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
   * Closes a FinancialAccount. You must provide forwarding settings if it has a non-zero balance.
   * @throws Stripe.NonZeroBalanceError
   */
  close(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountCloseParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/financial_accounts/${encodeURIComponent(id)}/close`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            savings: {
              kind: 'object',
              fields: {
                interest: {
                  kind: 'object',
                  fields: {
                    rate: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
export interface FinancialAccount {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_account';

  /**
   * If this is a `accrued_fees` FinancialAccount, this hash include details specific to `accrued_fees` FinancialAccount.
   */
  accrued_fees?: FinancialAccount.AccruedFees;

  /**
   * The FinancialAccount's balance, split into `available`, `inbound_pending`, and `outbound_pending` balances.
   * Each balance is a hash keyed by lowercase currency codes, with an amount for each currency.
   */
  balance: FinancialAccount.Balance;

  /**
   * Open Enum. The country where the LegalEntity associated with the FinancialAccount is based, represented as a two-letter country code.
   */
  country: string;

  /**
   * Time at which the object was created. Represented as an RFC 3339 timestamp in UTC with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
   */
  created: string;

  /**
   * If this is a `credit` FinancialAccount, this hash includes details specific to `credit` FinancialAccounts.
   */
  credit?: FinancialAccount.Credit;

  /**
   * A descriptive name for the FinancialAccount, up to 50 characters long. This name appears in the Stripe Dashboard and embedded components.
   */
  display_name?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information
   * about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * If this is a `multiprocessor_settlement` FinancialAccount, this hash includes details specific to `multiprocessor_settlement` FinancialAccounts.
   */
  multiprocessor_settlement?: FinancialAccount.MultiprocessorSettlement;

  /**
   * If the FinancialAccount's `type` is `other`, this hash identifies its actual type.
   * Upgrade your API version to see that type in `type`.
   */
  other?: FinancialAccount.Other;

  /**
   * If this is a `payments` FinancialAccount, this hash include details specific to `payments` FinancialAccount.
   */
  payments?: FinancialAccount.Payments;

  /**
   * If this is a `savings` FinancialAccount, this hash includes details specific to `savings` FinancialAccounts.
   */
  savings?: FinancialAccount.Savings;

  /**
   * Closed Enum. An enum representing the status of the FinancialAccount. This indicates whether or not the FinancialAccount can be used for any money movement flows.
   */
  status: FinancialAccount.Status;

  /**
   * Additional details related to the status of the FinancialAccount.
   */
  status_details?: FinancialAccount.StatusDetails;

  /**
   * If the FinancialAccount's `type` is `storage`, this hash contains details specific to that type.
   */
  storage?: FinancialAccount.Storage;

  /**
   * Closed Enum. The type of the FinancialAccount. Details specific to the type appear in the matching hash.
   * For example, a `storage` FinancialAccount includes a `storage` hash.
   */
  type: FinancialAccount.Type;
}
export namespace FinancialAccount {
  export interface AccruedFees {
    /**
     * The currencies enabled for fee accrual on this FinancialAccount.
     */
    currencies: Array<string>;

    /**
     * Direction of fee accrual for this FinancialAccount.
     */
    direction: AccruedFees.Direction;
  }

  export interface Balance {
    /**
     * Balance available for money movement.
     */
    available: {
      [key: string]: V2Amount;
    };

    /**
     * Balance of inbound funds that aren't yet available for money movement and will later move to the `available` balance.
     */
    inbound_pending: {
      [key: string]: V2Amount;
    };

    /**
     * Balance of funds being used for pending outbound money movements.
     */
    outbound_pending: {
      [key: string]: V2Amount;
    };
  }

  export interface Credit {
    /**
     * Details about how this credit FinancialAccount is funded.
     */
    funded_by?: Credit.FundedBy;

    /**
     * The currencies supported by this credit FinancialAccount.
     */
    supported_currencies: Array<string>;
  }

  export interface MultiprocessorSettlement {
    /**
     * Settlement currencies enabled for this FinancialAccount.
     */
    settlement_currencies: Array<string>;
  }

  export interface Other {
    /**
     * The FinancialAccount's actual type, represented as a string.
     * Upgrade your API version to see this value in `financial_account.type`.
     */
    type: string;
  }

  export interface Payments {
    /**
     * The balance of the `payments` FinancialAccount is a mix of payment processing and stored value funds, and this field
     * describes the breakdown between the two. The sum will match the balance of the FinancialAccount.
     */
    balance_by_funds_type?: Payments.BalanceByFundsType;

    /**
     * The currency that non-settlement currency payments will be converted to.
     */
    default_currency: string;

    /**
     * Settlement currencies enabled for this FinancialAccount. Payments in other currencies will be automatically converted to `default_currency`.
     */
    settlement_currencies: Array<string>;

    /**
     * Describes the available balance when it was projected.
     */
    starting_balance?: Payments.StartingBalance;
  }

  export interface Savings {
    /**
     * The currencies that this savings FinancialAccount can hold.
     */
    holds_currencies: Array<string>;

    /**
     * Interest details for this savings FinancialAccount. Populated by the server.
     */
    interest?: Savings.Interest;
  }

  export type Status = 'closed' | 'open' | 'pending';

  export interface StatusDetails {
    /**
     * Details about the FinancialAccount's closure. Only populated when `status` is `closed`.
     */
    closed?: StatusDetails.Closed;
  }

  export interface Storage {
    /**
     * Crypto-specific storage configuration. Only populated when `storage.crypto` is passed in the `include` parameter and the FinancialAccount stores crypto assets. Fiat currencies remain configured only through `holds_currencies`.
     */
    crypto?: Storage.Crypto;

    /**
     * Array of eligibility objects, segmented by bank name and deposit insurance scheme.
     */
    deposit_insurance_eligibility?: Array<Storage.DepositInsuranceEligibility>;

    /**
     * The usage type for funds in this FinancialAccount. Can be used to specify that the funds are for Consumer activity.
     */
    funds_usage_type?: Storage.FundsUsageType;

    /**
     * The currencies that this FinancialAccount can hold.
     */
    holds_currencies: Array<string>;
  }

  export type Type =
    | 'accrued_fees'
    | 'credit'
    | 'multiprocessor_settlement'
    | 'other'
    | 'payments'
    | 'savings'
    | 'storage';

  export namespace AccruedFees {
    export type Direction = 'payable' | 'receivable';
  }

  export namespace Credit {
    export interface FundedBy {
      /**
       * Details for platform-funded credit FinancialAccounts.
       */
      platform: FundedBy.Platform;

      /**
       * The type of funding source for this credit FinancialAccount.
       */
      type: FundedBy.Type;
    }

    export namespace FundedBy {
      export interface Platform {
        /**
         * The platform FinancialAccount used to fund this credit FinancialAccount.
         */
        financial_account: string;
      }

      export type Type = 'platform' | 'stripe' | OtherString;
    }
  }

  export namespace Payments {
    export interface BalanceByFundsType {
      /**
       * Payment processing funds are those that are received for goods or services and may only be used for payouts to self. These funds may be converted to stored value funds.
       */
      payment_processing: BalanceByFundsType.PaymentProcessing;

      /**
       * Stored value funds may be used for either payouts to self or payments to others.
       */
      stored_value: BalanceByFundsType.StoredValue;
    }

    export interface StartingBalance {
      /**
       * When the balance was projected.
       */
      at: string;

      /**
       * The available balance at the time when the balance was projected.
       */
      available: {
        [key: string]: V2Amount;
      };
    }

    export namespace BalanceByFundsType {
      export interface PaymentProcessing {
        /**
         * Balance available for money movement.
         */
        available: {
          [key: string]: V2Amount;
        };

        /**
         * Balance of inbound funds that aren't yet available for money movement and will later move to the `available` balance.
         */
        inbound_pending: {
          [key: string]: V2Amount;
        };

        /**
         * Balance of funds being used for pending outbound money movements.
         */
        outbound_pending: {
          [key: string]: V2Amount;
        };
      }

      export interface StoredValue {
        /**
         * Balance available for money movement.
         */
        available: {
          [key: string]: V2Amount;
        };

        /**
         * Balance of inbound funds that aren't yet available for money movement and will later move to the `available` balance.
         */
        inbound_pending: {
          [key: string]: V2Amount;
        };

        /**
         * Balance of funds being used for pending outbound money movements.
         */
        outbound_pending: {
          [key: string]: V2Amount;
        };
      }
    }
  }

  export namespace Savings {
    export interface Interest {
      /**
       * The interest rate applied to this savings FinancialAccount.
       */
      rate: Interest.Rate;
    }

    export namespace Interest {
      export interface Rate {
        /**
         * Current variable rate, e.g. "3.00".
         */
        percentage: Decimal;

        /**
         * The period over which interest accrues.
         */
        period: Rate.Period;
      }

      export namespace Rate {
        export type Period = 'annual' | OtherString;
      }
    }
  }

  export namespace StatusDetails {
    export interface Closed {
      /**
       * When configured, the forwarding settings for the closed FinancialAccount.
       */
      forwarding_settings?: Closed.ForwardingSettings;

      /**
       * Closed Enum. The reason the FinancialAccount was closed.
       */
      reason: Closed.Reason;
    }

    export namespace Closed {
      export interface ForwardingSettings {
        /**
         * ID of the FinancialAccount that supplies funds to cover negative balances
         * during or after this FinancialAccount's closure.
         */
        payment_method?: string;

        /**
         * ID of the FinancialAccount that receives funds forwarded from this FinancialAccount when it closes.
         */
        payout_method?: string;

        /**
         * Whether to skip forwarding exportable self-custodied wallet balances. Defaults to false. This does not skip non-exportable or fiat balances, inbound-pending checks, or negative-balance requirements.
         */
        skip_exportable_balances?: boolean;
      }

      export type Reason = 'account_closed' | 'closed_by_platform' | 'other';
    }
  }

  export namespace Storage {
    export interface Crypto {
      /**
       * The blockchain network configured for each crypto currency. Keys are lowercase currency codes and must identify crypto currencies also present in `holds_currencies`.
       */
      currency_networks: {
        [key: string]: Crypto.CurrencyNetworks;
      };

      /**
       * Describes who controls the private keys for the crypto storage.
       */
      custody_model: Crypto.CustodyModel;
    }

    export interface DepositInsuranceEligibility {
      /**
       * The bank where funds are stored.
       */
      bank_name: DepositInsuranceEligibility.BankName;

      /**
       * Currencies eligible for deposit insurance at this bank under this scheme.
       */
      currencies: Array<string>;

      /**
       * The deposit insurance scheme.
       */
      type: DepositInsuranceEligibility.Type;
    }

    export type FundsUsageType = 'business' | 'consumer' | OtherString;

    export namespace Crypto {
      export type CurrencyNetworks = 'tempo' | OtherString;

      export type CustodyModel = 'self' | 'stripe';
    }

    export namespace DepositInsuranceEligibility {
      export type BankName = 'fifth_third' | OtherString;

      export type Type = 'fdic' | 'fdic_passthrough' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountCreateParams {
      /**
       * The type of FinancialAccount to create.
       */
      type: FinancialAccountCreateParams.Type;

      /**
       * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
       */
      display_name?: string;

      /**
       * Metadata associated with the FinancialAccount.
       */
      metadata?: MetadataParam;

      /**
       * Parameters specific to creating `savings` type FinancialAccounts.
       */
      savings?: FinancialAccountCreateParams.Savings;

      /**
       * Parameters specific to creating `storage` type FinancialAccounts.
       */
      storage?: FinancialAccountCreateParams.Storage;
    }

    export namespace FinancialAccountCreateParams {
      export type Type = 'credit' | 'savings' | 'storage';

      export interface Savings {
        /**
         * The currencies that this savings FinancialAccount can hold. Three-letter ISO currency code, in lowercase.
         */
        holds_currencies: Array<string>;
      }

      export interface Storage {
        /**
         * Crypto-specific storage configuration. Fiat currencies remain configured only through `holds_currencies`.
         */
        crypto?: Storage.Crypto;

        /**
         * The usage type for funds in this FinancialAccount. Defaults to BUSINESS if not specified.
         */
        funds_usage_type?: Storage.FundsUsageType;

        /**
         * The currencies that the storage FinancialAccount can hold a balance in. Three-letter ISO currency code, in lowercase.
         * Must be a subset of the currencies requested in `configuration.storer.features.holds_currencies` of the v2/accounts API.
         */
        holds_currencies: Array<string>;
      }

      export namespace Storage {
        export interface Crypto {
          /**
           * The blockchain network configured for each crypto currency. Keys are lowercase currency codes and must identify crypto currencies also present in `holds_currencies`.
           */
          currency_networks: {
            [key: string]: Crypto.CurrencyNetworks;
          };

          /**
           * Describes who controls the private keys for the crypto storage.
           */
          custody_model: Crypto.CustodyModel;
        }

        export type FundsUsageType = 'business' | 'consumer' | OtherString;

        export namespace Crypto {
          export type CurrencyNetworks = 'tempo' | OtherString;

          export type CustodyModel = 'self' | 'stripe';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<FinancialAccountRetrieveParams.Include>;
    }

    export namespace FinancialAccountRetrieveParams {
      export type Include =
        | 'payments.balance_by_funds_type'
        | 'storage.crypto'
        | 'storage.deposit_insurance_eligibility';
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountUpdateParams {
      /**
       * A descriptive name for the FinancialAccount, up to 50 characters long. This name appears in the Stripe Dashboard and embedded components.
       */
      display_name?: string;

      /**
       * Forwarding settings for a closed FinancialAccount. Post-close forwarding updates are not yet implemented.
       */
      forwarding_settings?: FinancialAccountUpdateParams.ForwardingSettings;

      /**
       * Set of key-value pairs that you can attach to the FinancialAccount. Individual keys can be unset by posting
       * null to them.
       */
      metadata?: MetadataParam;

      /**
       * Parameters for updating storage-specific fields on the FinancialAccount.
       */
      storage?: FinancialAccountUpdateParams.Storage;
    }

    export namespace FinancialAccountUpdateParams {
      export interface ForwardingSettings {
        /**
         * ID of the FinancialAccount that supplies funds to cover negative balances
         * during or after this FinancialAccount's closure.
         */
        payment_method?: string;

        /**
         * ID of the FinancialAccount that receives funds forwarded from this FinancialAccount when it closes.
         */
        payout_method?: string;

        /**
         * Whether to skip forwarding exportable self-custodied wallet balances. Defaults to false. This does not skip non-exportable or fiat balances, inbound-pending checks, or negative-balance requirements.
         */
        skip_exportable_balances?: boolean;
      }

      export interface Storage {
        /**
         * Crypto-specific storage configuration used when adding crypto to a fiat-only FinancialAccount.
         * `custody_model` is required for the initial crypto update and cannot be changed afterward.
         */
        crypto?: Storage.Crypto;

        /**
         * The currencies that this storage FinancialAccount can hold a balance in. Three-letter ISO currency code, in lowercase.
         * Adding currencies requires the corresponding holds_currencies storer capabilities to be enabled.
         * Removing currencies is not supported as of March 2026.
         */
        holds_currencies?: Array<string>;
      }

      export namespace Storage {
        export interface Crypto {
          /**
           * The blockchain network configured for each crypto currency. Keys are lowercase currency codes and must identify crypto currencies also present in `holds_currencies`.
           */
          currency_networks: {
            [key: string]: Crypto.CurrencyNetworks;
          };

          /**
           * Describes who controls the private keys for the crypto storage.
           */
          custody_model: Crypto.CustodyModel;
        }

        export namespace Crypto {
          export type CurrencyNetworks = 'tempo' | OtherString;

          export type CustodyModel = 'self' | 'stripe';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountListParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<FinancialAccountListParams.Include>;

      /**
       * The page limit.
       */
      limit?: number;

      /**
       * Return FinancialAccounts whose `status` matches any of the provided values.
       * If omitted, closed FinancialAccounts are not returned.
       */
      statuses?: Array<FinancialAccountListParams.Status>;

      /**
       * Filter for FinancialAccount `type`. By default, FinancialAccounts of any `type` are returned.
       */
      types?: Array<FinancialAccountListParams.Type>;
    }

    export namespace FinancialAccountListParams {
      export type Include =
        | 'payments.balance_by_funds_type'
        | 'storage.crypto'
        | 'storage.deposit_insurance_eligibility';

      export type Status = 'closed' | 'open' | 'pending';

      export type Type =
        | 'accrued_fees'
        | 'credit'
        | 'multiprocessor_settlement'
        | 'payments'
        | 'savings'
        | 'storage'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountCloseParams {
      /**
       * Settings that specify where to send positive balances and how to cover negative balances.
       * You must provide these settings if the FinancialAccount has a non-zero balance.
       */
      forwarding_settings?: FinancialAccountCloseParams.ForwardingSettings;
    }

    export namespace FinancialAccountCloseParams {
      export interface ForwardingSettings {
        /**
         * ID of the FinancialAccount that supplies funds to cover negative balances
         * during or after this FinancialAccount's closure.
         */
        payment_method?: string;

        /**
         * ID of the FinancialAccount that receives funds forwarded from this FinancialAccount when it closes.
         */
        payout_method?: string;

        /**
         * Whether to skip forwarding exportable self-custodied wallet balances. Defaults to false. This does not skip non-exportable or fiat balances, inbound-pending checks, or negative-balance requirements.
         */
        skip_exportable_balances?: boolean;
      }
    }
  }
}
