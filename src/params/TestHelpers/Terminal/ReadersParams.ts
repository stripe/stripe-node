// File generated from our OpenAPI spec

namespace TestHelpers {
  namespace Terminal {
    export interface ReaderPresentPaymentMethodParams {
      /**
       * Simulated on-reader tip amount.
       */
      amount_tip?: number;

      /**
       * Simulated data for the card payment method.
       */
      card?: ReaderPresentPaymentMethodParams.Card;

      /**
       * Simulated data for the card_present payment method.
       */
      card_present?: ReaderPresentPaymentMethodParams.CardPresent;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Simulated data for the interac_present payment method.
       */
      interac_present?: ReaderPresentPaymentMethodParams.InteracPresent;

      /**
       * Simulated payment type.
       */
      type?: ReaderPresentPaymentMethodParams.Type;
    }

    namespace ReaderPresentPaymentMethodParams {
      export interface Card {
        /**
         * Card security code.
         */
        cvc?: string;

        /**
         * Two-digit number representing the card's expiration month.
         */
        exp_month: number;

        /**
         * Two- or four-digit number representing the card's expiration year.
         */
        exp_year: number;

        /**
         * The card number, as a string without any separators.
         */
        number: string;
      }

      export interface CardPresent {
        /**
         * The card number, as a string without any separators.
         */
        number?: string;
      }

      export interface InteracPresent {
        /**
         * The Interac card number.
         */
        number?: string;
      }

      export type Type = 'card' | 'card_present' | 'interac_present';
    }
  }
}
namespace TestHelpers {
  namespace Terminal {
    export interface ReaderSucceedInputCollectionParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * This parameter defines the skip behavior for input collection.
       */
      skip_non_required_inputs?: ReaderSucceedInputCollectionParams.SkipNonRequiredInputs;
    }

    namespace ReaderSucceedInputCollectionParams {
      export type SkipNonRequiredInputs = 'all' | 'none';
    }
  }
}
namespace TestHelpers {
  namespace Terminal {
    export interface ReaderTimeoutInputCollectionParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
