import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './src/utils/nav';
//screen

import Home from './src/Screen/Home/index';

import GameDetails from './src/Screen/Home/GameDetails';
import ButtonGenre from './src/Component/ButtonGenre';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={GameDetails}
          name="Detail"
          options={{headerShown: false}}
        />
        <Stack.Screen component={ButtonGenre} name="Gamegenre" />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
