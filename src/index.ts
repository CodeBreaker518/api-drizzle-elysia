import { eq } from "drizzle-orm";
import { db } from "./db/dbConnection";
import { user } from "./db/schema";

async function main() {
  const users = await db.select().from(user);
  console.log("Users:", users);

  const deleteUser = await db.delete(user).where(eq(user.id, 1));
}
main();
