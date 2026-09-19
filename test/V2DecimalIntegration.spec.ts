// @ts-nocheck
import {expect} from 'chai';
import {Decimal} from '../src/Decimal.js';
import {StripeResource} from '../src/StripeResource.js';
import {getSpyableStripe} from './testUtils.js';

describe('V2 decimal_string integration', () => {
  const requestSchema = {
    kind: 'object',
    fields: {
      lines: {
        kind: 'array',
        element: {
          kind: 'object',
          fields: {
            unit_amount_decimal: {kind: 'decimal_string'},
          },
        },
      },
    },
  };

  const makeRequest = (method: string) => {
    const stripe = getSpyableStripe();
    const resource = new StripeResource(stripe);

    resource._makeRequest(
      method,
      '/v2/test/resources',
      {
        lines: [
          {
            unit_amount_decimal: Decimal.from('434'),
            description: 'test',
          },
        ],
      },
      undefined,
      {requestSchema}
    );

    return stripe.LAST_REQUEST;
  };

  it('coerces nested decimal_string fields in GET query parameters', () => {
    const request = makeRequest('GET');

    expect(request.data).to.equal(null);
    expect(request.url).to.equal(
      '/v2/test/resources?lines[0][unit_amount_decimal]=434&lines[0][description]=test'
    );
  });

  it('coerces nested decimal_string fields in DELETE query parameters', () => {
    const request = makeRequest('DELETE');

    expect(request.data).to.equal(null);
    expect(request.url).to.equal(
      '/v2/test/resources?lines[0][unit_amount_decimal]=434&lines[0][description]=test'
    );
  });

  it('continues to coerce nested decimal_string fields in POST bodies', () => {
    const request = makeRequest('POST');

    expect(request.data).to.deep.equal({
      lines: [{unit_amount_decimal: '434', description: 'test'}],
    });
    expect(request.url).to.equal('/v2/test/resources');
  });
});
