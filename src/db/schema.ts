import { serial, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name", {
    length: 100,
  }).notNull(),
});
