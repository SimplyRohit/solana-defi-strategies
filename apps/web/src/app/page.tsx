"use client";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { ready } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return <div>Privy is ready!</div>;
}
