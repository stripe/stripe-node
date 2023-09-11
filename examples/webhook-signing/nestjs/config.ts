type Config = {
  Stripe: {
    secret_key: string;
    webhook_secret: string;
  };
};

export const config = (): Config => ({
  Stripe: {
    secret_key: process.env.STRIPE_SECRET_KEY || '',
    webhook_secret: process.env.STRIPE_WEBHOOK_SECRET || '',
  },
});
