import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import NoteScreen from "./src/screens/NoteScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Note: NoteScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Mój notatnik",
      headerStyle: {
        backgroundColor: "#CDDC39"
      }
    }
  }
);

export default createAppContainer(navigator);
