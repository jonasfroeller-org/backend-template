import { drizzle } from "drizzle-orm/node-postgres"; // NOTE: postgres.js driver doesn't work with certain database setups (https://stackoverflow.com/questions/78084226/drizzleorm-clientauthentication-error-using-heroku-postgres-database-aws-c)
import { Client } from "pg";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import * as schema from "../drizzle/schema";
import { user } from "../drizzle/schema";
import { DATABASE_HOST } from "./env";

const client = new Client({
	connectionString: DATABASE_HOST,
});

await client.connect();
export const db = drizzle(client, { schema });
export const createUser = createInsertSchema(user);
export const selectUser = createSelectSchema(user);
