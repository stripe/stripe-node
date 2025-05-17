import { Agent } from "http";

// Define the AppInfo interface
export interface AppInfo {
    name: string; // Name of the application
    version?: string; // Version of the application
    url?: string; // URL of the application
  }
  
  // Define the RequestAuthenticator type
  export type RequestAuthenticator = (request: any) => void;
  
  // Define the StripeConfig interface
  export interface StripeConfig {
    apiKey?: string; // The API key for authenticating requests
    apiVersion?: string; // The API version to use for requests
    timeout?: number; // Request timeout in milliseconds
    host?: string; // The base URL for API requests
    httpAgent?: Agent; // Custom HTTP agent for requests
    maxNetworkRetries?: number; // Maximum number of retries for failed requests
    telemetry?: boolean; // Enable or disable telemetry
    appInfo?: AppInfo; // Information about the application using the library
    typescript?: boolean; // Indicates if TypeScript is being used
    stripeAccount?: string; // The Stripe account ID for the request
    stripeVersion?: string; // The Stripe API version to override
    authenticator?: RequestAuthenticator; // Custom request authenticator
    stripeContext?: string; // Context or environment for Stripe usage
  }