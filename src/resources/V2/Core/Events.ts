import {StripeResource} from '../../../StripeResource.js';
import {StripeResourceObject} from '../../../Types.js';
const stripeMethod = StripeResource.method;
const RelatedObjectResource = StripeResource.extend({});

export const Events = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.relatedResource = new RelatedObjectResource(...args);
  },
  // retrieve: stripeMethod({method: 'GET', fullPath: '/v2/core/events/{id}'}),
  retrieve(...args: any[]) {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events/{id}',
    })
      .apply(this, args)
      .then((pulledEvent) => {
        return addFetchObjectToPulledEvent(this.relatedResource, pulledEvent);
      });
  },
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/events',
    methodType: 'list',
  }),
});

const addFetchObjectToPulledEvent = (
  resource: StripeResourceObject,
  pulledEvent: {
    related_object: any;
    context?: string;
  }
): any => {
  if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
    return pulledEvent;
  }
  return {
    ...pulledEvent,
    fetchRelatedObject: (): Promise<null | any> => {
      return stripeMethod({
        method: 'GET',
        fullPath: pulledEvent.related_object.url,
      }).apply(resource, [
        {
          stripeAccount: pulledEvent.context,
        },
      ]);
    },
  };
};
