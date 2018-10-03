import React, { Component } from 'react';
import { createBottomTabNavigator } from "react-navigation";
import Styles from './styles/styles.js';

import Home from './screens/Home';
import Settings from './screens/Settings';
import Frnds from './screens/Frnds';

export const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
  Frnds: {
    screen: Frnds,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#BC4444',
    inactiveBackgroundColor: '#ED4A4A' ,
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 12,
      padding: 12
    }
  }
});

export default class App extends Component {
  render() {
      return( <Tab /> );
  }
};