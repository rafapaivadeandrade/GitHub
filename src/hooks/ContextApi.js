import React, { createContext, useCallback, useState, useContext } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export function useProduct() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User must be used within an UserProvider");
  }

  return context;
}
