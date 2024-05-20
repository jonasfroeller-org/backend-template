import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: "./schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_HOST!
    },
    verbose: true
})
