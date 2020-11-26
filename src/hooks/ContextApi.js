import React, { createContext, useCallback, useState, useContext } from "react";
import axios from "axios";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [repositorios, setRepositorios] = useState([]);
  const [isSigned, setIsSigned] = useState(false);
  async function signIn({ name }) {
    try {
      const response = await axios.get(`https://api.github.com/users/${name}`);
      setUser(response.data);
      setIsSigned(true);
    } catch (err) {
      console.log(err);
      setIsSigned(false);
    }
    try {
      const response = await axios.get(
        `https://api.github.com/users/${name}/repos`
      );
      setRepositorios(response.data);
      setIsSigned(true);
    } catch (err) {
      console.log(err);
      setIsSigned(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        signIn,
        isSigned: isSigned,
        setIsSigned,
        user: user,
        repositorios: repositorios,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User must be used within an UserProvider");
  }

  return context;
}
