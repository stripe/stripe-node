// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditBalanceTransactions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_balance_transactions/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        credit: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              amount: {
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
        debit: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              amount: {
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
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_balance_transactions',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              credit: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    amount: {
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
              debit: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    amount: {
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
        },
      },
    },
  }),
});
