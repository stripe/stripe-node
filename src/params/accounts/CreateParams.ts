import * as BP from './create/BusinessProfile.js';

export interface CreateParams {
  /**
   * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
   */
  account_token?: string;

  /**
   * Business information about the account.
   */
  business_profile?: BP.BusinessProfile;

  /**
   * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
   */
  email?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

const a: BP.AnnualRevenue = {
  amount: 1000000,
  currency: 'usd',
  fiscal_year_end: '2023-12-31',
};
