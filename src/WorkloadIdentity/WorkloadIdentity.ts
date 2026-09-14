import {generateOAuthError, StripeWorkloadIdentityError} from '../Error.js';
import {NodeHttpClient} from '../net/NodeHttpClient.js';
import {HttpClientInterface} from '../net/HttpClient.js';
import {RequestAuthenticator, StripeRequest} from '../Types.js';

const TOKEN_EXCHANGE_HOST = 'api.stripe.com';
const TOKEN_EXCHANGE_PORT = '443';
const TOKEN_EXCHANGE_PATH = '/stripe-workload/oauth2/token';
const TOKEN_EXCHANGE_TIMEOUT_MS = 1000;
const JWT_BEARER_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
// Refresh proactively once fewer than this much of the token's lifetime
// remains, so a request never races a token that's about to expire.
const REFRESH_WINDOW_MS = 5 * 60 * 1000;

/** Acquires a fresh, opaque cloud workload identity assertion. Never persisted. */
export type AssertionFetcher = () => Promise<string>;

type CachedToken = {accessToken: string; expiresAt: number};

/**
 * Builds a stateful `RequestAuthenticator` for workload identity
 * authentication: it caches the exchanged Stripe access token in memory,
 * shares a single in-flight refresh across concurrent callers, and exposes
 * `_invalidate()` so RequestSender can force a one-time re-exchange after a
 * 401. The assertion fetcher is injected so this logic is provider-agnostic
 * and tests never need real cloud credentials.
 */
export function createWorkloadIdentityAuthenticator(
  clientId: string,
  fetchAssertion: AssertionFetcher,
  httpClient: HttpClientInterface = new NodeHttpClient()
): RequestAuthenticator & {_isWorkloadIdentity: true; _invalidate: () => void} {
  let cache: CachedToken | null = null;
  let inFlightRefresh: Promise<void> | null = null;

  function hasUsableToken(): boolean {
    return !!cache && cache.expiresAt - Date.now() > REFRESH_WINDOW_MS;
  }

  async function exchangeForToken(): Promise<CachedToken> {
    let assertion;
    try {
      assertion = await fetchAssertion();
    } catch (e) {
      if (e instanceof StripeWorkloadIdentityError) {
        throw e;
      }
      throw new StripeWorkloadIdentityError(
        'Stripe: Unable to obtain a web identity assertion for workload identity authentication.',
        e
      );
    }

    const body = new URLSearchParams({
      grant_type: JWT_BEARER_GRANT_TYPE,
      client_id: clientId,
      assertion,
    }).toString();

    let res;
    try {
      res = await httpClient.makeRequest(
        TOKEN_EXCHANGE_HOST,
        TOKEN_EXCHANGE_PORT,
        TOKEN_EXCHANGE_PATH,
        'POST',
        {'Content-Type': 'application/x-www-form-urlencoded'},
        body,
        'https',
        TOKEN_EXCHANGE_TIMEOUT_MS
      );
    } catch (e) {
      throw new StripeWorkloadIdentityError(
        'Stripe: Unable to reach the Stripe workload identity token endpoint.',
        e
      );
    }

    let parsed: any;
    try {
      parsed = await res.toJSON();
    } catch (e) {
      throw new StripeWorkloadIdentityError(
        'Stripe: Received a malformed (non-JSON) response from the Stripe workload identity token endpoint.',
        e
      );
    }

    const statusCode = res.getStatusCode();
    if (statusCode >= 400) {
      if (parsed && typeof parsed.error === 'string') {
        throw generateOAuthError({
          type: parsed.error,
          message:
            parsed.error_description ||
            `Workload identity token exchange failed: ${parsed.error}`,
          statusCode,
        });
      }
      throw new StripeWorkloadIdentityError(
        `Stripe: Workload identity token exchange failed with HTTP status ${statusCode}.`
      );
    }

    if (
      !parsed ||
      typeof parsed.access_token !== 'string' ||
      parsed.access_token.length === 0 ||
      typeof parsed.expires_in !== 'number' ||
      !(parsed.expires_in > 0)
    ) {
      throw new StripeWorkloadIdentityError(
        'Stripe: The Stripe workload identity token endpoint returned a response missing a valid access_token/expires_in.'
      );
    }

    return {
      accessToken: parsed.access_token,
      expiresAt: Date.now() + parsed.expires_in * 1000,
    };
  }

  function refresh(): Promise<void> {
    if (!inFlightRefresh) {
      inFlightRefresh = exchangeForToken()
        .then((token) => {
          cache = token;
        })
        .finally(() => {
          inFlightRefresh = null;
        });
    }
    return inFlightRefresh;
  }

  const authenticator = (async (request: StripeRequest): Promise<void> => {
    if (!hasUsableToken()) {
      await refresh();
    }
    request.headers.Authorization = `Bearer ${
      (cache as CachedToken).accessToken
    }`;
  }) as RequestAuthenticator & {
    _isWorkloadIdentity: true;
    _invalidate: () => void;
  };

  authenticator._isWorkloadIdentity = true;
  // Used by RequestSender to force exactly one re-exchange after a 401.
  authenticator._invalidate = (): void => {
    cache = null;
  };

  return authenticator;
}
