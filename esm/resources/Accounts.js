// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
// Since path can either be `account` or `accounts`, support both through stripeMethod path
export class AccountResource extends StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/accounts/{account}',
        }).call(this, ...args);
    }
    retrieve(id, ...args) {
        // No longer allow an api key to be passed as the first string to this function due to ambiguity between
        // old account ids and api keys. To request the account for an api key, send null as the id
        if (typeof id === 'string') {
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/accounts/{id}',
            }).apply(this, [id, ...args]);
        }
        else {
            if (id === null || id === undefined) {
                // Remove id as stripeMethod would complain of unexpected argument
                [].shift.apply([id, ...args]);
            }
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/account',
            }).apply(this, [id, ...args]);
        }
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}',
        }).call(this, ...args);
    }
    retrieveCurrent(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/account',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/accounts',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts',
        }).call(this, ...args);
    }
    reject(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}/reject',
        }).call(this, ...args);
    }
    listCapabilities(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/accounts/{account}/capabilities',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieveCapability(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/accounts/{account}/capabilities/{capability}',
        }).call(this, ...args);
    }
    updateCapability(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}/capabilities/{capability}',
        }).call(this, ...args);
    }
    deleteExternalAccount(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/accounts/{account}/external_accounts/{id}',
        }).call(this, ...args);
    }
    retrieveExternalAccount(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/accounts/{account}/external_accounts/{id}',
        }).call(this, ...args);
    }
    updateExternalAccount(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}/external_accounts/{id}',
        }).call(this, ...args);
    }
    listExternalAccounts(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/accounts/{account}/external_accounts',
            methodType: 'list',
        }).call(this, ...args);
    }
    createExternalAccount(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}/external_accounts',
        }).call(this, ...args);
    }
    createLoginLink(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}/login_links',
        }).call(this, ...args);
    }
    deletePerson(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/accounts/{account}/persons/{person}',
        }).call(this, ...args);
    }
    retrievePerson(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/accounts/{account}/persons/{person}',
        }).call(this, ...args);
    }
    updatePerson(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}/persons/{person}',
        }).call(this, ...args);
    }
    listPersons(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/accounts/{account}/persons',
            methodType: 'list',
        }).call(this, ...args);
    }
    createPerson(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/accounts/{account}/persons',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Accounts.js.map