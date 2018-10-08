import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { SafeAreaView } from 'react-native';
// import Styles from './styles/styles.js';
import Icon from 'react-native-vector-icons/MaterialIcons';


import Profile from './Profile';
import Store from './subScreens/Store';


export const SubNav = createStackNavigator({
    Profile: { screen: Profile},
    Store: { screen: Store },
  },{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  });



export default class Tab extends Component {
  render() {
      return( 
      <SubNav />
      );
  }
};

