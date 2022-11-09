// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
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

module.exports = function(
  namespace: string,
  resources: Array<StripeResourceObject>
): (stripe: StripeObject) => StripeResourceNamespaceObject {
  return function(stripe: StripeObject): StripeResourceNamespaceObject {
    return new (ResourceNamespace as any)(stripe, resources);
  };
};

module.exports.ResourceNamespace = ResourceNamespace;
