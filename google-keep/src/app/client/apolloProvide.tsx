'use client';

import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

export function CustomApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
