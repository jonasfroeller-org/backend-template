# Backend Template

## Development

### Rest-API-Server

To start the development server run:
```bash
bun run dev
```

### Database

> `npm install --prefix ./drizzle/runner drizzle-orm drizzle-kit pg` causes `error: unknown option '--config'`, that is why we use docker for the database updates :/. (tried with npm, pnpm or yarn (--cwd))

TODO: add postgres.yml to docker-compose.yml and add drizzle.yml, for schema:push, schema:pull, drizzle:studio

To push the database schema to the database run (NOTE: NPM needed, because bun doesn't support [async_hooks.createHook](https://github.com/drizzle-team/drizzle-orm/issues/2239)):
```bash
npm run schema:push
```

To pull the database schema from the database run (NOTE: NPM needed, because bun doesn't support [async_hooks.createHook](https://github.com/drizzle-team/drizzle-orm/issues/2239)):
```bash
npm run schema:pull
```

To see the tables in a web-ui, called drizzle studio (NOTE: NPM needed, because bun doesn't support [async_hooks.createHook](https://github.com/drizzle-team/drizzle-orm/issues/2239)):
```bash
npm run drizzle:studio
```
