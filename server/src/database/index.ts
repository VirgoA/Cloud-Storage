import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
});
