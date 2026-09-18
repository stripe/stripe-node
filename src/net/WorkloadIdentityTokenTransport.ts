/**
 * The workload identity token exchange is deliberately pinned to a single
 * origin. An identity assertion proves where the application is running, so
 * sending one to an attacker-chosen endpoint would hand over a usable
 * credential. None of the client's configurable `host` / `port` / `protocol`
 * settings are applied here, and the transport never follows redirects.
 */
export const WORKLOAD_IDENTITY_TOKEN_PROTOCOL = 'https';
export const WORKLOAD_IDENTITY_TOKEN_HOST = 'api.stripe.com';
export const WORKLOAD_IDENTITY_TOKEN_PORT = '443';
export const WORKLOAD_IDENTITY_TOKEN_PATH = '/stripe-workload/oauth2/token';
export const WORKLOAD_IDENTITY_TOKEN_URL = `${WORKLOAD_IDENTITY_TOKEN_PROTOCOL}://${WORKLOAD_IDENTITY_TOKEN_HOST}${WORKLOAD_IDENTITY_TOKEN_PATH}`;

/** The exchange is a single short request, so it gets its own fixed timeout. */
export const WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS = 30000;

export type WorkloadIdentityTokenResponse = {
  statusCode: number;
  /** The raw response body. Parsing is left to the caller so that a malformed body can be reported as such. */
  body: string;
};

/**
 * Minimal transport for the workload identity token exchange.
 *
 * This is intentionally not the public `HttpClientInterface`: implementations
 * choose the destination themselves rather than accepting one, which is what
 * keeps a configured client from redirecting an assertion.
 */
export interface WorkloadIdentityTokenTransport {
  /**
   * POSTs a form-encoded body to the fixed Stripe token endpoint.
   *
   * Implementations must not follow redirects and must not log the body.
   */
  post(body: string): Promise<WorkloadIdentityTokenResponse>;
}
