// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Cadences = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/cadences',
    responseSchema: {
      kind: 'object',
      fields: {
        settings_data: {
          kind: 'object',
          fields: {
            collection: {
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
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/cadences/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        settings_data: {
          kind: 'object',
          fields: {
            collection: {
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
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/cadences/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        settings_data: {
          kind: 'object',
          fields: {
            collection: {
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
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/cadences',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              settings_data: {
                kind: 'object',
                fields: {
                  collection: {
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
          },
        },
      },
    },
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/cadences/{id}/cancel',
    responseSchema: {
      kind: 'object',
      fields: {
        settings_data: {
          kind: 'object',
          fields: {
            collection: {
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
    },
  }),
});
