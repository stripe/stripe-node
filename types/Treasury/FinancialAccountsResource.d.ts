// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface FinancialAccountCreateParams {
        /**
         * The currencies the FinancialAccount can hold a balance in.
         */
        supported_currencies: Array<string>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.
         */
        features?: FinancialAccountCreateParams.Features;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The nickname for the FinancialAccount.
         */
        nickname?: Stripe.Emptyable<string>;

        /**
         * The set of functionalities that the platform can restrict on the FinancialAccount.
         */
        platform_restrictions?: FinancialAccountCreateParams.PlatformRestrictions;
      }

      namespace FinancialAccountCreateParams {
        interface Features {
          /**
           * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
           */
          card_issuing?: Features.CardIssuing;

          /**
           * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
           */
          deposit_insurance?: Features.DepositInsurance;

          /**
           * Contains Features that add FinancialAddresses to the FinancialAccount.
           */
          financial_addresses?: Features.FinancialAddresses;

          /**
           * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
           */
          inbound_transfers?: Features.InboundTransfers;

          /**
           * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
           */
          intra_stripe_flows?: Features.IntraStripeFlows;

          /**
           * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
           */
          outbound_payments?: Features.OutboundPayments;

          /**
           * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
           */
          outbound_transfers?: Features.OutboundTransfers;
        }

        namespace Features {
          interface CardIssuing {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface DepositInsurance {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface FinancialAddresses {
            /**
             * Adds an ABA FinancialAddress to the FinancialAccount.
             */
            aba?: FinancialAddresses.Aba;
          }

          namespace FinancialAddresses {
            interface Aba {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }

          interface InboundTransfers {
            /**
             * Enables ACH Debits via the InboundTransfers API.
             */
            ach?: InboundTransfers.Ach;
          }

          namespace InboundTransfers {
            interface Ach {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }

          interface IntraStripeFlows {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface OutboundPayments {
            /**
             * Enables ACH transfers via the OutboundPayments API.
             */
            ach?: OutboundPayments.Ach;

            /**
             * Enables US domestic wire transfers via the OutboundPayments API.
             */
            us_domestic_wire?: OutboundPayments.UsDomesticWire;
          }

          namespace OutboundPayments {
            interface Ach {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }

            interface UsDomesticWire {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }

          interface OutboundTransfers {
            /**
             * Enables ACH transfers via the OutboundTransfers API.
             */
            ach?: OutboundTransfers.Ach;

            /**
             * Enables US domestic wire transfers via the OutboundTransfers API.
             */
            us_domestic_wire?: OutboundTransfers.UsDomesticWire;
          }

          namespace OutboundTransfers {
            interface Ach {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }

            interface UsDomesticWire {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }
        }

        interface PlatformRestrictions {
          /**
           * Restricts all inbound money movement.
           */
          inbound_flows?: PlatformRestrictions.InboundFlows;

          /**
           * Restricts all outbound money movement.
           */
          outbound_flows?: PlatformRestrictions.OutboundFlows;
        }

        namespace PlatformRestrictions {
          type InboundFlows = 'restricted' | 'unrestricted';

          type OutboundFlows = 'restricted' | 'unrestricted';
        }
      }

      interface FinancialAccountRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface FinancialAccountUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Encodes whether a FinancialAccount has access to a particular feature, with a status enum and associated `status_details`. Stripe or the platform may control features via the requested field.
         */
        features?: FinancialAccountUpdateParams.Features;

        /**
         * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
         */
        forwarding_settings?: FinancialAccountUpdateParams.ForwardingSettings;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The nickname for the FinancialAccount.
         */
        nickname?: Stripe.Emptyable<string>;

        /**
         * The set of functionalities that the platform can restrict on the FinancialAccount.
         */
        platform_restrictions?: FinancialAccountUpdateParams.PlatformRestrictions;
      }

      namespace FinancialAccountUpdateParams {
        interface Features {
          /**
           * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
           */
          card_issuing?: Features.CardIssuing;

          /**
           * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
           */
          deposit_insurance?: Features.DepositInsurance;

          /**
           * Contains Features that add FinancialAddresses to the FinancialAccount.
           */
          financial_addresses?: Features.FinancialAddresses;

          /**
           * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
           */
          inbound_transfers?: Features.InboundTransfers;

          /**
           * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
           */
          intra_stripe_flows?: Features.IntraStripeFlows;

          /**
           * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
           */
          outbound_payments?: Features.OutboundPayments;

          /**
           * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
           */
          outbound_transfers?: Features.OutboundTransfers;
        }

        namespace Features {
          interface CardIssuing {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface DepositInsurance {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface FinancialAddresses {
            /**
             * Adds an ABA FinancialAddress to the FinancialAccount.
             */
            aba?: FinancialAddresses.Aba;
          }

          namespace FinancialAddresses {
            interface Aba {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }

          interface InboundTransfers {
            /**
             * Enables ACH Debits via the InboundTransfers API.
             */
            ach?: InboundTransfers.Ach;
          }

          namespace InboundTransfers {
            interface Ach {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }

          interface IntraStripeFlows {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface OutboundPayments {
            /**
             * Enables ACH transfers via the OutboundPayments API.
             */
            ach?: OutboundPayments.Ach;

            /**
             * Enables US domestic wire transfers via the OutboundPayments API.
             */
            us_domestic_wire?: OutboundPayments.UsDomesticWire;
          }

          namespace OutboundPayments {
            interface Ach {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }

            interface UsDomesticWire {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }

          interface OutboundTransfers {
            /**
             * Enables ACH transfers via the OutboundTransfers API.
             */
            ach?: OutboundTransfers.Ach;

            /**
             * Enables US domestic wire transfers via the OutboundTransfers API.
             */
            us_domestic_wire?: OutboundTransfers.UsDomesticWire;
          }

          namespace OutboundTransfers {
            interface Ach {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }

            interface UsDomesticWire {
              /**
               * Whether the FinancialAccount should have the Feature.
               */
              requested: boolean;
            }
          }
        }

        interface ForwardingSettings {
          /**
           * The financial_account id
           */
          financial_account?: string;

          /**
           * The payment_method or bank account id. This needs to be a verified bank account.
           */
          payment_method?: string;

          /**
           * The type of the bank account provided. This can be either "financial_account" or "payment_method"
           */
          type: ForwardingSettings.Type;
        }

        namespace ForwardingSettings {
          type Type = 'financial_account' | 'payment_method';
        }

        interface PlatformRestrictions {
          /**
           * Restricts all inbound money movement.
           */
          inbound_flows?: PlatformRestrictions.InboundFlows;

          /**
           * Restricts all outbound money movement.
           */
          outbound_flows?: PlatformRestrictions.OutboundFlows;
        }

        namespace PlatformRestrictions {
          type InboundFlows = 'restricted' | 'unrestricted';

          type OutboundFlows = 'restricted' | 'unrestricted';
        }
      }

      interface FinancialAccountListParams extends PaginationParams {
        /**
         * Only return FinancialAccounts that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return FinancialAccounts that have the given status: `open` or `closed`
         */
        status?: FinancialAccountListParams.Status;
      }

      namespace FinancialAccountListParams {
        type Status = 'closed' | 'open';
      }

      interface FinancialAccountCloseParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0
         */
        forwarding_settings?: FinancialAccountCloseParams.ForwardingSettings;
      }

      namespace FinancialAccountCloseParams {
        interface ForwardingSettings {
          /**
           * The financial_account id
           */
          financial_account?: string;

          /**
           * The payment_method or bank account id. This needs to be a verified bank account.
           */
          payment_method?: string;

          /**
           * The type of the bank account provided. This can be either "financial_account" or "payment_method"
           */
          type: ForwardingSettings.Type;
        }

        namespace ForwardingSettings {
          type Type = 'financial_account' | 'payment_method';
        }
      }

      interface FinancialAccountRetrieveFeaturesParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface FinancialAccountUpdateFeaturesParams {
        /**
         * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
         */
        card_issuing?: FinancialAccountUpdateFeaturesParams.CardIssuing;

        /**
         * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
         */
        deposit_insurance?: FinancialAccountUpdateFeaturesParams.DepositInsurance;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Contains Features that add FinancialAddresses to the FinancialAccount.
         */
        financial_addresses?: FinancialAccountUpdateFeaturesParams.FinancialAddresses;

        /**
         * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
         */
        inbound_transfers?: FinancialAccountUpdateFeaturesParams.InboundTransfers;

        /**
         * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
         */
        intra_stripe_flows?: FinancialAccountUpdateFeaturesParams.IntraStripeFlows;

        /**
         * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
         */
        outbound_payments?: FinancialAccountUpdateFeaturesParams.OutboundPayments;

        /**
         * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
         */
        outbound_transfers?: FinancialAccountUpdateFeaturesParams.OutboundTransfers;
      }

      namespace FinancialAccountUpdateFeaturesParams {
        interface CardIssuing {
          /**
           * Whether the FinancialAccount should have the Feature.
           */
          requested: boolean;
        }

        interface DepositInsurance {
          /**
           * Whether the FinancialAccount should have the Feature.
           */
          requested: boolean;
        }

        interface FinancialAddresses {
          /**
           * Adds an ABA FinancialAddress to the FinancialAccount.
           */
          aba?: FinancialAddresses.Aba;
        }

        namespace FinancialAddresses {
          interface Aba {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }
        }

        interface InboundTransfers {
          /**
           * Enables ACH Debits via the InboundTransfers API.
           */
          ach?: InboundTransfers.Ach;
        }

        namespace InboundTransfers {
          interface Ach {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }
        }

        interface IntraStripeFlows {
          /**
           * Whether the FinancialAccount should have the Feature.
           */
          requested: boolean;
        }

        interface OutboundPayments {
          /**
           * Enables ACH transfers via the OutboundPayments API.
           */
          ach?: OutboundPayments.Ach;

          /**
           * Enables US domestic wire transfers via the OutboundPayments API.
           */
          us_domestic_wire?: OutboundPayments.UsDomesticWire;
        }

        namespace OutboundPayments {
          interface Ach {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface UsDomesticWire {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }
        }

        interface OutboundTransfers {
          /**
           * Enables ACH transfers via the OutboundTransfers API.
           */
          ach?: OutboundTransfers.Ach;

          /**
           * Enables US domestic wire transfers via the OutboundTransfers API.
           */
          us_domestic_wire?: OutboundTransfers.UsDomesticWire;
        }

        namespace OutboundTransfers {
          interface Ach {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }

          interface UsDomesticWire {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;
          }
        }
      }

      class FinancialAccountsResource {
        /**
         * Creates a new FinancialAccount. Each connected account can have up to three FinancialAccounts by default.
         */
        create(
          params: FinancialAccountCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccount>>;

        /**
         * Retrieves the details of a FinancialAccount.
         */
        retrieve(
          id: string,
          params?: FinancialAccountRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccount>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccount>>;

        /**
         * Updates the details of a FinancialAccount.
         */
        update(
          id: string,
          params?: FinancialAccountUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccount>>;

        /**
         * Returns a list of FinancialAccounts.
         */
        list(
          params?: FinancialAccountListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.FinancialAccount>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.FinancialAccount>;

        /**
         * Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.
         */
        close(
          id: string,
          params?: FinancialAccountCloseParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccount>>;
        close(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccount>>;

        /**
         * Retrieves Features information associated with the FinancialAccount.
         */
        retrieveFeatures(
          id: string,
          params?: FinancialAccountRetrieveFeaturesParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccountFeatures>>;
        retrieveFeatures(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccountFeatures>>;

        /**
         * Updates the Features associated with a FinancialAccount.
         */
        updateFeatures(
          id: string,
          params?: FinancialAccountUpdateFeaturesParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccountFeatures>>;
        updateFeatures(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.FinancialAccountFeatures>>;
      }
    }
  }
}
