//Tela 2, onde ficam as informações do produto selecionado na tela 1

import React, { useState, useEffect} from "react";
import { Text, View,  StyleSheet, Image} from 'react-native';

import { getProduto } from '../services/ProdutoServices'

import Card from '../components/Card';

export default function Infos(props) {
    const [produto, setProduto] = useState({});

    useEffect(() => {
        async function loadContent() {
          const produto = await getProduto(props.route.params.idProduto);
          setProduto(produto);
        }
        loadContent();
      });

 return <View style={styles.container}>
      <Image style={styles.foto} source= {{uri: produto.foto}} ></Image>
      <View style={styles.descricao}>
      <Text>{produto.nome}</Text>
      <Text>{produto.preco}</Text>
      </View>
    </View> 
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },

      descricao: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        paddingTop: 20,
        fontSize: 20,
      },
    
      foto: {
        flex: 0,
        marginTop: 10,
        alignItems: 'center',
        width: 200,
        height: 200,
    
      },
    
    })
    
