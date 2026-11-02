// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {OtherString} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class FormResource extends StripeResource {
  /**
   * Retrieves a risk Form by ID.
   *
   * Error Codes
   *
   * | Code | HTTP status | Description |
   * | — | — | — |
   * | form_not_found | 400 | No Form matches the supplied ID. |
   */
  retrieve(
    id: string,
    params?: Risk.FormRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Form>> {
    return this._makeRequest(
      'GET',
      `/v1/risk/forms/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a risk Form with the connected account's response.
   *
   * Error Codes
   *
   * | Code | HTTP status | Description |
   * | — | — | — |
   * | form_not_found | 400 | No Form matches the supplied ID. |
   * | form_closed | 400 | The Form is closed and cannot accept updates. |
   * | invalid_field_for_form_type | 400 | A submitted field is not supported by this Form type. |
   * | form_field_already_submitted | 400 | A submitted field has already been submitted. |
   * | form_insufficient_fields | 400 | Required fields are missing for this Form type. |
   * | resource_missing | 404 | A submitted file does not exist or is not accessible to the requesting account. |
   */
  update(
    id: string,
    params?: Risk.FormUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Form>> {
    return this._makeRequest(
      'POST',
      `/v1/risk/forms/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Form {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'risk.form';

  appeal?: Form.Appeal;

  authorization_documents?: Form.AuthorizationDocuments;

  /**
   * Time at which the Form closed, measured in seconds since the Unix epoch.
   */
  closed_at: number | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number | null;

  /**
   * If the object exists in live mode, the value is `true`. If it exists in a sandbox, the value is `false`.
   */
  livemode: boolean;

  /**
   * Time at which the Form opened, measured in seconds since the Unix epoch.
   */
  opened_at: number | null;

  payment_processing?: Form.PaymentProcessing;

  product_removal?: Form.ProductRemoval;

  reviewed_fields?: Form.ReviewedFields;

  self_funding_context?: Form.SelfFundingContext;

  /**
   * The current status of the Form.
   */
  status: Form.Status;

  subject?: Form.Subject;

  transaction_context?: Form.TransactionContext;

  /**
   * The type of information requested by Stripe.
   */
  type: Form.Type;
}
export namespace Form {
  export interface Appeal {
    /**
     * A text explanation for the appeal.
     */
    explanation?: string;
  }

  export interface AuthorizationDocuments {
    /**
     * IDs of uploaded files attached as authorization documents.
     */
    files?: Array<string>;
  }

  export interface PaymentProcessing {
    multi_processor?: PaymentProcessing.MultiProcessor;

    /**
     * How the connected account uses Stripe.
     */
    purpose?: string;

    /**
     * Why the connected account chose Stripe.
     */
    stripe_selection_rationale?: string;
  }

  export interface ProductRemoval {
    /**
     * Time when the prohibited items were removed, measured in seconds since the Unix epoch.
     */
    items_removed_at?: number;
  }

  export interface ReviewedFields {
    attestation?: ReviewedFields.Attestation;
  }

  export interface SelfFundingContext {
    source_of_wealth?: SelfFundingContext.SourceOfWealth;
  }

  export type Status = 'closed' | 'open';

  export interface Subject {
    /**
     * Account field paths the connected account must review. These are currently returned in v2 Accounts API format, such as `defaults.profile.product_description`. Present for reviewed fields Forms.
     */
    fields_to_review?: Array<string>;

    /**
     * IDs of the transactions this Form is about. Present for transaction context Forms.
     */
    transactions?: Array<string>;
  }

  export interface TransactionContext {
    /**
     * How often the connected account expects transactions like this one. Can be `one_time_payment`, `recurring_subscription`, `repeat_customer`, `split_payment`, or `something_else`. A custom explanation can follow `something_else: `.
     */
    frequency?: string;

    /**
     * The purpose of the transaction.
     */
    purpose?: string;

    /**
     * IDs of uploaded files evidencing the purpose of the transaction.
     */
    purpose_files?: Array<string>;

    /**
     * The connected account's relationship to the sender.
     */
    sender_relationship?: string;

    source_of_funds?: TransactionContext.SourceOfFunds;

    /**
     * How the funds from the transaction will be used.
     */
    use_of_funds?: string;
  }

  export type Type =
    | 'appeal'
    | 'authorization_documents'
    | 'payment_processing'
    | 'product_removal'
    | 'reviewed_fields'
    | 'self_funding_context'
    | 'transaction_context'
    | OtherString;

  export namespace PaymentProcessing {
    export interface MultiProcessor {
      /**
       * Files evidencing payments accepted outside Stripe. Each entry includes a file ID and, when supplied, a document type tag.
       */
      files?: Array<MultiProcessor.File>;

      /**
       * Whether the connected account accepts payments outside Stripe.
       */
      value?: string;
    }

    export namespace MultiProcessor {
      export interface File {
        /**
         * ID of the uploaded file.
         */
        file?: string;

        /**
         * The document type: `alt_financial_statements`, `recent_bank_statements`, or `payment_receipt`.
         */
        tag?: string;
      }
    }
  }

  export namespace ReviewedFields {
    export interface Attestation {
      /**
       * Time when the connected account attested to these fields, measured in seconds since the Unix epoch.
       */
      attested_at?: number;

      /**
       * Account field paths covered by this attestation. These are currently returned in v2 Accounts API format, such as `defaults.profile.product_description`.
       */
      fields?: Array<string>;
    }
  }

  export namespace SelfFundingContext {
    export interface SourceOfWealth {
      /**
       * A text explanation of the connected account's source of wealth.
       */
      description?: string;

      /**
       * IDs of uploaded files evidencing the source of wealth.
       */
      files?: Array<string>;
    }
  }

  export namespace TransactionContext {
    export interface SourceOfFunds {
      /**
       * A text explanation of where the funds for the transaction came from.
       */
      description?: string;

      /**
       * IDs of uploaded files evidencing the source of funds.
       */
      files?: Array<string>;
    }
  }
}
export namespace Risk {
  export interface FormRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Risk {
  export interface FormUpdateParams {
    /**
     * Provide this for Forms of type `appeal`.
     */
    appeal?: FormUpdateParams.Appeal;

    /**
     * Provide this for Forms of type `authorization_documents`.
     */
    authorization_documents?: FormUpdateParams.AuthorizationDocuments;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Provide this for Forms of type `payment_processing`.
     */
    payment_processing?: FormUpdateParams.PaymentProcessing;

    /**
     * Provide this for Forms of type `product_removal`.
     */
    product_removal?: FormUpdateParams.ProductRemoval;

    /**
     * Provide this for Forms of type `reviewed_fields`.
     */
    reviewed_fields?: FormUpdateParams.ReviewedFields;

    /**
     * Provide this for Forms of type `self_funding_context`.
     */
    self_funding_context?: FormUpdateParams.SelfFundingContext;

    /**
     * Provide this for Forms of type `transaction_context`.
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

    export interface PaymentProcessing {
      /**
       * Payments the connected account accepts outside Stripe.
       */
      multi_processor?: PaymentProcessing.MultiProcessor;

      /**
       * How the connected account uses Stripe.
       */
      purpose?: string;

      /**
       * Why the connected account chose Stripe.
       */
      stripe_selection_rationale?: string;
    }

    export interface ProductRemoval {
      /**
       * The Unix timestamp when the prohibited items were removed.
       */
      items_removed_at: number;
    }

    export interface ReviewedFields {
      /**
       * The connected account's attestation that the named account field values are accurate. Update inaccurate values through the Accounts API before attesting.
       */
      attestation: ReviewedFields.Attestation;
    }

    export interface SelfFundingContext {
      /**
       * The connected account's source of wealth.
       */
      source_of_wealth?: SelfFundingContext.SourceOfWealth;
    }

    export interface TransactionContext {
      /**
       * How often the connected account expects transactions like this one. One of one_time_payment, recurring_subscription, repeat_customer, split_payment, or something_else.
       */
      frequency?: string;

      /**
       * The purpose of the transaction.
       */
      purpose?: string;

      /**
       * IDs of uploaded files evidencing the purpose of the transaction.
       */
      purpose_files?: Array<string>;

      /**
       * The connected account's relationship to the sender.
       */
      sender_relationship?: string;

      /**
       * Where the funds for the transaction came from.
       */
      source_of_funds?: TransactionContext.SourceOfFunds;

      /**
       * How the funds from the transaction will be used.
       */
      use_of_funds?: string;
    }

    export namespace PaymentProcessing {
      export interface MultiProcessor {
        /**
         * Files evidencing payments accepted outside Stripe. Each entry carries a tag naming the document type so a reviewer can distinguish statement types without opening the file.
         */
        files?: Array<MultiProcessor.File>;

        /**
         * Whether the connected account accepts payments outside Stripe.
         */
        value?: string;
      }

      export namespace MultiProcessor {
        export interface File {
          /**
           * ID of the uploaded file. Upload using /v1/files before referencing it here.
           */
          file: string;

          /**
           * What kind of document this is. One of alt_financial_statements, recent_bank_statements, or payment_receipt.
           */
          tag?: string;
        }
      }
    }

    export namespace ReviewedFields {
      export interface Attestation {
        /**
         * The Unix timestamp when the connected account attested to these fields.
         */
        attested_at?: number;

        /**
         * Account field paths in the currently accepted v2 Accounts API format, for example `defaults.profile.product_description`.
         */
        fields?: Array<string>;
      }
    }

    export namespace SelfFundingContext {
      export interface SourceOfWealth {
        /**
         * A text explanation of the connected account's source of wealth.
         */
        description?: string;

        /**
         * IDs of uploaded files evidencing the source of wealth.
         */
        files?: Array<string>;
      }
    }

    export namespace TransactionContext {
      export interface SourceOfFunds {
        /**
         * A text explanation of where the funds for the transaction came from.
         */
        description?: string;

        /**
         * IDs of uploaded files evidencing the source of funds.
         */
        files?: Array<string>;
      }
    }
  }
}
