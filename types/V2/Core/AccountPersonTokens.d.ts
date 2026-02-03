// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * Person Tokens are single-use tokens which tokenize person information, and are used for creating or updating a Person.
         */
        interface AccountPersonToken {
          /**
           * Unique identifier for the token.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.account_person_token';

          /**
           * Time at which the token was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Time at which the token will expire.
           */
          expires_at: string;

          /**
           * Has the value `true` if the token exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Determines if the token has already been used (tokens can only be used once).
           */
          used: boolean;
        }
      }
    }
  }
}
