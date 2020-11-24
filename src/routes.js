import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";

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
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orphanage" />,
          }}
        /> */}
        {/* <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Select on map" />,
          }}
        /> */}
        {/* <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Infrom the data" />,
          }}
        /> */}
      </Navigator>
    </NavigationContainer>
  );
}
