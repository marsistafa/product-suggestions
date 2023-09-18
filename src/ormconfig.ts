// ormconfig.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost', // or your database host
  port: 3306, // or your database port
  username: 'root',
  password: 'root',
  database: 'nestjs_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Only use synchronize in development
  // Use the mysql2 driver
  extra: {
    connectionLimit: 10, // Adjust this as needed
    driver: 'mysql2',
  },
};

export default config;
