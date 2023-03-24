declare namespace Stripe {
  type UpcomingInvoice = Omit<Stripe.Invoice, 'id'>;
}
