//Tela de organização da stack e tabnavigation

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { Text, View } from 'react-native'

import Produtos from './views/Produtos';
import Infos from './views/Infos';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


 export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" />
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="Produtos" 
        component={Produtos}
        options={{ title: 'Produtos' }}/>
      <Stack.Screen 
        name="Infos" 
        component={Infos}
        options={{ title: 'Informações' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
