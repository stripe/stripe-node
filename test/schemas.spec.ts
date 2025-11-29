/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const expect = require('chai').expect;

describe('Zod Schema Validation', function() {
  let schemas: any;

  before(function() {
    try {
      schemas = require('../src/schemas/index.ts');
    } catch (error) {
      // Zod might not be installed in CI
      if (
        error instanceof Error &&
        error.message.includes('Cannot find module')
      ) {
        this.skip();
      }
      throw error;
    }
  });

  describe('Base Event Schema', function() {
    it('should validate a valid base event', function() {
      const validEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {},
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'charge.succeeded',
      };

      const result = schemas.validateEvent(validEvent);
      expect(result).to.be.an('object');
      expect(result.id).to.equal('evt_test123');
    });

    it('should reject an event with invalid id prefix', function() {
      const invalidEvent = {
        id: 'invalid_123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {},
        },
        livemode: false,
        pending_webhooks: 1,
        request: null,
        type: 'charge.succeeded',
      };

      expect(() => schemas.validateEvent(invalidEvent)).to.throw();
    });

    it('should reject an event with missing required fields', function() {
      const invalidEvent = {
        id: 'evt_test123',
        object: 'event',
        // missing created, data, livemode, etc.
      };

      expect(() => schemas.validateEvent(invalidEvent)).to.throw();
    });

    it('should handle events with optional fields', function() {
      const eventWithOptionals = {
        id: 'evt_test123',
        object: 'event',
        account: 'acct_test123',
        api_version: '2023-10-16',
        context: 'some_context',
        created: 1234567890,
        data: {
          object: {},
          previous_attributes: {
            status: 'pending',
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: 'idem_key',
        },
        type: 'charge.succeeded',
      };

      const result = schemas.validateEvent(eventWithOptionals);
      expect(result.account).to.equal('acct_test123');
      expect(result.context).to.equal('some_context');
    });
  });

  describe('Charge Event Schemas', function() {
    it('should validate charge.succeeded event', function() {
      const chargeEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'ch_test123',
            object: 'charge',
            amount: 2000,
            amount_captured: 2000,
            amount_refunded: 0,
            billing_details: {
              address: {
                city: 'San Francisco',
                country: 'US',
                line1: '123 Main St',
                line2: null,
                postal_code: '94111',
                state: 'CA',
              },
              email: 'customer@example.com',
              name: 'John Doe',
              phone: '+14155555555',
            },
            captured: true,
            created: 1234567890,
            currency: 'usd',
            customer: 'cus_test123',
            description: 'Test charge',
            disputed: false,
            invoice: null,
            livemode: false,
            metadata: {},
            paid: true,
            payment_intent: 'pi_test123',
            payment_method: 'pm_test123',
            receipt_email: 'customer@example.com',
            receipt_number: null,
            receipt_url: 'https://pay.stripe.com/receipts/test',
            refunded: false,
            status: 'succeeded',
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'charge.succeeded',
      };

      const result = schemas.chargeSucceededEventSchema.parse(chargeEvent);
      expect(result.type).to.equal('charge.succeeded');
      expect(result.data.object.id).to.equal('ch_test123');
      expect(result.data.object.status).to.equal('succeeded');
    });
  });

  describe('Customer Event Schemas', function() {
    it('should validate customer.created event', function() {
      const customerEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'cus_test123',
            object: 'customer',
            address: {
              city: 'San Francisco',
              country: 'US',
              line1: '123 Main St',
              line2: null,
              postal_code: '94111',
              state: 'CA',
            },
            balance: 0,
            created: 1234567890,
            currency: 'usd',
            default_source: null,
            delinquent: false,
            description: 'Test customer',
            discount: null,
            email: 'customer@example.com',
            invoice_prefix: 'ABC123',
            invoice_settings: {
              custom_fields: null,
              default_payment_method: null,
              footer: null,
            },
            livemode: false,
            metadata: {},
            name: 'John Doe',
            phone: '+14155555555',
            preferred_locales: ['en'],
            shipping: null,
            tax_exempt: 'none',
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'customer.created',
      };

      const result = schemas.customerCreatedEventSchema.parse(customerEvent);
      expect(result.type).to.equal('customer.created');
      expect(result.data.object.email).to.equal('customer@example.com');
    });

    it('should validate customer.updated event with previous_attributes', function() {
      const customerUpdatedEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'cus_test123',
            object: 'customer',
            address: null,
            balance: 0,
            created: 1234567890,
            currency: null,
            default_source: null,
            delinquent: null,
            description: 'Updated description',
            discount: null,
            email: 'newemail@example.com',
            invoice_prefix: 'ABC123',
            livemode: false,
            metadata: {},
            name: 'Jane Doe',
            phone: null,
            preferred_locales: [],
            shipping: null,
            tax_exempt: 'none',
          },
          previous_attributes: {
            email: 'oldemail@example.com',
            name: 'John Doe',
            description: 'Old description',
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'customer.updated',
      };

      const result = schemas.customerUpdatedEventSchema.parse(
        customerUpdatedEvent
      );
      expect(result.type).to.equal('customer.updated');
      expect(result.data.object.email).to.equal('newemail@example.com');
      expect(result.data.previous_attributes).to.exist;
    });

    it('should validate customer.deleted event', function() {
      const customerDeletedEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'cus_test123',
            object: 'customer',
            deleted: true,
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'customer.deleted',
      };

      const result = schemas.customerDeletedEventSchema.parse(
        customerDeletedEvent
      );
      expect(result.type).to.equal('customer.deleted');
      expect(result.data.object.deleted).to.be.true;
    });
  });

  describe('Invoice Event Schemas', function() {
    it('should validate invoice.paid event', function() {
      const invoiceEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'in_test123',
            object: 'invoice',
            amount_due: 2000,
            amount_paid: 2000,
            amount_remaining: 0,
            attempt_count: 1,
            attempted: true,
            auto_advance: true,
            billing_reason: 'subscription_cycle',
            charge: 'ch_test123',
            collection_method: 'charge_automatically',
            created: 1234567890,
            currency: 'usd',
            customer: 'cus_test123',
            customer_email: 'customer@example.com',
            customer_name: 'John Doe',
            description: null,
            due_date: null,
            hosted_invoice_url: 'https://invoice.stripe.com/test',
            invoice_pdf: 'https://invoice.stripe.com/test.pdf',
            livemode: false,
            metadata: {},
            number: 'INV-0001',
            paid: true,
            payment_intent: 'pi_test123',
            status: 'paid',
            subscription: 'sub_test123',
            subtotal: 2000,
            total: 2000,
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'invoice.paid',
      };

      const result = schemas.invoicePaidEventSchema.parse(invoiceEvent);
      expect(result.type).to.equal('invoice.paid');
      expect(result.data.object.paid).to.be.true;
      expect(result.data.object.status).to.equal('paid');
    });

    it('should validate invoice.payment_failed event', function() {
      const invoiceFailedEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'in_test123',
            object: 'invoice',
            amount_due: 2000,
            amount_paid: 0,
            amount_remaining: 2000,
            attempt_count: 3,
            attempted: true,
            collection_method: 'charge_automatically',
            created: 1234567890,
            currency: 'usd',
            customer: 'cus_test123',
            customer_email: 'customer@example.com',
            livemode: false,
            metadata: {},
            paid: false,
            status: 'open',
            subtotal: 2000,
            total: 2000,
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'invoice.payment_failed',
      };

      const result = schemas.invoicePaymentFailedEventSchema.parse(
        invoiceFailedEvent
      );
      expect(result.type).to.equal('invoice.payment_failed');
      expect(result.data.object.paid).to.be.false;
    });
  });

  describe('Payment Intent Event Schemas', function() {
    it('should validate payment_intent.succeeded event', function() {
      const paymentIntentEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'pi_test123',
            object: 'payment_intent',
            amount: 2000,
            amount_capturable: 0,
            amount_received: 2000,
            application: null,
            application_fee_amount: null,
            canceled_at: null,
            cancellation_reason: null,
            capture_method: 'automatic',
            client_secret: 'pi_test123_secret',
            confirmation_method: 'automatic',
            created: 1234567890,
            currency: 'usd',
            customer: 'cus_test123',
            description: 'Test payment',
            invoice: null,
            livemode: false,
            metadata: {},
            payment_method: 'pm_test123',
            payment_method_types: ['card'],
            receipt_email: 'customer@example.com',
            setup_future_usage: null,
            shipping: null,
            status: 'succeeded',
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'payment_intent.succeeded',
      };

      const result = schemas.paymentIntentSucceededEventSchema.parse(
        paymentIntentEvent
      );
      expect(result.type).to.equal('payment_intent.succeeded');
      expect(result.data.object.status).to.equal('succeeded');
    });
  });

  describe('Checkout Session Event Schemas', function() {
    it('should validate checkout.session.completed event', function() {
      const checkoutSessionEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'cs_test123',
            object: 'checkout.session',
            amount_subtotal: 2000,
            amount_total: 2000,
            billing_address_collection: null,
            cancel_url: 'https://example.com/cancel',
            client_reference_id: null,
            currency: 'usd',
            customer: 'cus_test123',
            customer_email: 'customer@example.com',
            livemode: false,
            locale: null,
            metadata: {},
            mode: 'payment',
            payment_intent: 'pi_test123',
            payment_status: 'paid',
            setup_intent: null,
            shipping: null,
            status: 'complete',
            submit_type: null,
            subscription: null,
            success_url: 'https://example.com/success',
            url: null,
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'checkout.session.completed',
      };

      const result = schemas.checkoutSessionCompletedEventSchema.parse(
        checkoutSessionEvent
      );
      expect(result.type).to.equal('checkout.session.completed');
      expect(result.data.object.payment_status).to.equal('paid');
      expect(result.data.object.status).to.equal('complete');
    });
  });

  describe('Subscription Event Schemas', function() {
    it('should validate customer.subscription.created event', function() {
      const subscriptionEvent = {
        id: 'evt_test123',
        object: 'event',
        api_version: '2023-10-16',
        created: 1234567890,
        data: {
          object: {
            id: 'sub_test123',
            object: 'subscription',
            application_fee_percent: null,
            billing_cycle_anchor: 1234567890,
            cancel_at: null,
            cancel_at_period_end: false,
            canceled_at: null,
            collection_method: 'charge_automatically',
            created: 1234567890,
            current_period_end: 1237159890,
            current_period_start: 1234567890,
            customer: 'cus_test123',
            days_until_due: null,
            default_payment_method: 'pm_test123',
            default_source: null,
            discount: null,
            ended_at: null,
            items: {},
            latest_invoice: 'in_test123',
            livemode: false,
            metadata: {},
            start_date: 1234567890,
            status: 'active',
            trial_end: null,
            trial_start: null,
          },
        },
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_test123',
          idempotency_key: null,
        },
        type: 'customer.subscription.created',
      };

      const result = schemas.subscriptionCreatedEventSchema.parse(
        subscriptionEvent
      );
      expect(result.type).to.equal('customer.subscription.created');
      expect(result.data.object.status).to.equal('active');
    });
  });
});
