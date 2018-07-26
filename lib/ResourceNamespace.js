'use strict';

// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.

function ResourceNamespace(stripe, resources) {
  for (var name in resources) {
    var camelCaseName = name[0].toLowerCase() + name.substring(1);

    var resource = new resources[name](stripe);

    this[camelCaseName] = resource;
  }
}

module.exports = function(namespace, resources) {
  return function (stripe) {
    return new ResourceNamespace(stripe, resources);
  };
};

module.exports.ResourceNamespace = ResourceNamespace;
