import { DataSource, DataSourceOptions } from 'typeorm';
import config from './env.config';

export const dataSourceOption: DataSourceOptions = {
  name: 'default',
  type: 'mysql',
  database: config().DB_NAME,
  host: config().DB_HOST,
  port: +(config().DB_PORT ?? 3306),
  username: config().DB_USERNAME,
  password: config().DB_PASSWORD,
  synchronize: false,
  logging: true,
  entities: ['dist/domain/entities/schema/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  subscribers: [],
  migrationsRun: true,
};

export default new DataSource(dataSourceOption);
