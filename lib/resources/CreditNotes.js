'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'credit_notes',
  includeBasic: ['create', 'list', 'retrieve', 'update'],

  voidCreditNote: stripeMethod({
    method: 'POST',
    path: '{creditNoteId}/void',
    urlParams: ['creditNoteId'],
  }),
});
