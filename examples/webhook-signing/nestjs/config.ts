export const config: {
  Stripe: {
    publishable_key: string
    api_secret: string
    webhook_secret: string
  }
} = {
  Stripe: {
    publishable_key: process.env.STRIPE_SECRET_KEY || '',
    api_secret: process.env.STRIPE_WEBHOOK_SECRET || '',
    webhook_secret: process.env.STRIPE_WEBHOOK_SECRET || '',
  }
}
export type Config = typeof config;


