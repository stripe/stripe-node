// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace TestHelpers {
        interface FinancialAddressCreditParams {
          /**
           * Object containing the amount value and currency to credit.
           */
          amount: Amount;

          /**
           * Open Enum. The network to use in simulating the funds flow. This will be the reflected in the resulting ReceivedCredit.
           */
          network: FinancialAddressCreditParams.Network;

          /**
           * String explaining funds flow. Use this field to populate the statement descriptor of the ReceivedCredit created as an eventual result of this simulation.
           */
          statement_descriptor?: string;
        }

        namespace FinancialAddressCreditParams {
          type Network = 'ach' | 'fps' | 'rtp' | 'wire';
        }
      }

      namespace TestHelpers {
        interface FinancialAddressGenerateMicrodepositsParams {}
      }

      namespace TestHelpers {
        class FinancialAddressesResource {
          /**
           * Simulate crediting a FinancialAddress in a Sandbox environment. This can be used to add virtual funds and increase your balance for testing.
           */
          credit(
            id: string,
            params: FinancialAddressCreditParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.FinancialAddressCreditSimulation>
          >;

          /**
           * Generates microdeposits for a FinancialAddress in a Sandbox environment.
           */
          generateMicrodeposits(
            id: string,
            params?: FinancialAddressGenerateMicrodepositsParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.FinancialAddressGeneratedMicrodeposits>
          >;
          generateMicrodeposits(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.FinancialAddressGeneratedMicrodeposits>
          >;
        }
      }
    }
  }
}
