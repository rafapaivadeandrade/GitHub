import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import ProfileTabs from "./ProfileTabs";
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
        {/* <Screen
          name="ProfileTabs"
          component={Dashboard}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} />,
            // headerRight: () => <Header showCancel={false} />,
          }}
        /> */}
        <Screen
          name="ProfileTabs"
          component={ProfileTabs}
          options={
            {
              // headerShown: true,
              // header: () => <Header showCancel={false} />,
            }
          }
        />
      </Navigator>
    </NavigationContainer>
  );
}
