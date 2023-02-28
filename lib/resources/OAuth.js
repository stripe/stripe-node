'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth = void 0;
const StripeResource_1 = require("../StripeResource");
const utils_1 = require("../utils");
const stripeMethod = StripeResource_1.StripeResource.method;
const oAuthHost = 'connect.stripe.com';
exports.OAuth = StripeResource_1.StripeResource.extend({
    basePath: '/',
    authorizeUrl(params, options) {
        params = params || {};
        options = options || {};
        let path = 'oauth/authorize';
        // For Express accounts, the path changes
        if (options.express) {
            path = `express/${path}`;
        }
        if (!params.response_type) {
            params.response_type = 'code';
        }
        if (!params.client_id) {
            params.client_id = this._stripe.getClientId();
        }
        if (!params.scope) {
            params.scope = 'read_write';
        }
        return `https://${oAuthHost}/${path}?${(0, utils_1.stringifyRequestData)(params)}`;
    },
    token: stripeMethod({
        method: 'POST',
        path: 'oauth/token',
        host: oAuthHost,
    }),
    deauthorize(spec, ...args) {
        if (!spec.client_id) {
            spec.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
            method: 'POST',
            path: 'oauth/deauthorize',
            host: oAuthHost,
        }).apply(this, [spec, ...args]);
    },
});
