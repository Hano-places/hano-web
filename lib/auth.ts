// Temporary local auth stubs.
// All real authentication integrations have been removed
// and should be re-implemented from scratch when needed.

type Session = null;

export const authClient = null;

export const signIn = async () => {
  throw new Error("signIn is not implemented. Integrate auth first.");
};

export const signOut = async () => {
  throw new Error("signOut is not implemented. Integrate auth first.");
};

export const useSession = (): {
  data: Session;
  isPending: boolean;
  error: Error | null;
} => ({
  data: null,
  isPending: false,
  error: null,
});

export const signInWithEmail = async (_email: string, _password: string) => {
  throw new Error("signInWithEmail is not implemented. Integrate auth first.");
};