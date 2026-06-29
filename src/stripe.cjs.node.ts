import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {Stripe} from './stripe.core.js';
import {StripeConfig} from './lib.js';

// Initialize the Stripe class with Node platform functions
Stripe.initialize(new NodePlatformFunctions());

// Callable constructor: supports both `new Stripe()` and `Stripe()` for CJS consumers.
// typeof Stripe provides the construct signature and static members; the intersection
// adds a call signature for backward compatibility.
type StripeCallableConstructor = typeof Stripe & {
  (key: string, config?: StripeConfig): Stripe;
};

// Function declaration merges with the ambient namespace below (CJS `import type` / nested types).
// eslint-disable-next-line func-style
const StripeConstructor: StripeCallableConstructor = (function(
  this: any,
  key: string,
  config?: StripeConfig
): Stripe {
  // Support calling without `new`
  if (!(this instanceof StripeConstructor)) {
    return new Stripe(key, config);
  }
  return new Stripe(key, config);
} as unknown) as StripeCallableConstructor;

// Copy all static properties from Stripe to the wrapper
Object.setPrototypeOf(StripeConstructor, Stripe);
Object.setPrototypeOf(StripeConstructor.prototype, Stripe.prototype);

// Copy static properties explicitly
for (const key of Object.getOwnPropertyNames(Stripe)) {
  if (key !== 'length' && key !== 'prototype' && key !== 'name') {
    Object.defineProperty(StripeConstructor, key, {
      value: (Stripe as any)[key],
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}

// `new Stripe()` plus `Stripe()` call compat: the implementation is a function, so we merge
// callable + construct signatures here (see https://github.com/stripe/stripe-node/issues/2683).

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StripeConstructor extends Stripe {}
declare namespace StripeConstructor {
  export type Stripe = import('./stripe.core.js').Stripe;
  // StripeInterfaceCJSExports: The beginning of the section generated from our OpenAPI spec
  // StripeInterfaceCJSExports: The end of the section generated from our OpenAPI spec

  export type Response<T> = Stripe.Response<T>;
  export type RequestOptions = Stripe.RequestOptions;
  export type RawRequestOptions = Stripe.RawRequestOptions;
  export type ApiList<T> = Stripe.ApiList<T>;
  export type ApiListPromise<T> = Stripe.ApiListPromise<T>;
  export type ApiSearchResultPromise<T> = Stripe.ApiSearchResultPromise<T>;
  export type ApiSearchResult<T> = Stripe.ApiSearchResult<T>;
  export type StripeStreamResponse = Stripe.StripeStreamResponse;
  export type RequestEvent = Stripe.RequestEvent;
  export type ResponseEvent = Stripe.ResponseEvent;
  export type AppInfo = Stripe.AppInfo;
  export type FileData = Stripe.FileData;
  export type Metadata = Stripe.Metadata;
  export type MetadataParam = Stripe.MetadataParam;
  export type Address = Stripe.Address;
  export type JapanAddress = Stripe.JapanAddress;
  export type AddressParam = Stripe.AddressParam;
  export type ShippingAddressParam = Stripe.ShippingAddressParam;
  export type JapanAddressParam = Stripe.JapanAddressParam;
  export type RangeQueryParam = Stripe.RangeQueryParam;
  export type PaginationParams = Stripe.PaginationParams;
  export type Emptyable<T> = Stripe.Emptyable<T>;
  export type OAuthResource = Stripe.OAuthResource;
  export type OAuthToken = Stripe.OAuthToken;
  export type OAuthTokenParams = Stripe.OAuthTokenParams;
  export type OAuthAuthorizeUrlOptions = Stripe.OAuthAuthorizeUrlOptions;
  export type OAuthAuthorizeUrlParams = Stripe.OAuthAuthorizeUrlParams;
  export type OAuthDeauthorization = Stripe.OAuthDeauthorization;
  export type OAuthDeauthorizeParams = Stripe.OAuthDeauthorizeParams;
  export type StripeContextType = Stripe.StripeContextType;
  export type StripeRawError = Stripe.StripeRawError;
  export type Decimal = Stripe.Decimal;
  export namespace errors {
    export type StripeError = InstanceType<typeof Stripe.errors.StripeError>;
    export type StripeCardError = InstanceType<
      typeof Stripe.errors.StripeCardError
    >;
    export type StripeInvalidRequestError = InstanceType<
      typeof Stripe.errors.StripeInvalidRequestError
    >;
    export type StripeAPIError = InstanceType<
      typeof Stripe.errors.StripeAPIError
    >;
    export type StripeAuthenticationError = InstanceType<
      typeof Stripe.errors.StripeAuthenticationError
    >;
    export type StripePermissionError = InstanceType<
      typeof Stripe.errors.StripePermissionError
    >;
    export type StripeRateLimitError = InstanceType<
      typeof Stripe.errors.StripeRateLimitError
    >;
    export type StripeConnectionError = InstanceType<
      typeof Stripe.errors.StripeConnectionError
    >;
    export type StripeSignatureVerificationError = InstanceType<
      typeof Stripe.errors.StripeSignatureVerificationError
    >;
    export type StripeIdempotencyError = InstanceType<
      typeof Stripe.errors.StripeIdempotencyError
    >;
    export type StripeInvalidGrantError = InstanceType<
      typeof Stripe.errors.StripeInvalidGrantError
    >;
  }
}
export = StripeConstructor;
