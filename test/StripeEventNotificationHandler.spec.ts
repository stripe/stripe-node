/* eslint-disable require-await */

import {expect} from 'chai';
import {getSpyableStripe, FAKE_API_KEY} from './testUtils.js';

const DUMMY_WEBHOOK_SECRET = 'whsec_test_secret';

// Helper to generate webhook signature
function generateHeader(payload: string): string {
  const stripe = getSpyableStripe({});
  return stripe.webhooks.generateTestHeaderString({
    payload,
    secret: DUMMY_WEBHOOK_SECRET,
  });
}

describe('StripeEventNotificationHandler', () => {
  let stripe: any;
  let eventHandler: any;
  let fallbackCallback: any;

  // Event payloads
  const v1BillingMeterPayload = JSON.stringify({
    id: 'evt_123',
    object: 'v2.core.event',
    type: 'v1.billing.meter.error_report_triggered',
    livemode: false,
    created: '2022-02-15T00:27:45.330Z',
    context: 'event_context_456',
    related_object: {
      id: 'mtr_123',
      type: 'billing.meter',
      url: '/v1/billing/meters/mtr_123',
    },
  });

  const v1BillingMeterNoMeterFoundPayload = JSON.stringify({
    id: 'evt_456',
    object: 'v2.core.event',
    type: 'v1.billing.meter.no_meter_found',
    livemode: false,
    created: '2022-02-15T00:27:45.330Z',
    context: 'event_context_789',
  });

  const unknownEventPayload = JSON.stringify({
    id: 'evt_unknown',
    object: 'v2.core.event',
    type: 'llama.created',
    livemode: false,
    created: '2022-02-15T00:27:45.330Z',
    context: 'event_context_unknown',
    related_object: {
      id: 'llama_123',
      type: 'llama',
      url: '/v1/llamas/llama_123',
    },
  });

  beforeEach(() => {
    stripe = getSpyableStripe({});
    fallbackCallback = async () => {};
    eventHandler = stripe.notificationHandler(
      DUMMY_WEBHOOK_SECRET,
      fallbackCallback
    );
  });

  describe('handler registration and routing', () => {
    it('should route event to registered handler', async () => {
      let callbackCalled = false;
      let receivedEvent: any = null;
      let receivedClient: any = null;

      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async (event: any, client: any) => {
          callbackCalled = true;
          receivedEvent = event;
          receivedClient = client;
        }
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      expect(callbackCalled).to.be.true;
      expect(receivedEvent.type).to.equal(
        'v1.billing.meter.error_report_triggered'
      );
      expect(receivedEvent.id).to.equal('evt_123');
      expect(receivedEvent.related_object.id).to.equal('mtr_123');
      expect(receivedClient).to.exist;
    });

    it('should route different events to their respective handlers', async () => {
      let billingCallbackCalled = false;
      let noMeterCallbackCalled = false;

      eventHandler.on('v1.billing.meter.error_report_triggered', async () => {
        billingCallbackCalled = true;
      });

      eventHandler.on('v1.billing.meter.no_meter_found', async () => {
        noMeterCallbackCalled = true;
      });

      const sigHeader1 = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader1);
      expect(billingCallbackCalled).to.be.true;

      const sigHeader2 = generateHeader(v1BillingMeterNoMeterFoundPayload);
      await eventHandler.handle(v1BillingMeterNoMeterFoundPayload, sigHeader2);
      expect(noMeterCallbackCalled).to.be.true;
    });

    it('should throw error when registering handler after handling', async () => {
      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      expect(() => {
        eventHandler.on('v1.billing.meter.no_meter_found', async () => {});
      }).to.throw(
        /Cannot register new handlers after an event has been handled/
      );
    });

    it('should throw error when registering handler after a failed parse', async () => {
      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      // attempting to handle locks registration even though verification fails
      let parseFailed = false;
      try {
        await eventHandler.handle(v1BillingMeterPayload, 't=1,v1=not-a-sig');
      } catch (e) {
        parseFailed = true;
      }
      expect(parseFailed).to.be.true;

      expect(() => {
        eventHandler.on('v1.billing.meter.no_meter_found', async () => {});
      }).to.throw(
        /Cannot register new handlers after an event has been handled/
      );
    });

    it('should throw error when registering duplicate handler', () => {
      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      expect(() => {
        eventHandler.on(
          'v1.billing.meter.error_report_triggered',
          async () => {}
        );
      }).to.throw(/Handler already registered for event type/);
    });
  });

  describe('preHandle', () => {
    it('should run the registered handler when no preHandle hook is registered', async () => {
      let callbackCalled = false;

      eventHandler.on('v1.billing.meter.error_report_triggered', async () => {
        callbackCalled = true;
      });

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      expect(callbackCalled).to.be.true;
    });

    it('should run the handler after the hook when the hook resolves true', async () => {
      const order: string[] = [];

      eventHandler.preHandle(async () => {
        order.push('preHandle');
        return true;
      });

      eventHandler.on('v1.billing.meter.error_report_triggered', async () => {
        order.push('handler');
      });

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      expect(order).to.deep.equal(['preHandle', 'handler']);
    });

    it('should not run the registered handler when the hook resolves false', async () => {
      let callbackCalled = false;

      eventHandler.preHandle(async () => false);

      eventHandler.on('v1.billing.meter.error_report_triggered', async () => {
        callbackCalled = true;
      });

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      expect(callbackCalled).to.be.false;
    });

    it('should not run the fallback callback for an unknown event type when the hook resolves false', async () => {
      let fallbackCalled = false;

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {
          fallbackCalled = true;
        }
      );

      handler.preHandle(async () => false);

      const sigHeader = generateHeader(unknownEventPayload);
      await handler.handle(unknownEventPayload, sigHeader);

      expect(fallbackCalled).to.be.false;
    });

    it('should receive the context-scoped client, leaving the shared client unmutated', async () => {
      const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
        stripeContext: 'original_context_123',
      });

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {}
      );

      let receivedContext: any = null;
      let receivedClient: any = null;

      handler.preHandle(async (_event: any, client: any) => {
        receivedClient = client;
        receivedContext = client._api.stripeContext;
        return true;
      });

      handler.on('v1.billing.meter.error_report_triggered', async () => {});

      const originalContext = stripe._api.stripeContext;

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await handler.handle(v1BillingMeterPayload, sigHeader);

      expect(receivedClient).to.not.equal(stripe);
      expect(receivedContext?.toString()).to.equal('event_context_456');
      expect(stripe._api.stripeContext).to.equal(originalContext);
    });

    it('should propagate a rejection from the hook and not run any callback', async () => {
      let handlerCalled = false;
      let fallbackCalled = false;

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {
          fallbackCalled = true;
        }
      );

      handler.preHandle(async () => {
        throw new Error('preHandle blew up!');
      });

      handler.on('v1.billing.meter.error_report_triggered', async () => {
        handlerCalled = true;
      });

      const sigHeader = generateHeader(v1BillingMeterPayload);

      let errorThrown = false;
      try {
        await handler.handle(v1BillingMeterPayload, sigHeader);
      } catch (err) {
        errorThrown = true;
        // @ts-expect-error
        expect(err.message).to.equal('preHandle blew up!');
      }

      expect(errorThrown).to.be.true;
      expect(handlerCalled).to.be.false;
      expect(fallbackCalled).to.be.false;
    });

    it('should throw when registering a hook after an event has been handled', async () => {
      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      expect(() => {
        eventHandler.preHandle(async () => true);
      }).to.throw(
        /Cannot register new handlers after an event has been handled/
      );
    });

    it('should throw when registering a preHandle hook twice', () => {
      eventHandler.preHandle(async () => true);

      expect(() => {
        eventHandler.preHandle(async () => true);
      }).to.throw(/A preHandle callback is already registered/);
    });

    it('should genuinely await the hook before dispatching', async () => {
      let handlerCalled = false;

      eventHandler.preHandle(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        return false;
      });

      eventHandler.on('v1.billing.meter.error_report_triggered', async () => {
        handlerCalled = true;
      });

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      expect(handlerCalled).to.be.false;
    });

    it('should return the handler instance for chaining', () => {
      const result = eventHandler.preHandle(async () => true);
      expect(result).to.equal(eventHandler);
    });
  });

  describe('stripe context management', () => {
    it('should use event stripe context in handler', async () => {
      let receivedContext: any = null;
      let normalizedContext: any = null;

      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async (event: any, client: any) => {
          receivedContext = client._api.stripeContext;
          // Verify that _normalizeStripeContext uses the mutated context as default
          normalizedContext = client._requestSender._normalizeStripeContext(
            undefined,
            client.getApiField('stripeContext')
          );
        }
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventHandler.handle(v1BillingMeterPayload, sigHeader);

      // The event has context 'event_context_456'
      expect(receivedContext?.toString()).to.equal('event_context_456');
      // Verify normalized context (what would be used in headers) matches
      expect(normalizedContext).to.equal('event_context_456');
    });

    it('should not modify original client context after handler success', async () => {
      const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
        stripeContext: 'original_context_123',
      });

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {}
      );

      let contextInHandler: any = null;
      let normalizedInHandler: any = null;

      handler.on(
        'v1.billing.meter.error_report_triggered',
        async (event: any, client: any) => {
          contextInHandler = client._api.stripeContext;
          normalizedInHandler = client._requestSender._normalizeStripeContext(
            undefined,
            client.getApiField('stripeContext')
          );
        }
      );

      const originalContext = stripe._api.stripeContext;

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await handler.handle(v1BillingMeterPayload, sigHeader);

      expect(contextInHandler?.toString()).to.equal('event_context_456');
      expect(normalizedInHandler).to.equal('event_context_456');
      expect(stripe._api.stripeContext).to.equal(originalContext);
      // Verify original client context is unchanged
      const normalizedAfter = stripe._requestSender._normalizeStripeContext(
        undefined,
        stripe.getApiField('stripeContext')
      );
      expect(normalizedAfter).to.equal('original_context_123');
    });

    it('should not modify original client context after handler error', async () => {
      const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
        stripeContext: 'original_context_123',
      });

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {}
      );

      handler.on(
        'v1.billing.meter.error_report_triggered',
        async (event: any, client: any) => {
          const context = client._api.stripeContext;
          const normalized = client._requestSender._normalizeStripeContext(
            undefined,
            client.getApiField('stripeContext')
          );
          expect(context?.toString()).to.equal('event_context_456');
          expect(normalized).to.equal('event_context_456');
          throw new Error('Handler error!');
        }
      );

      const originalContext = stripe._api.stripeContext;

      const sigHeader = generateHeader(v1BillingMeterPayload);

      try {
        await handler.handle(v1BillingMeterPayload, sigHeader);
        expect.fail('Should have thrown error');
      } catch (err) {
        // @ts-expect-error
        expect(err.message).to.equal('Handler error!');
      }

      expect(stripe._api.stripeContext).to.equal(originalContext);
      // Verify original client context is unchanged even after error
      const normalizedAfter = stripe._requestSender._normalizeStripeContext(
        undefined,
        stripe.getApiField('stripeContext')
      );
      expect(normalizedAfter).to.equal('original_context_123');
    });

    it('should create client with null context when event has no context', async () => {
      const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
        stripeContext: 'original_context_123',
      });

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {}
      );

      let receivedContext: any = null;
      let normalizedInHandler: any = null;

      // Create payload with null context
      const noContextPayload = JSON.stringify({
        id: 'evt_789',
        object: 'v2.core.event',
        type: 'v1.billing.meter.no_meter_found',
        livemode: false,
        created: '2022-02-15T00:27:45.330Z',
        context: null,
      });

      handler.on(
        'v1.billing.meter.no_meter_found',
        async (event: any, client: any) => {
          receivedContext = client._api.stripeContext;
          normalizedInHandler = client._requestSender._normalizeStripeContext(
            undefined,
            client.getApiField('stripeContext')
          );
        }
      );

      const originalContext = stripe._api.stripeContext;
      expect(originalContext?.toString()).to.equal('original_context_123');

      const sigHeader = generateHeader(noContextPayload);
      await handler.handle(noContextPayload, sigHeader);

      expect(receivedContext).to.be.null;
      expect(normalizedInHandler).to.be.null;
      expect(stripe._api.stripeContext?.toString()).to.equal(
        'original_context_123'
      );
      // Verify original client context is unchanged
      const normalizedAfter = stripe._requestSender._normalizeStripeContext(
        undefined,
        stripe.getApiField('stripeContext')
      );
      expect(normalizedAfter).to.equal('original_context_123');
    });
  });

  describe('unhandled events', () => {
    it('should route unknown event to on_unhandled handler', async () => {
      let unhandledCalled = false;
      let unhandledEvent: any = null;
      let unhandledClient: any = null;
      let unhandledInfo: any = null;

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async (event: any, client: any, info: any) => {
          unhandledCalled = true;
          unhandledEvent = event;
          unhandledClient = client;
          unhandledInfo = info;
        }
      );

      const sigHeader = generateHeader(unknownEventPayload);
      await handler.handle(unknownEventPayload, sigHeader);

      expect(unhandledCalled).to.be.true;
      expect(unhandledEvent.type).to.equal('llama.created');
      expect(unhandledClient).to.exist;
      expect(unhandledInfo.isKnownEventType).to.be.false;
    });

    it('should route known unregistered event to on_unhandled handler', async () => {
      let unhandledCalled = false;
      let unhandledEvent: any = null;
      let unhandledInfo: any = null;

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async (event: any, client: any, info: any) => {
          unhandledCalled = true;
          unhandledEvent = event;
          unhandledInfo = info;
        }
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await handler.handle(v1BillingMeterPayload, sigHeader);

      expect(unhandledCalled).to.be.true;
      expect(unhandledEvent.type).to.equal(
        'v1.billing.meter.error_report_triggered'
      );
      expect(unhandledInfo.isKnownEventType).to.be.true;
    });

    it('should not call on_unhandled for registered events', async () => {
      let handlerCalled = false;
      let unhandledCalled = false;

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {
          unhandledCalled = true;
        }
      );

      handler.on('v1.billing.meter.error_report_triggered', async () => {
        handlerCalled = true;
      });

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await handler.handle(v1BillingMeterPayload, sigHeader);

      expect(handlerCalled).to.be.true;
      expect(unhandledCalled).to.be.false;
    });
  });

  describe('client configuration', () => {
    it('should pass new client instance with event stripe context', async () => {
      const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
        stripeContext: 'original_context_xyz',
      });

      const handler = stripe.notificationHandler(
        DUMMY_WEBHOOK_SECRET,
        async () => {}
      );

      let receivedClient: any = null;
      let receivedContext: any = null;

      handler.on(
        'v1.billing.meter.error_report_triggered',
        async (event: any, client: any) => {
          receivedClient = client;
          receivedContext = client._api.stripeContext;
        }
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await handler.handle(v1BillingMeterPayload, sigHeader);

      // The handler should receive a new client instance (not the same reference)
      expect(receivedClient).to.not.equal(stripe);
      // With the event's context
      expect(receivedContext?.toString()).to.equal('event_context_456');
      // And the original client's context should remain unchanged
      expect(stripe._api.stripeContext?.toString()).to.equal(
        'original_context_xyz'
      );
    });
  });

  describe('webhook signature validation', () => {
    it('should reject invalid webhook signatures', async () => {
      let errorThrown = false;

      try {
        await eventHandler.handle(v1BillingMeterPayload, 'invalid_signature');
      } catch (err) {
        errorThrown = true;
        // @ts-expect-error
        expect(err.type).to.include('StripeSignatureVerification');
      }

      expect(errorThrown).to.be.true;
    });
  });

  describe('registeredEventTypes', () => {
    it('should return empty list when no handlers are registered', () => {
      const types = eventHandler.registeredEventTypes();
      expect(types).to.deep.equal([]);
    });

    it('should return single event type when one handler is registered', () => {
      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      const types = eventHandler.registeredEventTypes();
      expect(types).to.deep.equal(['v1.billing.meter.error_report_triggered']);
    });

    it('should return multiple event types in alphabetical order', () => {
      // Register in non-alphabetical order
      eventHandler.on('v1.billing.meter.no_meter_found', async () => {});
      eventHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      const types = eventHandler.registeredEventTypes();
      expect(types).to.deep.equal([
        'v1.billing.meter.error_report_triggered',
        'v1.billing.meter.no_meter_found',
      ]);
    });
  });
});

describe('StripeEventNotificationHandlerWithoutVerification', () => {
  let stripe: any;
  let withoutVerifHandler: any;

  // Event payloads (duplicated here since they are scoped to the sibling describe block)
  const v1BillingMeterPayload = JSON.stringify({
    id: 'evt_123',
    object: 'v2.core.event',
    type: 'v1.billing.meter.error_report_triggered',
    livemode: false,
    created: '2022-02-15T00:27:45.330Z',
    context: 'event_context_456',
    related_object: {
      id: 'mtr_123',
      type: 'billing.meter',
      url: '/v1/billing/meters/mtr_123',
    },
  });

  const unknownEventPayload = JSON.stringify({
    id: 'evt_unknown',
    object: 'v2.core.event',
    type: 'llama.created',
    livemode: false,
    created: '2022-02-15T00:27:45.330Z',
    context: 'event_context_unknown',
  });

  beforeEach(() => {
    stripe = getSpyableStripe({});
    withoutVerifHandler = stripe.notificationHandlerWithoutVerification(
      async () => {}
    );
  });

  it('should route event to registered handler without a signature', async () => {
    let callbackCalled = false;
    let receivedEvent: any = null;
    let receivedClient: any = null;

    withoutVerifHandler.on(
      'v1.billing.meter.error_report_triggered',
      async (event: any, client: any) => {
        callbackCalled = true;
        receivedEvent = event;
        receivedClient = client;
      }
    );

    // No signature argument — just the raw body
    await withoutVerifHandler.handle(v1BillingMeterPayload);

    expect(callbackCalled).to.be.true;
    expect(receivedEvent.type).to.equal(
      'v1.billing.meter.error_report_triggered'
    );
    expect(receivedEvent.id).to.equal('evt_123');
    expect(receivedClient).to.exist;
  });

  it('should throw error when registering handler after a failed parse', async () => {
    withoutVerifHandler.on(
      'v1.billing.meter.error_report_triggered',
      async () => {}
    );

    // attempting to handle locks registration even though the parse fails
    let parseFailed = false;
    try {
      await withoutVerifHandler.handle('not json');
    } catch (e) {
      parseFailed = true;
    }
    expect(parseFailed).to.be.true;

    expect(() => {
      withoutVerifHandler.on('v1.billing.meter.no_meter_found', async () => {});
    }).to.throw(/Cannot register new handlers after an event has been handled/);
  });

  it('should accept a Uint8Array body without a signature', async () => {
    let callbackCalled = false;

    withoutVerifHandler.on(
      'v1.billing.meter.error_report_triggered',
      async () => {
        callbackCalled = true;
      }
    );

    const bodyAsBytes = new TextEncoder().encode(v1BillingMeterPayload);
    await withoutVerifHandler.handle(bodyAsBytes);

    expect(callbackCalled).to.be.true;
  });

  it('should route known unregistered event to fallback with isKnownEventType: true', async () => {
    let unhandledCalled = false;
    let unhandledEvent: any = null;
    let unhandledInfo: any = null;

    const handler = stripe.notificationHandlerWithoutVerification(
      async (event: any, _client: any, info: any) => {
        unhandledCalled = true;
        unhandledEvent = event;
        unhandledInfo = info;
      }
    );

    await handler.handle(v1BillingMeterPayload);

    expect(unhandledCalled).to.be.true;
    expect(unhandledEvent.type).to.equal(
      'v1.billing.meter.error_report_triggered'
    );
    expect(unhandledInfo.isKnownEventType).to.be.true;
  });

  it('should route unknown event type to fallback with isKnownEventType: false', async () => {
    let unhandledCalled = false;
    let unhandledEvent: any = null;
    let unhandledInfo: any = null;

    const handler = stripe.notificationHandlerWithoutVerification(
      async (event: any, _client: any, info: any) => {
        unhandledCalled = true;
        unhandledEvent = event;
        unhandledInfo = info;
      }
    );

    await handler.handle(unknownEventPayload);

    expect(unhandledCalled).to.be.true;
    expect(unhandledEvent.type).to.equal('llama.created');
    expect(unhandledInfo.isKnownEventType).to.be.false;
  });

  it('should propagate event stripe context to the callback client', async () => {
    let receivedContext: any = null;
    let normalizedContext: any = null;

    withoutVerifHandler.on(
      'v1.billing.meter.error_report_triggered',
      async (event: any, client: any) => {
        receivedContext = client._api.stripeContext;
        normalizedContext = client._requestSender._normalizeStripeContext(
          undefined,
          client.getApiField('stripeContext')
        );
      }
    );

    await withoutVerifHandler.handle(v1BillingMeterPayload);

    // The event has context 'event_context_456'
    expect(receivedContext?.toString()).to.equal('event_context_456');
    expect(normalizedContext).to.equal('event_context_456');
  });

  it('should return StripeEventNotificationHandlerWithoutVerification from static factory', () => {
    // Access the parent class via an existing handler instance to avoid a
    // separate import that would break when this file is copied to stripe-node.
    const tempHandler = stripe.notificationHandler(
      'whsec_test_secret',
      async () => {}
    );
    const StripeEventNotificationHandlerClass = tempHandler.constructor;

    const handler = StripeEventNotificationHandlerClass.withoutVerification(
      stripe,
      async () => {}
    );

    expect(handler.constructor.name).to.equal(
      'StripeEventNotificationHandlerWithoutVerification'
    );
    expect(typeof handler.on).to.equal('function');
    expect(typeof handler.handle).to.equal('function');
  });

  it('should throw when constructing the original handler with an empty webhookSecret', () => {
    expect(() => {
      stripe.notificationHandler('', async () => {});
    }).to.throw(/webhookSecret must be a non-empty string/);
  });

  describe('preHandle', () => {
    it('should run the registered handler when no preHandle hook is registered', async () => {
      let callbackCalled = false;

      withoutVerifHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {
          callbackCalled = true;
        }
      );

      await withoutVerifHandler.handle(v1BillingMeterPayload);

      expect(callbackCalled).to.be.true;
    });

    it('should run the handler after the hook when the hook resolves true', async () => {
      const order: string[] = [];

      withoutVerifHandler.preHandle(async () => {
        order.push('preHandle');
        return true;
      });

      withoutVerifHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {
          order.push('handler');
        }
      );

      await withoutVerifHandler.handle(v1BillingMeterPayload);

      expect(order).to.deep.equal(['preHandle', 'handler']);
    });

    it('should not run the registered handler when the hook resolves false', async () => {
      let callbackCalled = false;

      withoutVerifHandler.preHandle(async () => false);

      withoutVerifHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {
          callbackCalled = true;
        }
      );

      await withoutVerifHandler.handle(v1BillingMeterPayload);

      expect(callbackCalled).to.be.false;
    });

    it('should not run the fallback callback for an unknown event type when the hook resolves false', async () => {
      let fallbackCalled = false;

      const handler = stripe.notificationHandlerWithoutVerification(
        async () => {
          fallbackCalled = true;
        }
      );

      handler.preHandle(async () => false);

      await handler.handle(unknownEventPayload);

      expect(fallbackCalled).to.be.false;
    });

    it('should receive the context-scoped client', async () => {
      let receivedContext: any = null;
      let receivedClient: any = null;

      withoutVerifHandler.preHandle(async (_event: any, client: any) => {
        receivedClient = client;
        receivedContext = client._api.stripeContext;
        return true;
      });

      withoutVerifHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      await withoutVerifHandler.handle(v1BillingMeterPayload);

      expect(receivedClient).to.not.equal(stripe);
      expect(receivedContext?.toString()).to.equal('event_context_456');
    });

    it('should propagate a rejection from the hook and not run any callback', async () => {
      let handlerCalled = false;

      withoutVerifHandler.preHandle(async () => {
        throw new Error('preHandle blew up!');
      });

      withoutVerifHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {
          handlerCalled = true;
        }
      );

      let errorThrown = false;
      try {
        await withoutVerifHandler.handle(v1BillingMeterPayload);
      } catch (err) {
        errorThrown = true;
        // @ts-expect-error
        expect(err.message).to.equal('preHandle blew up!');
      }

      expect(errorThrown).to.be.true;
      expect(handlerCalled).to.be.false;
    });

    it('should throw when registering a hook after an event has been handled', async () => {
      withoutVerifHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {}
      );

      await withoutVerifHandler.handle(v1BillingMeterPayload);

      expect(() => {
        withoutVerifHandler.preHandle(async () => true);
      }).to.throw(
        /Cannot register new handlers after an event has been handled/
      );
    });

    it('should throw when registering a preHandle hook twice', () => {
      withoutVerifHandler.preHandle(async () => true);

      expect(() => {
        withoutVerifHandler.preHandle(async () => true);
      }).to.throw(/A preHandle callback is already registered/);
    });

    it('should genuinely await the hook before dispatching', async () => {
      let handlerCalled = false;

      withoutVerifHandler.preHandle(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        return false;
      });

      withoutVerifHandler.on(
        'v1.billing.meter.error_report_triggered',
        async () => {
          handlerCalled = true;
        }
      );

      await withoutVerifHandler.handle(v1BillingMeterPayload);

      expect(handlerCalled).to.be.false;
    });

    it('should return the handler instance for chaining', () => {
      const result = withoutVerifHandler.preHandle(async () => true);
      expect(result).to.equal(withoutVerifHandler);
    });
  });

  it('should treat every webhookSecret as a real secret, with no magic bypass value', async () => {
    // there is no sentinel to forge: the verifying and non-verifying handlers are
    // separate classes, so any string passed here is just an ordinary (wrong) secret
    const handler = stripe.notificationHandler(
      '__without_verification__',
      async () => {}
    );

    let errorThrown = false;

    try {
      await handler.handle(
        v1BillingMeterPayload,
        generateHeader(v1BillingMeterPayload)
      );
    } catch (err) {
      errorThrown = true;
      // @ts-expect-error
      expect(err.type).to.include('StripeSignatureVerification');
    }

    expect(errorThrown).to.be.true;
  });
});
