import useAuth from "../hooks/useAuth";

export default function AuthWrapper({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  return auth?.currentUser ? children : null;
}
