import {StripeWorkloadIdentityError} from '../Error.js';
import {AssertionFetcher} from './WorkloadIdentity.js';

const WORKLOAD_IDENTITY_AUDIENCE = 'https://access.stripe.com/wif';
const ASSERTION_DURATION_SECONDS = 3600;
const ASSERTION_SIGNING_ALGORITHM = 'ES384';

async function loadStsSdk(): Promise<typeof import('@aws-sdk/client-sts')> {
  try {
    return await import('@aws-sdk/client-sts');
  } catch (e) {
    throw new StripeWorkloadIdentityError(
      "Stripe: AWS workload identity authentication requires the '@aws-sdk/client-sts' package, " +
        "which isn't installed. Run `npm install @aws-sdk/client-sts` (or your package manager's " +
        "equivalent) to use Stripe.forWorkloadIdentity with the 'aws' provider.",
      e
    );
  }
}

export function createAwsAssertionFetcher(): AssertionFetcher {
  return async function fetchAwsAssertion(): Promise<string> {
    const {STSClient, GetWebIdentityTokenCommand} = await loadStsSdk();

    const client = new STSClient({});
    let response;
    try {
      response = await client.send(
        new GetWebIdentityTokenCommand({
          Audience: [WORKLOAD_IDENTITY_AUDIENCE],
          DurationSeconds: ASSERTION_DURATION_SECONDS,
          SigningAlgorithm: ASSERTION_SIGNING_ALGORITHM,
        })
      );
    } catch (e) {
      throw new StripeWorkloadIdentityError(
        'Stripe: Unable to obtain an AWS web identity token for workload identity authentication. ' +
          'Confirm that AWS credentials are available in this environment (e.g. via the instance/task role) ' +
          "and that they're permitted to call sts:GetWebIdentityToken.",
        e
      );
    }
    if (!response.WebIdentityToken) {
      throw new StripeWorkloadIdentityError(
        'Stripe: AWS STS returned an empty web identity token for workload identity authentication.'
      );
    }
    return response.WebIdentityToken;
  };
}
