// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Prices = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/prices',
    requestSchema: {
      kind: 'object',
      fields: {
        currency_options: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              tiers: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    flat_amount_decimal: {kind: 'decimal_string'},
                    unit_amount_decimal: {kind: 'decimal_string'},
                  },
                },
              },
              unit_amount_decimal: {kind: 'decimal_string'},
            },
          },
        },
        tiers: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              flat_amount_decimal: {kind: 'decimal_string'},
              unit_amount_decimal: {kind: 'decimal_string'},
            },
          },
        },
        unit_amount_decimal: {kind: 'decimal_string'},
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        currency_options: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              tiers: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    flat_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        tiers: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              flat_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        unit_amount_decimal: {
          kind: 'nullable',
          inner: {kind: 'decimal_string'},
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices/{price}',
    responseSchema: {
      kind: 'object',
      fields: {
        currency_options: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              tiers: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    flat_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        tiers: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              flat_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        unit_amount_decimal: {
          kind: 'nullable',
          inner: {kind: 'decimal_string'},
        },
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/prices/{price}',
    responseSchema: {
      kind: 'object',
      fields: {
        currency_options: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              tiers: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    flat_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        tiers: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              flat_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        unit_amount_decimal: {
          kind: 'nullable',
          inner: {kind: 'decimal_string'},
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              currency_options: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    tiers: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          flat_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          unit_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              tiers: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    flat_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
      },
    },
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices/search',
    methodType: 'search',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              currency_options: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    tiers: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          flat_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          unit_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              tiers: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    flat_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
      },
    },
  }),
});
