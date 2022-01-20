import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Facebook from './screens/fb';
import Instagram from './screens/in';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: Facebook,
  Instagram: Instagram
})

const AppContainer = createAppContainer(TabNavigator);