import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Music from './Music';
import MusicDetail from './MusicDetail';
const Stack = createStackNavigator();
export default class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="流行音乐排行榜" component={Music} />
          <Stack.Screen name="详情" component={MusicDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
