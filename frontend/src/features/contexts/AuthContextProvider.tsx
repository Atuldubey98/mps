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
  const onSetAuthUser = (user: User | null) => {
    setUser(user);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.query({ query: CURRENT_USER });
        setUser(data.currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUserLoading: loading,
        currentUser: user,
        onSetAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
