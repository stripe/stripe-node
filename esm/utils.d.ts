import { RequestData, UrlInterpolator, RequestArgs, StripeResourceObject, RequestHeaders, MultipartRequestData, RequestAuthenticator, ApiMode } from './Types.js';
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
export declare function isOptionsHash(o: unknown): boolean | unknown;
/**
 * Stringifies an Object, accommodating nested objects
 * (forming the conventional key 'parent[child]=value')
 */
export declare function queryStringifyRequestData(data: RequestData | string, apiMode?: ApiMode): string;
/**
 * Outputs a new function with interpolated object property values.
 * Use like so:
 *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
 *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
 */
export declare const makeURLInterpolator: (s: string) => UrlInterpolator;
export declare function extractUrlParams(path: string): Array<string>;
/**
 * Return the data argument from a list of arguments
 *
 * @param {object[]} args
 * @returns {object}
 */
export declare function getDataFromArgs(args: RequestArgs): RequestData;
/**
 * Return the options hash from a list of arguments
 */
export declare function getOptionsFromArgs(args: RequestArgs): Options;
/**
 * Provide simple "Class" extension mechanism.
 * <!-- Public API accessible via Stripe.StripeResource.extend -->
 */
export declare function protoExtend(this: any, sub: any): {
    new (...args: any[]): StripeResourceObject;
};
/**
 * Remove empty values from an object
 */
export declare function removeNullish<T extends Record<string, unknown>>(obj: T): T;
/**
 * Normalize standard HTTP Headers:
 * {'foo-bar': 'hi'}
 * becomes
 * {'Foo-Bar': 'hi'}
 */
export declare function normalizeHeaders(obj: RequestHeaders | null): RequestHeaders | null;
/**
 * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
 * without the exceptions which are irrelevant to us.
 */
export declare function normalizeHeader(header: string): string;
export declare function callbackifyPromiseWithTimeout<T>(promise: Promise<T>, callback: ((error: unknown, result: T | null) => void) | null): Promise<T | void>;
/**
 * Allow for special capitalization cases (such as OAuth)
 */
export declare function pascalToCamelCase(name: string): string;
export declare function emitWarning(warning: string): void;
export declare function isObject(obj: unknown): boolean;
export declare function flattenAndStringify(data: MultipartRequestData): Record<string, string | Uint8Array>;
export declare function validateInteger(name: string, n: unknown, defaultVal?: number): number;
export declare function determineProcessUserAgentProperties(): Record<string, string>;
export declare function createApiKeyAuthenticator(apiKey: string): RequestAuthenticator;
/**
 * Joins an array of Uint8Arrays into a single Uint8Array
 */
export declare function concat(arrays: Array<Uint8Array>): Uint8Array;
/**
 * JSON stringifies an Object, replacing Date objects with Unix timestamps
 */
export declare function jsonStringifyRequestData(data: RequestData | string): string;
/**
 * Inspects the given path to determine if the endpoint is for v1 or v2 API
 */
export declare function getAPIMode(path?: string): ApiMode;
export declare function parseHttpHeaderAsString<K extends keyof RequestHeaders>(header: RequestHeaders[K]): string;
export declare function parseHttpHeaderAsNumber<K extends keyof RequestHeaders>(header: RequestHeaders[K]): number;
export declare function parseHeadersForFetch(headers: RequestHeaders): [string, string][];
export {};
