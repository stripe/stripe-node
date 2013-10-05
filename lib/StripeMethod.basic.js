'use strict';

var stripeMethod = require('./StripeMethod');

module.exports = {

  create: stripeMethod({
    method: 'POST'
  }),

  list: stripeMethod({
    method: 'GET'
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id']
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
    urlParams: ['id']
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id']
  }),

  setMetadata: stripeMethod({
    method: 'POST',
    path: '/{id}',
    urlParams: ['id'],
    transformRequestData: function(data) {
      return {
        metadata: data == null ? '' : data
      };
    },
    makeRequest: function(urlData, data, continueWithOriginalRequest) {

      if (!this.retrieve) {
        throw new Error('Expect setMetadata to exist on instance where #retrieve exists');
      }

      if (Object.keys(data.metadata).length === 0) {
        // Intention is to reset -- we can let it continue:
        return continueWithOriginalRequest();
      }

      return this.retrieve(
        urlData.id
      ).then(function(res) {
        var metadata = res.metadata;
        // Wipe any existing metadata keys not included in `data`:
        if (metadata) for (var i in metadata) {
          if (!(i in data)) {
            data.metadata[i] = '';
          }
        }
        return continueWithOriginalRequest();
      });

      if (Object.keys(data.metadata).length > 0) {
        // If there is data we need to wipe current metadata before
        // we continue with the original request (of setting new metadata):
        return this.setMetadata(urlData.id, null).then(function() {
          return continueWithOriginalRequest();
        });
      } else {
        return continueWithOriginalRequest();
      }

    },
    transformResponseData: function(data) {
      return data.metadata;
    }
  }),

  getMetadata: stripeMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
    transformResponseData: function(data) {
      return data.metadata;
    }
  })

};