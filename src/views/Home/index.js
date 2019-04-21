import React, { Component } from "react";

import { Text, ScrollView, View, TouchableOpacity } from "react-native";

import Pesquisa from "../../Components/Pesquisa";
import styles from "./styles";
import PerfilPesquisa from "../../Components/PerfilPesquisa";

class HomePage extends Component {

  render() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Pesquisa/>
        <PerfilPesquisa 
        pontos={59} nome={"joao"} 
        hastags="#construtor #eletrisista" 
        descricao={"faço de tudo"}/>
        <PerfilPesquisa 
        pontos={23} nome={"seila"} 
        hastags="#eletrisista" 
        descricao={"faço de tudo"}/>
    </ScrollView>
  );
  }
};

export default HomePage;
