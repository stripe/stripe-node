/**
 * Scratch pad for the expand-aware types. NOT part of `just types-test` — the tsconfig
 * here only lists `typescriptTest.ts`, so nothing in this file can break CI.
 *
 * Two ways to use it:
 *   - Open it in your editor. `node_modules/stripe` is symlinked to the repo root, so
 *     hover works immediately. Every `^?` below marks something worth hovering.
 *   - Typecheck it from testProjects/types/:
 *       npx tsc --noEmit --strict --target ES2020 --module Node16 \
 *         --moduleResolution node16 expandPlayground.ts
 *
 * If you change src/, run a build first so the .d.ts files are current:
 *   just build     (from the repo root)
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_123');

/* ------------------------------------------------------------------ *
 * 1. The case from issue #2327
 * ------------------------------------------------------------------ */

export async function theIssue(): Promise<string | null | undefined> {
  const session = await stripe.checkout.sessions.retrieve('cs_123', {
    expand: ['subscription', 'subscription.items.data.price.product'],
  });

  const product = session.subscription?.items.data[0].price.product;
  //    ^? Stripe.Product | Stripe.DeletedProduct | undefined

  // The `deleted` check is the only thing left. It is not ceremony: `price.product`
  // really is `string | Product | DeletedProduct`, so the hand-rolled workaround in
  // the issue (`product: Stripe.Product | null`) was actually unsound.
  return product && !product.deleted ? product.name : undefined;

  // For comparison, what you write today:
  //   ((session.subscription as Stripe.Subscription | null)
  //     ?.items.data[0].price.product as Stripe.Product | null)?.name
}

/* ------------------------------------------------------------------ *
 * 2. One field, and the deleted variant
 * ------------------------------------------------------------------ */

export async function oneField(): Promise<void> {
  const charge = await stripe.charges.retrieve('ch_123', {
    expand: ['customer'],
  });

  charge.customer;
  // ^? Stripe.Customer | Stripe.DeletedCustomer | null

  // Fields you did NOT expand keep their id half:
  charge.balance_transaction;
  // ^? string | Stripe.BalanceTransaction | null

  if (charge.customer && !charge.customer.deleted) {
    const email: string | null = charge.customer.email;
  }
}

/* ------------------------------------------------------------------ *
 * 3. Nested paths — an intermediate segment is expanded implicitly,
 *    exactly like the API behaves
 * ------------------------------------------------------------------ */

export async function nested(): Promise<void> {
  // Note: only `payment_intent.customer` is passed, yet `payment_intent` itself is
  // expanded too, because it has to be for the path to mean anything.
  const charge = await stripe.charges.retrieve('ch_123', {
    expand: ['payment_intent.customer'],
  });

  charge.payment_intent;
  // ^? Stripe.Expanded<Stripe.PaymentIntent, "customer"> | null

  charge.payment_intent?.customer;
  // ^? Stripe.Customer | Stripe.DeletedCustomer | null | undefined

  // ...but its siblings are untouched:
  charge.payment_intent?.latest_charge;
  // ^? string | Stripe.Charge | null | undefined
}

/* ------------------------------------------------------------------ *
 * 4. Lists and search — paths address the envelope, so they start `data.`
 * ------------------------------------------------------------------ */

export async function lists(): Promise<void> {
  const page = await stripe.charges.list({expand: ['data.customer']});
  page.data[0].customer;
  // ^? Stripe.Customer | Stripe.DeletedCustomer | null

  // All four surfaces of ApiListPromise narrow, not just `.data`:
  const collected = await stripe.charges
    .list({expand: ['data.customer']})
    .autoPagingToArray({limit: 10});
  collected[0].customer;
  // ^? Stripe.Customer | Stripe.DeletedCustomer | null

  for await (const c of stripe.charges.list({expand: ['data.customer']})) {
    c.customer;
    // ^? Stripe.Customer | Stripe.DeletedCustomer | null
    break;
  }

  await stripe.charges.list({expand: ['data.customer']}).autoPagingEach((c) => {
    c.customer;
    // ^? Stripe.Customer | Stripe.DeletedCustomer | null
  });

  const found = await stripe.charges.search({
    query: 'amount>100',
    expand: ['data.customer'],
  });
  found.data[0].customer;
  // ^? Stripe.Customer | Stripe.DeletedCustomer | null

  // A path that isn't `data.`-prefixed leaves the item type alone:
  const totals = await stripe.charges.list({expand: ['total_count']});
  totals.data[0].customer;
  // ^? string | Stripe.Customer | Stripe.DeletedCustomer | null
}

/* ------------------------------------------------------------------ *
 * 5. Arrays of expandables
 * ------------------------------------------------------------------ */

export async function arrays(): Promise<void> {
  const invoice = await stripe.invoices.retrieve('in_123', {
    expand: ['discounts'],
  });
  invoice.discounts;
  // ^? Array<Stripe.Discount | Stripe.DeletedDiscount>

  // Some of these are nullable arrays; the null survives:
  const item = await stripe.invoiceItems.retrieve('ii_123', {
    expand: ['discounts'],
  });
  item.discounts;
  // ^? Array<Stripe.Discount> | null
}

/* ------------------------------------------------------------------ *
 * 6. Graceful fallbacks — all three of these give you today's type
 * ------------------------------------------------------------------ */

export async function fallbacks(): Promise<void> {
  const a = await stripe.charges.retrieve('ch_123');
  a.customer;
  // ^? string | Stripe.Customer | Stripe.DeletedCustomer | null

  const b = await stripe.charges.retrieve('ch_123', {expand: []});
  b.customer;
  // ^? string | Stripe.Customer | Stripe.DeletedCustomer | null

  // The paths have to be literals. A `string[]` variable carries no information,
  // so you get the unexpanded type rather than a wrong one.
  const dynamic: string[] = ['customer'];
  const c = await stripe.charges.retrieve('ch_123', {expand: dynamic});
  c.customer;
  // ^? string | Stripe.Customer | Stripe.DeletedCustomer | null

  // Same if you annotate the params with the base type:
  const params: Stripe.ChargeRetrieveParams = {expand: ['customer']};
  const d = await stripe.charges.retrieve('ch_123', params);
  d.customer;
  // ^? string | Stripe.Customer | Stripe.DeletedCustomer | null

  // A hoisted `as const` array does NOT work — it's readonly, and `expand` is
  // `Array<E>`. This is equally true today against `Array<string>`, so it's not a
  // regression, but it is a papercut. Inline object literals are fine.
  const hoisted = ['customer'] as const;
  // @ts-expect-error readonly array is not assignable to Array<E>
  await stripe.charges.retrieve('ch_123', {expand: hoisted});
}

/* ------------------------------------------------------------------ *
 * 7. Naming the type yourself
 * ------------------------------------------------------------------ */

// Useful when you want to pass an expanded object around. This is the same type the
// method infers, so there's no second source of truth.
function summarize(
  pi: Stripe.Expanded<Stripe.PaymentIntent, 'customer'>
): string | null {
  if (!pi.customer || pi.customer.deleted) return null;
  return pi.customer.email;
}

export async function named(): Promise<string | null> {
  return summarize(
    await stripe.paymentIntents.retrieve('pi_123', {expand: ['customer']})
  );
}

/* ------------------------------------------------------------------ *
 * 8. What breaks when you upgrade  (the migration guide, executable)
 * ------------------------------------------------------------------ */

export async function breakingChanges(): Promise<void> {
  const charge = await stripe.charges.retrieve('ch_123', {
    expand: ['customer'],
  });
  if (!charge.customer) throw new Error('guard');

  // (a) Casting an expanded field back to string. Most likely thing to hit you.
  // @ts-expect-error the string half is gone, so this cast is no longer valid
  const id = charge.customer as string;
  // Fix: drop the cast and read `.id`, or `as unknown as string` if you must.
  const betterId: string = charge.customer.id;

  // (b) Assigning an id into an expanded field.
  // @ts-expect-error 'cus_123' is not assignable to Customer | DeletedCustomer
  charge.customer = 'cus_123';

  // (c) `typeof === 'string'` guards now narrow to never, so the body errors.
  if (typeof charge.customer === 'string') {
    // @ts-expect-error charge.customer is never here
    const len: number = charge.customer.length;
  }
  // Fix: delete the guard.

  // (d) Still fine — casting to the object, and assigning to the plain resource:
  const asObject = charge.customer as Stripe.Customer;
  const plain: Stripe.Charge = charge;
}

/* ------------------------------------------------------------------ *
 * 9. Compile cost
 * ------------------------------------------------------------------ */

export async function perf(): Promise<void> {
  // Measured with `tsc --extendedDiagnostics` against the built .d.ts, comparing this
  // branch to master. Both costs below are FLAT — they do not scale with the number
  // of call sites, or with how many distinct expanded types you produce, because tsc
  // caches the assignability results.
  //
  //   importing the SDK at all           51,141 -> 56,043 instantiations
  //   ...plus annotating an expanded
  //      result with the plain type      56,043 -> ~67,400
  //
  // Check time was 0.54s before and 0.54-0.60s after in every scenario tried,
  // including 10 distinct expanded types. There is no wall-clock regression.

  // This still compiles. It's the more expensive of the two forms, but "expensive"
  // here means a one-time ~11k instantiations for the whole program.
  const annotated: Stripe.Charge = await stripe.charges.retrieve('ch_123', {
    expand: ['customer'],
  });

  // Preferred anyway, because the annotation throws away the narrowing you asked for.
  const inferred = await stripe.charges.retrieve('ch_123', {
    expand: ['customer'],
  });
}

/* ------------------------------------------------------------------ *
 * 10. Things to try breaking
 * ------------------------------------------------------------------ */

export async function poke(): Promise<void> {
  // A path that isn't an expandable field is silently ignored (no error). Decide
  // whether you want that; making it an error needs spec-driven path unions.
  const a = await stripe.charges.retrieve('ch_123', {expand: ['not_a_field']});
  a.customer;
  // ^? string | Stripe.Customer | ... | null   (unchanged)

  // Non-expandable fields named in a path are left alone rather than mangled —
  // this is what the `Unexpand` guard in src/shared.ts is protecting.
  const b = await stripe.charges.retrieve('ch_123', {expand: ['description']});
  b.description;
  // ^? string | null

  const c = await stripe.subscriptions.retrieve('sub_123', {
    expand: ['collection_method'],
  });
  c.collection_method;
  // ^? Stripe.Subscription.CollectionMethod  (OtherString escape hatch intact)
}
