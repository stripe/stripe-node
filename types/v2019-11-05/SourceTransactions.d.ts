declare namespace Stripe {
  /**
   * The SourceTransaction object.
   */
  interface SourceTransaction {
    ach_credit_transfer?: AchCreditTransferData;

    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
     */
    amount?: number;

    chf_credit_transfer?: ChfCreditTransferData;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    gbp_credit_transfer?: GbpCreditTransferData;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'source_transaction';

    paper_check?: PaperCheckData;

    sepa_credit_transfer?: SepaCreditTransferData;

    /**
     * The ID of the source this transaction is attached to.
     */
    source?: string;

    /**
     * The status of the transaction, one of `succeeded`, `pending`, or `failed`.
     */
    status?: string;

    /**
     * The type of source this transaction is attached to.
     */
    type?: SourceTransaction.Type;
  }

  namespace SourceTransaction {
    type Type =
      | 'ach_credit_transfer'
      | 'ach_debit'
      | 'alipay'
      | 'bancontact'
      | 'card'
      | 'card_present'
      | 'eps'
      | 'giropay'
      | 'ideal'
      | 'klarna'
      | 'multibanco'
      | 'p24'
      | 'sepa_debit'
      | 'sofort'
      | 'three_d_secure'
      | 'wechat'
  }
}