import { StripeResource } from '../../StripeResource.js';
import { FinancialAccountFeatures } from './FinancialAccountFeatures.js';
import { MetadataParam, Emptyable, PaginationParams, RangeQueryParam, Metadata } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class FinancialAccountResource extends StripeResource {
    /**
     * Returns a list of FinancialAccounts.
     */
    list(params?: Treasury.FinancialAccountListParams, options?: RequestOptions): ApiListPromise<FinancialAccount>;
    list(options?: RequestOptions): ApiListPromise<FinancialAccount>;
    /**
     * Creates a new FinancialAccount. Each connected account can have up to three FinancialAccounts by default.
     */
    create(params: Treasury.FinancialAccountCreateParams, options?: RequestOptions): Promise<Response<FinancialAccount>>;
    /**
     * Retrieves the details of a FinancialAccount.
     */
    retrieve(id: string, params?: Treasury.FinancialAccountRetrieveParams, options?: RequestOptions): Promise<Response<FinancialAccount>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<FinancialAccount>>;
    /**
     * Updates the details of a FinancialAccount.
     */
    update(id: string, params?: Treasury.FinancialAccountUpdateParams, options?: RequestOptions): Promise<Response<FinancialAccount>>;
    /**
     * Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.
     */
    close(id: string, params?: Treasury.FinancialAccountCloseParams, options?: RequestOptions): Promise<Response<FinancialAccount>>;
    close(id: string, options?: RequestOptions): Promise<Response<FinancialAccount>>;
    /**
     * Updates the Features associated with a FinancialAccount.
     */
    updateFeatures(id: string, params?: Treasury.FinancialAccountUpdateFeaturesParams, options?: RequestOptions): Promise<Response<FinancialAccountFeatures>>;
    updateFeatures(id: string, options?: RequestOptions): Promise<Response<FinancialAccountFeatures>>;
    /**
     * Retrieves Features information associated with the FinancialAccount.
     */
    retrieveFeatures(id: string, params?: Treasury.FinancialAccountRetrieveFeaturesParams, options?: RequestOptions): Promise<Response<FinancialAccountFeatures>>;
    retrieveFeatures(id: string, options?: RequestOptions): Promise<Response<FinancialAccountFeatures>>;
}
export interface FinancialAccount {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'treasury.financial_account';
    /**
     * The array of paths to active Features in the Features hash.
     */
    active_features?: Array<Treasury.FinancialAccount.ActiveFeature>;
    /**
     * Balance information for the FinancialAccount
     */
    balance: Treasury.FinancialAccount.Balance;
    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
     * Stripe or the platform can control Features via the requested field.
     */
    features?: FinancialAccountFeatures;
    /**
     * The set of credentials that resolve to a FinancialAccount.
     */
    financial_addresses: Array<Treasury.FinancialAccount.FinancialAddress>;
    is_default?: boolean;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata | null;
    /**
     * The nickname for the FinancialAccount.
     */
    nickname?: string | null;
    /**
     * The array of paths to pending Features in the Features hash.
     */
    pending_features?: Array<Treasury.FinancialAccount.PendingFeature>;
    /**
     * The set of functionalities that the platform can restrict on the FinancialAccount.
     */
    platform_restrictions?: Treasury.FinancialAccount.PlatformRestrictions | null;
    /**
     * The array of paths to restricted Features in the Features hash.
     */
    restricted_features?: Array<Treasury.FinancialAccount.RestrictedFeature>;
    /**
     * Status of this FinancialAccount.
     */
    status: Treasury.FinancialAccount.Status;
    status_details: Treasury.FinancialAccount.StatusDetails;
    /**
     * The currencies the FinancialAccount can hold a balance in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
     */
    supported_currencies: Array<string>;
}
export declare namespace Treasury {
    namespace FinancialAccount {
        type ActiveFeature = 'card_issuing' | 'deposit_insurance' | 'financial_addresses.aba' | 'financial_addresses.aba.forwarding' | 'inbound_transfers.ach' | 'intra_stripe_flows' | 'outbound_payments.ach' | 'outbound_payments.us_domestic_wire' | 'outbound_transfers.ach' | 'outbound_transfers.us_domestic_wire' | 'remote_deposit_capture';
        interface Balance {
            /**
             * Funds the user can spend right now.
             */
            cash: {
                [key: string]: number;
            };
            /**
             * Funds not spendable yet, but will become available at a later time.
             */
            inbound_pending: {
                [key: string]: number;
            };
            /**
             * Funds in the account, but not spendable because they are being held for pending outbound flows.
             */
            outbound_pending: {
                [key: string]: number;
            };
        }
        interface FinancialAddress {
            /**
             * ABA Records contain U.S. bank account details per the ABA format.
             */
            aba?: FinancialAddress.Aba;
            /**
             * The list of networks that the address supports
             */
            supported_networks?: Array<FinancialAddress.SupportedNetwork>;
            /**
             * The type of financial address
             */
            type: 'aba';
        }
        type PendingFeature = 'card_issuing' | 'deposit_insurance' | 'financial_addresses.aba' | 'financial_addresses.aba.forwarding' | 'inbound_transfers.ach' | 'intra_stripe_flows' | 'outbound_payments.ach' | 'outbound_payments.us_domestic_wire' | 'outbound_transfers.ach' | 'outbound_transfers.us_domestic_wire' | 'remote_deposit_capture';
        interface PlatformRestrictions {
            /**
             * Restricts all inbound money movement.
             */
            inbound_flows: PlatformRestrictions.InboundFlows | null;
            /**
             * Restricts all outbound money movement.
             */
            outbound_flows: PlatformRestrictions.OutboundFlows | null;
        }
        type RestrictedFeature = 'card_issuing' | 'deposit_insurance' | 'financial_addresses.aba' | 'financial_addresses.aba.forwarding' | 'inbound_transfers.ach' | 'intra_stripe_flows' | 'outbound_payments.ach' | 'outbound_payments.us_domestic_wire' | 'outbound_transfers.ach' | 'outbound_transfers.us_domestic_wire' | 'remote_deposit_capture';
        type Status = 'closed' | 'open';
        interface StatusDetails {
            /**
             * Details related to the closure of this FinancialAccount
             */
            closed: StatusDetails.Closed | null;
        }
        namespace FinancialAddress {
            interface Aba {
                /**
                 * The name of the person or business that owns the bank account.
                 */
                account_holder_name: string;
                /**
                 * The account number.
                 */
                account_number?: string | null;
                /**
                 * The last four characters of the account number.
                 */
                account_number_last4: string;
                /**
                 * Name of the bank.
                 */
                bank_name: string;
                /**
                 * Routing number for the account.
                 */
                routing_number: string;
            }
            type SupportedNetwork = 'ach' | 'us_domestic_wire';
        }
        namespace PlatformRestrictions {
            type InboundFlows = 'restricted' | 'unrestricted';
            type OutboundFlows = 'restricted' | 'unrestricted';
        }
        namespace StatusDetails {
            interface Closed {
                /**
                 * The array that contains reasons for a FinancialAccount closure.
                 */
                reasons: Array<Closed.Reason>;
            }
            namespace Closed {
                type Reason = 'account_rejected' | 'closed_by_platform' | 'other';
            }
        }
    }
}
export declare namespace Treasury {
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
        metadata?: MetadataParam;
        /**
         * The nickname for the FinancialAccount.
         */
        nickname?: Emptyable<string>;
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
            interface InboundTransfers {
                /**
                 * Enables ACH Debits via the InboundTransfers API.
                 */
                ach?: InboundTransfers.Ach;
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
            namespace FinancialAddresses {
                interface Aba {
                    /**
                     * Whether the FinancialAccount should have the Feature.
                     */
                    requested: boolean;
                }
            }
            namespace InboundTransfers {
                interface Ach {
                    /**
                     * Whether the FinancialAccount should have the Feature.
                     */
                    requested: boolean;
                }
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
        namespace PlatformRestrictions {
            type InboundFlows = 'restricted' | 'unrestricted';
            type OutboundFlows = 'restricted' | 'unrestricted';
        }
    }
}
export declare namespace Treasury {
    interface FinancialAccountRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Treasury {
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
        metadata?: MetadataParam;
        /**
         * The nickname for the FinancialAccount.
         */
        nickname?: Emptyable<string>;
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
            interface InboundTransfers {
                /**
                 * Enables ACH Debits via the InboundTransfers API.
                 */
                ach?: InboundTransfers.Ach;
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
            namespace FinancialAddresses {
                interface Aba {
                    /**
                     * Whether the FinancialAccount should have the Feature.
                     */
                    requested: boolean;
                }
            }
            namespace InboundTransfers {
                interface Ach {
                    /**
                     * Whether the FinancialAccount should have the Feature.
                     */
                    requested: boolean;
                }
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
        namespace ForwardingSettings {
            type Type = 'financial_account' | 'payment_method';
        }
        namespace PlatformRestrictions {
            type InboundFlows = 'restricted' | 'unrestricted';
            type OutboundFlows = 'restricted' | 'unrestricted';
        }
    }
}
export declare namespace Treasury {
    interface FinancialAccountListParams extends PaginationParams {
        /**
         * Only return FinancialAccounts that were created during the given date interval.
         */
        created?: RangeQueryParam | number;
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
}
export declare namespace Treasury {
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
}
export declare namespace Treasury {
    interface FinancialAccountRetrieveFeaturesParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Treasury {
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
        interface InboundTransfers {
            /**
             * Enables ACH Debits via the InboundTransfers API.
             */
            ach?: InboundTransfers.Ach;
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
        namespace FinancialAddresses {
            interface Aba {
                /**
                 * Whether the FinancialAccount should have the Feature.
                 */
                requested: boolean;
            }
        }
        namespace InboundTransfers {
            interface Ach {
                /**
                 * Whether the FinancialAccount should have the Feature.
                 */
                requested: boolean;
            }
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
}
