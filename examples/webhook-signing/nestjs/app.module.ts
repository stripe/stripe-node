import { Module } from "@nestjs/common";
import { StripeModule } from '@sggc/stripe-nestjs'
import { ConfigService,ConfigModule } from '@nestjs/config'
import { Config } from "./config";
import { AppController } from "./app.controller";

export const configuration = async (): Promise<Config> => {
  const { config } = <{ config: Config }> await import(`${__dirname}/config`);
  return config;
};

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env`,
    }),
    StripeModule.forRootAsync({
      isGlobal: true,
      inject: [ConfigService],
      createOptions: async (config: ConfigService) => {
        const apiKey = config.get<string>('Stripe.api_secret') // secret for api call
        if (!apiKey) {
          throw new Error('STRIPE_API_SECRET is not defined')
        }
        const apiVersion = config.get('Stripe.version') || '2022-11-15'
        return {
          apiKey,
          apiVersion,
        }
      },
    }),
  ],
})
export class AppModule {}
