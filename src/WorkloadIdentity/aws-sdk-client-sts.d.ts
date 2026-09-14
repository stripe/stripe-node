// Minimal ambient typings for the subset of '@aws-sdk/client-sts' that AwsAssertionFetcher.ts uses.
// Declared locally so this package's own tooling (tsc, lint, tests) never needs
// '@aws-sdk/client-sts' installed -- it stays an optional peerDependency for consumers
// who use Stripe.forWorkloadIdentity with the 'aws' provider.
declare module '@aws-sdk/client-sts' {
  export interface GetWebIdentityTokenCommandInput {
    Audience: string[];
    DurationSeconds: number;
    SigningAlgorithm: string;
  }

  export interface GetWebIdentityTokenCommandOutput {
    WebIdentityToken?: string;
  }

  export class GetWebIdentityTokenCommand {
    constructor(input: GetWebIdentityTokenCommandInput);
  }

  export class STSClient {
    constructor(config: Record<string, unknown>);
    send(
      command: GetWebIdentityTokenCommand
    ): Promise<GetWebIdentityTokenCommandOutput>;
  }
}
