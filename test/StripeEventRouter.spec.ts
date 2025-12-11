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

describe('StripeEventRouter', () => {
  let stripe: any;
  let eventRouter: any;
  let onUnhandledHandler: any;

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
    onUnhandledHandler = async () => {};
    eventRouter = stripe.router(DUMMY_WEBHOOK_SECRET, onUnhandledHandler);
  });

  describe('handler registration and routing', () => {
    it('should route event to registered handler', async () => {
      let handlerCalled = false;
      let receivedEvent: any = null;
      let receivedClient: any = null;

      eventRouter.on(
        'v1.billing.meter.error_report_triggered',
        async (event: any, client: any) => {
          handlerCalled = true;
          receivedEvent = event;
          receivedClient = client;
        }
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventRouter.handle(v1BillingMeterPayload, sigHeader);

      expect(handlerCalled).to.be.true;
      expect(receivedEvent.type).to.equal(
        'v1.billing.meter.error_report_triggered'
      );
      expect(receivedEvent.id).to.equal('evt_123');
      expect(receivedEvent.related_object.id).to.equal('mtr_123');
      expect(receivedClient).to.exist;
    });

    it('should route different events to their respective handlers', async () => {
      let billingHandlerCalled = false;
      let noMeterHandlerCalled = false;

      eventRouter.on('v1.billing.meter.error_report_triggered', async () => {
        billingHandlerCalled = true;
      });

      eventRouter.on('v1.billing.meter.no_meter_found', async () => {
        noMeterHandlerCalled = true;
      });

      const sigHeader1 = generateHeader(v1BillingMeterPayload);
      await eventRouter.handle(v1BillingMeterPayload, sigHeader1);
      expect(billingHandlerCalled).to.be.true;

      const sigHeader2 = generateHeader(v1BillingMeterNoMeterFoundPayload);
      await eventRouter.handle(v1BillingMeterNoMeterFoundPayload, sigHeader2);
      expect(noMeterHandlerCalled).to.be.true;
    });

    it('should throw error when registering handler after handling', async () => {
      eventRouter.on('v1.billing.meter.error_report_triggered', async () => {});

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await eventRouter.handle(v1BillingMeterPayload, sigHeader);

      expect(() => {
        eventRouter.on('v1.billing.meter.no_meter_found', async () => {});
      }).to.throw(
        /Cannot register new handlers after an event has been handled/
      );
    });

    it('should throw error when registering duplicate handler', () => {
      eventRouter.on('v1.billing.meter.error_report_triggered', async () => {});

      expect(() => {
        eventRouter.on(
          'v1.billing.meter.error_report_triggered',
          async () => {}
        );
      }).to.throw(/Handler already registered for event type/);
    });
  });

  describe('stripe context management', () => {
    it('should use event stripe context in handler', async () => {
      let receivedContext: any = null;
      let normalizedContext: any = null;

      eventRouter.on(
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
      await eventRouter.handle(v1BillingMeterPayload, sigHeader);

      // The event has context 'event_context_456'
      expect(receivedContext?.toString()).to.equal('event_context_456');
      // Verify normalized context (what would be used in headers) matches
      expect(normalizedContext).to.equal('event_context_456');
    });

    it('should not modify original client context after handler success', async () => {
      const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
        stripeContext: 'original_context_123',
      });

      const router = stripe.router(DUMMY_WEBHOOK_SECRET, async () => {});

      let contextInHandler: any = null;
      let normalizedInHandler: any = null;

      router.on(
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
      await router.handle(v1BillingMeterPayload, sigHeader);

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

      const router = stripe.router(DUMMY_WEBHOOK_SECRET, async () => {});

      router.on(
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
        await router.handle(v1BillingMeterPayload, sigHeader);
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

      const router = stripe.router(DUMMY_WEBHOOK_SECRET, async () => {});

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

      router.on(
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
      await router.handle(noContextPayload, sigHeader);

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

      const router = stripe.router(
        DUMMY_WEBHOOK_SECRET,
        async (event: any, client: any, info: any) => {
          unhandledCalled = true;
          unhandledEvent = event;
          unhandledClient = client;
          unhandledInfo = info;
        }
      );

      const sigHeader = generateHeader(unknownEventPayload);
      await router.handle(unknownEventPayload, sigHeader);

      expect(unhandledCalled).to.be.true;
      expect(unhandledEvent.type).to.equal('llama.created');
      expect(unhandledClient).to.exist;
      expect(unhandledInfo.isKnownEventType).to.be.false;
    });

    it('should route known unregistered event to on_unhandled handler', async () => {
      let unhandledCalled = false;
      let unhandledEvent: any = null;
      let unhandledInfo: any = null;

      const router = stripe.router(
        DUMMY_WEBHOOK_SECRET,
        async (event: any, client: any, info: any) => {
          unhandledCalled = true;
          unhandledEvent = event;
          unhandledInfo = info;
        }
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await router.handle(v1BillingMeterPayload, sigHeader);

      expect(unhandledCalled).to.be.true;
      expect(unhandledEvent.type).to.equal(
        'v1.billing.meter.error_report_triggered'
      );
      expect(unhandledInfo.isKnownEventType).to.be.true;
    });

    it('should not call on_unhandled for registered events', async () => {
      let handlerCalled = false;
      let unhandledCalled = false;

      const router = stripe.router(DUMMY_WEBHOOK_SECRET, async () => {
        unhandledCalled = true;
      });

      router.on('v1.billing.meter.error_report_triggered', async () => {
        handlerCalled = true;
      });

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await router.handle(v1BillingMeterPayload, sigHeader);

      expect(handlerCalled).to.be.true;
      expect(unhandledCalled).to.be.false;
    });
  });

  describe('client configuration', () => {
    it('should pass new client instance with event stripe context', async () => {
      const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
        stripeContext: 'original_context_xyz',
      });

      const router = stripe.router(DUMMY_WEBHOOK_SECRET, async () => {});

      let receivedClient: any = null;
      let receivedContext: any = null;

      router.on(
        'v1.billing.meter.error_report_triggered',
        async (event: any, client: any) => {
          receivedClient = client;
          receivedContext = client._api.stripeContext;
        }
      );

      const sigHeader = generateHeader(v1BillingMeterPayload);
      await router.handle(v1BillingMeterPayload, sigHeader);

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
        await eventRouter.handle(v1BillingMeterPayload, 'invalid_signature');
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
      const types = eventRouter.registeredEventTypes();
      expect(types).to.deep.equal([]);
    });

    it('should return single event type when one handler is registered', () => {
      eventRouter.on('v1.billing.meter.error_report_triggered', async () => {});

      const types = eventRouter.registeredEventTypes();
      expect(types).to.deep.equal(['v1.billing.meter.error_report_triggered']);
    });

    it('should return multiple event types in alphabetical order', () => {
      // Register in non-alphabetical order
      eventRouter.on('v1.billing.meter.no_meter_found', async () => {});
      eventRouter.on('v1.billing.meter.error_report_triggered', async () => {});

      const types = eventRouter.registeredEventTypes();
      expect(types).to.deep.equal([
        'v1.billing.meter.error_report_triggered',
        'v1.billing.meter.no_meter_found',
      ]);
    });
  });
});
