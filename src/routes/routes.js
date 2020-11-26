import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/Login";
import ProfileTabs from "./ProfileTabs";
import Seguidor from "../pages/Seguidor";
const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Screen name="ProfileTabs" component={ProfileTabs} />
        <Screen name="TemporaryUser" component={Seguidor} />
      </Navigator>
    </NavigationContainer>
  );
}
