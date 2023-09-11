import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {config} from './config';
import {AppController} from './app.controller';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: `.env`,
    }),
  ],
})
export class AppModule {}
