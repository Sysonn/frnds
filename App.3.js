import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { SafeAreaView, StatusBar } from 'react-native';
// import Styles from './styles/styles.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Frnds from './screens/Frnds';
import Sail from './screens/Sail';
import Atlas from './screens/Atlas';
import Tab from './screens/Tab'; 
import Login from './screens/Login';

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import frndsApp from "./reducers";

import { isSignedIn } from "./screens/utilities/auth";

let store = createStore(frndsApp, applyMiddleware(thunk));


export const TabBar = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon:  (
        <Icon name="home" size={25} style={{color: 'white'}}/>
      )
      },
  },
  Atlas:{
    screen: Atlas,
    navigationOptions: {
      tabBarIcon:  (
        <Icon name="flag" size={25} style={{color: 'white'}}/>
      )
      },
  },
  Sail:{
    screen: Sail,
    navigationOptions: {
      tabBarIcon:  (
        <Icon name="location-on" size={25} style={{color: 'white'}}/>
      )
      },
  },
  Frnds: {
    screen: Frnds,
    navigationOptions: {
      tabBarIcon:  (
        <Icon name="people" size={25} style={{color: 'white'}}/>
      )
      },
  },
  Tab: {
    screen: Tab,
    navigationOptions: {
      tabBarIcon:  (
        <Icon name="person-outline" size={25} style={{color: 'white'}}/>
      )
      },
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
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

export const LoginNav = createSwitchNavigator({
  Login: {
    screen: Login,
  },
});

class RootContainerComponent extends Component {

}

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }


  render() {
  
      // return( 
      // <Provider store={store}>
      // <SafeAreaView style={{flex: 1, backgroundColor: '#ED4A4A'}}>
      // <StatusBar
      //       backgroundColor="#C43F3F"
      //       barStyle="light-content"
      //       />
      // {/* <TabBar />  */}
      // <LoginNav />
      // {/* <RootContainer /> */}
      // </SafeAreaView>
      // </Provider>  
      // );

      const { checkedSignIn, signedIn } = this.state;

      // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
      if (!checkedSignIn) {
        //return null;
        return( 
          <Provider store={store}>
          <SafeAreaView style={{flex: 1, backgroundColor: '#ED4A4A'}}>
          <StatusBar
                backgroundColor="#C43F3F"
                barStyle="light-content"
                />
          <LoginNav /> 
          </SafeAreaView>
          </Provider>  
      );
      }
  
      if (signedIn) {
        return( 
            <Provider store={store}>
            <SafeAreaView style={{flex: 1, backgroundColor: '#ED4A4A'}}>
            <StatusBar
                  backgroundColor="#C43F3F"
                  barStyle="light-content"
                  />
            <TabBar /> 
            </SafeAreaView>
            </Provider>  
        );

      } else {

        return( 
          <Provider store={store}>
          <SafeAreaView style={{flex: 1, backgroundColor: '#ED4A4A'}}>
          <StatusBar
                backgroundColor="#C43F3F"
                barStyle="light-content"
                />
          <LoginNav /> 
          </SafeAreaView>
          </Provider>  
      );
      }  

  }
};