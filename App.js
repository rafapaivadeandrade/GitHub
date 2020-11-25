import React from "react";
import Routes from "./src/routes/routes";
import { UserProvider } from "./src/hooks/ContextApi";
import { StatusBar } from "react-native";
export default function App() {
  StatusBar.setHidden(true, "none");
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
