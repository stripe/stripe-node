import {RequestAuthenticator, WorkloadIdentityProvider} from '../Types.js';
import {createAwsAssertionFetcher} from './AwsAssertionFetcher.js';
import {createWorkloadIdentityAuthenticator} from './WorkloadIdentity.js';

/**
 * Shared by every platform with npm compatibility and an ambient AWS
 * credential chain (Node.js, Deno, Bun) to resolve the 'aws' provider.
 */
export function createCloudCapableWorkloadIdentityAuthenticator(
  clientId: string,
  provider: WorkloadIdentityProvider,
  onUnsupported: () => RequestAuthenticator
): RequestAuthenticator {
  if (provider === 'aws') {
    return createWorkloadIdentityAuthenticator(
      clientId,
      createAwsAssertionFetcher()
    );
  }
  return onUnsupported();
}
