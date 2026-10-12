import {StripeError, StripeSignatureVerificationError} from './Error.js';
import {
  CryptoProvider,
  CryptoProviderOnlySupportsAsyncError,
} from './crypto/CryptoProvider.js';
import {PlatformFunctions} from './platform/PlatformFunctions.js';
import {Event} from './resources/Events.js';
import {
  isBlankWebhookSecret,
  maybeExtractFromCloudProviderEnvelope,
  parsePayload,
} from './utils.js';

/**
 * Value of the `stripe-signature` header from Stripe.
 * Typically a string.
 *
 * Note that this is typed to accept an array of strings
 * so that it works seamlessly with express's types,
 * but will throw if an array is passed in practice
 * since express should never return this header as an array,
 * only a string.
 */
export type WebhookHeader = string | string[] | Uint8Array;
type WebhookParsedHeader = {
  signatures: Array<string>;
  timestamp: number;
};
type WebhookParsedEvent = {
  details: WebhookParsedHeader;
  decodedPayload: string;
  decodedHeader: string;
  suspectPayloadType: boolean;
};
type WebhookDebugMetadata = {
  secret?: string | null;
  destination?: string | null;
  payload?: string | null;
};
type SignatureValidationFailure =
  | 'invalid_payload_type'
  | 'signature_mismatch'
  | 'timestamp_outside_tolerance';

export type WebhookTestHeaderOptions = {
  timestamp?: number;
  payload: string;
  secret: string;
  scheme?: string;
  signature?: string;
  cryptoProvider?: CryptoProvider;
};

export type WebhookPayload = string | Uint8Array;
export type WebhookSignatureObject = {
  /**
   * Verifies the authenticity (and recency) of a webhook, throwing a `SignatureVerificationError`
   * if there's a mismatch. Useful for quickly validating incoming webhooks before storing them for
   * later processing (at which time you can use the `*WithoutVerification` methods for parsing).
   */
  verifyHeader: (
    encodedPayload: WebhookPayload,
    encodedHeader: WebhookHeader,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider,
    receivedAt?: number
  ) => boolean;
  /**
   * Verifies the authenticity (and recency) of a webhook (async version), throwing a
   * `SignatureVerificationError` if there's a mismatch.
   */
  verifyHeaderAsync: (
    encodedPayload: WebhookPayload,
    encodedHeader: WebhookHeader,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider,
    receivedAt?: number
  ) => Promise<boolean>;
};
export type WebhookObject = {
  DEFAULT_TOLERANCE: number;
  signature: WebhookSignatureObject | null;
  /**
   * Constructs a [snapshot event](https://docs.stripe.com/event-destinations#snapshot-payload) from an
   * incoming webhook after verifying its authenticity. To work with a webhook that has already been
   * verified (i.e. one from a cloud provider, an asynchronous queue, or during testing), see
   * `constructEventWithoutVerification`.
   */
  constructEvent: (
    payload: WebhookPayload,
    header: WebhookHeader,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider,
    receivedAt?: number
  ) => Event;
  /**
   * Constructs a [snapshot event](https://docs.stripe.com/event-destinations#snapshot-payload) from an
   * incoming webhook after verifying its authenticity (async version). To work with a webhook that
   * has already been verified (i.e. one from a cloud provider, an asynchronous queue, or during
   * testing), see `constructEventWithoutVerification`.
   */
  constructEventAsync: (
    payload: WebhookPayload,
    header: WebhookHeader,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider,
    receivedAt?: number
  ) => Promise<Event>;
  /**
   * Constructs a [snapshot event](https://docs.stripe.com/event-destinations#snapshot-payload) from an
   * incoming webhook without first verifying its authenticity. Should be used after calling
   * `webhooks.verifySignatureHeader(...)` or with input from a trusted source (such as
   * [AWS EventBridge](https://docs.stripe.com/event-destinations/eventbridge), or
   * [Azure Event Grid](https://docs.stripe.com/event-destinations/eventgrid) payload). Or, to verify &
   * construct in a single call, use `webhooks.constructEvent(...)` instead.
   */
  constructEventWithoutVerification: (payload: string) => Event;
  /**
   * Compute the `Stripe-Signature` header for a given webhook body & secret. Useful for signing
   * payloads in unit tests.
   *
   * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
   * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
   * @property {string} secret - Stripe webhook secret 'whsec_...'
   * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
   * @property {string} signature - Computed webhook signature
   * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
   */
  generateTestHeaderString: (opts: WebhookTestHeaderOptions) => string;
  generateTestHeaderStringAsync: (
    opts: WebhookTestHeaderOptions
  ) => Promise<string>;
};

export function createWebhooks(
  platformFunctions: PlatformFunctions
): WebhookObject {
  function buildEvent(jsonPayload: Record<string, unknown>): Event {
    if (jsonPayload && jsonPayload.object === 'v2.core.event') {
      throw new Error(
        'You passed a thin event notification to a function that expects a webhook. Use the corresponding EventNotification method instead.'
      );
    }
    return (jsonPayload as unknown) as Event;
  }

  const Webhook: WebhookObject = {
    DEFAULT_TOLERANCE: 300, // 5 minutes
    signature: null,
    constructEvent(
      payload: WebhookPayload,
      header: WebhookHeader,
      secret: string,
      tolerance?: number,
      cryptoProvider?: CryptoProvider,
      receivedAt?: number
    ): Event {
      try {
        if (!this.signature) {
          throw new Error('ERR: missing signature helper, unable to verify');
        }

        cryptoProvider = cryptoProvider || getCryptoProvider();

        this.signature.verifyHeader(
          payload,
          header,
          secret,
          tolerance ?? Webhook.DEFAULT_TOLERANCE,
          cryptoProvider,
          receivedAt
        );
      } catch (e) {
        if (e instanceof CryptoProviderOnlySupportsAsyncError) {
          e.message +=
            '\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`';
        }
        throw e;
      }

      return buildEvent(parsePayload(payload));
    },

    async constructEventAsync(
      payload: WebhookPayload,
      header: WebhookHeader,
      secret: string,
      tolerance?: number,
      cryptoProvider?: CryptoProvider,
      receivedAt?: number
    ): Promise<Event> {
      if (!this.signature) {
        throw new Error('ERR: missing signature helper, unable to verify');
      }

      cryptoProvider = cryptoProvider || getCryptoProvider();

      await this.signature.verifyHeaderAsync(
        payload,
        header,
        secret,
        tolerance ?? Webhook.DEFAULT_TOLERANCE,
        cryptoProvider,
        receivedAt
      );

      return buildEvent(parsePayload(payload));
    },

    constructEventWithoutVerification(payload: string): Event {
      return buildEvent(maybeExtractFromCloudProviderEnvelope(payload));
    },

    generateTestHeaderString: function(opts: WebhookTestHeaderOptions): string {
      try {
        const preparedOpts = prepareOptions(opts);

        const signature =
          preparedOpts.signature ||
          preparedOpts.cryptoProvider.computeHMACSignature(
            preparedOpts.payloadString,
            preparedOpts.secret
          );

        return preparedOpts.generateHeaderString(signature);
      } catch (e) {
        if (e instanceof CryptoProviderOnlySupportsAsyncError) {
          e.message +=
            '\nUse `await generateTestHeaderStringAsync(...)` instead of `generateTestHeaderString(...)`';
        }
        throw e;
      }
    },
    generateTestHeaderStringAsync: async function(
      opts: WebhookTestHeaderOptions
    ) {
      const preparedOpts = prepareOptions(opts);

      const signature =
        preparedOpts.signature ||
        (await preparedOpts.cryptoProvider.computeHMACSignatureAsync(
          preparedOpts.payloadString,
          preparedOpts.secret
        ));

      return preparedOpts.generateHeaderString(signature);
    },
  };

  const signature = {
    EXPECTED_SCHEME: 'v1',

    verifyHeader(
      encodedPayload: WebhookPayload,
      encodedHeader: WebhookHeader,
      secret: string,
      tolerance?: number,
      cryptoProvider?: CryptoProvider,
      receivedAt?: number
    ): boolean {
      const {
        decodedHeader: header,
        decodedPayload: payload,
        details,
        suspectPayloadType,
      } = parseEventDetails(
        encodedPayload,
        encodedHeader,
        this.EXPECTED_SCHEME
      );
      if (isBlankWebhookSecret(secret)) {
        throw new StripeSignatureVerificationError(header, payload, {
          message:
            'No webhook secret value was provided. It should start with `whsec_`',
        });
      }
      const provider = cryptoProvider || getCryptoProvider();
      const expectedSignature = provider.computeHMACSignature(
        makeHMACContent(payload, details),
        secret
      );

      const failure = validateComputedSignature(
        details,
        expectedSignature,
        tolerance ?? Webhook.DEFAULT_TOLERANCE,
        suspectPayloadType,
        receivedAt
      );
      if (failure) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: getSignatureVerificationErrorMessage(
            header,
            payload,
            secret,
            failure,
            provider
          ),
        });
      }

      return true;
    },

    async verifyHeaderAsync(
      encodedPayload: WebhookPayload,
      encodedHeader: WebhookHeader,
      secret: string,
      tolerance?: number,
      cryptoProvider?: CryptoProvider,
      receivedAt?: number
    ): Promise<boolean> {
      const {
        decodedHeader: header,
        decodedPayload: payload,
        details,
        suspectPayloadType,
      } = parseEventDetails(
        encodedPayload,
        encodedHeader,
        this.EXPECTED_SCHEME
      );
      if (isBlankWebhookSecret(secret)) {
        throw new StripeSignatureVerificationError(header, payload, {
          message:
            'No webhook secret value was provided. It should start with `whsec_`',
        });
      }
      const provider = cryptoProvider || getCryptoProvider();
      const expectedSignature = await provider.computeHMACSignatureAsync(
        makeHMACContent(payload, details),
        secret
      );

      const failure = validateComputedSignature(
        details,
        expectedSignature,
        tolerance ?? Webhook.DEFAULT_TOLERANCE,
        suspectPayloadType,
        receivedAt
      );
      if (failure) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: await getSignatureVerificationErrorMessageAsync(
            header,
            payload,
            secret,
            failure,
            provider
          ),
        });
      }

      return true;
    },
  };

  function makeHMACContent(
    payload: WebhookPayload,
    details: WebhookParsedHeader
  ): string {
    return `${details.timestamp}.${payload}`;
  }

  function parseEventDetails(
    encodedPayload: WebhookPayload,
    encodedHeader: WebhookHeader,
    expectedScheme: string
  ): WebhookParsedEvent {
    // Express's type for `Request#headers` is `string | []string`
    // which is because the `set-cookie` header is an array,
    // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
    // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
    if (Array.isArray(encodedHeader)) {
      throw new Error(
        'Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.'
      );
    }

    if (!encodedPayload) {
      throw new StripeSignatureVerificationError(
        encodedHeader,
        encodedPayload,
        {
          message: 'No webhook payload was provided.',
        }
      );
    }

    const suspectPayloadType =
      typeof encodedPayload != 'string' &&
      !(encodedPayload instanceof Uint8Array);

    const textDecoder = new TextDecoder('utf8');
    const decodedPayload =
      encodedPayload instanceof Uint8Array
        ? textDecoder.decode(encodedPayload)
        : encodedPayload;

    if (encodedHeader == null || encodedHeader == '') {
      throw new StripeSignatureVerificationError(
        encodedHeader,
        encodedPayload,
        {
          message: 'No stripe-signature header value was provided.',
        }
      );
    }

    const decodedHeader =
      encodedHeader instanceof Uint8Array
        ? textDecoder.decode(encodedHeader)
        : encodedHeader;

    const details = parseHeader(decodedHeader, expectedScheme);

    if (!details || details.timestamp === -1) {
      throw new StripeSignatureVerificationError(
        decodedHeader,
        decodedPayload,
        {
          message: 'Unable to extract timestamp and signatures from header',
        }
      );
    }

    if (!details.signatures.length) {
      throw new StripeSignatureVerificationError(
        decodedHeader,
        decodedPayload,
        {
          message: 'No signatures found with expected scheme',
        }
      );
    }

    return {
      decodedPayload,
      decodedHeader,
      details,
      suspectPayloadType,
    };
  }

  /**
   * Validates that at least one signature in the parsed header matches the
   * expected signature, and that the event timestamp is within the allowed
   * {@link tolerance} window (in seconds). Set `tolerance` to `0` to skip
   * timestamp verification.
   *
   * This method is mostly meant for tests or offline processing where the delivery time
   * of the event isn't important.
   * Integrations that process webhooks as they come in should use constructEvent method instead.
   *
   * @param details Parsed header containing timestamp and signatures.
   * @param expectedSignature HMAC signature computed from the payload and secret.
   * @param tolerance Maximum allowed age of the event in seconds. Use 0 to skip timestamp tolerance verification.
   * @param suspectPayloadType Whether the payload was not a string or Buffer.
   * @param receivedAt - Timestamp for age calculation
   * @returns The failure reason, or `null` if the signature and timestamp are valid.
   */
  function validateComputedSignature(
    details: WebhookParsedHeader,
    expectedSignature: string,
    tolerance: number,
    suspectPayloadType: boolean,
    receivedAt?: number
  ): SignatureValidationFailure | null {
    const matchingSignatureFound = !!details.signatures.filter(
      platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)
    ).length;

    if (!matchingSignatureFound) {
      return suspectPayloadType ? 'invalid_payload_type' : 'signature_mismatch';
    }

    const timestampAge =
      Math.floor(
        (typeof receivedAt === 'number' ? receivedAt : Date.now()) / 1000
      ) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      return 'timestamp_outside_tolerance';
    }

    return null;
  }

  function getSignatureVerificationErrorMessage(
    header: string,
    payload: string,
    secret: string,
    failure: SignatureValidationFailure,
    cryptoProvider: CryptoProvider
  ): string {
    if (failure === 'signature_mismatch') {
      const metadata = getSignatureDebugMetadata(header);
      let errorMessage = getMismatchedSecretErrorMessage(metadata, secret);
      // If metadata includes the truncated payload hash, compare with the payload passed in
      if (!errorMessage && metadata.payload) {
        try {
          const hash = cryptoProvider.computeSHA256(
            new TextEncoder().encode(payload)
          );
          errorMessage = getMismatchedPayloadErrorMessage(
            metadata.payload,
            hash
          );
        } catch {
          // Ignore and fall back to a more generic error
        }
      }
      if (errorMessage) {
        return errorMessage;
      }
    }
    return getDefaultSignatureErrorMessage(failure, secret);
  }

  async function getSignatureVerificationErrorMessageAsync(
    header: string,
    payload: string,
    secret: string,
    failure: SignatureValidationFailure,
    cryptoProvider: CryptoProvider
  ): Promise<string> {
    if (failure === 'signature_mismatch') {
      const metadata = getSignatureDebugMetadata(header);
      let errorMessage = getMismatchedSecretErrorMessage(metadata, secret);
      // If metadata includes the truncated payload hash, compare with the payload passed in
      if (!errorMessage && metadata.payload) {
        try {
          const hash = await cryptoProvider.computeSHA256Async(
            new TextEncoder().encode(payload)
          );
          errorMessage = getMismatchedPayloadErrorMessage(
            metadata.payload,
            hash
          );
        } catch {
          // Ignore and fall back to a more generic error
        }
      }
      if (errorMessage) {
        return errorMessage;
      }
    }
    return getDefaultSignatureErrorMessage(failure, secret);
  }

  /** @return An diagnostic error message about a mismatch with the supplied signing secret, or null if it's fine. */
  function getMismatchedSecretErrorMessage(
    metadata: WebhookDebugMetadata,
    secret: string
  ): string | null {
    // If metadata has an asterisk-masked secret, compare against its length and last four characters
    const maskedSecret = metadata.secret || '';
    const secretSuffix = secret.slice(-4);
    if (
      maskedSecret.includes('*') &&
      (secret.length !== maskedSecret.length ||
        secretSuffix !== maskedSecret.slice(-4))
    ) {
      let dashboardUrl = 'https://dashboard.stripe.com/webhooks';
      if (metadata.destination) {
        dashboardUrl += `/${encodeURIComponent(metadata.destination)}`;
      }
      return (
        'Webhook signature verification failed. This request may not have originated from Stripe.\n\n' +
        `The signing secret you provided is ${secret.length} characters long and ends in \`${secretSuffix}\`. ` +
        `However, the signing secret for this destination is ${maskedSecret.length} characters long ` +
        `and looks like \`${maskedSecret}\`. Ensure you're using the signing secret for this ` +
        `destination, as shown on the Dashboard: ${dashboardUrl}\n\n` +
        'Learn more: https://docs.stripe.com/webhooks/signature'
      );
    }

    return null;
  }

  /** @return An diagnostic error message about a mismatch with the supplied payload, or null if it's fine. */
  function getMismatchedPayloadErrorMessage(
    expectedHash: string,
    hash: Uint8Array
  ): string | null {
    const actualHash = Array.from(hash.slice(-4), (byte) =>
      byte.toString(16).padStart(2, '0')
    ).join('');
    if (expectedHash === actualHash) {
      return null;
    }
    return (
      'Webhook signature verification failed.\n\n' +
      'The request body you passed to this function differs from the request body sent by Stripe ' +
      'to this webhook destination.\n' +
      `The SHA-256 hash of the body should end in \`${expectedHash}\`. However, ` +
      `the SHA-256 hash of the body you provided ends in \`${actualHash}\`.\n\n` +
      'Make sure your code does not reformat or otherwise alter the raw HTTP request body ' +
      'before passing it to this function.\n\n' +
      'Learn more: https://docs.stripe.com/webhooks/signature'
    );
  }

  /** @return The diagnostic error message that corresponds to the given failure mode. */
  function getDefaultSignatureErrorMessage(
    failure: SignatureValidationFailure,
    secret: string
  ): string {
    if (failure === 'timestamp_outside_tolerance') {
      return 'Timestamp outside the tolerance zone';
    }

    const docsLocation =
      '\nLearn more about webhook signing and explore webhook integration examples for various frameworks at ' +
      'https://docs.stripe.com/webhooks/signature';
    const whitespaceMessage = /\s/.test(secret)
      ? '\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value'
      : '';

    if (failure === 'invalid_payload_type') {
      return (
        'Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.' +
        'Payload was provided as a parsed JavaScript object instead. \n' +
        'Signature verification is impossible without access to the original signed material. \n' +
        docsLocation +
        '\n' +
        whitespaceMessage
      );
    }

    return (
      'No signatures found matching the expected signature for payload. ' +
      'Are you passing the raw request body you received from Stripe?\n' +
      'If a webhook request is being forwarded by a third-party tool, ' +
      'ensure that the exact request body, including JSON formatting and new line style, is preserved.\n' +
      docsLocation +
      '\n' +
      whitespaceMessage
    );
  }

  /** @return Metadata from the stripe-signature header value to help debug verification failures. */
  function getSignatureDebugMetadata(header: string): WebhookDebugMetadata {
    // For each metadata key, extract the first value found in the header
    const metadata: WebhookDebugMetadata = {};
    for (const item of header.split(/,\s*/)) {
      const separator = item.indexOf('=');
      const key = separator === -1 ? item : item.slice(0, separator);
      if (
        (key === 'secret' || key === 'destination' || key === 'payload') &&
        !Object.prototype.hasOwnProperty.call(metadata, key)
      ) {
        const value = separator === -1 ? null : item.slice(separator + 1);
        // Ignore overly long, potentially attacker-provided metadata values
        metadata[key] =
          value !== null && value.length <= 100 ? value.trim() || null : null;
      }
    }
    if (metadata.payload) {
      metadata.payload =
        metadata.payload.length === 8 &&
        /^[0-9a-fA-F]{8}$/.test(metadata.payload)
          ? metadata.payload.toLowerCase()
          : null;
    }
    return metadata;
  }

  function parseHeader(
    header: WebhookHeader,
    scheme?: string
  ): WebhookParsedHeader | null {
    if (typeof header !== 'string') {
      return null;
    }
    scheme = scheme || signature.EXPECTED_SCHEME;

    return header.split(',').reduce<WebhookParsedHeader>(
      (accum, item) => {
        const kv = item.split('=');

        if (kv[0] === 't') {
          accum.timestamp = parseInt(kv[1], 10);
        }

        if (kv[0] === scheme) {
          accum.signatures.push(kv[1]);
        }

        return accum;
      },
      {
        timestamp: -1,
        signatures: [],
      }
    );
  }

  let webhooksCryptoProviderInstance: CryptoProvider | null = null;

  /**
   * Lazily instantiate a CryptoProvider instance. This is a stateless object
   * so a singleton can be used here.
   */
  function getCryptoProvider(): CryptoProvider {
    if (!webhooksCryptoProviderInstance) {
      webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
    }
    return webhooksCryptoProviderInstance;
  }

  function prepareOptions(
    opts: WebhookTestHeaderOptions
  ): Omit<
    WebhookTestHeaderOptions,
    'timestamp' | 'scheme' | 'cryptoProvider'
  > & {
    timestamp: number;
    scheme: string;
    cryptoProvider: CryptoProvider;
    payloadString: string;
    generateHeaderString: (signature: string) => string;
  } {
    if (!opts) {
      throw new StripeError({
        message: 'Options are required',
      });
    }

    const timestamp =
      (opts.timestamp && Math.floor(opts.timestamp)) ||
      Math.floor(Date.now() / 1000);
    const scheme = opts.scheme || signature.EXPECTED_SCHEME;
    const cryptoProvider = opts.cryptoProvider || getCryptoProvider();
    const payloadString = `${timestamp}.${opts.payload}`;

    const generateHeaderString = (signature: string): string => {
      return `t=${timestamp},${scheme}=${signature}`;
    };

    return {
      ...opts,
      timestamp,
      scheme,
      cryptoProvider,
      payloadString,
      generateHeaderString,
    };
  }

  Webhook.signature = signature;

  return Webhook;
}
