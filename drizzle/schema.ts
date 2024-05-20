import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const user = pgTable('user', {
    id: serial('id').primaryKey().unique(),
    username: text('username').notNull(),
    password: text('password').notNull()
})
