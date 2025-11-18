"use client";
import { env } from "@repo/appconfig";
import { PrivyProvider } from "@privy-io/react-auth";

export default function PrivyProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId={env.NEXT_PUBLIC_WALLET_APP_ID!}
      clientId={env.NEXT_PUBLIC_WALLET_CLIENT_ID!}
      config={{
        embeddedWallets: {
          solana: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
