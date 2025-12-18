'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const utils_js_1 = require("../utils.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
const oAuthHost = 'connect.stripe.com';
class OAuthResource extends StripeResource_js_1.StripeResource {
    constructor() {
        super(...arguments);
        this.basePath = (0, utils_js_1.makeURLInterpolator)('/');
    }
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
        return `https://${oAuthHost}/${path}?${(0, utils_js_1.queryStringifyRequestData)(params)}`;
    }
    token(...args) {
        return stripeMethod({
            method: 'POST',
            path: 'oauth/token',
            host: oAuthHost,
        }).call(this, ...args);
    }
    deauthorize(params, ...args) {
        if (!params.client_id) {
            params.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
            method: 'POST',
            path: 'oauth/deauthorize',
            host: oAuthHost,
        }).apply(this, [params, ...args]);
    }
}
exports.OAuthResource = OAuthResource;
