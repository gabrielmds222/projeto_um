//Tela de estilização dos cards de produtos da tela 1

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card(props) {
  return (
      <View style={styles.produto} >
         <Image style= {styles.foto} source= {{uri: props.foto}} />
            <View style={styles.descricao}>
          <Text style={styles.nome} onPress={() => props.navigation.navigate('Infos', {
            idProduto: props.id,
          })}>
            {props.nome}</Text>
          <Text style={styles.preco}>{props.preco}</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({

  produto: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-around',
  },

  descricao: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
    justifyContent: 'space-around',
    
  },

  foto: {
    flex: 0,
    width: 80,
    height: 80,
    marginRight: 10,
    justifyContent: 'space-around',

  },
});
