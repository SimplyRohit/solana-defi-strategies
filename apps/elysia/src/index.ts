import { Elysia } from "elysia";
import cors from "@elysiajs/cors";

export const app = new Elysia().use(cors()).get("/", () => "Hello Elysia");

export type App = typeof app;

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
