import {WebPlatformFunctions} from './WebPlatformFunctions.js';
import {RequestAuthenticator, WorkloadIdentityProvider} from '../Types.js';
import {createCloudCapableWorkloadIdentityAuthenticator} from '../WorkloadIdentity/CloudCapableWorkloadIdentity.js';

export class BunPlatformFunctions extends WebPlatformFunctions {
  /** @override */
  createWorkloadIdentityAuthenticator(
    clientId: string,
    provider: WorkloadIdentityProvider
  ): RequestAuthenticator {
    return createCloudCapableWorkloadIdentityAuthenticator(
      clientId,
      provider,
      () => super.createWorkloadIdentityAuthenticator(clientId, provider)
    );
  }
}
