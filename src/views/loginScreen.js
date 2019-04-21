import React from "react";

import { Text, Container, Content } from "react-native";

//import styles from "./styles";

const LoginScreen = ({ navigation }) => {

  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Text>Login</Text>
      </Content>
    </Container>
  );
};

export default LoginScreen;
