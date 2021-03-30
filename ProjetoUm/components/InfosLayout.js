import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function InfosLayout(props) {
    return (
        <Text>{props.nome}</Text>
    );
}

const styles = StyleSheet.create({
    nome: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
      },
    
      preco: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white", 
        padding: 10,
      },
    
      foto: {
        flex: 1,
        justifyContent:'center',
        width: 80,
        height: 80,
      }
})