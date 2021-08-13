declare module 'stripe' {
  namespace Stripe {
    /**
     * Encapsulates the logic for issuing a request to the Stripe API. This is
     * an experimental interface and is not yet stable.
     */
    export interface HttpClient {
      makeRequest(
        host: string,
        port: string | number,
        path: string,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        headers: object,
        requestData: string | null,
        protocol: Stripe.HttpProtocol,
        timeout: number
      ): Promise<HttpClientResponse>;
    }

    /**
     * Abstract representation of an HTTP response. This is an experimental
     * interface and is not yet stable.
     */
    interface HttpClientResponse {
      /** The numeric HTTP status code for the response. */
      getStatusCode(): number;

      /** The response headers. */
      getHeaders(): {[key: string]: string};

      /** This returns the underlying raw response object for the client. */
      getRawResponse(): any; //eslint-disable-line @typescript-eslint/no-explicit-any

      /**
       * This returns the content as a stream. This is implementation-specific
       * and so we cannot use a given type as different platforms have
       * different stream primitives.The expectation is that content
       * will not have been buffered into memory at this point by the client.
       *
       * The streamCompleteCallback should be invoked by the response
       * implementation when the stream has been consumed.
       */
      toStream(streamCompleteCallback: () => void): any; //eslint-disable-line @typescript-eslint/no-explicit-any

      /**
       * Converts the response content into a JSON object, failing if JSON
       * couldn't be parsed.
       */
      toJSON(): Promise<object>;
    }

    export const createNodeHttpClient: (agent?: HttpAgent | null) => HttpClient;
  }
}
