# Zod Schema Validation Example

This example demonstrates how to use Zod schemas for runtime validation of Stripe webhook events.

## Features

- Fail-fast validation catches malformed webhook events early
- Type-safe parsing ensures event structure matches expectations
- Detailed error messages help debug issues
- Opt-in feature - only use when you need runtime validation

## Installation

```bash
npm install stripe zod
# or
yarn add stripe zod
```

## Basic Usage

```typescript
import Stripe from 'stripe';
import { validateEvent } from 'stripe/schemas';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// In your webhook handler:
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature']!;
  
  try {
    // Verify signature and construct event
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    
    // Validate event structure with Zod
    const validatedEvent = validateEvent(event);
    
    console.log('✅ Valid event:', validatedEvent.type);
    
    // Handle the event
    switch (validatedEvent.type) {
      case 'payment_intent.succeeded':
        // Event is validated and type-safe
        console.log('Payment succeeded:', validatedEvent.data.object.id);
        break;
      // ... handle other event types
    }
    
    res.json({received: true});
  } catch (err) {
    console.error('❌ Webhook error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});
```

## Using Specific Event Schemas

For more specific validation, use event-type-specific schemas:

```typescript
import {
  chargeSucceededEventSchema,
  customerCreatedEventSchema,
  invoicePaidEventSchema,
} from 'stripe/schemas';

// Validate specific event types
const event = stripe.webhooks.constructEvent(payload, sig, secret);

switch (event.type) {
  case 'charge.succeeded': {
    const chargeEvent = chargeSucceededEventSchema.parse(event);
    console.log('Charge amount:', chargeEvent.data.object.amount);
    break;
  }
  
  case 'customer.created': {
    const customerEvent = customerCreatedEventSchema.parse(event);
    console.log('New customer:', customerEvent.data.object.email);
    break;
  }
  
  case 'invoice.paid': {
    const invoiceEvent = invoicePaidEventSchema.parse(event);
    console.log('Invoice paid:', invoiceEvent.data.object.number);
    break;
  }
}
```

## Using Built-in Validation Methods

The library provides convenience methods that combine signature verification and validation:

```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature']!;
  
  try {
    // One-step: verify signature AND validate structure
    const validatedEvent = stripe.webhooks.constructEventWithValidation(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    
    console.log('✅ Verified and validated:', validatedEvent.type);
    res.json({received: true});
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});
```

## Safe Parsing (No Exceptions)

For scenarios where you don't want exceptions, use safe parsing:

```typescript
import { safeValidateEvent } from 'stripe/schemas';

const event = stripe.webhooks.constructEvent(payload, sig, secret);
const result = safeValidateEvent(event);

if (result.success) {
  console.log('✅ Valid event:', result.data.type);
  // Use result.data
} else {
  console.error('❌ Validation failed:', result.error);
  // Handle validation error gracefully
}
```

## Error Handling

Zod provides detailed error messages when validation fails:

```typescript
import { ZodError } from 'zod';
import { validateEvent } from 'stripe/schemas';

try {
  const validatedEvent = validateEvent(malformedEvent);
} catch (error) {
  if (error instanceof ZodError) {
    console.error('Validation errors:');
    error.errors.forEach(err => {
      console.error(`  - ${err.path.join('.')}: ${err.message}`);
    });
    
    // Example output:
    // Validation errors:
    //   - id: String must start with "evt_"
    //   - data.object.amount: Expected number, received string
  } else {
    console.error('Other error:', error);
  }
}
```

## TypeScript Type Narrowing

Validated events maintain full TypeScript type safety:

```typescript
import { validateEvent } from 'stripe/schemas';

const event = stripe.webhooks.constructEvent(payload, sig, secret);
const validated = validateEvent(event);

// TypeScript knows the structure
validated.id; // string
validated.created; // number
validated.livemode; // boolean
validated.data.object; // the Stripe resource
```

## Supported Event Types

This pilot implementation supports the following event types:

- `charge.succeeded`
- `customer.created`
- `customer.updated`
- `customer.deleted`
- `invoice.paid`
- `invoice.payment_failed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`

Additional event types can be added based on community needs.

## Performance Considerations

- Validation adds minimal overhead (~1-2ms per event)
- Schemas are compiled once and reused
- Use only when you need fail-fast guarantees
- For high-throughput webhooks, consider validating only in development

## When to Use Validation

✅ **Use validation when:**
- You need fail-fast error detection
- Working with untrusted webhook sources (e.g., EventBridge, queues)
- Debugging webhook integration issues
- Building critical payment flows

⚠️ **Skip validation when:**
- Maximum performance is critical
- Webhooks come directly from Stripe (already validated)
- You trust your webhook handling code completely

## Testing

When testing webhooks, generate test events with validation:

```typescript
import { validateEvent } from 'stripe/schemas';

const testEvent = {
  id: 'evt_test123',
  object: 'event',
  type: 'charge.succeeded',
  // ... other required fields
};

// Ensure your test events are valid
const validated = validateEvent(testEvent);
expect(validated.type).to.equal('charge.succeeded');
```

## Contributing

This is a pilot implementation. If you need additional event types, please:

1. Open an issue describing your use case
2. Contribute schemas for additional event types
3. Share feedback on the API design
