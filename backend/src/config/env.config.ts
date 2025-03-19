import * as dotenv from 'dotenv';
import { resolve } from 'path';

export const envFilePath = resolve(__dirname, '../../../.env');
dotenv.config({ path: envFilePath });

export default () => ({
  PORT: process.env.PORT ?? 8000,
  DB_NAME: process.env.MYSQL_DB || '',
  DB_PORT: process.env.MYSQL_PORT || 3306,
  DB_HOST: process.env.MYSQL_HOST || '',
  DB_USERNAME: process.env.MYSQL_USERNAME || '',
  DB_PASSWORD: process.env.MYSQL_PASSWORD || '',
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET || '',
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET || '',
  JWT_ACCESS_TOKEN_EXPIRES_IN_MINUTES:
    process.env.JWT_ACCESS_TOKEN_EXPIRES_IN_MINUTES || 60,
  JWT_REFRESH_TOKEN_EXPIRES_IN_MINUTES:
    process.env.JWT_REFRESH_TOKEN_EXPIRES_IN_MINUTES || 10080,
});
