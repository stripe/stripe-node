// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BatchJobs = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/batch_jobs',
    responseSchema: {
      kind: 'object',
      fields: {
        status_details: {
          kind: 'object',
          fields: {
            canceled: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            complete: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            in_progress: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                success_count: {kind: 'int64_string'},
              },
            },
            timeout: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            validating: {
              kind: 'object',
              fields: {validated_count: {kind: 'int64_string'}},
            },
            validation_failed: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/batch_jobs/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        status_details: {
          kind: 'object',
          fields: {
            canceled: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            complete: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            in_progress: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                success_count: {kind: 'int64_string'},
              },
            },
            timeout: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            validating: {
              kind: 'object',
              fields: {validated_count: {kind: 'int64_string'}},
            },
            validation_failed: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
          },
        },
      },
    },
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/batch_jobs/{id}/cancel',
    responseSchema: {
      kind: 'object',
      fields: {
        status_details: {
          kind: 'object',
          fields: {
            canceled: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            complete: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            in_progress: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                success_count: {kind: 'int64_string'},
              },
            },
            timeout: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
            validating: {
              kind: 'object',
              fields: {validated_count: {kind: 'int64_string'}},
            },
            validation_failed: {
              kind: 'object',
              fields: {
                failure_count: {kind: 'int64_string'},
                output_file: {
                  kind: 'object',
                  fields: {size: {kind: 'int64_string'}},
                },
                success_count: {kind: 'int64_string'},
              },
            },
          },
        },
      },
    },
  }),
});
