'use strict';

var resources = {
  charges: require('./charges.js'),
  customers: require('./customers.js'),
  // TODO(michelle):
  plans: require('./plans.js'),
  coupons: require('./coupons.js'),
  invoices: require('./invoices.js'),
  invoiceItems: require('./invoiceitems.js'),
  transfers: require('./transfers.js'),
  recipients: require('./recipients.js'),
  account: require('./account.js'),
  balanceTransactions: require('./balancetransactions.js'),
  events: require('./events.js'),
  tokens: require('./tokens.js'),
  balance: require('./balance.js')
};

function stripe(key) {
  var auth = 'Basic ' + new Buffer(key + ':').toString('base64');

  var resourceNames = Object.keys(resources);
  for (var i = 0, ii = resourceNames.length; i < ii; i += 1) {
    var Resource = resources[resourceNames[i]];
    resources[resourceNames[i]] = new Resource(auth);
  }

  return resources;
}

module.exports = stripe;
