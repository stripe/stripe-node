// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.

import {StripeObject, StripeResourceObject} from './Types.js';

export type StripeResourceNamespaceObject = {
  [key: string]: StripeResourceObject | StripeResourceNamespaceObject;
};

// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
function ResourceNamespace(
  this: StripeResourceNamespaceObject,
  stripe: StripeObject,
  resources: Record<
    string,
    new (...args: any[]) => StripeResourceObject | StripeResourceNamespaceObject
  >
): void {
  for (const name in resources) {
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
): new (stripe: StripeObject) => StripeResourceNamespaceObject {
  return function(stripe: StripeObject): StripeResourceNamespaceObject {
    return new (ResourceNamespace as any)(stripe, resources);
  } as any;
}
