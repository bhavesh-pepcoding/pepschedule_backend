import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  type: process.env.DB_TYPE || 'mysql2',
  host: process.env.DB_HOST || 'db4free.net',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'bhavesh47',
  password: process.env.DB_PASSWORD || 'Bhavesh@1997',
  database: process.env.DB_DATABASE || 'pepschedule',
}));
