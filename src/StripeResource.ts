import {
  getDataFromArgs,
  getOptionsFromArgs,
  makeURLInterpolator,
  protoExtend,
  queryStringifyRequestData,
} from './utils.js';
import {stripeMethod} from './StripeMethod.js';
import {
  StripeResourceObject,
  StripeObject,
  RequestArgs,
  MethodSpec,
  RequestData,
  RequestOpts,
  UrlInterpolator,
} from './Types.js';
import {HttpClientResponseInterface} from './net/HttpClient.js';

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = protoExtend;

// Expose method-creator
StripeResource.method = stripeMethod;

StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(
  this: StripeResourceObject,
  stripe: StripeObject,
  deprecatedUrlData?: never
): void {
  this._stripe = stripe;
  if (deprecatedUrlData) {
    throw new Error(
      'Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.'
    );
  }

  this.basePath = makeURLInterpolator(
    // @ts-ignore changing type of basePath
    this.basePath || stripe.getApiField('basePath')
  );
  // @ts-ignore changing type of path
  this.resourcePath = this.path;
  // @ts-ignore changing type of path
  this.path = makeURLInterpolator(this.path);

  this.initialize(...arguments);
}

StripeResource.prototype = {
  _stripe: null as StripeObject | null,
  // @ts-ignore the type of path changes in ctor
  path: '' as UrlInterpolator,
  resourcePath: '',

  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null!,

  initialize(): void {},

  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath(
    commandPath: string | ((urlData: Record<string, unknown>) => string),
    urlData: Record<string, unknown>
  ): string {
    const urlParts = [this.basePath(urlData), this.path(urlData)];

    if (typeof commandPath === 'function') {
      const computedCommandPath = commandPath(urlData);
      // If we have no actual command path, we just omit it to avoid adding a
      // trailing slash. This is important for top-level listing requests, which
      // do not have a command path.
      if (computedCommandPath) {
        urlParts.push(computedCommandPath);
      }
    } else {
      urlParts.push(commandPath);
    }

    return this._joinUrlParts(urlParts);
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(pathWithSymbols: string | null): string {
    // If there is no path beyond the resource path, we want to produce just
    // /<resource path> rather than /<resource path>/.
    if (pathWithSymbols) {
      return `/${this._joinUrlParts([this.resourcePath, pathWithSymbols])}`;
    } else {
      return `/${this.resourcePath}`;
    }
  },

  _joinUrlParts(parts: Array<string>): string {
    // Replace any accidentally doubled up slashes. This previously used
    // path.join, which would do this as well. Unfortunately we need to do this
    // as the functions for creating paths are technically part of the public
    // interface and so we need to preserve backwards compatibility.
    return parts.join('/').replace(/\/{2,}/g, '/');
  },

  _getRequestOpts(
    requestArgs: RequestArgs,
    spec: MethodSpec,
    overrideData: RequestData
  ): RequestOpts {
    // Extract spec values with defaults.
    const requestMethod = (spec.method || 'GET').toUpperCase();
    const urlParams = spec.urlParams || [];
    const encode = spec.encode || ((data): RequestData => data);

    const isUsingFullPath = !!spec.fullPath;
    const commandPath: UrlInterpolator = makeURLInterpolator(
      isUsingFullPath ? spec.fullPath! : spec.path || ''
    );
    // When using fullPath, we ignore the resource path as it should already be
    // fully qualified.
    const path = isUsingFullPath
      ? spec.fullPath
      : this.createResourcePathWithSymbols(spec.path);

    // Don't mutate args externally.
    const args: RequestArgs = [].slice.call(requestArgs);

    // Generate and validate url params.
    const urlData = urlParams.reduce<RequestData>((urlData, param) => {
      const arg = args.shift();
      if (typeof arg !== 'string') {
        throw new Error(
          `Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`
        );
      }

      urlData[param] = arg;
      return urlData;
    }, {});

    // Pull request data and options (headers, auth) from args.
    const dataFromArgs = getDataFromArgs(args);
    const data = encode(Object.assign({}, dataFromArgs, overrideData));
    const options = getOptionsFromArgs(args);
    const host = options.host || spec.host;
    const streaming = !!spec.streaming;

    // Validate that there are no more args.
    if (args.filter((x) => x != null).length) {
      throw new Error(
        `Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`
      );
    }

    // When using full path, we can just invoke the URL interpolator directly
    // as we don't need to use the resource to create a full path.
    const requestPath = isUsingFullPath
      ? commandPath(urlData)
      : this.createFullPath(commandPath, urlData);

    const headers = Object.assign(options.headers, spec.headers);

    if (spec.validator) {
      spec.validator(data, {headers});
    }

    const dataInQuery = spec.method === 'GET' || spec.method === 'DELETE';
    const bodyData = dataInQuery ? {} : data;
    const queryData = dataInQuery ? data : {};

    return {
      requestMethod,
      requestPath,
      bodyData,
      queryData,
      auth: options.auth,
      headers,
      host: host ?? null,
      streaming,
      settings: options.settings,
    };
  },

  _makeRequest(
    requestArgs: RequestArgs,
    spec: MethodSpec,
    overrideData: RequestData
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let opts: RequestOpts;
      try {
        opts = this._getRequestOpts(requestArgs, spec, overrideData);
      } catch (err) {
        reject(err);
        return;
      }

      function requestCallback(
        err: any,
        response: HttpClientResponseInterface
      ): void {
        if (err) {
          reject(err);
        } else {
          resolve(
            spec.transformResponseData
              ? spec.transformResponseData(response)
              : response
          );
        }
      }

      const emptyQuery = Object.keys(opts.queryData).length === 0;
      const path = [
        opts.requestPath,
        emptyQuery ? '' : '?',
        queryStringifyRequestData(opts.queryData),
      ].join('');

      const {headers, settings} = opts;

      this._stripe._requestSender._request(
        opts.requestMethod,
        opts.host,
        path,
        opts.bodyData,
        opts.auth,
        {headers, settings, streaming: opts.streaming},
        requestCallback,
        this.requestDataProcessor?.bind(this)
      );
    });
  },
} as StripeResourceObject;

export {StripeResource};
