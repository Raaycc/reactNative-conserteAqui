import React, { Component } from "react";
import { Text, TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import  Icon from 'react-native-vector-icons/FontAwesome'; 

class Pesquisa  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '' 
        };
      }

    render () {
  return (
      <>
      <View style={styles.viewPesquisa}>
      
          <TextInput
                style={{height: 35, width: '80%', borderBottomWidth: 1, paddingBottom: 5,}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                defaultValue= "Dados para pesquisar"
            />   
          <Icon name="search" size={26} color="#000" />
      </View>
      </>
  );
    }
};

const styles = StyleSheet.create({
    viewPesquisa: {
    //backgroundColor: "yellow",
    height: 40,
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: '10%',
    justifyContent: 'center',
    marginTop: 5,
    borderWidth: 1,
  },
  textoPrincipal: {
    color: 'black'
  },
  pesquisa: {
    
  },
  botoes: {
    backgroundColor: 'red'
  }
});

export default Pesquisa;
