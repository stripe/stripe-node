import _Stripe = require('./stripe.common');
import WebPlatformFunctions = require('./platform/WebPlatformFunctions');
import HttpClient = require('./net/HttpClient');

// Stripe._platformFunctions = new WebPlatformFunctions();
// Stripe.webhooks._platformFunctions = Stripe._platformFunctions;

// Stripe.createHttpClient = Stripe.createFetchHttpClient;
// Stripe.webhooks._createCryptoProvider = Stripe.createSubtleCryptoProvider;
const createFetchHttpClient = (fetchFn: typeof fetch): typeof HttpClient => {
  const {FetchHttpClient} = require('./net/FetchHttpClient');
  return new FetchHttpClient(fetchFn);
};
const createSubtleCryptoProvider = (
  subtleCrypto: typeof crypto.subtle
): StripeCryptoProvider => {
  const SubtleCryptoProvider = require('./crypto/SubtleCryptoProvider');
  return new SubtleCryptoProvider(subtleCrypto);
};

const Stripe = _Stripe.createStripe(
  new WebPlatformFunctions(),
  createFetchHttpClient,
  createSubtleCryptoProvider
);

module.exports = Stripe;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
