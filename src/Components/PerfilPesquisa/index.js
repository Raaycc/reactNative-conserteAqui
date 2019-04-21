import React from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import  Icon from 'react-native-vector-icons/AntDesign'; 

const PerfilPesquisa = ({nome, hastags, descricao, pontos}) => {
    icone = (pontos > 50) ? "smileo" : "frowno";
  return (
      <>
      <View style={styles.ViewPrincipal}>
          <View style={styles.viewEsquerda}>
                <Text style={styles.fonteNome}>{nome}</Text>
                <Text style={styles.fonteHastag}>{hastags}</Text>
                <Text style={styles.textTItulo}>Descricao</Text>
                <Text>{descricao}</Text>
          </View>
          <View style={styles.viewDireita}>
                <Icon name={icone} size={26} color="#000" />
                <Text>Zona de Avaliacao</Text>
          </View>
      </View>
      </>
  );
};

styles = StyleSheet.create({
    ViewPrincipal: {
        flexDirection: 'row',
        marginHorizontal: '10%',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 15
    },
    viewEsquerda: {
        width: '60%'
    },
    viewDireita: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%'
    },
    fonteNome: {
        borderBottomWidth: 1,
        marginRight: '30%',
    },
    fonteHastag: {
        color: 'grey',
    },
    textTItulo: {
        paddingTop: 10,
        color: 'red'
    },
  botoes: {
    backgroundColor: 'red'
  }
});

export default PerfilPesquisa;
