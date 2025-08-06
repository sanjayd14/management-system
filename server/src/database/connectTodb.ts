import { User } from "../entities/UserEntity";
import { Client } from "../entities/ClientEntity";
import { Income } from "../entities/IncomeEntity";
import { Order } from "../entities/OrderEntity";
import { Expense } from "../entities/ExpenseEntity";
import { DataSource } from "typeorm";
import config from '../config/postgresdefaultcreds.json';

const dbConfig: {
  host: string;
  port: number;
  user: string;
  password: string;
  databaseName: string;
  ssl?: boolean;
  poolSize?: number;
} = config.postgres_db;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.databaseName,
  ssl: dbConfig.ssl ?? false,
  poolSize: dbConfig.poolSize ?? 10,
  synchronize: false,
  logging: true,
  entities: [User, Client, Expense, Order, Income],
});

export async function connectToDB(): Promise<DataSource> {
  if (AppDataSource.isInitialized) return AppDataSource;

  try {
    await AppDataSource.initialize();
    console.log('✅ Connected to PostgreSQL DB');
    return AppDataSource;
  } catch (error) {
    console.error('❌ PostgreSQL connection error:', error);
    throw error;
  }
}
