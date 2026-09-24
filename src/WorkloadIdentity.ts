import {StripeWorkloadIdentityError} from './Error.js';
import {RequestAuthenticator, StripeRequest} from './Types.js';
import {
  WORKLOAD_IDENTITY_TOKEN_URL,
  WorkloadIdentityTokenTransport,
} from './net/WorkloadIdentityTokenTransport.js';
import {queryStringifyRequestData} from './utils.js';

export const WORKLOAD_IDENTITY_GRANT_TYPE =
  'urn:ietf:params:oauth:grant-type:jwt-bearer';

/** Granted keys normally live for an hour. */
const DEFAULT_TOKEN_LIFETIME_SEC = 3600;

/**
 * How early a cached key is replaced. With the usual 3,600s lifetime this
 * refreshes a key once it is 55 minutes old.
 */
const REFRESH_SAFETY_MARGIN_SEC = 300;

/** The only cloud provider supported during the private preview. */
export type WorkloadIdentityCloudProvider = 'aws';

export const SUPPORTED_WORKLOAD_IDENTITY_PROVIDERS: ReadonlyArray<string> = [
  'aws',
];

/**
 * The contract the core SDK expects from a workload identity adapter, such as
 * `@stripe/stripe-aws-workload-identity`.
 *
 * This is structural on purpose: the core `stripe` package never imports an
 * adapter or a cloud provider SDK, it only consumes the object handed to
 * `Stripe.forWorkloadIdentity`.
 */
export interface WorkloadIdentityProvider {
  /** Identifies the cloud provider the assertion comes from. */
  readonly provider: WorkloadIdentityCloudProvider;
  /** Resolves a signed workload identity assertion for the current process. */
  getIdentityAssertion(): Promise<string>;
}

/**
 * The single, explicit authentication mode a client was constructed with.
 *
 * Workload identity is never inferred from a missing API key: a client is in
 * `workload_identity` mode only when it came from `Stripe.forWorkloadIdentity`.
 */
export type AuthenticationMethod =
  | {
      mode: 'api_key';
      apiKey: string;
    }
  | {
      mode: 'workload_identity';
      clientId: string;
      identityProvider: WorkloadIdentityProvider;
    }
  /** The pre-existing `config.authenticator` escape hatch. */
  | {
      mode: 'custom_authenticator';
      authenticator: RequestAuthenticator;
    };

/**
 * Carries workload identity state from `Stripe.forWorkloadIdentity` into the
 * constructor. Keyed by a symbol so that it is neither a documented config
 * option nor visible to the constructor's `Object.keys` validation.
 */
export const WORKLOAD_IDENTITY_CONFIG = Symbol('stripeWorkloadIdentity');

export type WorkloadIdentityConfig = {
  clientId: string;
  identityProvider: WorkloadIdentityProvider;
  credentials: WorkloadIdentityCredentials;
};

export function readWorkloadIdentityConfig(
  config: unknown
): WorkloadIdentityConfig | null {
  if (!config || typeof config !== 'object') {
    return null;
  }
  return (
    ((config as Record<symbol, WorkloadIdentityConfig>)[
      WORKLOAD_IDENTITY_CONFIG
    ] as WorkloadIdentityConfig) ?? null
  );
}

export function attachWorkloadIdentityConfig<T>(
  config: T,
  workloadIdentity: WorkloadIdentityConfig
): T {
  return Object.assign({}, config, {
    [WORKLOAD_IDENTITY_CONFIG]: workloadIdentity,
  }) as T;
}

const EXCHANGE_GUIDANCE =
  'Common causes: the workload identity client ID is invalid or not enabled for workload identity, ' +
  'the client is not configured in the Stripe Dashboard to trust this workload, ' +
  'the process is not running on supported AWS infrastructure, or the Stripe token exchange is temporarily unavailable.';

export function validateWorkloadIdentityProvider(
  identityProvider: WorkloadIdentityProvider
): void {
  if (!identityProvider || typeof identityProvider !== 'object') {
    throw new StripeWorkloadIdentityError({
      message:
        '`Stripe.forWorkloadIdentity` requires a workload identity provider as its second argument, ' +
        'e.g. `awsWorkloadIdentity()` from `@stripe/stripe-aws-workload-identity`.',
    });
  }

  if (typeof identityProvider.getIdentityAssertion !== 'function') {
    throw new StripeWorkloadIdentityError({
      message:
        'The workload identity provider is invalid: it must expose a `getIdentityAssertion()` method. ' +
        'Use `awsWorkloadIdentity()` from `@stripe/stripe-aws-workload-identity`.',
    });
  }

  if (
    typeof identityProvider.provider !== 'string' ||
    !identityProvider.provider
  ) {
    throw new StripeWorkloadIdentityError({
      message:
        'The workload identity provider is invalid: it must expose a `provider` identifier. ' +
        'Use `awsWorkloadIdentity()` from `@stripe/stripe-aws-workload-identity`.',
    });
  }

  if (
    !SUPPORTED_WORKLOAD_IDENTITY_PROVIDERS.includes(identityProvider.provider)
  ) {
    throw new StripeWorkloadIdentityError({
      message:
        `Unsupported workload identity cloud provider '${identityProvider.provider}'. ` +
        `Only ${SUPPORTED_WORKLOAD_IDENTITY_PROVIDERS.join(
          ', '
        )} is supported.`,
    });
  }
}

type CachedWorkloadIdentityToken = {
  /** The restricted key granted by the exchange. Held in memory only. */
  accessToken: string;
  /** When the exchange that produced this key completed. */
  acquiredAt: number;
  /** When the key should be replaced, ahead of its actual expiry. */
  refreshAt: number;
  /** When the key actually expires, as reported by the exchange. */
  expiresAt: number;
};

function normalizeLifetimeSec(expiresIn: unknown): number {
  if (
    typeof expiresIn === 'number' &&
    Number.isFinite(expiresIn) &&
    expiresIn > 0
  ) {
    return expiresIn;
  }
  return DEFAULT_TOKEN_LIFETIME_SEC;
}

function refreshDelaySec(lifetimeSec: number): number {
  // A short-lived key still needs to be usable for something, so fall back to
  // half its lifetime rather than a non-positive window.
  return lifetimeSec > REFRESH_SAFETY_MARGIN_SEC
    ? lifetimeSec - REFRESH_SAFETY_MARGIN_SEC
    : lifetimeSec / 2;
}

/**
 * Owns the workload identity credential for one client: it exchanges an
 * identity assertion for a short-lived restricted key, caches that key in
 * memory, refreshes it ahead of expiry, and collapses concurrent acquisitions
 * into a single exchange.
 */
export class WorkloadIdentityCredentials {
  readonly clientId: string;
  readonly identityProvider: WorkloadIdentityProvider;

  /**
   * @private
   * Test seam for the fixed-endpoint exchange transport. This is not a public
   * option: exposing one would let an assertion be redirected off Stripe.
   */
  _transport: WorkloadIdentityTokenTransport;

  /**
   * @private
   * Test seam for the clock, so expiry can be exercised without waiting.
   */
  _now: () => number = () => Date.now();

  private _cached: CachedWorkloadIdentityToken | null = null;
  private _inFlight: Promise<string> | null = null;

  constructor(
    clientId: string,
    identityProvider: WorkloadIdentityProvider,
    transport: WorkloadIdentityTokenTransport
  ) {
    this.clientId = clientId;
    this.identityProvider = identityProvider;
    this._transport = transport;
  }

  /** The cached key, for tests and diagnostics. Never leaves the process. */
  peekCachedToken(): string | null {
    return this._cached?.accessToken ?? null;
  }

  /**
   * Returns a usable restricted key, reusing the cached one until it is due for
   * a proactive refresh.
   */
  getToken(): Promise<string> {
    const cached = this._cached;
    if (cached && this._now() < cached.refreshAt) {
      return Promise.resolve(cached.accessToken);
    }
    return this._exchangeOnce();
  }

  /**
   * Replaces the key a request found to be rejected.
   *
   * `staleToken` is the key that request actually used. The cache is only
   * discarded if it still holds that same key, so a late 401 cannot erase a
   * newer key another request has already installed.
   */
  refreshToken(staleToken: string | null): Promise<string> {
    if (staleToken && this._cached && this._cached.accessToken === staleToken) {
      this._cached = null;
    }

    const cached = this._cached;
    if (cached) {
      return Promise.resolve(cached.accessToken);
    }

    return this._exchangeOnce();
  }

  /**
   * Joins the in-flight exchange if there is one, so concurrent callers share a
   * single assertion acquisition and a single token exchange. The marker is
   * cleared on both settlement paths, so a failure is reported to everyone
   * waiting and a later operation may try again.
   */
  private _exchangeOnce(): Promise<string> {
    if (this._inFlight) {
      return this._inFlight;
    }

    const clear = (): void => {
      if (this._inFlight === inFlight) {
        this._inFlight = null;
      }
    };

    const inFlight: Promise<string> = this._exchange().then(
      (token) => {
        clear();
        return token;
      },
      (err) => {
        clear();
        throw err;
      }
    );

    this._inFlight = inFlight;
    return inFlight;
  }

  private async _exchange(): Promise<string> {
    const assertion = await this._getIdentityAssertion();

    const body = queryStringifyRequestData({
      grant_type: WORKLOAD_IDENTITY_GRANT_TYPE,
      client_id: this.clientId,
      assertion,
    });

    let response;
    try {
      response = await this._transport.post(body);
    } catch (err) {
      // The request body carries the assertion, so only the transport failure
      // itself is surfaced -- never the request that produced it.
      throw new StripeWorkloadIdentityError({
        message: `Unable to reach the Stripe workload identity token exchange at ${WORKLOAD_IDENTITY_TOKEN_URL}.`,
        exception: err,
      });
    }

    const parsed = parseJsonOrNull(response.body);

    if (response.statusCode >= 300 && response.statusCode < 400) {
      throw new StripeWorkloadIdentityError({
        message:
          `The Stripe workload identity token exchange responded with a redirect (HTTP ${response.statusCode}), which is not followed. ` +
          EXCHANGE_GUIDANCE,
        statusCode: response.statusCode,
      });
    }

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new StripeWorkloadIdentityError({
        message: `${describeExchangeRejection(
          response.statusCode,
          parsed,
          assertion
        )} ${EXCHANGE_GUIDANCE}`,
        statusCode: response.statusCode,
        code: readString(parsed, 'error'),
      });
    }

    const accessToken = readString(parsed, 'access_token');
    if (!accessToken) {
      throw new StripeWorkloadIdentityError({
        message:
          'The Stripe workload identity token exchange returned a response without a usable `access_token`. ' +
          EXCHANGE_GUIDANCE,
        statusCode: response.statusCode,
      });
    }

    const lifetimeSec = normalizeLifetimeSec(
      parsed && (parsed as Record<string, unknown>).expires_in
    );
    const acquiredAt = this._now();

    this._cached = {
      accessToken,
      acquiredAt,
      refreshAt: acquiredAt + refreshDelaySec(lifetimeSec) * 1000,
      expiresAt: acquiredAt + lifetimeSec * 1000,
    };

    return accessToken;
  }

  private async _getIdentityAssertion(): Promise<string> {
    let assertion: string;
    try {
      assertion = await this.identityProvider.getIdentityAssertion();
    } catch (err) {
      throw new StripeWorkloadIdentityError({
        message:
          `Unable to obtain a workload identity assertion from '${this.identityProvider.provider}'. ` +
          'Check that the process is running on supported infrastructure and is allowed to request an identity token. ' +
          'For local development, tests, and CI, use a test API key with `new Stripe(...)` or a fully mocked client instead.',
        exception: err,
      });
    }

    if (typeof assertion !== 'string' || !assertion) {
      throw new StripeWorkloadIdentityError({
        message: `The '${this.identityProvider.provider}' workload identity provider returned an empty assertion.`,
      });
    }

    return assertion;
  }
}

function parseJsonOrNull(body: string): unknown {
  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}

function readString(parsed: unknown, key: string): string | undefined {
  if (!parsed || typeof parsed !== 'object') {
    return undefined;
  }
  const value = (parsed as Record<string, unknown>)[key];
  return typeof value === 'string' && value ? value : undefined;
}

/** Bound on how much server-supplied text is relayed into an error message. */
const MAX_RELAYED_DESCRIPTION_LENGTH = 256;

/**
 * Prepares server-supplied text for inclusion in an error message. The response
 * comes from the only party that already holds the assertion, but an error
 * message ends up in logs, so a reflected credential is scrubbed rather than
 * trusted not to be there, and the text is length-bounded.
 */
function sanitizeRelayedText(text: string, secret: string): string {
  let sanitized = text;
  if (secret && secret.length >= 8) {
    sanitized = sanitized.split(secret).join('[redacted]');
  }
  return sanitized.length > MAX_RELAYED_DESCRIPTION_LENGTH
    ? `${sanitized.slice(0, MAX_RELAYED_DESCRIPTION_LENGTH)}...`
    : sanitized;
}

/**
 * Describes a rejected exchange using the server-provided OAuth error fields.
 */
function describeExchangeRejection(
  statusCode: number,
  parsed: unknown,
  assertion: string
): string {
  const error = readString(parsed, 'error');
  const description = readString(parsed, 'error_description');

  let message = `Stripe rejected the workload identity token exchange (HTTP ${statusCode})`;
  if (error) {
    message += `: ${sanitizeRelayedText(error, assertion)}`;
    if (description) {
      message += ` - ${sanitizeRelayedText(description, assertion)}`;
    }
  }
  return `${message}.`;
}

/**
 * Builds the request authenticator for a workload identity client. It applies
 * the restricted key in the same header an `sk_...` key would use.
 *
 * The credentials are hung off the authenticator so the request layer can tell
 * a workload identity request apart from one using a per-request API key
 * override, without reaching back into the client.
 */
export function createWorkloadIdentityAuthenticator(
  credentials: WorkloadIdentityCredentials
): RequestAuthenticator {
  const authenticator = (request: StripeRequest): Promise<void> =>
    credentials.getToken().then((token) => {
      request.headers.Authorization = `Bearer ${token}`;
    });

  authenticator._workloadIdentityCredentials = credentials;

  return authenticator;
}

type WorkloadIdentityAuthenticator = RequestAuthenticator & {
  _workloadIdentityCredentials?: WorkloadIdentityCredentials;
};

/**
 * Returns the credentials backing a request's authenticator, or null when the
 * request is not authenticated through workload identity.
 */
export function getWorkloadIdentityCredentials(
  authenticator: RequestAuthenticator | null
): WorkloadIdentityCredentials | null {
  return (
    (authenticator as WorkloadIdentityAuthenticator | null)
      ?._workloadIdentityCredentials ?? null
  );
}

/** Extracts the credential a request was actually signed with. */
export function extractBearerToken(
  value: string | number | string[] | undefined
): string | null {
  if (typeof value !== 'string' || !value.startsWith('Bearer ')) {
    return null;
  }
  return value.slice('Bearer '.length) || null;
}
