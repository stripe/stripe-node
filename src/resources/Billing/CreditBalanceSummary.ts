// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Customer, DeletedCustomer} from './../Customers.js';
import {RequestOptions, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export const CreditBalanceSummary = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_balance_summary',
    responseSchema: {
      kind: 'object',
      fields: {
        balances: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              available_balance: {
                kind: 'object',
                fields: {
                  custom_pricing_unit: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
              ledger_balance: {
                kind: 'object',
                fields: {
                  custom_pricing_unit: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
});
