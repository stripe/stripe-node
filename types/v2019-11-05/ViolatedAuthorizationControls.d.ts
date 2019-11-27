declare namespace Stripe {
  /**
   * The ViolatedAuthorizationControl object.
   */
  interface ViolatedAuthorizationControl {
    /**
     * Entity which the authorization control acts on. One of `account`, `card`, or `cardholder`.
     */
    entity?: ViolatedAuthorizationControl.Entity;

    /**
     * Name of the authorization control. One of `allowed_categories`, `blocked_categories`, `max_amount`, `max_approvals`, or `spending_limits`.
     */
    name?: ViolatedAuthorizationControl.Name;
  }

  namespace ViolatedAuthorizationControl {
    type Entity = 'account' | 'card' | 'cardholder'

    type Name =
      | 'allowed_categories'
      | 'blocked_categories'
      | 'max_amount'
      | 'max_approvals'
      | 'spending_limits'
  }
}