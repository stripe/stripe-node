type Config = {
  Stripe: {
    secret_key: string;
    webhook_secret: string;
  };
};

export const config = (): Config => {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new Error(
      'Please set the STRIPE_WEBHOOK_SECRET environment variable'
    );
  }

  return {
    Stripe: {
      secret_key: process.env.STRIPE_SECRET_KEY || '',
      webhook_secret: webhookSecret,
    },
  };
};
