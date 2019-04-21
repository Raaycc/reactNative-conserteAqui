import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import PrincipalScreen from "./src/principal";
import authLoadingScreen from "./src/views/authLoading";
import LoginScreen from "./src/views/loginScreen";

const AppStack = createStackNavigator(
  { Home: PrincipalScreen },
  { headerMode: "none" }
);

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  { headerMode: "none" }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: authLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);