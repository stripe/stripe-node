// @ts-nocheck

import {expect} from 'chai';

const stripe = require('../src/stripe.cjs.node.js')('sk_test_fake');

const EVENTBRIDGE_PAYLOAD = JSON.stringify({
  version: '0',
  id: '17e8dff5-d6cd-3770-ace9-aeac02b6ac3f',
  'detail-type': 'customer.created',
  source: 'aws.partner/stripe.com/ed_123',
  account: '506417113029',
  time: '2024-03-07T18:27:56Z',
  region: 'us-west-2',
  resources: [],
  detail: {
    id: 'evt_test_123',
    object: 'event',
    api_version: '2023-10-16',
    created: 1709836076,
    data: {object: {id: 'cus_123', object: 'customer'}},
    livemode: true,
    pending_webhooks: 0,
    request: {id: 'req_123', idempotency_key: null},
    type: 'customer.created',
  },
});

const EVENTGRID_PAYLOAD = JSON.stringify({
  specversion: '1.0',
  type: 'customer.created',
  source: '/providers/stripe/ed_test_123',
  id: '9aeb0fdf-c01e-0131-0922-9eb54906e209',
  time: '2025-07-11T14:30:00Z',
  subject: null,
  dataContentType: 'application/cloudevents+json',
  data: {
    id: 'evt_test_456',
    object: 'event',
    api_version: '2023-10-16',
    created: 1709836076,
    data: {object: {id: 'cus_456', object: 'customer'}},
    livemode: false,
    pending_webhooks: 0,
    request: {id: 'req_456', idempotency_key: null},
    type: 'customer.created',
  },
});

const EVENTBRIDGE_V2_PAYLOAD = JSON.stringify({
  version: '0',
  id: '17e8dff5-d6cd-3770-ace9-aeac02b6ac3f',
  'detail-type': 'v2.billing.meter.error_report_triggered',
  source: 'aws.partner/stripe.com/ed_123',
  account: '506417113029',
  time: '2024-03-07T18:27:56Z',
  region: 'us-west-2',
  resources: [],
  detail: {
    id: 'evt_notif_test_789',
    object: 'v2.core.event',
    type: 'v2.billing.meter.error_report_triggered',
    created: '2024-03-07T18:27:56.000Z',
    context: null,
    livemode: false,
    related_object: null,
  },
});

const EVENTGRID_V2_PAYLOAD = JSON.stringify({
  specversion: '1.0',
  type: 'v2.billing.meter.error_report_triggered',
  source: '/providers/stripe/ed_test_123',
  id: 'abc123-eventgrid-v2',
  time: '2025-07-11T14:30:00Z',
  subject: null,
  dataContentType: 'application/cloudevents+json',
  data: {
    id: 'evt_notif_test_012',
    object: 'v2.core.event',
    type: 'v2.billing.meter.error_report_triggered',
    created: '2025-07-11T14:30:00.000Z',
    context: null,
    livemode: false,
    related_object: null,
  },
});

describe('constructEventWithoutVerification', () => {
  it('is accessible via the webhooks entry point and parses EventBridge payload', () => {
    const event = stripe.webhooks.constructEventWithoutVerification(
      EVENTBRIDGE_PAYLOAD
    );
    expect(event.id).to.equal('evt_test_123');
    expect(event.type).to.equal('customer.created');
  });

  it('parses EventBridge payload', () => {
    const event = stripe.constructEventWithoutVerification(EVENTBRIDGE_PAYLOAD);
    expect(event.id).to.equal('evt_test_123');
    expect(event.type).to.equal('customer.created');
  });

  it('parses Event Grid payload', () => {
    const event = stripe.constructEventWithoutVerification(EVENTGRID_PAYLOAD);
    expect(event.id).to.equal('evt_test_456');
    expect(event.type).to.equal('customer.created');
  });

  it('parses raw Stripe Event JSON directly', () => {
    const rawEvent = JSON.stringify({
      id: 'evt_test_123',
      object: 'event',
      type: 'customer.created',
    });
    const event = stripe.constructEventWithoutVerification(rawEvent);
    expect(event.id).to.equal('evt_test_123');
    expect(event.type).to.equal('customer.created');
  });

  it('throws on invalid JSON', () => {
    expect(() =>
      stripe.constructEventWithoutVerification('not valid json')
    ).to.throw();
  });

  it('throws on unrecognized format', () => {
    expect(() =>
      stripe.constructEventWithoutVerification('{"foo":"bar"}')
    ).to.throw(/Unrecognized cloud event format/);
  });

  it('throws when cloud envelope contains a v2 event notification', () => {
    expect(() =>
      stripe.constructEventWithoutVerification(EVENTBRIDGE_V2_PAYLOAD)
    ).to.throw(/EventNotification/);
  });
});

const SECRET = 'whsec_test_secret';

const RAW_V2_NOTIFICATION = JSON.stringify({
  id: 'evt_notif_signed_001',
  object: 'v2.core.event',
  type: 'v2.billing.meter.error_report_triggered',
  created: '2024-03-07T18:27:56.000Z',
  context: null,
  livemode: false,
  related_object: null,
});

const RAW_V1_EVENT = JSON.stringify({
  id: 'evt_v1_001',
  object: 'event',
  type: 'customer.created',
  api_version: '2023-10-16',
  created: 1709836076,
  data: {object: {id: 'cus_001', object: 'customer'}},
  livemode: false,
  pending_webhooks: 0,
  request: {id: 'req_001', idempotency_key: null},
});

describe('parseEventNotification', () => {
  it('returns an event notification for a valid v2 payload with a valid signature', () => {
    const header = stripe.webhooks.generateTestHeaderString({
      payload: RAW_V2_NOTIFICATION,
      secret: SECRET,
    });

    const notification = stripe.parseEventNotification(
      RAW_V2_NOTIFICATION,
      header,
      SECRET
    );

    expect(notification.id).to.equal('evt_notif_signed_001');
    expect(notification.object).to.equal('v2.core.event');
    expect(notification.type).to.equal(
      'v2.billing.meter.error_report_triggered'
    );
  });

  it('attaches fetchEvent and fetchRelatedObject functions to the returned notification', () => {
    const header = stripe.webhooks.generateTestHeaderString({
      payload: RAW_V2_NOTIFICATION,
      secret: SECRET,
    });

    const notification = stripe.parseEventNotification(
      RAW_V2_NOTIFICATION,
      header,
      SECRET
    );

    expect(notification.fetchEvent).to.be.a('function');
    expect(notification.fetchRelatedObject).to.be.a('function');
  });

  it('throws when a v1 Event payload is passed (suggests constructEvent)', () => {
    const header = stripe.webhooks.generateTestHeaderString({
      payload: RAW_V1_EVENT,
      secret: SECRET,
    });

    expect(() =>
      stripe.parseEventNotification(RAW_V1_EVENT, header, SECRET)
    ).to.throw(/constructEvent/);
  });

  it('throws when the signature does not match the payload', () => {
    const header = stripe.webhooks.generateTestHeaderString({
      payload: RAW_V2_NOTIFICATION,
      secret: SECRET,
      signature: 'bad_signature',
    });

    expect(() =>
      stripe.parseEventNotification(RAW_V2_NOTIFICATION, header, SECRET)
    ).to.throw(/No signatures found matching/);
  });

  it('throws when the header is missing', () => {
    expect(() =>
      stripe.parseEventNotification(RAW_V2_NOTIFICATION, '', SECRET)
    ).to.throw();
  });
});

describe('parseEventNotificationWithoutVerification', () => {
  it('parses raw v2 event notification JSON directly (no cloud envelope)', () => {
    const rawNotification = JSON.stringify({
      id: 'evt_234',
      object: 'v2.core.event',
      type: 'v2.billing.meter.error_report_triggered',
      created: '2024-03-07T18:27:56.000Z',
      context: null,
      livemode: false,
      related_object: null,
    });
    const notification = stripe.parseEventNotificationWithoutVerification(
      rawNotification
    );
    expect(notification.id).to.equal('evt_234');
    expect(notification.object).to.equal('v2.core.event');
  });

  it('parses EventBridge payload with v2 notification', () => {
    const notification = stripe.parseEventNotificationWithoutVerification(
      EVENTBRIDGE_V2_PAYLOAD
    );
    expect(notification.id).to.equal('evt_notif_test_789');
    expect(notification.type).to.equal(
      'v2.billing.meter.error_report_triggered'
    );
  });

  it('parses Event Grid payload with v2 notification', () => {
    const notification = stripe.parseEventNotificationWithoutVerification(
      EVENTGRID_V2_PAYLOAD
    );
    expect(notification.id).to.equal('evt_notif_test_012');
    expect(notification.type).to.equal(
      'v2.billing.meter.error_report_triggered'
    );
  });

  it('throws when cloud envelope contains a v1 Event', () => {
    expect(() =>
      stripe.parseEventNotificationWithoutVerification(EVENTBRIDGE_PAYLOAD)
    ).to.throw(/constructEvent/);
  });

  it('attaches a fetchEvent function to the returned notification', () => {
    const notification = stripe.parseEventNotificationWithoutVerification(
      EVENTBRIDGE_V2_PAYLOAD
    );
    expect(notification.fetchEvent).to.be.a('function');
  });

  it('throws on invalid JSON', () => {
    expect(() =>
      stripe.parseEventNotificationWithoutVerification('not valid json')
    ).to.throw();
  });

  it('throws on unrecognized format', () => {
    expect(() =>
      stripe.parseEventNotificationWithoutVerification('{"foo":"bar"}')
    ).to.throw(/Unrecognized cloud event format/);
  });
});
