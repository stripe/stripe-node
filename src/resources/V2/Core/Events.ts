// This file is manually maintained
import {StripeResource} from '../../../StripeResource.js';

const stripeMethod = StripeResource.method;

export const Events = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
  },
  retrieve(...args: any[]) {
    const transformResponseData = (response: any): any => {
      return this.addFetchRelatedObjectIfNeeded(response);
    };
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events/{id}',
      transformResponseData,
    }).apply(this, args);
  },

  list(...args: any[]) {
    const transformResponseData = (response: any): any => {
      return {
        ...response,
        data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)),
      };
    };
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/events',
      methodType: 'list',
      transformResponseData,
    }).apply(this, args);
  },

  addFetchRelatedObjectIfNeeded(pulledEvent: any) {
    if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
      return pulledEvent;
    }
    return {
      ...pulledEvent,
      fetchRelatedObject: (): Promise<null | any> =>
        // call stripeMethod with 'this' resource to fetch
        // the related object. 'this' is needed to construct
        // and send the request, but the method spec controls
        // the url endpoint and method, so it doesn't matter
        // that 'this' is an Events resource object here
        stripeMethod({
          method: 'GET',
          fullPath: pulledEvent.related_object.url,
        }).apply(this, [
          {
            stripeAccount: pulledEvent.context,
          },
        ]),
    };
  },
});
