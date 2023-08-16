/* // App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './main'; // main.js 파일의 컴포넌트를 import
import HomeScreen from './login'; // login.js 파일의 컴포넌트를 import
import myportfolioScreen from './myportfolio'; // myportfolio.js 파일의 컴포넌트를 import
import EmailScreen from './email';
import RegisterScreen from './register';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home2"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="myportfolioScreen"
          component={myportfolioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 */