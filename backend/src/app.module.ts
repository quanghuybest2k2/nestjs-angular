import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from './config/data-source.config';
import config, { envFilePath } from './config/env.config';
import { LoggerModule } from './libs/logger';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      envFilePath: envFilePath,
    }),
    TypeOrmModule.forRoot(dataSourceOption),
    LoggerModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
