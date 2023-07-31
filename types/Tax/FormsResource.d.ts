// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface FormRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface FormListParams extends PaginationParams {
        /**
         * The payee whose volume is represented on the tax form.
         */
        payee: FormListParams.Payee;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future tax form types. If your integration expects only one type of tax form in the response, make sure to provide a type value in the request.
         */
        type?: FormListParams.Type;
      }

      namespace FormListParams {
        interface Payee {
          /**
           * The ID of the Stripe account whose forms will be retrieved.
           */
          account?: string;

          /**
           * Specifies the payee type. Always `account`.
           */
          type?: 'account';
        }

        type Type = 'us_1099_k' | 'us_1099_misc' | 'us_1099_nec';
      }

      interface FormPdfParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class FormsResource {
        /**
         * Retrieves the details of a tax form that has previously been created. Supply the unique tax form ID that was returned from your previous request, and Stripe will return the corresponding tax form information.
         */
        retrieve(
          id: string,
          params?: FormRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Form>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Form>>;

        /**
         * Returns a list of tax forms which were previously created. The tax forms are returned in sorted order, with the oldest tax forms appearing first.
         */
        list(
          params: FormListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.Form>;

        /**
         * Download the PDF for a tax form.
         */
        pdf(
          id: string,
          params?: FormPdfParams,
          options?: RequestOptions
        ): Promise<StripeStreamResponse>;
        pdf(
          id: string,
          options?: RequestOptions
        ): Promise<StripeStreamResponse>;
      }
    }
  }
}
