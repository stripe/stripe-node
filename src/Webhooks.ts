import {StripeError, StripeSignatureVerificationError} from './Error.js';
import {
  CryptoProvider,
  CryptoProviderOnlySupportsAsyncError,
} from './crypto/CryptoProvider.js';
import {PlatformFunctions} from './platform/PlatformFunctions.js';

type WebhookHeader = string | Uint8Array;
type WebhookParsedHeader = {
  signatures: Array<string>;
  timestamp: number;
};
type WebhookParsedEvent = {
  details: WebhookParsedHeader;
  decodedPayload: WebhookHeader;
  decodedHeader: WebhookPayload;
  suspectPayloadType: boolean;
};
type WebhookTestHeaderOptions = {
  timestamp: number;
  payload: string;
  secret: string;
  scheme: string;
  signature: string;
  cryptoProvider: CryptoProvider;
};

export type WebhookEvent = Record<string, unknown>;
type WebhookPayload = string | Uint8Array;
type WebhookSignatureObject = {
  verifyHeader: (
    encodedPayload: WebhookPayload,
    encodedHeader: WebhookHeader,
    secret: string,
    tolerance: number,
    cryptoProvider: CryptoProvider,
    receivedAt: number
  ) => boolean;
  verifyHeaderAsync: (
    encodedPayload: WebhookPayload,
    encodedHeader: WebhookHeader,
    secret: string,
    tolerance: number,
    cryptoProvider: CryptoProvider,
    receivedAt: number
  ) => Promise<boolean>;
};
export type WebhookObject = {
  DEFAULT_TOLERANCE: number;
  signature: WebhookSignatureObject;
  constructEvent: (
    payload: WebhookPayload,
    header: WebhookHeader,
    secret: string,
    tolerance: null,
    cryptoProvider: CryptoProvider,
    receivedAt: number
  ) => WebhookEvent;
  constructEventAsync: (
    payload: WebhookPayload,
    header: WebhookHeader,
    secret: string,
    tolerance: number,
    cryptoProvider: CryptoProvider,
    receivedAt: number
  ) => Promise<WebhookEvent>;
  generateTestHeaderString: (opts: WebhookTestHeaderOptions) => string;
  generateTestHeaderStringAsync: (
    opts: WebhookTestHeaderOptions
  ) => Promise<string>;
};

export function createWebhooks(
  platformFunctions: PlatformFunctions
): WebhookObject {
  const Webhook: WebhookObject = {
    DEFAULT_TOLERANCE: 300, // 5 minutes
    // @ts-ignore
    signature: null,
    constructEvent(
      payload: WebhookPayload,
      header: WebhookHeader,
      secret: string,
      tolerance: null,
      cryptoProvider: CryptoProvider,
      receivedAt: number
    ): WebhookEvent {
      try {
        this.signature.verifyHeader(
          payload,
          header,
          secret,
          tolerance || Webhook.DEFAULT_TOLERANCE,
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

      const jsonPayload =
        payload instanceof Uint8Array
          ? JSON.parse(new TextDecoder('utf8').decode(payload))
          : JSON.parse(payload);
      return jsonPayload;
    },

    async constructEventAsync(
      payload: WebhookPayload,
      header: WebhookHeader,
      secret: string,
      tolerance: number,
      cryptoProvider: CryptoProvider,
      receivedAt: number
    ): Promise<WebhookEvent> {
      await this.signature.verifyHeaderAsync(
        payload,
        header,
        secret,
        tolerance || Webhook.DEFAULT_TOLERANCE,
        cryptoProvider,
        receivedAt
      );

      const jsonPayload =
        payload instanceof Uint8Array
          ? JSON.parse(new TextDecoder('utf8').decode(payload))
          : JSON.parse(payload);
      return jsonPayload;
    },

    /**
     * Generates a header to be used for webhook mocking
     *
     * @typedef {object} opts
     * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
     * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
     * @property {string} secret - Stripe webhook secret 'whsec_...'
     * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
     * @property {string} signature - Computed webhook signature
     * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
     */
    generateTestHeaderString: function(opts: WebhookTestHeaderOptions): string {
      const preparedOpts = prepareOptions(opts);

      const signature =
        preparedOpts.signature ||
        preparedOpts.cryptoProvider.computeHMACSignature(
          preparedOpts.payloadString,
          preparedOpts.secret
        );

      return preparedOpts.generateHeaderString(signature);
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
      tolerance: number,
      cryptoProvider: CryptoProvider,
      receivedAt: number
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
      const secretContainsWhitespace = /\s/.test(secret);

      cryptoProvider = cryptoProvider || getCryptoProvider();
      const expectedSignature = cryptoProvider.computeHMACSignature(
        makeHMACContent(payload, details),
        secret
      );

      validateComputedSignature(
        payload,
        header,
        details,
        expectedSignature,
        tolerance,
        suspectPayloadType,
        secretContainsWhitespace,
        receivedAt
      );

      return true;
    },

    async verifyHeaderAsync(
      encodedPayload: WebhookPayload,
      encodedHeader: WebhookHeader,
      secret: string,
      tolerance: number,
      cryptoProvider: CryptoProvider,
      receivedAt: number
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
      const secretContainsWhitespace = /\s/.test(secret);

      cryptoProvider = cryptoProvider || getCryptoProvider();

      const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(
        makeHMACContent(payload, details),
        secret
      );

      return validateComputedSignature(
        payload,
        header,
        details,
        expectedSignature,
        tolerance,
        suspectPayloadType,
        secretContainsWhitespace,
        receivedAt
      );
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

    // Express's type for `Request#headers` is `string | []string`
    // which is because the `set-cookie` header is an array,
    // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
    // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
    if (Array.isArray(encodedHeader)) {
      throw new Error(
        'Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.'
      );
    }

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

  function validateComputedSignature(
    payload: WebhookPayload,
    header: WebhookHeader,
    details: WebhookParsedHeader,
    expectedSignature: string,
    tolerance: number,
    suspectPayloadType: boolean,
    secretContainsWhitespace: boolean,
    receivedAt: number
  ): boolean {
    const signatureFound = !!details.signatures.filter(
      platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)
    ).length;

    const docsLocation =
      '\nLearn more about webhook signing and explore webhook integration examples for various frameworks at ' +
      'https://docs.stripe.com/webhooks/signature';

    const whitespaceMessage = secretContainsWhitespace
      ? '\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value'
      : '';

    if (!signatureFound) {
      if (suspectPayloadType) {
        throw new StripeSignatureVerificationError(header, payload, {
          message:
            'Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.' +
            'Payload was provided as a parsed JavaScript object instead. \n' +
            'Signature verification is impossible without access to the original signed material. \n' +
            docsLocation +
            '\n' +
            whitespaceMessage,
        });
      }
      throw new StripeSignatureVerificationError(header, payload, {
        message:
          'No signatures found matching the expected signature for payload.' +
          ' Are you passing the raw request body you received from Stripe? \n' +
          ' If a webhook request is being forwarded by a third-party tool,' +
          ' ensure that the exact request body, including JSON formatting and new line style, is preserved.\n' +
          docsLocation +
          '\n' +
          whitespaceMessage,
      });
    }

    const timestampAge =
      Math.floor(
        (typeof receivedAt === 'number' ? receivedAt : Date.now()) / 1000
      ) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      // @ts-ignore
      throw new StripeSignatureVerificationError(header, payload, {
        message: 'Timestamp outside the tolerance zone',
      });
    }

    return true;
  }

  function parseHeader(
    header: WebhookHeader,
    scheme: string
  ): WebhookParsedHeader | null {
    if (typeof header !== 'string') {
      return null;
    }

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
    return webhooksCryptoProviderInstance!;
  }

  function prepareOptions(
    opts: WebhookTestHeaderOptions
  ): WebhookTestHeaderOptions & {
    payloadString: string;
    generateHeaderString: (signature: string) => string;
  } {
    if (!opts) {
      throw new StripeError({
        message: 'Options are required',
      });
    }

    const timestamp =
      Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
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
