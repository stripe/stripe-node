'use strict';
import { StripeResource } from '../StripeResource.js';
import { makeURLInterpolator, queryStringifyRequestData } from '../utils.js';
const stripeMethod = StripeResource.method;
const oAuthHost = 'connect.stripe.com';
export class OAuthResource extends StripeResource {
    constructor() {
        super(...arguments);
        this.basePath = makeURLInterpolator('/');
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
        return `https://${oAuthHost}/${path}?${queryStringifyRequestData(params)}`;
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
