// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Apps as AppsNamespace0, Install, InstallResource} from './Installs.js';
import {Apps as AppsNamespace1, Secret, SecretResource} from './Secrets.js';

export {Install} from './Installs.js';
export {Secret} from './Secrets.js';

export class Apps {
  installs: InstallResource;
  secrets: SecretResource;

  constructor(private readonly stripe: Stripe) {
    this.installs = new InstallResource(stripe);
    this.secrets = new SecretResource(stripe);
  }
}

export declare namespace Apps {
  export import InstallListParams = AppsNamespace0.InstallListParams;
  export import InstallCreateParams = AppsNamespace0.InstallCreateParams;
  export import InstallRetrieveParams = AppsNamespace0.InstallRetrieveParams;
  export import InstallUpdateParams = AppsNamespace0.InstallUpdateParams;
  export import InstallUninstallParams = AppsNamespace0.InstallUninstallParams;
  export {Install, InstallResource};
  export import SecretListParams = AppsNamespace1.SecretListParams;
  export import SecretCreateParams = AppsNamespace1.SecretCreateParams;
  export import SecretFindParams = AppsNamespace1.SecretFindParams;
  export import SecretDeleteWhereParams = AppsNamespace1.SecretDeleteWhereParams;
  export {Secret, SecretResource};
}
