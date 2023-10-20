import React from "react";

export const AuthContext = React.createContext<{
  currentUser: User | null;
  currentUserLoading: boolean;
  onSetAuthUser: (user: User | null) => void;
} | null>(null);
