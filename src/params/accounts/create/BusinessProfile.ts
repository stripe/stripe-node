import {AnnualRevenue} from './business_profile/index.js';

export {AnnualRevenue} from './business_profile/AnnualRevenue.js';

export interface BusinessProfile {
  /**
   * The applicant's gross annual revenue for its preceding fiscal year.
   */
  annual_revenue?: AnnualRevenue;

  /**
   * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
   */
  estimated_worker_count?: number;

  /**
   * [The merchant category code for the account](https://docs.stripe.com/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
   */
  mcc?: string;

  /**
   * A publicly available website for handling support issues.
   */
  support_url?: Stripe.Emptyable<string>;

  /**
   * The business's publicly available website.
   */
  url?: string;
}
