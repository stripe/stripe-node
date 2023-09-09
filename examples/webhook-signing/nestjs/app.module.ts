import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config'
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
    })
  ],
})
export class AppModule {}
