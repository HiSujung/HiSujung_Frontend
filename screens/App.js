// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './main'; // main.js 파일의 컴포넌트를 import
import HomeScreen from './login'; // login.js 파일의 컴포넌트를 import
import myportfolioScreen from './myportfolio'; // myportfolio.js 파일의 컴포넌트를 import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainComponent}
          options={{ headerShown: false }}
        />
{/*         <Stack.Screen
          name="myportfolioScreen"
          component={MainComponent}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
