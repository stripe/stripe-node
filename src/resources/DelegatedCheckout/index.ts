// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  DelegatedCheckout as DelegatedCheckoutNamespace0,
  Order,
  OrderResource,
} from './Orders.js';
import {
  DelegatedCheckout as DelegatedCheckoutNamespace1,
  RequestedSession,
  RequestedSessionResource,
} from './RequestedSessions.js';
import {OrderEvent} from './OrderEvents.js';

export {Order} from './Orders.js';
export {RequestedSession} from './RequestedSessions.js';
export {OrderEvent} from './OrderEvents.js';

export class DelegatedCheckout {
  orders: OrderResource;
  requestedSessions: RequestedSessionResource;

  constructor(private readonly stripe: Stripe) {
    this.orders = new OrderResource(stripe);
    this.requestedSessions = new RequestedSessionResource(stripe);
  }
}

export declare namespace DelegatedCheckout {
  export import OrderRetrieveParams = DelegatedCheckoutNamespace0.OrderRetrieveParams;
  export {Order, OrderResource};
  export import RequestedSessionRetrieveParams = DelegatedCheckoutNamespace1.RequestedSessionRetrieveParams;
  export import RequestedSessionUpdateParams = DelegatedCheckoutNamespace1.RequestedSessionUpdateParams;
  export import RequestedSessionCreateParams = DelegatedCheckoutNamespace1.RequestedSessionCreateParams;
  export import RequestedSessionConfirmParams = DelegatedCheckoutNamespace1.RequestedSessionConfirmParams;
  export import RequestedSessionExpireParams = DelegatedCheckoutNamespace1.RequestedSessionExpireParams;
  export import RequestedSessionListOrdersParams = DelegatedCheckoutNamespace1.RequestedSessionListOrdersParams;
  export {RequestedSession, RequestedSessionResource};
  export {OrderEvent};
}
