/**
 * The workload identity token exchange is deliberately pinned to a single
 * origin. An identity assertion proves where the application is running, so
 * sending one to an attacker-chosen endpoint would hand over a usable
 * credential. None of the client's configurable `host` / `port` / `protocol`
 * settings are applied here, and the exchange never follows redirects.
 */
export const WORKLOAD_IDENTITY_TOKEN_PROTOCOL = 'https';
export const WORKLOAD_IDENTITY_TOKEN_HOST = 'access.stripe.com';
export const WORKLOAD_IDENTITY_TOKEN_PORT = '443';
export const WORKLOAD_IDENTITY_TOKEN_PATH = '/wif/oauth2/token';
export const WORKLOAD_IDENTITY_TOKEN_URL = `${WORKLOAD_IDENTITY_TOKEN_PROTOCOL}://${WORKLOAD_IDENTITY_TOKEN_HOST}${WORKLOAD_IDENTITY_TOKEN_PATH}`;

/** The exchange is a single short request, so it gets its own fixed timeout. */
export const WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS = 30000;

export type WorkloadIdentityTokenResponse = {
  statusCode: number;
  /** The raw response body. Parsing is left to the caller so that a malformed body can be reported as such. */
  body: string;
};

/**
 *
 * `fetchFn` defaults to global `fetch`; tests pass a `fetch` implementation
 * `nock` can intercept (see `test/WorkloadIdentity.spec.ts`).
 */
export async function postWorkloadIdentityToken(
  body: string,
  fetchFn: typeof fetch = globalThis.fetch
): Promise<WorkloadIdentityTokenResponse> {
  if (!fetchFn) {
    throw new Error(
      'Stripe: Workload identity authentication requires a `fetch` implementation, and none is available in ' +
        "this runtime's global scope."
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS
  );

  let res: Response;
  try {
    res = await fetchFn(WORKLOAD_IDENTITY_TOKEN_URL, {
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
