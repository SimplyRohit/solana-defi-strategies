import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_WALLET_APP_ID: z.string(),
    NEXT_PUBLIC_WALLET_CLIENT_ID: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_WALLET_APP_ID: process.env.NEXT_PUBLIC_WALLET_APP_ID,
    NEXT_PUBLIC_WALLET_CLIENT_ID: process.env.NEXT_PUBLIC_WALLET_CLIENT_ID,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
