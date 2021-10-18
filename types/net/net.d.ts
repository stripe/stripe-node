/// <reference types="node" />
/// <reference lib="dom" />

import {IncomingMessage} from 'http';
declare module 'stripe' {
  namespace Stripe {
    /**
     * Encapsulates the logic for issuing a request to the Stripe API. This is
     * an experimental interface and is not yet stable.
     */
    export interface HttpClient<
      ResponseType extends HttpClientResponse = HttpClientResponse
    > {
      /** The client name to use for diagnostics. */
      getClientName(): string;

      makeRequest(
        host: string,
        port: string | number,
        path: string,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        headers: object,
        requestData: string | null,
        protocol: Stripe.HttpProtocol,
        timeout: number
      ): Promise<ResponseType>;
    }

    /**
     * Abstract representation of an HTTP response. This is an experimental
     * interface and is not yet stable.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface HttpClientResponse<RawResponseType = any, StreamType = any> {
      /** The numeric HTTP status code for the response. */
      getStatusCode(): number;

      /** The response headers. */
      getHeaders(): {[key: string]: string};

      /** This returns the underlying raw response object for the client. */
      getRawResponse(): RawResponseType;

      /**
       * This returns the content as a stream. The expectation is that content
       * will not have been buffered into memory at this point by the client.
       *
       * The streamCompleteCallback should be invoked by the response
       * implementation when the stream has been consumed.
       */
      toStream(streamCompleteCallback: () => void): StreamType;

      /**
       * Converts the response content into a JSON object, failing if JSON
       * couldn't be parsed.
       */
      toJSON(): Promise<object>;
    }

    export const createNodeHttpClient: (
      agent?: HttpAgent | null
    ) => HttpClient<
      HttpClientResponse<IncomingMessage, Stripe.StripeStreamResponse>
    >;

    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */
    export const createFetchHttpClient: (
      fetchFn?: WindowOrWorkerGlobalScope['fetch']
    ) => HttpClient<
      HttpClientResponse<
        ReturnType<WindowOrWorkerGlobalScope['fetch']>,
        ReadableStream<Uint8Array>
      >
    >;
  }
}
