import React, { Component } from 'react';
import { createBottomTabNavigator } from "react-navigation";
import Styles from './styles/styles.js';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Frnds from './screens/Frnds';
import Sail from './screens/Sail';

export const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Frnds: {
    screen: Frnds,
  },
  Sail:{
    screen: Sail,
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
    },
    style: {
      borderTopColor: 'red',
    },
  }
});

export default class App extends Component {
  render() {
      return( <Tab /> );
  }
};