import React from "react";

export const AuthContext = React.createContext<{
  currentUser: User | null;
  currentUserLoading: boolean;
} | null>(null);
