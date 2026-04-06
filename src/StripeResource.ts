import {
  makeURLInterpolator,
  processOptions,
  queryStringifyRequestData,
} from './utils.js';
import {
  StripeResourceObject,
  MakeRequestSpec,
  RequestData,
  RequestDataProcessor,
  UrlInterpolator,
} from './Types.js';
import {HttpClientResponseInterface} from './net/HttpClient.js';
import {coerceV2RequestData, coerceV2ResponseData} from './V2Coercion.js';
import {makeAutoPaginationMethods} from './autoPagination.js';
import {Stripe} from './stripe.core.js';
import {RequestOptions} from './lib.js';

/**
 * Encapsulates request logic for a Stripe Resource
 */
class StripeResource implements StripeResourceObject {
  static MAX_BUFFERED_REQUEST_METRICS = 100;

  // Instance properties
  _stripe!: Stripe;
  path!: UrlInterpolator;
  resourcePath = '';
  basePath!: UrlInterpolator;

  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: any = null;

  constructor(stripe: Stripe, deprecatedUrlData?: never) {
    this._stripe = stripe;
    if (deprecatedUrlData) {
      throw new Error(
        'Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.'
      );
    }

    this.basePath = makeURLInterpolator(
      // @ts-expect-error changing type of basePath
      this.basePath || stripe.getApiField('basePath')
    );
    // @ts-ignore changing type of path - path comes from prototype as string, convert to interpolator
    const rawPath = this.path || '';
    this.resourcePath = (rawPath as unknown) as string;
    this.path = makeURLInterpolator((rawPath as unknown) as string);

    this.initialize(stripe, deprecatedUrlData);
  }

  initialize(_stripe?: Stripe, _deprecatedUrlData?: never): void {}

  _makeRequest(
    method: string,
    path: string,
    params: RequestData | undefined,
    options: RequestOptions | undefined,
    spec?: MakeRequestSpec
  ): Promise<any> {
    const innerPromise = makeRequest(
      this._stripe,
      method,
      path,
      params,
      options,
      spec,
      this.requestDataProcessor?.bind(this)
    );

    // Attach auto-pagination methods for list/search endpoints
    if (spec?.methodType) {
      const requestMethod = method.toUpperCase();
      Object.assign(
        innerPromise,
        makeAutoPaginationMethods(
          this,
          params ? {...params} : {},
          options,
          requestMethod,
          path,
          spec,
          innerPromise
        )
      );
    }

    return innerPromise;
  }
}

export {StripeResource};

/**
 * Standalone request function that takes a Stripe instance instead of
 * requiring a StripeResource. Extracted from StripeResource._makeRequest
 * so that non-resource code (e.g. Ref.fetch()) can go through the same
 * pipeline — coercion, response transforms, requestDataProcessor — as
 * service method calls.
 */
export const makeRequest = (
  stripe: Stripe,
  method: string,
  path: string,
  params: RequestData | undefined,
  options: RequestOptions | undefined,
  spec?: MakeRequestSpec,
  requestDataProcessor?: RequestDataProcessor | null
): Promise<any> => {
  const requestMethod = method.toUpperCase();
  const encode = spec?.encode || ((data: RequestData): RequestData => data);
  const data = encode(params ? {...params} : {});
  const processed = processOptions(options);
  const apiBase = processed.apiBase || spec?.apiBase || null;
  const host = apiBase ? stripe.resolveBaseAddress(apiBase) : null;
  const streaming = processed.streaming || !!spec?.streaming;
  const headers = Object.assign(processed.headers, spec?.headers);
  const usage = spec?.usage || [];

  const dataInQuery = requestMethod === 'GET' || requestMethod === 'DELETE';
  let bodyData: RequestData | null = dataInQuery ? null : data;
  const queryData: RequestData = dataInQuery ? data : {};

  try {
    if (spec?.validator) {
      spec.validator(data, {headers});
    }
    if (spec?.requestSchema && bodyData) {
      bodyData = coerceV2RequestData(
        bodyData,
        spec.requestSchema
      ) as RequestData;
    }
  } catch (err) {
    return Promise.reject(err);
  }

  return new Promise<any>((resolve, reject) => {
    function requestCallback(
      err: any,
      response: HttpClientResponseInterface
    ): void {
      if (err) {
        reject(err);
      } else {
        try {
          if (spec?.responseSchema) {
            coerceV2ResponseData(response, spec.responseSchema, stripe);
          }
          resolve(
            spec?.transformResponseData
              ? spec.transformResponseData(response)
              : response
          );
        } catch (e) {
          reject(e);
        }
      }
    }

    const emptyQuery = Object.keys(queryData).length === 0;
    const fullPath = [
      path,
      emptyQuery ? '' : '?',
      queryStringifyRequestData(queryData),
    ].join('');

    stripe._requestSender._request(
      requestMethod,
      host,
      fullPath,
      bodyData,
      processed.authenticator,
      {
        headers,
        settings: processed.settings,
        streaming,
      },
      usage,
      requestCallback,
      requestDataProcessor ?? undefined
    );
  });
};
