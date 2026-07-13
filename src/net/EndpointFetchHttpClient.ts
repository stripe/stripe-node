import {RequestHeaders} from '../Types.js';
import {parseHttpHeaderAsString} from '../utils.js';
import {
  HttpClient,
  HttpClientResponse,
  HttpClientResponseInterface,
  HttpClientRuntimeError,
} from './HttpClient.js';

type EndpointFetchRequest = {
  endpoint: 'stripe_api';
  path: string;
  method: string;
  body?: string;
  headers?: Record<string, string>;
};

type EndpointFetchResponse = {
  status: number;
  body?: string | null;
};

type EndpointFetchSuccessResponse = EndpointFetchResponse & {
  ok: true;
};

type EndpointFetchError = Error & {
  status?: number;
  body?: string | null;
};

type EndpointFetch = (
  request: EndpointFetchRequest
) => Promise<EndpointFetchSuccessResponse>;

declare const endpointFetch: EndpointFetch | undefined;

const STRIPE_API_HOST = 'api.stripe.com';

export class EndpointFetchHttpClient extends HttpClient {
  /** @override */
  getClientName(): string {
    return 'endpointFetch';
  }

  async makeRequest(
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: string,
    protocol: string,
    timeout: number
  ): Promise<HttpClientResponseInterface> {
    if (!path.startsWith('/')) {
      throw new Error(`Only relative paths are supported, got: "${path}"`);
    }

    if (host !== STRIPE_API_HOST) {
      throw new HttpClientRuntimeError(
        `Stripe: This entrypoint only supports Stripe API requests to ${STRIPE_API_HOST}. Received request for ${host}.`
      );
    }

    if (typeof endpointFetch !== 'function') {
      throw new HttpClientRuntimeError(
        'Stripe: `endpointFetch()` is not available.'
      );
    }

    const methodHasPayload =
      method == 'POST' || method == 'PUT' || method == 'PATCH';
    const body = requestData || (methodHasPayload ? '' : undefined);

    const endpointFetchRequest: EndpointFetchRequest = {
      endpoint: 'stripe_api',
      path,
      method,
      headers: this._getHeaders(headers),
    };
    if (body !== undefined) {
      endpointFetchRequest.body = body;
    }

    try {
      const response = await endpointFetch(endpointFetchRequest);
      return new EndpointFetchHttpClientResponse(response);
    } catch (e) {
      const response = EndpointFetchHttpClient._responseFromError(e);
      if (response) {
        return new EndpointFetchHttpClientResponse(response);
      }
      throw e;
    }
  }

  private _getHeaders(headers: RequestHeaders): Record<string, string> {
    return Object.fromEntries(
      Object.entries(headers).map(([key, value]) => [
        key,
        parseHttpHeaderAsString(value),
      ])
    );
  }

  private static _responseFromError(
    error: unknown
  ): EndpointFetchResponse | null {
    if (!error || typeof error !== 'object') {
      return null;
    }

    const endpointFetchError = error as EndpointFetchError;
    if (typeof endpointFetchError.status !== 'number') {
      return null;
    }

    return {
      status: endpointFetchError.status,
      body: endpointFetchError.body ?? '',
    };
  }
}

export class EndpointFetchHttpClientResponse extends HttpClientResponse {
  private _res: EndpointFetchResponse;

  constructor(res: EndpointFetchResponse) {
    super(res.status, {});
    this._res = res;
  }

  getRawResponse(): EndpointFetchResponse {
    return this._res;
  }

  toStream(streamCompleteCallback: () => void): never {
    throw new HttpClientRuntimeError(
      'Stripe: Streaming responses are not supported in this runtime.'
    );
  }

  toJSON(): Promise<any> {
    const body = this._res.body || '';
    try {
      return Promise.resolve(JSON.parse(body));
    } catch (e) {
      if (e instanceof Error) {
        (e as any).rawBody = body;
      }
      return Promise.reject(e);
    }
  }
}
