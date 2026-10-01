import {
  GetWebIdentityTokenCommand,
  STSClient,
  STSClientConfig,
} from '@aws-sdk/client-sts';

export const STRIPE_WORKLOAD_IDENTITY_AUDIENCE = 'https://stripe.com/wif/v1';
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

/** Raised when AWS would not produce a usable workload identity assertion. */
export class AwsWorkloadIdentityError extends Error {
  /**
   * The underlying AWS SDK failure, when one caused this error.
   *
   * Declared explicitly because `Error.cause` is ES2022 and we target ES2020
   */
  readonly cause?: unknown;

  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = 'AwsWorkloadIdentityError';
    this.cause = cause;
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
 */
export function awsWorkloadIdentity(
  config: STSClientConfig = {}
): WorkloadIdentityProvider {
  const client = new STSClient(config);

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
          `Unable to obtain an AWS workload identity assertion: sts:GetWebIdentityToken failed. ${SETUP_GUIDANCE}`,
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
