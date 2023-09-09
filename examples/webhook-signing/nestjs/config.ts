export const config: {
  Stripe: {
    publishable_key: string
    secret_key: string
    webhook_secret: string
  }
} = {
  Stripe: {
    publishable_key: process.env.STRIPE_PUBLISHABLE_KEY || '',
    secret_key: process.env.STRIPE_SECRET_KEY || '',
    webhook_secret: process.env.STRIPE_WEBHOOK_SECRET || '',
  }
}
export type Config = typeof config;


