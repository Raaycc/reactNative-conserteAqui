import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import HomePage from "./views/Home";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomePage
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ConserteAqui",
      headerStyle: {
        backgroundColor: "#0277bd"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(RootStack);
