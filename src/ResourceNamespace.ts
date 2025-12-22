// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.

import {StripeClient} from './stripe.core.js';
import {StripeResourceObject} from './Types.js';

export type StripeResourceNamespaceObject = {
  [key: string]: StripeResourceObject | StripeResourceNamespaceObject;
};

// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
function ResourceNamespace(
  this: StripeResourceNamespaceObject,
  stripe: StripeClient,
  resources: Record<
    string,
    new (...args: any[]) => StripeResourceObject | StripeResourceNamespaceObject
  >
): void {
  for (const name in resources) {
    if (!Object.prototype.hasOwnProperty.call(resources, name)) {
      continue;
    }
    const camelCaseName = name[0].toLowerCase() + name.substring(1);
    const resource = new resources[name](stripe);

    this[camelCaseName] = resource;
  }
}

export function resourceNamespace(
  namespace: string,
  resources: Record<
    string,
    new (...args: any[]) => StripeResourceObject | StripeResourceNamespaceObject
  >
): new (stripe: StripeClient) => StripeResourceNamespaceObject {
  return function(stripe: StripeClient): StripeResourceNamespaceObject {
    return new (ResourceNamespace as any)(stripe, resources);
  } as any;
}
