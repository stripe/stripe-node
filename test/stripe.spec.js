

const http = require('http');
const testUtils = require('./testUtils');
const Promise = require('bluebird');
const stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey(),
  'latest',
);

const { expect } = require('chai');

const CUSTOMER_DETAILS = {
  description: 'Some customer',
  card: 'tok_visa',
};

describe('Stripe Module', function stripeModule() {
  const cleanup = new testUtils.CleanupUtility();
  this.timeout(20000);

  describe('setApiKey', () => {
    it('uses Bearer auth', () => {
      expect(stripe.getApiField('auth')).to.equal(`Bearer ${testUtils.getUserStripeKey()}`);
    });
  });

  describe('GetClientUserAgent', () => {
    it('Should return a user-agent serialized JSON object', () => expect(new Promise(((resolve, reject) => {
      stripe.getClientUserAgent((c) => {
        resolve(JSON.parse(c));
      });
    }))).to.eventually.have.property('lang', 'node'));
  });

  describe('GetClientUserAgentSeeded', () => {
    it('Should return a user-agent serialized JSON object', () => {
      const userAgent = { lang: 'node' };
      const d = Promise.defer();
      stripe.getClientUserAgentSeeded(userAgent, (c) => {
        d.resolve(JSON.parse(c));
      });
      return expect(d.promise).to.eventually.have.property('lang', 'node');
    });

    it('Should URI-encode user-agent fields', () => {
      const userAgent = { lang: 'ï' };
      const d = Promise.defer();
      stripe.getClientUserAgentSeeded(userAgent, (c) => {
        d.resolve(JSON.parse(c));
      });
      return expect(d.promise).to.eventually.have.property('lang', '%C3%AF');
    });
  });

  describe('setTimeout', () => {
    it('Should define a default equal to the node default', () => {
      expect(stripe.getApiField('timeout')).to.equal(http.createServer().timeout);
    });
    it('Should allow me to set a custom timeout', () => {
      stripe.setTimeout(900);
      expect(stripe.getApiField('timeout')).to.equal(900);
    });
    it('Should allow me to set null, to reset to the default', () => {
      stripe.setTimeout(null);
      expect(stripe.getApiField('timeout')).to.equal(http.createServer().timeout);
    });
  });

  describe('setAppInfo', () => {
    describe('when given nothing or an empty object', () => {
      it('should unset stripe.appInfo', () => {
        stripe.setAppInfo();
        expect(stripe.appInfo).to.be.undefined;
      });
    });

    describe('when given an object with no `name`', () => {
      it('should throw an error', () => {
        expect(() => {
          stripe.setAppInfo({});
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          stripe.setAppInfo({
            version: '1.2.3',
          });
        }).to.throw(/AppInfo.name is required/);

        expect(() => {
          stripe.setAppInfo({
            cats: '42',
          });
        }).to.throw(/AppInfo.name is required/);
      });
    });

    describe('when given at least a `name`', () => {
      it('should set name, version and url of stripe.appInfo', () => {
        stripe.setAppInfo({
          name: 'MyAwesomeApp',
        });
        expect(stripe.appInfo).to.eql({
          name: 'MyAwesomeApp',
        });

        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });
        expect(stripe.appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });

        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });
        expect(stripe.appInfo).to.eql({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });
      });

      it('should ignore any invalid properties', () => {
        stripe.setAppInfo({
          name: 'MyAwesomeApp',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
          countOfRadishes: 512,
        });
        expect(stripe.appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
        });
      });
    });

    it('should be included in the ClientUserAgent and be added to the UserAgent String', (done) => {
      const appInfo = {
        name: testUtils.getRandomString(),
        version: '1.2.345',
        url: 'https://myawesomeapp.info',
      };

      stripe.setAppInfo(appInfo);

      stripe.getClientUserAgent((uaString) => {
        expect(JSON.parse(uaString).application).to.eql(appInfo);

        expect(stripe.getAppInfoAsString()).to.eql(`${appInfo.name}/${appInfo.version} (${appInfo.url})`);

        done();
      });
    });
  });

  describe('Callback support', () => {
    describe('Any given endpoint', () => {
      it('Will call a callback if successful', () => expect(new Promise(((resolve, reject) => {
        stripe.customers.create(CUSTOMER_DETAILS, (err, customer) => {
          cleanup.deleteCustomer(customer.id);
          resolve('Called!');
        });
      }))).to.eventually.equal('Called!'));

      it('Will expose HTTP response object', () => expect(new Promise(((resolve, reject) => {
        stripe.customers.create(CUSTOMER_DETAILS, (err, customer) => {
          cleanup.deleteCustomer(customer.id);

          const { headers } = customer.lastResponse;
          expect(headers).to.contain.keys('request-id');

          expect(customer.lastResponse.requestId).to.match(/^req_/);
          expect(customer.lastResponse.statusCode).to.equal(200);

          resolve('Called!');
        });
      }))).to.eventually.equal('Called!'));

      it('Given an error the callback will receive it', () => expect(new Promise(((resolve, reject) => {
        stripe.customers.createCard('nonExistentCustId', { card: {} }, (err, customer) => {
          if (err) {
            resolve('ErrorWasPassed');
          } else {
            reject(new Error('NoErrorPassed'));
          }
        });
      }))).to.eventually.become('ErrorWasPassed'));
    });
  });
});
