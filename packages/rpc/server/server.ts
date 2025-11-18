import { treaty } from "@elysiajs/eden";
import type { App } from "@apps/elysia";
export const api = treaty<App>("localhost:3000");
