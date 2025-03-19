import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from './config/data-source.config';
import config, { envFilePath } from './config/env.config';
import { LoggerModule } from './libs/logger';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      envFilePath: envFilePath,
    }),
    TypeOrmModule.forRoot(dataSourceOption),
    LoggerModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
