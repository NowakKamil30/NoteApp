import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Mój notatnik"
    }
  }
);

export default createAppContainer(navigator);
