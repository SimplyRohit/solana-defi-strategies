"use client";
import { createStore, Provider } from ".";
const store = createStore();
export function StateProviders({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
