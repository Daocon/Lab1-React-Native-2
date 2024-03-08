import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import header from './src/header';
import section from './src/section';
import home from './src/home';
import txiplo from './src/txiplo';
const Stack = createNativeStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="header" component={header} />
        <Stack.Screen name="section" component={section} />
        <Stack.Screen name="textinput" component={txiplo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;