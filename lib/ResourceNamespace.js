"use strict";
// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceNamespace = exports.ResourceNamespace = void 0;
function ResourceNamespace(stripe, resources) {
    for (const name in resources) {
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
    }
}
exports.ResourceNamespace = ResourceNamespace;
function resourceNamespace(namespace, resources) {
    return function (stripe) {
        return new ResourceNamespace(stripe, resources);
    };
}
exports.resourceNamespace = resourceNamespace;
