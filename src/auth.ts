import { Elysia, t } from "elysia";
import { createUser } from "./db";
import { Value } from "@sinclair/typebox/value";

export const auth = new Elysia({ prefix: "/auth" }).put(
	"/sign-up",
	({ body }) => (Value.Check(createUser, body) ? "OK" : "ERROR"), // TODO: create user
	{
		body: t.Omit(createUser, ["id"]),
	},
);
