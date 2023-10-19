import { AuthContext } from "./AuthContext";
import { CURRENT_USER } from "../../graphql/auth";
import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";

export default function AuthContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const client = useApolloClient();

  useEffect(() => {
    (async () => {
      const { data } = await client.query({ query: CURRENT_USER });
      setUser(data.currentUser);
      setLoading(false);
    })();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUserLoading: loading,
        currentUser: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
