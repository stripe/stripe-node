// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.

import {StripeObject, StripeResourceObject} from './Types.js';

export type StripeResourceNamespaceObject = Record<
  string,
  StripeResourceObject | unknown
>;

// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
function ResourceNamespace(
  this: StripeResourceNamespaceObject,
  stripe: StripeObject,
  resources: Array<StripeResourceObject>
): void {
  for (const name in resources) {
    const camelCaseName = name[0].toLowerCase() + name.substring(1);

    const resource = new (resources[name] as any)(stripe);

    this[camelCaseName] = resource;
  }
}

export function resourceNamespace(
  namespace: string,
  resources: Record<string, (...args: any[]) => void>
): (stripe: StripeObject) => StripeResourceNamespaceObject {
  return function(stripe: StripeObject): StripeResourceNamespaceObject {
    return new (ResourceNamespace as any)(stripe, resources);
  };
}
