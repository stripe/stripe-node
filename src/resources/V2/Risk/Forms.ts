// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class FormResource extends StripeResource {
  /**
   * Retrieves a risk Form by ID.
   */
  retrieve(
    id: string,
    params?: V2.Risk.FormRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Form>> {
    return this._makeRequest(
      'GET',
      `/v2/risk/forms/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Submits a response to a risk Form.
   */
  update(
    id: string,
    params?: V2.Risk.FormUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Form>> {
    return this._makeRequest(
      'POST',
      `/v2/risk/forms/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Form {
  /**
   * Unique identifier for the Form.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.risk.form';

  /**
   * Data for appeal inquiries. Only present when type is appeal.
   */
  appeal?: Form.Appeal;

  /**
   * Data for authorization_documents inquiries. Only present when type is authorization_documents.
   */
  authorization_documents?: Form.AuthorizationDocuments;

  /**
   * Time at which the Form was closed.
   */
  closed_at: string;

  /**
   * Time at which the Form was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Time at which the Form was opened.
   */
  opened_at: string;

  /**
   * Data for product_removal inquiries. Only present when type is product_removal.
   */
  product_removal?: Form.ProductRemoval;

  /**
   * Data for self_funding_context inquiries. Only present when type is self_funding_context.
   */
  self_funding_context?: Form.SelfFundingContext;

  /**
   * The current status of the Form.
   */
  status: Form.Status;

  /**
   * What this Form was raised about, as a typed object. Only present when the Form
   * is scoped to a specific object. Absent when the Form covers the account as a whole.
   */
  subject?: Form.Subject;

  /**
   * Data for transaction_context inquiries. Only present when type is transaction_context.
   */
  transaction_context?: Form.TransactionContext;

  /**
   * The type of Form.
   */
  type: Form.Type;
}
export namespace Form {
  export interface Appeal {
    /**
     * A text explanation for the appeal.
     */
    explanation: string;
  }

  export interface AuthorizationDocuments {
    /**
     * IDs of uploaded files to attach as authorization documents.
     */
    files: Array<string>;
  }

  export interface ProductRemoval {
    /**
     * The timestamp when the prohibited items were removed.
     */
    items_removed_at: string;
  }

  export interface SelfFundingContext {
    /**
     * The connected account's source of wealth.
     */
    source_of_wealth?: SelfFundingContext.SourceOfWealth;
  }

  export type Status = 'closed' | 'open';

  export interface Subject {
    /**
     * ID of the transaction this Form is about. Present only for transaction_context
     * Forms. Absent for other Form types.
     */
    transaction?: string;

    /**
     * IDs of the transactions this inquiry is about.
     */
    transactions?: Array<string>;
  }

  export interface TransactionContext {
    /**
     * The purpose of the transaction.
     */
    purpose: string;

    /**
     * The connected account's relationship to the sender. Optional.
     */
    sender_relationship?: string;

    /**
     * Where the funds for the transaction came from.
     */
    source_of_funds?: TransactionContext.SourceOfFunds;

    /**
     * How the funds from the transaction will be used.
     */
    use_of_funds: string;
  }

  export type Type =
    | 'appeal'
    | 'authorization_documents'
    | 'product_removal'
    | 'self_funding_context'
    | 'transaction_context'
    | OtherString;

  export namespace SelfFundingContext {
    export interface SourceOfWealth {
      /**
       * A text explanation of the connected account's source of wealth.
       */
      description: string;

      /**
       * IDs of uploaded files evidencing the source of wealth.
       */
      files: Array<string>;
    }
  }

  export namespace TransactionContext {
    export interface SourceOfFunds {
      /**
       * A text explanation of where the funds for the transaction came from.
       */
      description: string;

      /**
       * IDs of uploaded files evidencing the source of funds.
       */
      files: Array<string>;
    }
  }
}
export namespace V2 {
  export namespace Risk {
    export interface FormRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Risk {
    export interface FormUpdateParams {
      /**
       * Provide this for appeal inquiries.
       */
      appeal?: FormUpdateParams.Appeal;

      /**
       * Provide this for authorization_documents inquiries.
       */
      authorization_documents?: FormUpdateParams.AuthorizationDocuments;

      /**
       * Provide this for product_removal inquiries.
       */
      product_removal?: FormUpdateParams.ProductRemoval;

      /**
       * Provide this for self_funding_context inquiries.
       */
      self_funding_context?: FormUpdateParams.SelfFundingContext;

      /**
       * Provide this for transaction_context inquiries.
       */
      transaction_context?: FormUpdateParams.TransactionContext;
    }

    export namespace FormUpdateParams {
      export interface Appeal {
        /**
         * A text explanation for the appeal.
         */
        explanation: string;
      }

      export interface AuthorizationDocuments {
        /**
         * IDs of uploaded files to attach as authorization documents.
         */
        files: Array<string>;
      }

      export interface ProductRemoval {
        /**
         * The timestamp when the prohibited items were removed.
         */
        items_removed_at: string;
      }

      export interface SelfFundingContext {
        /**
         * The connected account's source of wealth.
         */
        source_of_wealth?: SelfFundingContext.SourceOfWealth;
      }

      export interface TransactionContext {
        /**
         * The purpose of the transaction.
         */
        purpose: string;

        /**
         * The connected account's relationship to the sender. Optional.
         */
        sender_relationship?: string;

        /**
         * Where the funds for the transaction came from.
         */
        source_of_funds?: TransactionContext.SourceOfFunds;

        /**
         * How the funds from the transaction will be used.
         */
        use_of_funds: string;
      }

      export namespace SelfFundingContext {
        export interface SourceOfWealth {
          /**
           * A text explanation of the connected account's source of wealth.
           */
          description: string;

          /**
           * IDs of uploaded files evidencing the source of wealth.
           */
          files: Array<string>;
        }
      }

      export namespace TransactionContext {
        export interface SourceOfFunds {
          /**
           * A text explanation of where the funds for the transaction came from.
           */
          description: string;

          /**
           * IDs of uploaded files evidencing the source of funds.
           */
          files: Array<string>;
        }
      }
    }
  }
}
