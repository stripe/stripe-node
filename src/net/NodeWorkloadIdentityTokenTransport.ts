import * as https_ from 'https';
import {
  WORKLOAD_IDENTITY_TOKEN_HOST,
  WORKLOAD_IDENTITY_TOKEN_PATH,
  WORKLOAD_IDENTITY_TOKEN_PORT,
  WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS,
  WorkloadIdentityTokenResponse,
  WorkloadIdentityTokenTransport,
} from './WorkloadIdentityTokenTransport.js';

// Mirrors NodeHttpClient: the namespace object is immune to monkey-patching,
// so resolve through `default` when one exists to keep nock et al. working.
const https =
  ((https_ as unknown) as {default: typeof https_}).default || https_;

/**
 * Issues the workload identity token exchange over Node's `https` module.
 *
 * `https.request` never follows redirects, so a 3xx response is returned to the
 * caller as-is rather than replaying the assertion against another origin. The
 * destination is fixed and no user-supplied agent is used, so TLS always
 * authenticates `api.stripe.com` and the assertion is never routed through a
 * configured proxy.
 */
export class NodeWorkloadIdentityTokenTransport
  implements WorkloadIdentityTokenTransport {
  post(body: string): Promise<WorkloadIdentityTokenResponse> {
    return new Promise<WorkloadIdentityTokenResponse>((resolve, reject) => {
      const req = https.request({
        host: WORKLOAD_IDENTITY_TOKEN_HOST,
        port: WORKLOAD_IDENTITY_TOKEN_PORT,
        path: WORKLOAD_IDENTITY_TOKEN_PATH,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(body),
        },
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      req.setTimeout(WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS, () => {
        req.destroy(
          new Error(
            `The Stripe workload identity token exchange timed out after ${WORKLOAD_IDENTITY_TOKEN_TIMEOUT_MS}ms`
          )
        );
      });

      req.on('response', (res) => {
        const chunks: string[] = [];
        res.setEncoding('utf8');
        res.on('data', (chunk: string) => chunks.push(chunk));
        res.on('end', () =>
          resolve({statusCode: res.statusCode ?? 0, body: chunks.join('')})
        );
        res.on('error', reject);
      });

      req.on('error', reject);

      req.write(body);
      req.end();
    });
  }
}
