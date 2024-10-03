import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "../db/schema";
import "dotenv/config";

async function main() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });

  const db = drizzle(connection, { schema, mode: "default" });

  console.log("Starting migration...");
  await migrate(db, { migrationsFolder: "src/db/migrations" });
  console.log("Migration completed successfully.");

  await connection.end();
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
