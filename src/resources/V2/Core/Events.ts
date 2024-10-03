// This file is manually maintained
import {StripeResource} from '../../../StripeResource.js';

const stripeMethod = StripeResource.method;
const RelatedObjectResource = StripeResource.extend({
  fetchRelatedObject(pulledEvent: any) {
    return stripeMethod({
      method: 'GET',
      fullPath: pulledEvent.related_object.url,
    }).apply(this, [
      {
        stripeAccount: pulledEvent.context,
      },
    ]);
  },
});

export const Events = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.relatedResource = new RelatedObjectResource(...args);
  },
  retrieve(...args: any[]) {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events/{id}',
    })
      .apply(this, args)
      .then(this.decoratePulledEvent.bind(this));
  },

  list(...args: any[]) {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events',
      methodType: 'list',
    })
      .apply(this, args)
      .then((pulledEvents) => {
        return pulledEvents.map(this.decoratePulledEvent.bind(this));
      });
  },

  decoratePulledEvent(pulledEvent: any) {
    if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
      return pulledEvent;
    }
    return {
      ...pulledEvent,
      fetchRelatedObject: (): Promise<null | any> =>
        this.relatedResource.fetchRelatedObject(pulledEvent),
    };
  },
});
