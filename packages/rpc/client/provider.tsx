import {
  QueryClient,
  QueryClientProvider as RQProvider,
} from "@tanstack/react-query";
import type { ReactNode } from "react";

export const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  return <RQProvider client={queryClient}>{children}</RQProvider>;
}
