import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Dashboard from "../pages/Dashboard";
import Repos from "../pages/Repos";
import Seguidores from "../pages/Seguidores";
import Seguindo from "../pages/Seguindo";

const { Navigator, Screen } = createBottomTabNavigator();

function ProfileTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: "transparent",
          overflow: "hidden",
          borderTopLeftRadius: 21,
          borderTopRightRadius: 21,
          position: "absolute",
          zIndex: 8,
        },
        tabStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: "transparent",
          overflow: "hidden",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
        },
        inactiveBackgroundColor: "#fafafc",
        // activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="home"
                size={size}
                color={focused ? "#000000" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Repos"
        component={Repos}
        options={{
          tabBarLabel: "Repos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="github"
                size={size}
                color={focused ? "#000000" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Seguidores"
        component={Seguidores}
        options={{
          tabBarLabel: "Seguidores",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="users"
                size={size}
                color={focused ? "#000000" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Seguindo"
        component={Seguindo}
        options={{
          tabBarLabel: "Seguindo",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="users"
                size={size}
                color={focused ? "#000000" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default ProfileTabs;
