// File generated from our OpenAPI spec

'use strict';

const stripe = require('../../testUtils').getStripeMockClient();
const expect = require('chai').expect;

describe('Customer', function() {
  it('list method', async function() {
    const customers = await stripe.customers.list({limit: 3});
    expect(customers).not.to.be.null;
  });

  it('create method', async function() {
    const customer = await stripe.customers.create({
      description: 'My First Test Customer (created for API docs)',
    });
    expect(customer).not.to.be.null;
  });

  it('retrieve method', async function() {
    const customer = await stripe.customers.retrieve('cus_xxxxxxxxxxxxx');
    expect(customer).not.to.be.null;
  });

  it('update method', async function() {
    const customer = await stripe.customers.update('cus_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(customer).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.customers.del('cus_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const customers = await stripe.customers.list({limit: 3});
    expect(customers).not.to.be.null;
  });

  it('listPaymentMethods method', async function() {
    const paymentMethods = await stripe.customers.listPaymentMethods(
      'cus_xyz',
      {type: 'card'}
    );
    expect(paymentMethods).not.to.be.null;
  });
});

describe('BalanceTransaction', function() {
  it('retrieve method', async function() {
    const balanceTransaction = await stripe.balanceTransactions.retrieve(
      'txn_xxxxxxxxxxxxx'
    );
    expect(balanceTransaction).not.to.be.null;
  });

  it('list method', async function() {
    const balanceTransactions = await stripe.balanceTransactions.list({
      limit: 3,
    });
    expect(balanceTransactions).not.to.be.null;
  });
});

describe('Charge', function() {
  it('create method', async function() {
    const charge = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      source: 'tok_xxxx',
      description: 'My First Test Charge (created for API docs)',
    });
    expect(charge).not.to.be.null;
  });

  it('retrieve method', async function() {
    const charge = await stripe.charges.retrieve('ch_xxxxxxxxxxxxx');
    expect(charge).not.to.be.null;
  });

  it('update method', async function() {
    const charge = await stripe.charges.update('ch_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(charge).not.to.be.null;
  });

  it('capture method', async function() {
    const charge = await stripe.charges.capture('ch_xxxxxxxxxxxxx');
    expect(charge).not.to.be.null;
  });

  it('list method', async function() {
    const charges = await stripe.charges.list({limit: 3});
    expect(charges).not.to.be.null;
  });
});

describe('Dispute', function() {
  it('retrieve method', async function() {
    const dispute = await stripe.disputes.retrieve('dp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('update method', async function() {
    const dispute = await stripe.disputes.update('dp_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(dispute).not.to.be.null;
  });

  it('close method', async function() {
    const dispute = await stripe.disputes.close('dp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('list method', async function() {
    const disputes = await stripe.disputes.list({limit: 3});
    expect(disputes).not.to.be.null;
  });
});

describe('Event', function() {
  it('retrieve method', async function() {
    const event = await stripe.events.retrieve('evt_xxxxxxxxxxxxx');
    expect(event).not.to.be.null;
  });

  it('list method', async function() {
    const events = await stripe.events.list({limit: 3});
    expect(events).not.to.be.null;
  });
});

describe('File', function() {
  it('retrieve method', async function() {
    const file = await stripe.files.retrieve('file_xxxxxxxxxxxxx');
    expect(file).not.to.be.null;
  });

  it('list method', async function() {
    const files = await stripe.files.list({limit: 3});
    expect(files).not.to.be.null;
  });
});

describe('FileLink', function() {
  it('create method', async function() {
    const fileLink = await stripe.fileLinks.create({
      file: 'file_xxxxxxxxxxxxx',
    });
    expect(fileLink).not.to.be.null;
  });

  it('retrieve method', async function() {
    const fileLink = await stripe.fileLinks.retrieve('link_xxxxxxxxxxxxx');
    expect(fileLink).not.to.be.null;
  });

  it('update method', async function() {
    const fileLink = await stripe.fileLinks.update('link_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(fileLink).not.to.be.null;
  });

  it('list method', async function() {
    const fileLinks = await stripe.fileLinks.list({limit: 3});
    expect(fileLinks).not.to.be.null;
  });
});

describe('Mandate', function() {
  it('retrieve method', async function() {
    const mandate = await stripe.mandates.retrieve('mandate_xxxxxxxxxxxxx');
    expect(mandate).not.to.be.null;
  });
});

describe('PaymentIntent', function() {
  it('create method', async function() {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    expect(paymentIntent).not.to.be.null;
  });

  it('retrieve method', async function() {
    const paymentIntent = await stripe.paymentIntents.retrieve(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('update method', async function() {
    const paymentIntent = await stripe.paymentIntents.update(
      'pi_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('confirm method', async function() {
    const paymentIntent = await stripe.paymentIntents.confirm(
      'pi_xxxxxxxxxxxxx',
      {payment_method: 'pm_card_visa'}
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('capture method', async function() {
    const paymentIntent = await stripe.paymentIntents.capture(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('cancel method', async function() {
    const paymentIntent = await stripe.paymentIntents.cancel(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('list method', async function() {
    const paymentIntents = await stripe.paymentIntents.list({limit: 3});
    expect(paymentIntents).not.to.be.null;
  });

  it('create method', async function() {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'eur',
      automatic_payment_methods: {enabled: true},
    });
    expect(paymentIntent).not.to.be.null;
  });
});

describe('SetupIntent', function() {
  it('create method', async function() {
    const setupIntent = await stripe.setupIntents.create({
      payment_method_types: ['card'],
    });
    expect(setupIntent).not.to.be.null;
  });

  it('retrieve method', async function() {
    const setupIntent = await stripe.setupIntents.retrieve(
      'seti_xxxxxxxxxxxxx'
    );
    expect(setupIntent).not.to.be.null;
  });

  it('update method', async function() {
    const setupIntent = await stripe.setupIntents.update('seti_xxxxxxxxxxxxx', {
      metadata: {user_id: '3435453'},
    });
    expect(setupIntent).not.to.be.null;
  });

  it('confirm method', async function() {
    const setupIntent = await stripe.setupIntents.confirm(
      'seti_xxxxxxxxxxxxx',
      {payment_method: 'pm_card_visa'}
    );
    expect(setupIntent).not.to.be.null;
  });

  it('cancel method', async function() {
    const setupIntent = await stripe.setupIntents.cancel('seti_xxxxxxxxxxxxx');
    expect(setupIntent).not.to.be.null;
  });

  it('list method', async function() {
    const setupIntents = await stripe.setupIntents.list({limit: 3});
    expect(setupIntents).not.to.be.null;
  });
});

describe('SetupAttempt', function() {
  it('list method', async function() {
    const setupAttempts = await stripe.setupAttempts.list({
      setup_intent: 'seti_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(setupAttempts).not.to.be.null;
  });
});

describe('Payout', function() {
  it('create method', async function() {
    const payout = await stripe.payouts.create({
      amount: 1100,
      currency: 'usd',
    });
    expect(payout).not.to.be.null;
  });

  it('retrieve method', async function() {
    const payout = await stripe.payouts.retrieve('po_xxxxxxxxxxxxx');
    expect(payout).not.to.be.null;
  });

  it('update method', async function() {
    const payout = await stripe.payouts.update('po_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(payout).not.to.be.null;
  });

  it('list method', async function() {
    const payouts = await stripe.payouts.list({limit: 3});
    expect(payouts).not.to.be.null;
  });

  it('cancel method', async function() {
    const payout = await stripe.payouts.cancel('po_xxxxxxxxxxxxx');
    expect(payout).not.to.be.null;
  });

  it('reverse method', async function() {
    const payout = await stripe.payouts.reverse('po_xxxxxxxxxxxxx');
    expect(payout).not.to.be.null;
  });
});

describe('Product', function() {
  it('create method', async function() {
    const product = await stripe.products.create({name: 'Gold Special'});
    expect(product).not.to.be.null;
  });

  it('retrieve method', async function() {
    const product = await stripe.products.retrieve('prod_xxxxxxxxxxxxx');
    expect(product).not.to.be.null;
  });

  it('update method', async function() {
    const product = await stripe.products.update('prod_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(product).not.to.be.null;
  });

  it('list method', async function() {
    const products = await stripe.products.list({limit: 3});
    expect(products).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.products.del('prod_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });
});

describe('Price', function() {
  it('create method', async function() {
    const price = await stripe.prices.create({
      unit_amount: 2000,
      currency: 'usd',
      recurring: {interval: 'month'},
      product: 'prod_xxxxxxxxxxxxx',
    });
    expect(price).not.to.be.null;
  });

  it('retrieve method', async function() {
    const price = await stripe.prices.retrieve('price_xxxxxxxxxxxxx');
    expect(price).not.to.be.null;
  });

  it('update method', async function() {
    const price = await stripe.prices.update('price_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(price).not.to.be.null;
  });

  it('list method', async function() {
    const prices = await stripe.prices.list({limit: 3});
    expect(prices).not.to.be.null;
  });
});

describe('Refund', function() {
  it('create method', async function() {
    const refund = await stripe.refunds.create({
      charge: 'ch_xxxxxxxxxxxxx',
    });
    expect(refund).not.to.be.null;
  });

  it('retrieve method', async function() {
    const refund = await stripe.refunds.retrieve('re_xxxxxxxxxxxxx');
    expect(refund).not.to.be.null;
  });

  it('update method', async function() {
    const refund = await stripe.refunds.update('re_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(refund).not.to.be.null;
  });

  it('list method', async function() {
    const refunds = await stripe.refunds.list({limit: 3});
    expect(refunds).not.to.be.null;
  });
});

describe('Token', function() {
  it('create method', async function() {
    const token = await stripe.tokens.create({
      card: {
        number: '4242424242424242',
        exp_month: '5',
        exp_year: '2022',
        cvc: '314',
      },
    });
    expect(token).not.to.be.null;
  });

  it('create method', async function() {
    const token = await stripe.tokens.create({
      bank_account: {
        country: 'US',
        currency: 'usd',
        account_holder_name: 'Jenny Rosen',
        account_holder_type: 'individual',
        routing_number: '110000000',
        account_number: '000123456789',
      },
    });
    expect(token).not.to.be.null;
  });

  it('create method', async function() {
    const token = await stripe.tokens.create({
      pii: {id_number: '000000000'},
    });
    expect(token).not.to.be.null;
  });

  it('create method', async function() {
    const token = await stripe.tokens.create({
      account: {
        individual: {first_name: 'Jane', last_name: 'Doe'},
        tos_shown_and_accepted: true,
      },
    });
    expect(token).not.to.be.null;
  });

  it('create method', async function() {
    const token = await stripe.tokens.create({
      person: {
        first_name: 'Jane',
        last_name: 'Doe',
        relationship: {owner: true},
      },
    });
    expect(token).not.to.be.null;
  });

  it('create method', async function() {
    const token = await stripe.tokens.create({cvc_update: {cvc: '123'}});
    expect(token).not.to.be.null;
  });

  it('retrieve method', async function() {
    const token = await stripe.tokens.retrieve('tok_xxxx');
    expect(token).not.to.be.null;
  });
});

describe('PaymentMethod', function() {
  it('create method', async function() {
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 5,
        exp_year: 2022,
        cvc: '314',
      },
    });
    expect(paymentMethod).not.to.be.null;
  });

  it('retrieve method', async function() {
    const paymentMethod = await stripe.paymentMethods.retrieve(
      'pm_xxxxxxxxxxxxx'
    );
    expect(paymentMethod).not.to.be.null;
  });

  it('update method', async function() {
    const paymentMethod = await stripe.paymentMethods.update(
      'pm_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(paymentMethod).not.to.be.null;
  });

  it('list method', async function() {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: 'cus_xxxxxxxxxxxxx',
      type: 'card',
    });
    expect(paymentMethods).not.to.be.null;
  });

  it('attach method', async function() {
    const paymentMethod = await stripe.paymentMethods.attach(
      'pm_xxxxxxxxxxxxx',
      {customer: 'cus_xxxxxxxxxxxxx'}
    );
    expect(paymentMethod).not.to.be.null;
  });

  it('detach method', async function() {
    const paymentMethod = await stripe.paymentMethods.detach(
      'pm_xxxxxxxxxxxxx'
    );
    expect(paymentMethod).not.to.be.null;
  });
});

describe('CustomerSource', function() {
  it('verifySource method', async function() {
    const bankAccount = await stripe.customers.verifySource(
      'cus_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx',
      {amounts: [32, 45]}
    );
    expect(bankAccount).not.to.be.null;
  });
});

describe('Source', function() {
  it('retrieve method', async function() {
    const source = await stripe.sources.retrieve('src_xxxxxxxxxxxxx');
    expect(source).not.to.be.null;
  });

  it('update method', async function() {
    const source = await stripe.sources.update('src_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(source).not.to.be.null;
  });
});

describe('Checkout.Session', function() {
  it('create method', async function() {
    const session = await stripe.checkout.sessions.create({
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
      payment_method_types: ['card'],
      line_items: [{price: 'price_xxxxxxxxxxxxx', quantity: 2}],
      mode: 'payment',
    });
    expect(session).not.to.be.null;
  });

  it('retrieve method', async function() {
    const session = await stripe.checkout.sessions.retrieve(
      'cs_test_xxxxxxxxxxxxx'
    );
    expect(session).not.to.be.null;
  });

  it('list method', async function() {
    const sessions = await stripe.checkout.sessions.list({limit: 3});
    expect(sessions).not.to.be.null;
  });

  it('expire method', async function() {
    const session = await stripe.checkout.sessions.expire('sess_xyz');
    expect(session).not.to.be.null;
  });

  it('create method', async function() {
    const session = await stripe.checkout.sessions.create({
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
      mode: 'payment',
      shipping_options: [
        {shipping_rate: 'shr_standard'},
        {
          shipping_rate_data: {
            display_name: 'Standard',
            delivery_estimate: {
              minimum: {unit: 'day', value: 5},
              maximum: {unit: 'day', value: 7},
            },
          },
        },
      ],
    });
    expect(session).not.to.be.null;
  });
});

describe('Coupon', function() {
  it('create method', async function() {
    const coupon = await stripe.coupons.create({
      percent_off: 25,
      duration: 'repeating',
      duration_in_months: 3,
    });
    expect(coupon).not.to.be.null;
  });

  it('retrieve method', async function() {
    const coupon = await stripe.coupons.retrieve('25_5OFF');
    expect(coupon).not.to.be.null;
  });

  it('update method', async function() {
    const coupon = await stripe.coupons.update('co_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(coupon).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.coupons.del('co_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const coupons = await stripe.coupons.list({limit: 3});
    expect(coupons).not.to.be.null;
  });
});

describe('CreditNote', function() {
  it('preview method', async function() {
    const creditNote = await stripe.creditNotes.preview({
      invoice: 'in_xxxxxxxxxxxxx',
      lines: [
        {
          type: 'invoice_line_item',
          invoice_line_item: 'il_xxxxxxxxxxxxx',
          quantity: 1,
        },
      ],
    });
    expect(creditNote).not.to.be.null;
  });

  it('create method', async function() {
    const creditNote = await stripe.creditNotes.create({
      invoice: 'in_xxxxxxxxxxxxx',
      lines: [
        {
          type: 'invoice_line_item',
          invoice_line_item: 'il_xxxxxxxxxxxxx',
          quantity: 1,
        },
      ],
    });
    expect(creditNote).not.to.be.null;
  });

  it('retrieve method', async function() {
    const creditNote = await stripe.creditNotes.retrieve('cn_xxxxxxxxxxxxx');
    expect(creditNote).not.to.be.null;
  });

  it('update method', async function() {
    const creditNote = await stripe.creditNotes.update('cn_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(creditNote).not.to.be.null;
  });

  it('preview method', async function() {
    const creditNote = await stripe.creditNotes.preview({
      invoice: 'in_xxxxxxxxxxxxx',
      lines: [
        {
          type: 'invoice_line_item',
          invoice_line_item: 'il_xxxxxxxxxxxxx',
          quantity: 1,
        },
      ],
    });
    expect(creditNote).not.to.be.null;
  });

  it('voidCreditNote method', async function() {
    const creditNote = await stripe.creditNotes.voidCreditNote(
      'cn_xxxxxxxxxxxxx'
    );
    expect(creditNote).not.to.be.null;
  });

  it('list method', async function() {
    const creditNotes = await stripe.creditNotes.list({limit: 3});
    expect(creditNotes).not.to.be.null;
  });
});

describe('CreditNoteLineItem', function() {
  it('listLineItems method', async function() {
    const lineItems = await stripe.creditNotes.listLineItems(
      'cn_xxxxxxxxxxxxx',
      {limit: 3}
    );
    expect(lineItems).not.to.be.null;
  });
});

describe('CustomerBalanceTransaction', function() {
  it('createBalanceTransaction method', async function() {
    const balanceTransaction = await stripe.customers.createBalanceTransaction(
      'cus_xxxxxxxxxxxxx',
      {amount: -500, currency: 'usd'}
    );
    expect(balanceTransaction).not.to.be.null;
  });

  it('retrieveBalanceTransaction method', async function() {
    const balanceTransaction = await stripe.customers.retrieveBalanceTransaction(
      'cus_xxxxxxxxxxxxx',
      'cbtxn_xxxxxxxxxxxxx'
    );
    expect(balanceTransaction).not.to.be.null;
  });

  it('updateBalanceTransaction method', async function() {
    const balanceTransaction = await stripe.customers.updateBalanceTransaction(
      'cus_xxxxxxxxxxxxx',
      'cbtxn_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(balanceTransaction).not.to.be.null;
  });

  it('listBalanceTransactions method', async function() {
    const balanceTransactions = await stripe.customers.listBalanceTransactions(
      'cus_xxxxxxxxxxxxx',
      {limit: 3}
    );
    expect(balanceTransactions).not.to.be.null;
  });
});

describe('BillingPortal.Session', function() {
  it('create method', async function() {
    const session = await stripe.billingPortal.sessions.create({
      customer: 'cus_xxxxxxxxxxxxx',
      return_url: 'https://example.com/account',
    });
    expect(session).not.to.be.null;
  });
});

describe('BillingPortal.Configuration', function() {
  it('create method', async function() {
    const configuration = await stripe.billingPortal.configurations.create({
      features: {
        customer_update: {
          allowed_updates: ['email', 'tax_id'],
          enabled: true,
        },
        invoice_history: {enabled: true},
      },
      business_profile: {
        privacy_policy_url: 'https://example.com/privacy',
        terms_of_service_url: 'https://example.com/terms',
      },
    });
    expect(configuration).not.to.be.null;
  });

  it('update method', async function() {
    const configuration = await stripe.billingPortal.configurations.update(
      'bpc_xxxxxxxxxxxxx',
      {
        business_profile: {
          privacy_policy_url: 'https://example.com/privacy',
          terms_of_service_url: 'https://example.com/terms',
        },
      }
    );
    expect(configuration).not.to.be.null;
  });

  it('retrieve method', async function() {
    const configuration = await stripe.billingPortal.configurations.retrieve(
      'bpc_xxxxxxxxxxxxx'
    );
    expect(configuration).not.to.be.null;
  });

  it('list method', async function() {
    const configurations = await stripe.billingPortal.configurations.list({
      limit: 3,
    });
    expect(configurations).not.to.be.null;
  });
});

describe('TaxId', function() {
  it('createTaxId method', async function() {
    const taxId = await stripe.customers.createTaxId('cus_xxxxxxxxxxxxx', {
      type: 'eu_vat',
      value: 'DE123456789',
    });
    expect(taxId).not.to.be.null;
  });

  it('retrieveTaxId method', async function() {
    const taxId = await stripe.customers.retrieveTaxId(
      'cus_xxxxxxxxxxxxx',
      'txi_xxxxxxxxxxxxx'
    );
    expect(taxId).not.to.be.null;
  });

  it('deleteTaxId method', async function() {
    const deleted = await stripe.customers.deleteTaxId(
      'cus_xxxxxxxxxxxxx',
      'txi_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('listTaxIds method', async function() {
    const taxIds = await stripe.customers.listTaxIds('cus_xxxxxxxxxxxxx', {
      limit: 3,
    });
    expect(taxIds).not.to.be.null;
  });
});

describe('Invoice', function() {
  it('create method', async function() {
    const invoice = await stripe.invoices.create({
      customer: 'cus_xxxxxxxxxxxxx',
    });
    expect(invoice).not.to.be.null;
  });

  it('retrieve method', async function() {
    const invoice = await stripe.invoices.retrieve('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('update method', async function() {
    const invoice = await stripe.invoices.update('in_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(invoice).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.invoices.del('in_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('finalizeInvoice method', async function() {
    const invoice = await stripe.invoices.finalizeInvoice('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('pay method', async function() {
    const invoice = await stripe.invoices.pay('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('sendInvoice method', async function() {
    const invoice = await stripe.invoices.sendInvoice('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('voidInvoice method', async function() {
    const invoice = await stripe.invoices.voidInvoice('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('markUncollectible method', async function() {
    const invoice = await stripe.invoices.markUncollectible('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('list method', async function() {
    const invoices = await stripe.invoices.list({limit: 3});
    expect(invoices).not.to.be.null;
  });
});

describe('InvoiceItem', function() {
  it('create method', async function() {
    const invoiceItem = await stripe.invoiceItems.create({
      customer: 'cus_xxxxxxxxxxxxx',
      price: 'price_xxxxxxxxxxxxx',
    });
    expect(invoiceItem).not.to.be.null;
  });

  it('retrieve method', async function() {
    const invoiceItem = await stripe.invoiceItems.retrieve('ii_xxxxxxxxxxxxx');
    expect(invoiceItem).not.to.be.null;
  });

  it('update method', async function() {
    const invoiceItem = await stripe.invoiceItems.update('ii_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(invoiceItem).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.invoiceItems.del('ii_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const invoiceItems = await stripe.invoiceItems.list({limit: 3});
    expect(invoiceItems).not.to.be.null;
  });
});

describe('Plan', function() {
  it('create method', async function() {
    const plan = await stripe.plans.create({
      amount: 2000,
      currency: 'usd',
      interval: 'month',
      product: 'prod_xxxxxxxxxxxxx',
    });
    expect(plan).not.to.be.null;
  });

  it('retrieve method', async function() {
    const plan = await stripe.plans.retrieve('price_xxxxxxxxxxxxx');
    expect(plan).not.to.be.null;
  });

  it('update method', async function() {
    const plan = await stripe.plans.update('price_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(plan).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.plans.del('price_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const plans = await stripe.plans.list({limit: 3});
    expect(plans).not.to.be.null;
  });
});

describe('PromotionCode', function() {
  it('create method', async function() {
    const promotionCode = await stripe.promotionCodes.create({
      coupon: '25_5OFF',
    });
    expect(promotionCode).not.to.be.null;
  });

  it('update method', async function() {
    const promotionCode = await stripe.promotionCodes.update(
      'promo_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(promotionCode).not.to.be.null;
  });

  it('retrieve method', async function() {
    const promotionCode = await stripe.promotionCodes.retrieve(
      'promo_xxxxxxxxxxxxx'
    );
    expect(promotionCode).not.to.be.null;
  });

  it('list method', async function() {
    const promotionCodes = await stripe.promotionCodes.list({limit: 3});
    expect(promotionCodes).not.to.be.null;
  });
});

describe('Subscription', function() {
  it('create method', async function() {
    const subscription = await stripe.subscriptions.create({
      customer: 'cus_xxxxxxxxxxxxx',
      items: [{price: 'price_xxxxxxxxxxxxx'}],
    });
    expect(subscription).not.to.be.null;
  });

  it('retrieve method', async function() {
    const subscription = await stripe.subscriptions.retrieve(
      'sub_xxxxxxxxxxxxx'
    );
    expect(subscription).not.to.be.null;
  });

  it('update method', async function() {
    const subscription = await stripe.subscriptions.update(
      'sub_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(subscription).not.to.be.null;
  });

  it('del method', async function() {
    const subscription = await stripe.subscriptions.del('sub_xxxxxxxxxxxxx');
    expect(subscription).not.to.be.null;
  });

  it('list method', async function() {
    const subscriptions = await stripe.subscriptions.list({limit: 3});
    expect(subscriptions).not.to.be.null;
  });
});

describe('SubscriptionItem', function() {
  it('create method', async function() {
    const subscriptionItem = await stripe.subscriptionItems.create({
      subscription: 'sub_xxxxxxxxxxxxx',
      price: 'price_xxxxxxxxxxxxx',
      quantity: 2,
    });
    expect(subscriptionItem).not.to.be.null;
  });

  it('retrieve method', async function() {
    const subscriptionItem = await stripe.subscriptionItems.retrieve(
      'si_xxxxxxxxxxxxx'
    );
    expect(subscriptionItem).not.to.be.null;
  });

  it('update method', async function() {
    const subscriptionItem = await stripe.subscriptionItems.update(
      'si_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(subscriptionItem).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.subscriptionItems.del('si_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const subscriptionItems = await stripe.subscriptionItems.list({
      subscription: 'sub_xxxxxxxxxxxxx',
    });
    expect(subscriptionItems).not.to.be.null;
  });
});

describe('SubscriptionSchedule', function() {
  it('create method', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.create({
      customer: 'cus_xxxxxxxxxxxxx',
      start_date: 1620753115,
      end_behavior: 'release',
      phases: [
        {
          items: [{price: 'price_xxxxxxxxxxxxx', quantity: 1}],
          iterations: 12,
        },
      ],
    });
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('retrieve method', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.retrieve(
      'sub_sched_xxxxxxxxxxxxx'
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('update method', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.update(
      'sub_sched_xxxxxxxxxxxxx',
      {end_behavior: 'release'}
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('cancel method', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.cancel(
      'sub_sched_xxxxxxxxxxxxx'
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('release method', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.release(
      'sub_sched_xxxxxxxxxxxxx'
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('list method', async function() {
    const subscriptionSchedules = await stripe.subscriptionSchedules.list({
      limit: 3,
    });
    expect(subscriptionSchedules).not.to.be.null;
  });
});

describe('TaxRate', function() {
  it('create method', async function() {
    const taxRate = await stripe.taxRates.create({
      display_name: 'VAT',
      description: 'VAT Germany',
      jurisdiction: 'DE',
      percentage: 16,
      inclusive: false,
    });
    expect(taxRate).not.to.be.null;
  });

  it('retrieve method', async function() {
    const taxRate = await stripe.taxRates.retrieve('txr_xxxxxxxxxxxxx');
    expect(taxRate).not.to.be.null;
  });

  it('update method', async function() {
    const taxRate = await stripe.taxRates.update('txr_xxxxxxxxxxxxx', {
      active: false,
    });
    expect(taxRate).not.to.be.null;
  });

  it('list method', async function() {
    const taxRates = await stripe.taxRates.list({limit: 3});
    expect(taxRates).not.to.be.null;
  });
});

describe('UsageRecord', function() {
  it('createUsageRecord method', async function() {
    const usageRecord = await stripe.subscriptionItems.createUsageRecord(
      'si_xxxxxxxxxxxxx',
      {quantity: 100, timestamp: 1571252444}
    );
    expect(usageRecord).not.to.be.null;
  });
});

describe('UsageRecordSummary', function() {
  it('listUsageRecordSummaries method', async function() {
    const usageRecordSummaries = await stripe.subscriptionItems.listUsageRecordSummaries(
      'si_xxxxxxxxxxxxx',
      {limit: 3}
    );
    expect(usageRecordSummaries).not.to.be.null;
  });
});

describe('Account', function() {
  it('create method', async function() {
    const account = await stripe.accounts.create({
      type: 'custom',
      country: 'US',
      email: 'jenny.rosen@example.com',
      capabilities: {
        card_payments: {requested: true},
        transfers: {requested: true},
      },
    });
    expect(account).not.to.be.null;
  });

  it('retrieve method', async function() {
    const account = await stripe.accounts.retrieve('acct_xxxxxxxxxxxxx');
    expect(account).not.to.be.null;
  });

  it('update method', async function() {
    const account = await stripe.accounts.update('acct_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(account).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.accounts.del('acct_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('reject method', async function() {
    const account = await stripe.accounts.reject('acct_xxxxxxxxxxxxx', {
      reason: 'fraud',
    });
    expect(account).not.to.be.null;
  });

  it('list method', async function() {
    const accounts = await stripe.accounts.list({limit: 3});
    expect(accounts).not.to.be.null;
  });
});

describe('LoginLink', function() {
  it('createLoginLink method', async function() {
    const loginLink = await stripe.accounts.createLoginLink(
      'acct_xxxxxxxxxxxxx'
    );
    expect(loginLink).not.to.be.null;
  });
});

describe('AccountLink', function() {
  it('create method', async function() {
    const accountLink = await stripe.accountLinks.create({
      account: 'acct_xxxxxxxxxxxxx',
      refresh_url: 'https://example.com/reauth',
      return_url: 'https://example.com/return',
      type: 'account_onboarding',
    });
    expect(accountLink).not.to.be.null;
  });
});

describe('ApplicationFee', function() {
  it('retrieve method', async function() {
    const applicationFee = await stripe.applicationFees.retrieve(
      'fee_xxxxxxxxxxxxx'
    );
    expect(applicationFee).not.to.be.null;
  });

  it('list method', async function() {
    const applicationFees = await stripe.applicationFees.list({limit: 3});
    expect(applicationFees).not.to.be.null;
  });
});

describe('FeeRefund', function() {
  it('createRefund method', async function() {
    const refund = await stripe.applicationFees.createRefund(
      'fee_xxxxxxxxxxxxx'
    );
    expect(refund).not.to.be.null;
  });

  it('retrieveRefund method', async function() {
    const refund = await stripe.applicationFees.retrieveRefund(
      'fee_xxxxxxxxxxxxx',
      'fr_xxxxxxxxxxxxx'
    );
    expect(refund).not.to.be.null;
  });

  it('updateRefund method', async function() {
    const refund = await stripe.applicationFees.updateRefund(
      'fee_xxxxxxxxxxxxx',
      'fr_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(refund).not.to.be.null;
  });

  it('listRefunds method', async function() {
    const refunds = await stripe.applicationFees.listRefunds(
      'fee_xxxxxxxxxxxxx',
      {limit: 3}
    );
    expect(refunds).not.to.be.null;
  });
});

describe('Capability', function() {
  it('retrieveCapability method', async function() {
    const capability = await stripe.accounts.retrieveCapability(
      'acct_xxxxxxxxxxxxx',
      'card_payments'
    );
    expect(capability).not.to.be.null;
  });

  it('updateCapability method', async function() {
    const capability = await stripe.accounts.updateCapability(
      'acct_xxxxxxxxxxxxx',
      'card_payments',
      {requested: true}
    );
    expect(capability).not.to.be.null;
  });

  it('listCapabilities method', async function() {
    const capabilities = await stripe.accounts.listCapabilities(
      'acct_xxxxxxxxxxxxx'
    );
    expect(capabilities).not.to.be.null;
  });
});

describe('CountrySpec', function() {
  it('list method', async function() {
    const countrySpecs = await stripe.countrySpecs.list({limit: 3});
    expect(countrySpecs).not.to.be.null;
  });

  it('retrieve method', async function() {
    const countrySpec = await stripe.countrySpecs.retrieve('US');
    expect(countrySpec).not.to.be.null;
  });
});

describe('Person', function() {
  it('createPerson method', async function() {
    const person = await stripe.accounts.createPerson('acct_xxxxxxxxxxxxx', {
      first_name: 'Jane',
      last_name: 'Diaz',
    });
    expect(person).not.to.be.null;
  });

  it('retrievePerson method', async function() {
    const person = await stripe.accounts.retrievePerson(
      'acct_xxxxxxxxxxxxx',
      'person_xxxxxxxxxxxxx'
    );
    expect(person).not.to.be.null;
  });

  it('updatePerson method', async function() {
    const person = await stripe.accounts.updatePerson(
      'acct_xxxxxxxxxxxxx',
      'person_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(person).not.to.be.null;
  });

  it('deletePerson method', async function() {
    const deleted = await stripe.accounts.deletePerson(
      'acct_xxxxxxxxxxxxx',
      'person_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('listPersons method', async function() {
    const persons = await stripe.accounts.listPersons('acct_xxxxxxxxxxxxx', {
      limit: 3,
    });
    expect(persons).not.to.be.null;
  });
});

describe('Topup', function() {
  it('create method', async function() {
    const topup = await stripe.topups.create({
      amount: 2000,
      currency: 'usd',
      description: 'Top-up for Jenny Rosen',
      statement_descriptor: 'Top-up',
    });
    expect(topup).not.to.be.null;
  });

  it('retrieve method', async function() {
    const topup = await stripe.topups.retrieve('tu_xxxxxxxxxxxxx');
    expect(topup).not.to.be.null;
  });

  it('update method', async function() {
    const topup = await stripe.topups.update('tu_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(topup).not.to.be.null;
  });

  it('list method', async function() {
    const topups = await stripe.topups.list({limit: 3});
    expect(topups).not.to.be.null;
  });

  it('cancel method', async function() {
    const topup = await stripe.topups.cancel('tu_xxxxxxxxxxxxx');
    expect(topup).not.to.be.null;
  });
});

describe('Transfer', function() {
  it('create method', async function() {
    const transfer = await stripe.transfers.create({
      amount: 400,
      currency: 'usd',
      destination: 'acct_xxxxxxxxxxxxx',
      transfer_group: 'ORDER_95',
    });
    expect(transfer).not.to.be.null;
  });

  it('retrieve method', async function() {
    const transfer = await stripe.transfers.retrieve('tr_xxxxxxxxxxxxx');
    expect(transfer).not.to.be.null;
  });

  it('update method', async function() {
    const transfer = await stripe.transfers.update('tr_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(transfer).not.to.be.null;
  });

  it('list method', async function() {
    const transfers = await stripe.transfers.list({limit: 3});
    expect(transfers).not.to.be.null;
  });
});

describe('TransferReversal', function() {
  it('createReversal method', async function() {
    const reversal = await stripe.transfers.createReversal('tr_xxxxxxxxxxxxx', {
      amount: 100,
    });
    expect(reversal).not.to.be.null;
  });

  it('retrieveReversal method', async function() {
    const reversal = await stripe.transfers.retrieveReversal(
      'tr_xxxxxxxxxxxxx',
      'trr_xxxxxxxxxxxxx'
    );
    expect(reversal).not.to.be.null;
  });

  it('updateReversal method', async function() {
    const reversal = await stripe.transfers.updateReversal(
      'tr_xxxxxxxxxxxxx',
      'trr_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(reversal).not.to.be.null;
  });

  it('listReversals method', async function() {
    const reversals = await stripe.transfers.listReversals('tr_xxxxxxxxxxxxx', {
      limit: 3,
    });
    expect(reversals).not.to.be.null;
  });
});

describe('Radar.EarlyFraudWarning', function() {
  it('retrieve method', async function() {
    const earlyFraudWarning = await stripe.radar.earlyFraudWarnings.retrieve(
      'issfr_xxxxxxxxxxxxx'
    );
    expect(earlyFraudWarning).not.to.be.null;
  });

  it('list method', async function() {
    const earlyFraudWarnings = await stripe.radar.earlyFraudWarnings.list({
      limit: 3,
    });
    expect(earlyFraudWarnings).not.to.be.null;
  });
});

describe('Review', function() {
  it('approve method', async function() {
    const review = await stripe.reviews.approve('prv_xxxxxxxxxxxxx');
    expect(review).not.to.be.null;
  });

  it('retrieve method', async function() {
    const review = await stripe.reviews.retrieve('prv_xxxxxxxxxxxxx');
    expect(review).not.to.be.null;
  });

  it('list method', async function() {
    const reviews = await stripe.reviews.list({limit: 3});
    expect(reviews).not.to.be.null;
  });
});

describe('Radar.ValueList', function() {
  it('create method', async function() {
    const valueList = await stripe.radar.valueLists.create({
      alias: 'custom_ip_xxxxxxxxxxxxx',
      name: 'Custom IP Blocklist',
      item_type: 'ip_address',
    });
    expect(valueList).not.to.be.null;
  });

  it('retrieve method', async function() {
    const valueList = await stripe.radar.valueLists.retrieve(
      'rsl_xxxxxxxxxxxxx'
    );
    expect(valueList).not.to.be.null;
  });

  it('update method', async function() {
    const valueList = await stripe.radar.valueLists.update(
      'rsl_xxxxxxxxxxxxx',
      {name: 'Updated IP Block List'}
    );
    expect(valueList).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.radar.valueLists.del('rsl_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const valueLists = await stripe.radar.valueLists.list({limit: 3});
    expect(valueLists).not.to.be.null;
  });
});

describe('Radar.ValueListItem', function() {
  it('create method', async function() {
    const valueListItem = await stripe.radar.valueListItems.create({
      value_list: 'rsl_xxxxxxxxxxxxx',
      value: '1.2.3.4',
    });
    expect(valueListItem).not.to.be.null;
  });

  it('retrieve method', async function() {
    const valueListItem = await stripe.radar.valueListItems.retrieve(
      'rsli_xxxxxxxxxxxxx'
    );
    expect(valueListItem).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.radar.valueListItems.del('rsli_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const valueListItems = await stripe.radar.valueListItems.list({
      limit: 3,
      value_list: 'rsl_xxxxxxxxxxxxx',
    });
    expect(valueListItems).not.to.be.null;
  });
});

describe('Issuing.Authorization', function() {
  it('retrieve method', async function() {
    const authorization = await stripe.issuing.authorizations.retrieve(
      'iauth_xxxxxxxxxxxxx'
    );
    expect(authorization).not.to.be.null;
  });

  it('update method', async function() {
    const authorization = await stripe.issuing.authorizations.update(
      'iauth_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(authorization).not.to.be.null;
  });

  it('approve method', async function() {
    const authorization = await stripe.issuing.authorizations.approve(
      'iauth_xxxxxxxxxxxxx'
    );
    expect(authorization).not.to.be.null;
  });

  it('decline method', async function() {
    const authorization = await stripe.issuing.authorizations.decline(
      'iauth_xxxxxxxxxxxxx'
    );
    expect(authorization).not.to.be.null;
  });

  it('list method', async function() {
    const authorizations = await stripe.issuing.authorizations.list({
      limit: 3,
    });
    expect(authorizations).not.to.be.null;
  });
});

describe('Issuing.Cardholder', function() {
  it('create method', async function() {
    const cardholder = await stripe.issuing.cardholders.create({
      type: 'individual',
      name: 'Jenny Rosen',
      email: 'jenny.rosen@example.com',
      phone_number: '+18888675309',
      billing: {
        address: {
          line1: '1234 Main Street',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          postal_code: '94111',
        },
      },
    });
    expect(cardholder).not.to.be.null;
  });

  it('retrieve method', async function() {
    const cardholder = await stripe.issuing.cardholders.retrieve(
      'ich_xxxxxxxxxxxxx'
    );
    expect(cardholder).not.to.be.null;
  });

  it('update method', async function() {
    const cardholder = await stripe.issuing.cardholders.update(
      'ich_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(cardholder).not.to.be.null;
  });

  it('list method', async function() {
    const cardholders = await stripe.issuing.cardholders.list({limit: 3});
    expect(cardholders).not.to.be.null;
  });
});

describe('Issuing.Card', function() {
  it('create method', async function() {
    const card = await stripe.issuing.cards.create({
      cardholder: 'ich_xxxxxxxxxxxxx',
      currency: 'usd',
      type: 'virtual',
    });
    expect(card).not.to.be.null;
  });

  it('retrieve method', async function() {
    const card = await stripe.issuing.cards.retrieve('ic_xxxxxxxxxxxxx');
    expect(card).not.to.be.null;
  });

  it('update method', async function() {
    const card = await stripe.issuing.cards.update('ic_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(card).not.to.be.null;
  });

  it('list method', async function() {
    const cards = await stripe.issuing.cards.list({limit: 3});
    expect(cards).not.to.be.null;
  });
});

describe('Issuing.Dispute', function() {
  it('create method', async function() {
    const dispute = await stripe.issuing.disputes.create({
      transaction: 'ipi_xxxxxxxxxxxxx',
      evidence: {
        reason: 'fraudulent',
        fraudulent: {explanation: 'Purchase was unrecognized.'},
      },
    });
    expect(dispute).not.to.be.null;
  });

  it('submit method', async function() {
    const dispute = await stripe.issuing.disputes.submit('idp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('retrieve method', async function() {
    const dispute = await stripe.issuing.disputes.retrieve('idp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('update method', async function() {
    const dispute = await stripe.issuing.disputes.update('idp_xxxxxxxxxxxxx', {
      evidence: {
        reason: 'not_received',
        not_received: {
          expected_at: 1590000000,
          explanation: '',
          product_description: 'Baseball cap',
          product_type: 'merchandise',
        },
      },
    });
    expect(dispute).not.to.be.null;
  });

  it('list method', async function() {
    const disputes = await stripe.issuing.disputes.list({limit: 3});
    expect(disputes).not.to.be.null;
  });
});

describe('Issuing.Transaction', function() {
  it('retrieve method', async function() {
    const transaction = await stripe.issuing.transactions.retrieve(
      'ipi_xxxxxxxxxxxxx'
    );
    expect(transaction).not.to.be.null;
  });

  it('update method', async function() {
    const transaction = await stripe.issuing.transactions.update(
      'ipi_xxxxxxxxxxxxx',
      {metadata: {order_id: '6735'}}
    );
    expect(transaction).not.to.be.null;
  });

  it('list method', async function() {
    const transactions = await stripe.issuing.transactions.list({limit: 3});
    expect(transactions).not.to.be.null;
  });
});

describe('Terminal.ConnectionToken', function() {
  it('create method', async function() {
    const connectionToken = await stripe.terminal.connectionTokens.create();
    expect(connectionToken).not.to.be.null;
  });
});

describe('Terminal.Location', function() {
  it('create method', async function() {
    const location = await stripe.terminal.locations.create({
      display_name: 'My First Store',
      address: {
        line1: '1234 Main Street',
        city: 'San Francisco',
        country: 'US',
        postal_code: '94111',
      },
    });
    expect(location).not.to.be.null;
  });

  it('retrieve method', async function() {
    const location = await stripe.terminal.locations.retrieve(
      'tml_xxxxxxxxxxxxx'
    );
    expect(location).not.to.be.null;
  });

  it('update method', async function() {
    const location = await stripe.terminal.locations.update(
      'tml_xxxxxxxxxxxxx',
      {display_name: 'My First Store'}
    );
    expect(location).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.terminal.locations.del('tml_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const locations = await stripe.terminal.locations.list({limit: 3});
    expect(locations).not.to.be.null;
  });
});

describe('Terminal.Reader', function() {
  it('create method', async function() {
    const reader = await stripe.terminal.readers.create({
      registration_code: 'puppies-plug-could',
      label: 'Blue Rabbit',
      location: 'tml_1234',
    });
    expect(reader).not.to.be.null;
  });

  it('retrieve method', async function() {
    const reader = await stripe.terminal.readers.retrieve(
      'tmr_P400-123-456-789'
    );
    expect(reader).not.to.be.null;
  });

  it('update method', async function() {
    const reader = await stripe.terminal.readers.update(
      'tmr_P400-123-456-789',
      {label: 'Blue Rabbit'}
    );
    expect(reader).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.terminal.readers.del('tmr_P400-123-456-789');
    expect(deleted).not.to.be.null;
  });

  it('list method', async function() {
    const readers = await stripe.terminal.readers.list({limit: 3});
    expect(readers).not.to.be.null;
  });
});

describe('Order', function() {
  it('create method', async function() {
    const order = await stripe.orders.create({
      currency: 'usd',
      email: 'jenny.rosen@example.com',
      items: [{type: 'sku', parent: 'sku_xxxxxxxxxxxxx'}],
      shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '1234 Main Street',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          postal_code: '94111',
        },
      },
    });
    expect(order).not.to.be.null;
  });

  it('retrieve method', async function() {
    const order = await stripe.orders.retrieve('or_xxxxxxxxxxxxx');
    expect(order).not.to.be.null;
  });

  it('update method', async function() {
    const order = await stripe.orders.update('or_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(order).not.to.be.null;
  });

  it('pay method', async function() {
    const order = await stripe.orders.pay('or_xxxxxxxxxxxxx', {
      source: 'tok_xxxx',
    });
    expect(order).not.to.be.null;
  });

  it('list method', async function() {
    const orders = await stripe.orders.list({limit: 3});
    expect(orders).not.to.be.null;
  });
});

describe('OrderReturn', function() {
  it('retrieve method', async function() {
    const orderReturn = await stripe.orderReturns.retrieve(
      'orret_xxxxxxxxxxxxx'
    );
    expect(orderReturn).not.to.be.null;
  });

  it('list method', async function() {
    const orderReturns = await stripe.orderReturns.list({limit: 3});
    expect(orderReturns).not.to.be.null;
  });
});

describe('Sku', function() {
  it('create method', async function() {
    const sku = await stripe.skus.create({
      attributes: {size: 'Medium', gender: 'Unisex'},
      price: 1500,
      currency: 'usd',
      inventory: {type: 'finite', quantity: 500},
      product: 'prod_xxxxxxxxxxxxx',
    });
    expect(sku).not.to.be.null;
  });

  it('retrieve method', async function() {
    const sku = await stripe.skus.retrieve('sku_xxxxxxxxxxxxx');
    expect(sku).not.to.be.null;
  });

  it('update method', async function() {
    const sku = await stripe.skus.update('sku_xxxxxxxxxxxxx', {
      metadata: {order_id: '6735'},
    });
    expect(sku).not.to.be.null;
  });

  it('list method', async function() {
    const skus = await stripe.skus.list({limit: 3});
    expect(skus).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.skus.del('sku_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });
});

describe('Sigma.ScheduledQueryRun', function() {
  it('retrieve method', async function() {
    const scheduledQueryRun = await stripe.sigma.scheduledQueryRuns.retrieve(
      'sqr_xxxxxxxxxxxxx'
    );
    expect(scheduledQueryRun).not.to.be.null;
  });

  it('list method', async function() {
    const scheduledQueryRuns = await stripe.sigma.scheduledQueryRuns.list({
      limit: 3,
    });
    expect(scheduledQueryRuns).not.to.be.null;
  });
});

describe('Reporting.ReportRun', function() {
  it('create method', async function() {
    const reportRun = await stripe.reporting.reportRuns.create({
      report_type: 'balance.summary.1',
      parameters: {interval_start: 1522540800, interval_end: 1525132800},
    });
    expect(reportRun).not.to.be.null;
  });

  it('retrieve method', async function() {
    const reportRun = await stripe.reporting.reportRuns.retrieve(
      'frr_xxxxxxxxxxxxx'
    );
    expect(reportRun).not.to.be.null;
  });

  it('list method', async function() {
    const reportRuns = await stripe.reporting.reportRuns.list({limit: 3});
    expect(reportRuns).not.to.be.null;
  });
});

describe('Reporting.ReportType', function() {
  it('retrieve method', async function() {
    const reportType = await stripe.reporting.reportTypes.retrieve(
      'balance.summary.1'
    );
    expect(reportType).not.to.be.null;
  });

  it('list method', async function() {
    const reportTypes = await stripe.reporting.reportTypes.list();
    expect(reportTypes).not.to.be.null;
  });
});

describe('WebhookEndpoint', function() {
  it('create method', async function() {
    const webhookEndpoint = await stripe.webhookEndpoints.create({
      url: 'https://example.com/my/webhook/endpoint',
      enabled_events: ['charge.failed', 'charge.succeeded'],
    });
    expect(webhookEndpoint).not.to.be.null;
  });

  it('retrieve method', async function() {
    const webhookEndpoint = await stripe.webhookEndpoints.retrieve(
      'we_xxxxxxxxxxxxx'
    );
    expect(webhookEndpoint).not.to.be.null;
  });

  it('update method', async function() {
    const webhookEndpoint = await stripe.webhookEndpoints.update(
      'we_xxxxxxxxxxxxx',
      {url: 'https://example.com/new_endpoint'}
    );
    expect(webhookEndpoint).not.to.be.null;
  });

  it('list method', async function() {
    const webhookEndpoints = await stripe.webhookEndpoints.list({limit: 3});
    expect(webhookEndpoints).not.to.be.null;
  });

  it('del method', async function() {
    const deleted = await stripe.webhookEndpoints.del('we_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });
});

describe('ShippingRate', function() {
  it('create method', async function() {
    const shippingRate = await stripe.shippingRates.create({
      display_name: 'Sample Shipper',
      fixed_amount: {currency: 'usd', amount: 400},
      type: 'fixed_amount',
    });
    expect(shippingRate).not.to.be.null;
  });

  it('list method', async function() {
    const shippingRates = await stripe.shippingRates.list();
    expect(shippingRates).not.to.be.null;
  });
});

describe('PaymentLink', function() {
  it('create method', async function() {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{price: 'price_xxxxxxxxxxxxx', quantity: 1}],
    });
    expect(paymentLink).not.to.be.null;
  });

  it('listLineItems method', async function() {
    const lineItems = await stripe.paymentLinks.listLineItems('pl_xyz');
    expect(lineItems).not.to.be.null;
  });

  it('retrieve method', async function() {
    const paymentLink = await stripe.paymentLinks.retrieve('pl_xyz');
    expect(paymentLink).not.to.be.null;
  });
});
