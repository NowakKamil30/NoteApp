import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import HomeScreen from "./src/screens/HomeScreen";
import NoteScreen from "./src/screens/NoteScreen";
import reducers from "./src/reducers";
import { screens } from "./setting.json";

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
        backgroundColor: screens.navigationHeaderColor
      }
    }
  }
);

const Navigator = createAppContainer(navigator);
const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
