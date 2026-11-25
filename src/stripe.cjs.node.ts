import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import * as Stripe_ from './stripe.barrel.js';
import {Stripe as StripeClass} from './stripe.core.js';

// Initialize the Stripe class with Node platform functions
StripeClass.initialize(new NodePlatformFunctions());

// Extension-point SDKs export a plain class so the namespace below can carry the
// generated extension namespaces as values (`export import`), which TypeScript only
// merges with a class, not with a const. Unlike stripe-node, `Stripe(key)` without
// `new` is not supported.
class StripeConstructor extends StripeClass {}
namespace StripeConstructor {
  export type Stripe = StripeClass;
  // StripeInterfaceCJSExports: The beginning of the section generated from our OpenAPI spec
  // StripeInterfaceCJSExports: The end of the section generated from our OpenAPI spec

  export type Response<T> = Stripe_.Response<T>;
  export type RequestOptions = Stripe_.RequestOptions;
  export type RawRequestOptions = Stripe_.RawRequestOptions;
  export type ApiList<T> = Stripe_.ApiList<T>;
  export type ApiListPromise<T> = Stripe_.ApiListPromise<T>;
  export type V2List<T> = Stripe_.V2List<T>;
  export type V2ListPromise<T> = Stripe_.V2ListPromise<T>;
  export type V2SearchResult<T> = Stripe_.V2SearchResult<T>;
  export type V2SearchResultPromise<T> = Stripe_.V2SearchResultPromise<T>;
  export type ApiSearchResultPromise<T> = Stripe_.ApiSearchResultPromise<T>;
  export type ApiSearchResult<T> = Stripe_.ApiSearchResult<T>;
  export type StripeStreamResponse = Stripe_.StripeStreamResponse;
  export type RequestEvent = Stripe_.RequestEvent;
  export type ResponseEvent = Stripe_.ResponseEvent;
  export type AppInfo = Stripe_.AppInfo;
  export type FileData = Stripe_.FileData;
  export type Metadata = Stripe_.Metadata;
  export type MetadataParam = Stripe_.MetadataParam;
  export type Address = Stripe_.Address;
  export type JapanAddress = Stripe_.JapanAddress;
  export type AddressParam = Stripe_.AddressParam;
  export type ShippingAddressParam = Stripe_.ShippingAddressParam;
  export type JapanAddressParam = Stripe_.JapanAddressParam;
  export type RangeQueryParam = Stripe_.RangeQueryParam;
  export type PaginationParams = Stripe_.PaginationParams;
  export type Emptyable<T> = Stripe_.Emptyable<T>;
  export type StripeConfig = Stripe_.StripeConfig;
  export type LatestApiVersion = Stripe_.LatestApiVersion;
  export type HttpAgent = Stripe_.HttpAgent;
  export type HttpProtocol = Stripe_.HttpProtocol;
  export type OtherString = Stripe_.OtherString;
  export type StripeEventNotificationHandler = Stripe_.StripeEventNotificationHandler;
  export type StripeEventNotificationHandlerWithoutVerification = Stripe_.StripeEventNotificationHandlerWithoutVerification;
  export type UnhandledNotificationDetails = Stripe_.UnhandledNotificationDetails;
  export type HttpClient = Stripe_.HttpClientInterface;
  export type HttpClientResponse = Stripe_.HttpClientResponseInterface;
  export type CryptoProvider = Stripe_.CryptoProvider;
  export type StripeResource = Stripe_.StripeResource;
  export type RawErrorType = Stripe_.RawErrorType;
  export type Webhooks = Stripe_.Webhooks;
  export type WebhookTestHeaderOptions = Stripe_.WebhookTestHeaderOptions;
  export type Signature = Stripe_.Signature;
  export type StripeContextType = Stripe_.StripeContextType;
  export type StripeRawError = Stripe_.StripeRawError;
  export type Decimal = Stripe_.Decimal;
  export namespace errors {
    export type StripeError = InstanceType<typeof StripeClass.errors.StripeError>;
    export type StripeCardError = InstanceType<
      typeof StripeClass.errors.StripeCardError
    >;
    export type StripeInvalidRequestError = InstanceType<
      typeof StripeClass.errors.StripeInvalidRequestError
    >;
    export type StripeAPIError = InstanceType<
      typeof StripeClass.errors.StripeAPIError
    >;
    export type StripeAuthenticationError = InstanceType<
      typeof StripeClass.errors.StripeAuthenticationError
    >;
    export type StripePermissionError = InstanceType<
      typeof StripeClass.errors.StripePermissionError
    >;
    export type StripeRateLimitError = InstanceType<
      typeof StripeClass.errors.StripeRateLimitError
    >;
    export type StripeConnectionError = InstanceType<
      typeof StripeClass.errors.StripeConnectionError
    >;
    export type StripeSignatureVerificationError = InstanceType<
      typeof StripeClass.errors.StripeSignatureVerificationError
    >;
    export type StripeIdempotencyError = InstanceType<
      typeof StripeClass.errors.StripeIdempotencyError
    >;
    export type StripeInvalidGrantError = InstanceType<
      typeof StripeClass.errors.StripeInvalidGrantError
    >;
  }
}
export = StripeConstructor;
