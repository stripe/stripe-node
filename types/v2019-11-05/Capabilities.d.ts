declare namespace Stripe {
  /**
   * The Capabilities object.
   */
  interface Capabilities {
    /**
     * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
     */
    card_issuing?: Capabilities.CardIssuing;

    /**
     * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
     */
    card_payments?: Capabilities.CardPayments;

    /**
     * The status of the legacy payments capability of the account.
     */
    legacy_payments?: Capabilities.LegacyPayments;

    /**
     * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
     */
    transfers?: Capabilities.Transfers;
  }

  namespace Capabilities {
    type CardIssuing = 'active' | 'inactive' | 'pending'

    type CardPayments = 'active' | 'inactive' | 'pending'

    type LegacyPayments = 'active' | 'inactive' | 'pending'

    type Transfers = 'active' | 'inactive' | 'pending'
  }
}