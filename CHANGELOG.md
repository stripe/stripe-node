4.15.1 Mar 8th, 2017
- Update required version of "qs" dependency to 6.0.4+

4.15.0 Jan 18th, 2017
- Add support for updating sources

4.14.0 Dec 1st, 2016
- Add support for verifying sources

4.13.0 Nov 21st, 2016
- Add retrieve method for 3-D Secure resources

4.12.0 Oct 18th, 2016
- Support for 403 status codes (permission denied)

4.11.0 Sep 16th, 2016
- Add support for Apple Pay domains

4.10.0 Aug 29th, 2016
- Refactor deprecated uses of Bluebird's `Promise.defer`

4.9.1 Aug 22nd, 2016
- URI-encode unames for Stripe user agents so we don't fail on special characters

4.9.0 Jul 19th, 2016
- Add `Source` model for generic payment sources support (experimental)

4.8.0 Jul 14th, 2016
- Add `ThreeDSecure` model for 3-D secure payments

4.7.0 May 25th, 2016
- Add support for returning Relay orders

4.6.0 May 4th, 2016
- Add `update`, `create`, `retrieve`, `list` and `del` methods to `stripe.subscriptions`

4.5.0 Mar 15th, 2016
- Add `reject` on `Account` to support the new API feature

4.4.0 Feb 8th, 2016
- Add `CountrySpec` model for looking up country payment information

4.3.0 Jan 26th, 2016
- Add support for deleting Relay SKUs and products

4.2.0 Jan 13th, 2016
- Add `lastResponse` property on `StripeResource` objects
- Return usage errors of `stripeMethod` through callback instead of raising
- Use latest year for expiry years in tests to avoid new year problems

4.1.0 Dec 2nd, 2015
- Add a verification routine for external accounts

4.0.0 Sep 17th, 2015
- Remove ability for API keys to be passed as 1st param to acct.retrieve
- Rename StripeInvalidRequest to StripeInvalidRequestError

3.9.0 Sep 14th, 2015
- Add Relay resources: Products, SKUs, and Orders

3.8.0 Sep 11th, 2015
- Added rate limiting responses

3.7.1 Aug 17th, 2015
- Added refund object with listing, retrieval, updating, and creation.

3.7.0 Aug 3rd, 2015
- Added managed account deletion
- Added dispute listing and retrieval

3.6.0 Jul 7th, 2015
- Added request IDs to all Stripe errors

3.5.2 Jun 30th, 2015
- [BUGFIX] Fixed issue with uploading binary files (Gabriel Chagas Marques)

3.5.1 Jun 30th, 2015
- [BUGFIX] Fixed issue with passing arrays of objects

3.5.0 Jun 11th, 2015
- Added support for optional parameters when retrieving an upcoming invoice
(Matthew Arkin)

3.4.0 Jun 10th, 2015
- Added support for bank accounts and debit cards in managed accounts

3.3.4 Apr 2nd, 2015
- Remove SSL revocation tests and check

3.3.3 Mar 31st, 2015
 - [BUGFIX] Fix support for both stripe.account and stripe.accounts

3.3.2 Feb 24th, 2015
 - Support transfer reversals.

3.3.1 Feb 21st, 2015
 - [BUGFIX] Fix passing in only a callback to the Account resource. (Matthew
 Arkin)

3.3.0 Feb 19th, 2015
 - Support BitcoinReceiver update & delete actions
 - Add methods for manipulating customer sources as per 2015-02-18 API version
 - The Account resource will now take an account ID. However, legacy use of
 the resource (without an account ID) will still work.

3.2.0 Feb 5th, 2015
 - [BUGFIX] Fix incorrect failing tests for headers support
 - Update all dependencies (remove mocha-as-promised)
 - Switch to bluebird for promises

3.1.0 Jan 21st, 2015
 - Support making bitcoin charges through BitcoinReceiver source object

3.0.3 Dec 23rd, 2014
 - Adding file uploads as a resource.

3.0.2 Nov 26th, 2014
 - [BUGFIX] Fix issue where multiple expand params were not getting passed through (#130)

3.0.1 Nov 26th, 2014
 - (Version skipped due to npm mishap)

3.0.0 Nov 18th, 2014
 - [BUGFIX] Fix `stringifyRequestData` to deal with nested objs correctly
 - Bump MAJOR as we're no longer supporting Node 0.8

2.9.0 Nov 12th, 2014
 - Allow setting of HTTP agent (proxy) (issue #124)
 - Add stack traces to all Stripe Errors

2.8.0 July 26th, 2014
 - Make application fee refunds a list instead of array

2.7.4 July 17th, 2014
 - [BUGFIX] Fix lack of subscription param in `invoices#retrieveUpcoming` method
 - Add support for an `optional!` annotation on `urlParams`

2.7.3 June 17th, 2014
 - Add metadata to disputes and refunds

2.6.3 May 21st, 2014
 - Support cards for recipients.

2.5.3 May 16th, 2014
 - Allow the `update` method on coupons for metadata changes

2.5.2 Apr 28th, 2014
 - [BUGFIX] Fix when.js version string in package.json to support older npm versions

2.5.1 Apr 25th, 2014
 - [BUGFIX] Fix revoked-ssl check
 - Upgrade when.js to 3.1.0

2.5.0 Apr 9th, 2014
 - Ensure we prevent requests using revoked SSL certs

2.4.5 Apr 8th, 2014
 - Add better checks for incorrect arguments (throw exceptions accordingly).
 - Validate the Connect Auth key, if passed

2.4.4 Mar 27th, 2014
 - [BUGFIX] Fix URL encoding issue (not encoding interpolated URL params, see issue #93)

2.4.3 Mar 27th, 2014
 - Add more debug information to the case of a failed `JSON.parse()`

2.4.2 Feb 20th, 2014
 - Add binding for `transfers/{tr_id}/transactions` endpoint

2.4.1 Feb 7th, 2014
  - Ensure raw error object is accessible on the generated StripeError

2.4.0 Jan 29th, 2014
  - Support multiple subscriptions per customer

2.3.4 Jan 11th, 2014
  - [BUGFIX] Fix #76, pass latest as version to api & fix constructor arg signature

2.3.3 Jan 10th, 2014
  - Document cancelSubscription method params and add specs for `at_period_end`

2.3.2 Dec 2nd, 2013
  - Add application fees API

2.2.2 Nov 20th, 2013
  - [BUGFIX] Fix incorrect deleteDiscount method & related spec(s)

2.2.1
  - [BUGFIX] Fix user-agent header issue (see issue #75)

2.2.0 Nov 9th, 2013
  - Add support for setTimeout
  - Add specs for invoice-item listing/querying via timestamp

2.1.0 Nov 7th, 2013
  - Support single key/value setting on setMetadata method
  - [BUGFIX] Fix Windows url-path issue
  - Add missing stripe.charges.update method
  - Support setting auth_token per request (useful in Connect)
  - Remove global 'resources' variable

2.0.0 October 18th, 2013
  - API overhaul and refactor, including addition of promises.
  - Release of version 2.0.0

1.3.0 January 30th, 2013
  - Requests return Javascript Errors (Guillaume Flandre)

1.2.0 August 3rd, 2012
  - Added events API (Jonathan Hollinger)
  - Added plans update API (Pavan Kumar Sunkara)
  - Various test fixes, node 0.8.x tweaks (Jan Lehnardt)

1.1.0 February 1st, 2012
  - Add Coupons API (Ryan)
  - Pass a more robust error object to the callback (Ryan)
  - Fix duplicate callbacks from some functions when called incorrectly
    (bug #24, reported by Kishore Nallan)

1.0.0 December 6th, 2011
  - Add APIs and tests for Plans and "Invoice Items"
    (both changes by Ryan Ettipio)

0.0.5 November 26th, 2011
  - Add Subscription API (John Ku, #3)
  - Add Invoices API (Chris Winn, #6)
  - [BUGFIX] Fix a bug where callback could be called twice, if the callback()
    threw an error itself (Peteris Krumins)
  - [BUGFIX] Fix bug in tokens.retrieve API (Xavi)
  - Change documentation links (Stripe changed their URL structure)
  - Make tests pass again (error in callback is null instead of 0 if all is well)
  - Amount in stripe.charges.refund is optional (Branko Vukelic)
  - Various documentation fixes (Xavi)
  - Only require node 0.4.0

0.0.3 October 5, 2011
  - Add Charges API (issue #1, brackishlake)
  - Add customers.list API

0.0.2 September 28, 2011
  - Initial release with customers and tokens APIs
