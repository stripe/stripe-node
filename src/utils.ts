import {RequestOptions} from './lib.js';
import {
  BaseAddress,
  RequestData,
  UrlInterpolator,
  RequestHeaders,
  MultipartRequestData,
  RequestAuthenticator,
  StripeRequest,
  ApiMode,
  DEFAULT_BASE_ADDRESSES,
} from './Types.js';

const OPTIONS_KEYS = [
  'apiKey',
  'idempotencyKey',
  'stripeAccount',
  'apiVersion',
  'maxNetworkRetries',
  'timeout',
  'apiBase',
  'authenticator',
  'stripeContext',
  'headers',
  'additionalHeaders',
  'streaming',
];

type Settings = {
  timeout?: number;
  maxNetworkRetries?: number;
};

type Options = {
  authenticator?: RequestAuthenticator | null;
  apiBase: BaseAddress | null;
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
export function queryStringifyRequestData(data: RequestData | string): string {
  return stringifyRequestData(data);
}

/**
 * Encodes a value for use in a query string, keeping brackets unencoded
 * for readability (the server accepts both encoded and unencoded brackets).
 */
function encodeQueryValue(value: string): string {
  return (
    encodeURIComponent(value)
      // Encode characters not encoded by encodeURIComponent but encoded by qs
      .replace(/!/g, '%21')
      .replace(/\*/g, '%2A')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/'/g, '%27')
      // Decode brackets for readability (server accepts both)
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']')
  );
}

/**
 * Converts a value to a string representation for query string encoding.
 * Dates are converted to Unix timestamps.
 */
function valueToString(value: unknown): string {
  if (value instanceof Date) {
    return Math.floor(value.getTime() / 1000).toString();
  }
  if (value === null) {
    return '';
  }
  return String(value);
}

/**
 * Custom query string stringifier that handles nested objects and arrays.
 * Produces output compatible with the qs library's indexed array format.
 */
function stringifyRequestData(data: RequestData | string): string {
  const pairs: string[] = [];

  function encode(key: string, value: unknown): void {
    if (value === undefined) {
      return;
    }

    if (value === null || typeof value !== 'object' || value instanceof Date) {
      // Primitive value (including null and Date)
      pairs.push(
        encodeQueryValue(key) + '=' + encodeQueryValue(valueToString(value))
      );
      return;
    }

    if (Array.isArray(value)) {
      // Array: use indexed format arr[0], arr[1], etc.
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== undefined) {
          encode(key + '[' + i + ']', value[i]);
        }
      }
      return;
    }

    // Object: recurse with bracket notation
    for (const k of Object.keys(value)) {
      encode(key + '[' + k + ']', (value as Record<string, unknown>)[k]);
    }
  }

  // Handle top-level object
  if (typeof data === 'object' && data !== null) {
    for (const key of Object.keys(data)) {
      encode(key, (data as Record<string, unknown>)[key]);
    }
  }

  return pairs.join('&');
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
 * enforces that only supplied API bases are allowed.
 */
export const validateApiBase = (apiBase: unknown): apiBase is BaseAddress => {
  if (typeof apiBase !== 'string') {
    throw new Error(`API base must be a string, got: ${typeof apiBase}`);
  }
  return apiBase in DEFAULT_BASE_ADDRESSES;
};

export type ProcessedOptions = {
  authenticator: RequestAuthenticator | null;
  headers: RequestHeaders;
  settings: {timeout?: number; maxNetworkRetries?: number};
  streaming: boolean;
  apiBase: BaseAddress | null;
};

export function processOptions(
  options: RequestOptions | undefined
): ProcessedOptions {
  const result: ProcessedOptions = {
    authenticator: null,
    headers: {},
    settings: {},
    streaming: false,
    apiBase: null,
  };

  if (!options) {
    return result;
  }

  if (options.apiKey) {
    result.authenticator = createApiKeyAuthenticator(options.apiKey);
  }
  if (options.idempotencyKey) {
    result.headers['Idempotency-Key'] = options.idempotencyKey;
  }
  if (options.stripeAccount) {
    result.headers['Stripe-Account'] = options.stripeAccount;
  }
  if (options.stripeContext) {
    if (result.headers['Stripe-Account']) {
      throw new Error("Can't specify both stripeAccount and stripeContext.");
    }
    result.headers['Stripe-Context'] = options.stripeContext as string;
  }
  if (options.apiVersion) {
    result.headers['Stripe-Version'] = options.apiVersion;
  }
  if (Number.isInteger(options.maxNetworkRetries)) {
    result.settings.maxNetworkRetries = options.maxNetworkRetries;
  }
  if (Number.isInteger(options.timeout)) {
    result.settings.timeout = options.timeout;
  }
  if (options.authenticator) {
    if (options.apiKey) {
      throw new Error("Can't specify both apiKey and authenticator.");
    }
    if (typeof options.authenticator !== 'function') {
      throw new Error(
        'The authenticator must be a function ' +
          'receiving a request as the first parameter.'
      );
    }
    result.authenticator = options.authenticator;
  }
  if (options.headers) {
    Object.assign(result.headers, options.headers);
  }
  if (options.streaming) {
    result.streaming = true;
  }

  return result;
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
      };
}

export const AI_AGENTS: [string, string][] = [
  // The beginning of the section generated from our OpenAPI spec
  ['ANTIGRAVITY_CLI_ALIAS', 'antigravity'],
  ['CLAUDECODE', 'claude_code'],
  ['CLINE_ACTIVE', 'cline'],
  ['CODEX_SANDBOX', 'codex_cli'],
  ['CODEX_THREAD_ID', 'codex_cli'],
  ['CODEX_SANDBOX_NETWORK_DISABLED', 'codex_cli'],
  ['CODEX_CI', 'codex_cli'],
  ['CURSOR_AGENT', 'cursor'],
  ['GEMINI_CLI', 'gemini_cli'],
  ['OPENCLAW_SHELL', 'openclaw'],
  ['OPENCODE', 'open_code'],
  // The end of the section generated from our OpenAPI spec
];

export function detectAIAgent(env: Record<string, string | undefined>): string {
  for (const [envVar, agentName] of AI_AGENTS) {
    if (env[envVar]) {
      return agentName;
    }
  }
  return '';
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

const CALL_SITE_MARKER = '\nOriginating from:';

/**
 * We do some async indirection in our HTTP calling code that means stack traces aren't correct traced back to their actual origin in userland
 * So, we call this with a manually sourced error right before we do async HTTP operations, capturing the stack trace
 * NOTE: Modifies the `err` arg.
 */
export function attachCallSiteToError(
  err: Error,
  callSiteStack: string | undefined
): void {
  if (!err || !err.stack || !callSiteStack) {
    return;
  }
  const callerFrames = callSiteStack.substring(callSiteStack.indexOf('\n') + 1);
  const existingMarkerIdx = err.stack.indexOf(CALL_SITE_MARKER);
  const baseStack =
    existingMarkerIdx >= 0
      ? err.stack.substring(0, existingMarkerIdx)
      : err.stack;
  err.stack = `${baseStack}${CALL_SITE_MARKER}\n${callerFrames}`;
}
