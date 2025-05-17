/**
 * A function to dynamically apply custom headers for each outgoing request.
 *
 * Useful for custom authentication logic (e.g. per-tenant API keys).
 *
 * @param request - Metadata for the outgoing HTTP request.
 * @returns A headers object or a promise resolving to one.
 */
export type RequestAuthenticator = (request: {
    method: string;
    url: string;
    headers: Record<string, string>;
  }) => Promise<Record<string, string>> | Record<string, string>;
  