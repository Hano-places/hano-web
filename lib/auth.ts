import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://hano.fly.dev",
});

export const { signIn, signOut, useSession } = authClient;

