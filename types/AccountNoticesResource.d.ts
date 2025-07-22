// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AccountNoticeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountNoticeUpdateParams {
      /**
       * Information about the email you sent.
       */
      email: AccountNoticeUpdateParams.Email;

      /**
       * Date when you sent the notice.
       */
      sent_at: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;
    }

    namespace AccountNoticeUpdateParams {
      interface Email {
        /**
         * Content of the email in plain text. The copy must match exactly the language that Stripe Compliance has approved for use.
         */
        plain_text: string;

        /**
         * Email address of the recipient.
         */
        recipient: string;

        /**
         * Subject of the email.
         */
        subject: string;
      }
    }

    interface AccountNoticeListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set to false to only return unsent AccountNotices.
       */
      sent?: boolean;
    }

    class AccountNoticesResource {
      /**
       * Retrieves an AccountNotice object.
       */
      retrieve(
        id: string,
        params?: AccountNoticeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.AccountNotice>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.AccountNotice>>;

      /**
       * Updates an AccountNotice object.
       */
      update(
        id: string,
        params: AccountNoticeUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.AccountNotice>>;

      /**
       * Retrieves a list of AccountNotice objects. The objects are sorted in descending order by creation date, with the most-recently-created object appearing first.
       */
      list(
        params?: AccountNoticeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.AccountNotice>;
      list(options?: RequestOptions): ApiListPromise<Stripe.AccountNotice>;
    }
  }
}
