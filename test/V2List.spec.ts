import {expect} from 'chai';
import {Stripe} from '../src/stripe.core';
import {createMockClient, getSpyableStripe} from './testUtils.js';
import {ApiList} from '../src/lib.js';

const v2EventPayloadWithoutRelatedObject = `
  {
    "context": "context",
    "created": "1970-01-12T21:42:34.472Z",
    "id": "obj_123",
    "livemode": true,
    "object":"v2.core.event",
    "reason":
    {
      "type": "request",
      "request":
      {
        "id": "obj_123",
        "idempotency_key": "idempotency_key"
      }
    },
    "type": "type"
  }
`;

describe('V2 Core Events Resource', () => {
  let stripe: any;
  beforeEach(() => {
    stripe = getSpyableStripe({});
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.v2.core.events.list({object_id: 'foo'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v2/core/events?object_id=foo',
        headers: {},
        data: null,
        settings: {},
      });
    });

    /**
     * TODO(DEVSDK-2534): remove this at next major when we fix
     * the V2List type.  this is here to ensure our releases until then
     * do not break existing users.
     */
    it('ensures V2List is backwards compatible with ApiList type', async () => {
      const mockStripe = createMockClient([
        {
          method: 'GET',
          path: '/v2/core/events?object_id=foo',
          response: `{
            "data": [${v2EventPayloadWithoutRelatedObject}],
            "next_page_url": "/v2/core/events?object_id=foo&page=next",
            "previous_page_url": "/v2/core/events?object_id=foo&page=prev"
          }`,
        },
      ]);
      const resp: ApiList<Stripe.V2.Core.Event> = await mockStripe.v2.core.events.list(
        {object_id: 'foo'}
      );
      expect(resp.data.length).is.equal(1);
      /*
      expect(resp.next_page_url).is.equal(
        '/v2/core/events?object_id=foo&page=next'
      );
      expect(resp.previous_page_url).is.equal(
        '/v2/core/events?object_id=foo&page=prev'
      );
      expect(resp).not.to.have.property('has_more');
      expect(resp).not.to.have.property('url');
      expect(resp).not.to.have.property('object');
      */
    });
  });
});
