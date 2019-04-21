import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";


export default class authLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem("@JB:token");

    //if (userToken) {
    //  try {
    //    const response = await http.get("perfil");

    //    const { usuario } = response.data;

    //    this.props.navigation.navigate("App");

    //    return;
    //  } catch (error) {}
    //}

    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
