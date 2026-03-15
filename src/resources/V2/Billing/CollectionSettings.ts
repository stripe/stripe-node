// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Versions} from './CollectionSettings/Versions.js';
const stripeMethod = StripeResource.method;
export const CollectionSettings = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.versions = new Versions(...args);
  },
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/collection_settings',
    requestSchema: {
      kind: 'object',
      fields: {
        payment_method_options: {
          kind: 'object',
          fields: {
            card: {
              kind: 'object',
              fields: {
                mandate_options: {
                  kind: 'object',
                  fields: {amount: {kind: 'int64_string'}},
                },
              },
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        payment_method_options: {
          kind: 'object',
          fields: {
            card: {
              kind: 'object',
              fields: {
                mandate_options: {
                  kind: 'object',
                  fields: {amount: {kind: 'int64_string'}},
                },
              },
            },
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/collection_settings/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        payment_method_options: {
          kind: 'object',
          fields: {
            card: {
              kind: 'object',
              fields: {
                mandate_options: {
                  kind: 'object',
                  fields: {amount: {kind: 'int64_string'}},
                },
              },
            },
          },
        },
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/collection_settings/{id}',
    requestSchema: {
      kind: 'object',
      fields: {
        payment_method_options: {
          kind: 'object',
          fields: {
            card: {
              kind: 'object',
              fields: {
                mandate_options: {
                  kind: 'object',
                  fields: {amount: {kind: 'int64_string'}},
                },
              },
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        payment_method_options: {
          kind: 'object',
          fields: {
            card: {
              kind: 'object',
              fields: {
                mandate_options: {
                  kind: 'object',
                  fields: {amount: {kind: 'int64_string'}},
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
    fullPath: '/v2/billing/collection_settings',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              payment_method_options: {
                kind: 'object',
                fields: {
                  card: {
                    kind: 'object',
                    fields: {
                      mandate_options: {
                        kind: 'object',
                        fields: {amount: {kind: 'int64_string'}},
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
