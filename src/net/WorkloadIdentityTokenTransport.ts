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

export const WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS = 30000;

export type WorkloadIdentityTokenResponse = {
  statusCode: number;
  /** The raw response body. Parsing is left to the caller so that a malformed body can be reported as such. */
  body: string;
};

export interface WorkloadIdentityTokenTransport {
  /**
   * POSTs a form-encoded body to the fixed Stripe token endpoint.
   *
   * Implementations must not follow redirects and must not log the body.
   */
  post(body: string): Promise<WorkloadIdentityTokenResponse>;
}

export class FetchWorkloadIdentityTokenTransport
  implements WorkloadIdentityTokenTransport {
  private readonly _fetchFn: typeof fetch;

  /** @param fetchFn Test seam so callers can inject a fetch implementation nock can intercept. */
  constructor(fetchFn: typeof fetch = globalThis.fetch) {
    if (!fetchFn) {
      throw new Error(
        'Stripe: Workload identity authentication requires a `fetch` implementation, and none is available in ' +
          "this runtime's global scope."
      );
    }
    this._fetchFn = fetchFn;
  }

  async post(body: string): Promise<WorkloadIdentityTokenResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS
    );

    let res: Response;
    try {
      res = await this._fetchFn(WORKLOAD_IDENTITY_TOKEN_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
        redirect: 'error',
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    return {statusCode: res.status, body: await res.text()};
  }
}
