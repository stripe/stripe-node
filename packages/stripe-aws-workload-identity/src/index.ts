import {
  GetWebIdentityTokenCommand,
  STSClient,
  STSClientConfig,
} from '@aws-sdk/client-sts';

/**
 * The audience Stripe requires in an AWS workload identity token. It is fixed:
 * a token minted for any other audience is not accepted by Stripe.
 */
export const STRIPE_WORKLOAD_IDENTITY_AUDIENCE =
  'https://access.stripe.com/wif';

/** The signing algorithm Stripe requires for the identity token. */
export const STRIPE_WORKLOAD_IDENTITY_SIGNING_ALGORITHM = 'ES384';

/**
 * The structural contract the Stripe SDK consumes. It is duplicated here rather
 * than imported so that this package does not depend on `stripe`, and `stripe`
 * does not depend on the AWS SDK.
 */
export interface WorkloadIdentityProvider {
  readonly provider: 'aws';
  getIdentityAssertion(): Promise<string>;
}

export type AwsWorkloadIdentityOptions = {
  /**
   * Optional AWS STS client configuration. Omit it to use the AWS SDK's normal
   * region and credential resolution.
   */
  stsClientConfig?: STSClientConfig;
};

/** Raised when AWS would not produce a usable workload identity assertion. */
export class AwsWorkloadIdentityError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = 'AwsWorkloadIdentityError';
    if (cause !== undefined) {
      // `cause` is ES2022; assign it so the original AWS failure survives on
      // runtimes that render it, without requiring a newer compile target.
      (this as {cause?: unknown}).cause = cause;
    }
  }
}

const SETUP_GUIDANCE =
  'Check that the process is running on AWS infrastructure with an identity that is allowed to call ' +
  'sts:GetWebIdentityToken, and that a region is configured (the operation is not available on the STS global endpoint). ' +
  'For local development, unit tests, and CI that are not running on AWS, use a normal Stripe test API key with ' +
  '`new Stripe(apiKey)` or a fully mocked Stripe client instead.';

/**
 * Builds the AWS workload identity provider for `Stripe.forWorkloadIdentity`.
 *
 * Each call to `getIdentityAssertion()` asks AWS STS for a freshly signed JWT
 * that proves the calling AWS identity. Stripe exchanges that assertion for a
 * short-lived restricted key; this package never sees the Stripe credential.
 *
 * ```js
 * import Stripe from 'stripe';
 * import {awsWorkloadIdentity} from '@stripe/stripe-aws-workload-identity';
 *
 * const client = Stripe.forWorkloadIdentity('oacli_live_...', awsWorkloadIdentity());
 * ```
 */
export function awsWorkloadIdentity(
  options: AwsWorkloadIdentityOptions = {}
): WorkloadIdentityProvider {
  const client = new STSClient(options.stsClientConfig ?? {});

  return {
    provider: 'aws',

    async getIdentityAssertion(): Promise<string> {
      let response;
      try {
        response = await client.send(
          new GetWebIdentityTokenCommand({
            Audience: [STRIPE_WORKLOAD_IDENTITY_AUDIENCE],
            SigningAlgorithm: STRIPE_WORKLOAD_IDENTITY_SIGNING_ALGORITHM,
          })
        );
      } catch (err) {
        throw new AwsWorkloadIdentityError(
          `Unable to obtain an AWS workload identity assertion: sts:GetWebIdentityToken failed${describeAwsError(
            err
          )}. ${SETUP_GUIDANCE}`,
          err
        );
      }

      const token = response?.WebIdentityToken;
      if (typeof token !== 'string' || !token) {
        throw new AwsWorkloadIdentityError(
          'Unable to obtain an AWS workload identity assertion: sts:GetWebIdentityToken returned no WebIdentityToken. ' +
            SETUP_GUIDANCE
        );
      }

      return token;
    },
  };
}

/**
 * Summarises an AWS failure using only its name and message. The full error is
 * preserved as the cause; nothing from the request is copied into the message.
 */
function describeAwsError(err: unknown): string {
  if (!err || typeof err !== 'object') {
    return '';
  }
  const {name, message} = err as {name?: unknown; message?: unknown};
  const parts = [name, message].filter(
    (part): part is string => typeof part === 'string' && part.length > 0
  );
  return parts.length ? ` (${parts.join(': ')})` : '';
}
