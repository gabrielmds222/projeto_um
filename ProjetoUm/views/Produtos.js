//Tela 1 onde ficam todos os produtos a mostra

import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';

import Card from '../components/Card';

import {getProdutos} from '../services/ProdutoServices'

export default function Produtos(props) {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function loadContent() {
      const produtos = await getProdutos();
      setProdutos(produtos);
    }
    loadContent();
  });

  var renderItem = ({ item }) => {
    return <Card
    navigation={props.navigation}
    id={item.id}
    nome={item.nome}
    preco={item.preco}
    foto={item.foto}
    />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
      data={produtos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25,
    padding: 10,
  },
})
