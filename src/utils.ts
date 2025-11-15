import * as qs from 'qs';
import {
  RequestData,
  UrlInterpolator,
  RequestArgs,
  StripeResourceObject,
  RequestHeaders,
  MultipartRequestData,
  RequestAuthenticator,
  StripeRequest,
  ApiMode,
} from './Types.js';

const OPTIONS_KEYS = [
  'apiKey',
  'idempotencyKey',
  'stripeAccount',
  'apiVersion',
  'maxNetworkRetries',
  'timeout',
  'host',
  'authenticator',
  'stripeContext',
  'additionalHeaders',
  'streaming',
];

type Settings = {
  timeout?: number;
  maxNetworkRetries?: number;
};

type Options = {
  authenticator?: RequestAuthenticator | null;
  host: string | null;
  settings: Settings;
  streaming?: boolean;
  headers: RequestHeaders;
};

export function isOptionsHash(o: unknown): boolean | unknown {
  return (
    o &&
    typeof o === 'object' &&
    OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop))
  );
}

/**
 * Stringifies an Object, accommodating nested objects
 * (forming the conventional key 'parent[child]=value')
 */
export function queryStringifyRequestData(
  data: RequestData | string,
  apiMode?: ApiMode
): string {
  return (
    qs
      .stringify(data, {
        serializeDate: (d: Date) => Math.floor(d.getTime() / 1000).toString(),
        // Always use indexed format for arrays
        arrayFormat: 'indices',
      })
      // Don't use strict form encoding by changing the square bracket control
      // characters back to their literals. This is fine by the server, and
      // makes these parameter strings easier to read.
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']')
  );
}

/**
 * Outputs a new function with interpolated object property values.
 * Use like so:
 *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
 *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
 */
export const makeURLInterpolator = ((): ((s: string) => UrlInterpolator) => {
  const rc = {
    '\n': '\\n',
    '"': '\\"',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  } as Record<string, string>;
  return (str: string): UrlInterpolator => {
    const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
    return (outputs: Record<string, unknown>): string => {
      return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => {
        const output = outputs[$1];
        if (isValidEncodeUriComponentType(output))
          return encodeURIComponent(output);
        return '';
      });
    };
  };
})();

function isValidEncodeUriComponentType(
  value: unknown
): value is number | string | boolean {
  return ['number', 'string', 'boolean'].includes(typeof value);
}

export function extractUrlParams(path: string): Array<string> {
  const params = path.match(/\{\w+\}/g);
  if (!params) {
    return [];
  }

  return params.map((param) => param.replace(/[{}]/g, ''));
}

/**
 * Return the data argument from a list of arguments
 *
 * @param {object[]} args
 * @returns {object}
 */
export function getDataFromArgs(args: RequestArgs): RequestData {
  if (!Array.isArray(args) || !args[0] || typeof args[0] !== 'object') {
    return {};
  }

  if (!isOptionsHash(args[0])) {
    return args.shift();
  }

  const argKeys = Object.keys(args[0]);

  const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));

  // In some cases options may be the provided as the first argument.
  // Here we're detecting a case where there are two distinct arguments
  // (the first being args and the second options) and with known
  // option keys in the first so that we can warn the user about it.
  if (
    optionKeysInArgs.length > 0 &&
    optionKeysInArgs.length !== argKeys.length
  ) {
    emitWarning(
      `Options found in arguments (${optionKeysInArgs.join(
        ', '
      )}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`
    );
  }

  return {};
}

/**
 * Return the options hash from a list of arguments
 */
export function getOptionsFromArgs(args: RequestArgs): Options {
  const opts: Options = {
    host: null,
    headers: {},
    settings: {},
    streaming: false,
  };
  if (args.length > 0) {
    const arg = args[args.length - 1];
    if (typeof arg === 'string') {
      opts.authenticator = createApiKeyAuthenticator(args.pop() as string);
    } else if (isOptionsHash(arg)) {
      const params = {...(args.pop() as Record<string, unknown>)};

      const extraKeys = Object.keys(params).filter(
        (key) => !OPTIONS_KEYS.includes(key)
      );

      if (extraKeys.length) {
        emitWarning(
          `Invalid options found (${extraKeys.join(', ')}); ignoring.`
        );
      }

      if (params.apiKey) {
        opts.authenticator = createApiKeyAuthenticator(params.apiKey as string);
      }
      if (params.idempotencyKey) {
        opts.headers['Idempotency-Key'] = params.idempotencyKey as string;
      }
      if (params.stripeAccount) {
        opts.headers['Stripe-Account'] = params.stripeAccount as string;
      }
      if (params.stripeContext) {
        if (opts.headers['Stripe-Account']) {
          throw new Error(
            "Can't specify both stripeAccount and stripeContext."
          );
        }
        opts.headers['Stripe-Context'] = params.stripeContext as string;
      }
      if (params.apiVersion) {
        opts.headers['Stripe-Version'] = params.apiVersion as string;
      }
      if (Number.isInteger(params.maxNetworkRetries)) {
        opts.settings.maxNetworkRetries = params.maxNetworkRetries as number;
      }
      if (Number.isInteger(params.timeout)) {
        opts.settings.timeout = params.timeout as number;
      }
      if (params.host) {
        opts.host = params.host as string;
      }
      if (params.authenticator) {
        if (params.apiKey) {
          throw new Error("Can't specify both apiKey and authenticator.");
        }
        if (typeof params.authenticator !== 'function') {
          throw new Error(
            'The authenticator must be a function ' +
              'receiving a request as the first parameter.'
          );
        }
        opts.authenticator = params.authenticator as RequestAuthenticator;
      }
      if (params.additionalHeaders) {
        opts.headers = params.additionalHeaders as {
          [headerName: string]: string;
        };
      }
      if (params.streaming) {
        opts.streaming = true;
      }
    }
  }
  return opts;
}

/**
 * Provide simple "Class" extension mechanism.
 * <!-- Public API accessible via Stripe.StripeResource.extend -->
 */
export function protoExtend(
  this: any,
  sub: any
): {new (...args: any[]): StripeResourceObject} {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const Super = this;
  const Constructor = Object.prototype.hasOwnProperty.call(sub, 'constructor')
    ? sub.constructor
    : function(this: StripeResourceObject, ...args: any[]): void {
        Super.apply(this, args);
      };

  // This initialization logic is somewhat sensitive to be compatible with
  // divergent JS implementations like the one found in Qt. See here for more
  // context:
  //
  // https://github.com/stripe/stripe-node/pull/334
  Object.assign(Constructor, Super);
  Constructor.prototype = Object.create(Super.prototype);
  Object.assign(Constructor.prototype, sub);

  return Constructor;
}

/**
 * Remove empty values from an object
 */
export function removeNullish<T extends Record<string, unknown>>(obj: T): T {
  if (typeof obj !== 'object') {
    throw new Error('Argument must be an object');
  }

  return Object.keys(obj).reduce<Record<string, unknown>>((result, key) => {
    if (obj[key] != null) {
      result[key] = obj[key];
    }
    return result;
  }, {}) as T;
}

/**
 * Normalize standard HTTP Headers:
 * {'foo-bar': 'hi'}
 * becomes
 * {'Foo-Bar': 'hi'}
 */
export function normalizeHeaders(
  obj: RequestHeaders | null
): RequestHeaders | null {
  if (!(obj && typeof obj === 'object')) {
    return obj;
  }

  return Object.keys(obj).reduce<RequestHeaders>((result, header) => {
    result[normalizeHeader(header)] = obj[header];
    return result;
  }, {});
}

/**
 * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
 * without the exceptions which are irrelevant to us.
 */
export function normalizeHeader(header: string): string {
  return header
    .split('-')
    .map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())
    .join('-');
}

export function callbackifyPromiseWithTimeout<T>(
  promise: Promise<T>,
  callback: ((error: unknown, result: T | null) => void) | null
): Promise<T | void> {
  if (callback) {
    // Ensure callback is called outside of promise stack.
    return promise.then(
      (res) => {
        setTimeout(() => {
          callback(null, res);
        }, 0);
      },
      (err) => {
        setTimeout(() => {
          callback(err, null);
        }, 0);
      }
    );
  }

  return promise;
}

/**
 * Allow for special capitalization cases (such as OAuth)
 */
export function pascalToCamelCase(name: string): string {
  if (name === 'OAuth') {
    return 'oauth';
  } else {
    return name[0].toLowerCase() + name.substring(1);
  }
}

export function emitWarning(warning: string): void {
  if (typeof process.emitWarning !== 'function') {
    return console.warn(
      `Stripe: ${warning}`
    ); /* eslint-disable-line no-console */
  }

  return process.emitWarning(warning, 'Stripe');
}

export function isObject(obj: unknown): boolean {
  const type = typeof obj;
  return (type === 'function' || type === 'object') && !!obj;
}

// For use in multipart requests
export function flattenAndStringify(
  data: MultipartRequestData
): Record<string, string | Uint8Array> {
  const result: Record<string, string | Uint8Array> = {};

  const step = (obj: MultipartRequestData, prevKey: string | null): void => {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = prevKey ? `${prevKey}[${key}]` : key;

      if (isObject(value)) {
        if (
          !(value instanceof Uint8Array) &&
          !Object.prototype.hasOwnProperty.call(value, 'data')
        ) {
          // Non-buffer non-file Objects are recursively flattened
          return step(value, newKey);
        } else {
          // Buffers and file objects are stored without modification
          result[newKey] = value;
        }
      } else {
        // Primitives are converted to strings
        result[newKey] = String(value);
      }
    });
  };

  step(data, null);

  return result;
}

export function validateInteger(
  name: string,
  n: unknown,
  defaultVal?: number
): number {
  if (!Number.isInteger(n)) {
    if (defaultVal !== undefined) {
      return defaultVal;
    } else {
      throw new Error(`${name} must be an integer`);
    }
  }

  return n as number;
}

export function determineProcessUserAgentProperties(): Record<string, string> {
  return typeof process === 'undefined'
    ? {}
    : {
        lang_version: process.version,
        platform: process.platform,
      };
}

export function createApiKeyAuthenticator(
  apiKey: string
): RequestAuthenticator {
  const authenticator = (request: StripeRequest): Promise<void> => {
    request.headers.Authorization = 'Bearer ' + apiKey;
    return Promise.resolve();
  };

  // For testing
  authenticator._apiKey = apiKey;

  return authenticator;
}

/**
 * Joins an array of Uint8Arrays into a single Uint8Array
 */
export function concat(arrays: Array<Uint8Array>): Uint8Array {
  const totalLength = arrays.reduce((len, array) => len + array.length, 0);
  const merged = new Uint8Array(totalLength);

  let offset = 0;
  arrays.forEach((array) => {
    merged.set(array, offset);
    offset += array.length;
  });

  return merged;
}

/**
 * Replaces Date objects with Unix timestamps
 */
function dateTimeReplacer(this: any, key: string, value: any): string {
  if (this[key] instanceof Date) {
    return Math.floor(this[key].getTime() / 1000).toString();
  }

  return value;
}

/**
 * JSON stringifies an Object, replacing Date objects with Unix timestamps
 */
export function jsonStringifyRequestData(data: RequestData | string): string {
  return JSON.stringify(data, dateTimeReplacer);
}

/**
 * Inspects the given path to determine if the endpoint is for v1 or v2 API
 */
export function getAPIMode(path?: string): ApiMode {
  if (!path) {
    return 'v1';
  }
  return path.startsWith('/v2') ? 'v2' : 'v1';
}

export function parseHttpHeaderAsString<K extends keyof RequestHeaders>(
  header: RequestHeaders[K]
): string {
  if (Array.isArray(header)) {
    return header.join(', ');
  }
  return String(header);
}

export function parseHttpHeaderAsNumber<K extends keyof RequestHeaders>(
  header: RequestHeaders[K]
): number {
  const number = Array.isArray(header) ? header[0] : header;
  return Number(number);
}

export function parseHeadersForFetch(
  headers: RequestHeaders
): [string, string][] {
  return Object.entries(headers).map(([key, value]) => {
    return [key, parseHttpHeaderAsString(value)];
  });
}
