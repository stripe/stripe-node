#!/usr/bin/env -S npm run-script run

import {NestFactory} from '@nestjs/core';
import {INestApplication} from '@nestjs/common';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule, {
    rawBody: true,
  });
  app.enableCors({
    origin: '*',
  });

  await app.listen(0);
  console.log(`Webhook endpoint available at ${await app.getUrl()}/webhooks`);
}
bootstrap();
