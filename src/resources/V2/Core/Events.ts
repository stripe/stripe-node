// This file is manually maintained

import {StripeResource} from '../../../StripeResource.js';

const stripeMethod = StripeResource.method;
const addFetchObjectToPulledEvent = (pulledEvent: {
  related_object: any;
  context?: string;
}): any => {
  if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
    return pulledEvent;
  }
  return {
    ...pulledEvent,
    fetchRelatedObject: (): Promise<null | any> => {
      return stripeMethod({
        method: 'GET',
        fullPath: pulledEvent.related_object.url,
      })({
        stripeAccount: pulledEvent.context,
      });
    },
  };
};

export const Events = StripeResource.extend({
  retrieve(...args: any[]) {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events/{id}',
    })
      .apply(this, args)
      .then((pulledEvent) => {
        return addFetchObjectToPulledEvent(pulledEvent);
      });
  },
  list(...args: any[]) {
    stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events',
      methodType: 'list',
    })
      .apply(this, args)
      .then((pulledEvents) => {
        return pulledEvents.map((pulledEvent: {related_object: {url: any}}) => {
          return addFetchObjectToPulledEvent(pulledEvent);
        });
      });
  },
});
