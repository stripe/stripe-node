// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Persons} from './Accounts/Persons.js';
import {PersonTokens} from './Accounts/PersonTokens.js';
const stripeMethod = StripeResource.method;
export const Accounts = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.persons = new Persons(...args);
    this.personTokens = new PersonTokens(...args);
  },
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts',
    requestSchema: {
      kind: 'object',
      fields: {
        identity: {
          kind: 'object',
          fields: {
            individual: {
              kind: 'object',
              fields: {
                relationship: {
                  kind: 'object',
                  fields: {percent_ownership: {kind: 'decimal_string'}},
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
        identity: {
          kind: 'object',
          fields: {
            individual: {
              kind: 'object',
              fields: {
                relationship: {
                  kind: 'object',
                  fields: {percent_ownership: {kind: 'decimal_string'}},
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
    fullPath: '/v2/core/accounts/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        identity: {
          kind: 'object',
          fields: {
            individual: {
              kind: 'object',
              fields: {
                relationship: {
                  kind: 'object',
                  fields: {percent_ownership: {kind: 'decimal_string'}},
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
    fullPath: '/v2/core/accounts/{id}',
    requestSchema: {
      kind: 'object',
      fields: {
        identity: {
          kind: 'object',
          fields: {
            individual: {
              kind: 'object',
              fields: {
                relationship: {
                  kind: 'object',
                  fields: {percent_ownership: {kind: 'decimal_string'}},
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
        identity: {
          kind: 'object',
          fields: {
            individual: {
              kind: 'object',
              fields: {
                relationship: {
                  kind: 'object',
                  fields: {percent_ownership: {kind: 'decimal_string'}},
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
    fullPath: '/v2/core/accounts',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              identity: {
                kind: 'object',
                fields: {
                  individual: {
                    kind: 'object',
                    fields: {
                      relationship: {
                        kind: 'object',
                        fields: {percent_ownership: {kind: 'decimal_string'}},
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
  close: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts/{id}/close',
    responseSchema: {
      kind: 'object',
      fields: {
        identity: {
          kind: 'object',
          fields: {
            individual: {
              kind: 'object',
              fields: {
                relationship: {
                  kind: 'object',
                  fields: {percent_ownership: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
    },
  }),
});
