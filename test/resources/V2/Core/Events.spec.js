'use strict';

const testUtils = require('../../../testUtils.js');
const expect = require('chai').expect;

const stripe = testUtils.getSpyableStripe();

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

const v2EventPayloadWithRelatedObject = `
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
    "type": "type",
    "related_object":
    {
      "id": "obj_123",
      "type": "thing",
      "url": "/v1/things/obj_123"
    }
  }
`;

describe('V2 Core Events Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.v2.core.events.retrieve('eventIdBaz');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v2/core/events/eventIdBaz',
        headers: {},
        data: null,
        settings: {},
      });
    });

    it('Does not have fetchRelatedObject if not needed', async () => {
      const mockStripe = testUtils.createMockClient([
        {
          method: 'GET',
          path: '/v2/core/events/ll_123',
          response: v2EventPayloadWithoutRelatedObject,
        },
      ]);
      const event = await mockStripe.v2.core.events.retrieve('ll_123');
      expect(event).ok;
      expect(event.fetchRelatedObject).to.be.undefined;
    });

    it('Has fetchRelatedObject if needed', async () => {
      const mockStripe = testUtils.createMockClient([
        {
          method: 'GET',
          path: '/v2/core/events/ll_123',
          response: v2EventPayloadWithRelatedObject,
        },
      ]);
      const event = await mockStripe.v2.core.events.retrieve('ll_123');
      expect(event).ok;
      expect(event.fetchRelatedObject).ok;
    });

    it('Can call fetchRelatedObject', async () => {
      const mockStripe = testUtils.createMockClient([
        {
          method: 'GET',
          path: '/v2/core/events/ll_123',
          response: v2EventPayloadWithRelatedObject,
        },
        {
          method: 'GET',
          path: '/v1/things/obj_123',
          response: '{"id": "obj_123"}',
        },
      ]);
      const event = await mockStripe.v2.core.events.retrieve('ll_123');
      expect(event).ok;
      expect(event.fetchRelatedObject).ok;
      const obj = await event.fetchRelatedObject();
      expect(obj.id).to.equal('obj_123');
    });
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

    it('Does not have fetchRelatedObject if not needed', async () => {
      const mockStripe = testUtils.createMockClient([
        {
          method: 'GET',
          path: '/v2/core/events?object_id=foo',
          response: `{
            "data": [
              ${v2EventPayloadWithoutRelatedObject},
              ${v2EventPayloadWithoutRelatedObject},
              ${v2EventPayloadWithoutRelatedObject}
            ],
            "next_page_url": null
          }`,
        },
      ]);
      const resp = await mockStripe.v2.core.events.list({object_id: 'foo'});
      expect(resp).ok;
      expect(resp.data.length).is.equal(3);
      for (const event of resp.data) {
        expect(event.fetchRelatedObject).not.ok;
      }
    });

    it('Has fetchRelatedObject if needed', async () => {
      const mockStripe = testUtils.createMockClient([
        {
          method: 'GET',
          path: '/v2/core/events?object_id=foo',
          response: `{
            "data": [
              ${v2EventPayloadWithRelatedObject},
              ${v2EventPayloadWithRelatedObject},
              ${v2EventPayloadWithRelatedObject}
            ],
            "next_page_url": null
          }`,
        },
      ]);
      const resp = await mockStripe.v2.core.events.list({object_id: 'foo'});
      expect(resp).ok;
      expect(resp.data.length).is.equal(3);
      for (const event of resp.data) {
        expect(event.fetchRelatedObject).ok;
      }
    });

    it('Has fetchRelatedObject added to autoPaginate results', async () => {
      const mockStripe = testUtils.createMockClient([
        {
          method: 'GET',
          path: '/v2/core/events?object_id=foo',
          response: `{
            "data": [
              ${v2EventPayloadWithRelatedObject},
              ${v2EventPayloadWithRelatedObject},
              ${v2EventPayloadWithRelatedObject}
            ],
            "next_page_url": "/next_page"
          }`,
        },
        {
          method: 'GET',
          path: '/next_page',
          response: `{
            "data": [
              ${v2EventPayloadWithRelatedObject},
              ${v2EventPayloadWithRelatedObject},
              ${v2EventPayloadWithRelatedObject}
            ],
            "next_page_url": null
          }`,
        },
      ]);
      const respProm = mockStripe.v2.core.events.list({object_id: 'foo'});
      expect(respProm).ok;
      let totalEvents = 0;
      await respProm.autoPagingEach(function(event) {
        totalEvents += 1;
        expect(event.fetchRelatedObject).ok;
      });
      expect(totalEvents).is.equal(6);
    });
  });
});
