import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
//import Styles from './styles/styles.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Frnds from './screens/Frnds';
import Sail from './screens/Sail';
import Atlas from './screens/Atlas';

import Store from './screens/subScreens/Store';

export const SubNav = createStackNavigator({
  Store: { screen: Store },
},{
  
  navigationOptions: {
      headerVisible: false,
  }
});

export const Tab = createStackNavigator({
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
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon:  (
        <Icon name="person-outline" size={25} style={{color: 'white'}}/>
      )
      },
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  headerMode: 'none',
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


export default class App extends Component {
  render() {
    //const { navigate } = App.navigation;
      return( 
      <SafeAreaView style={{flex: 1, backgroundColor: '#ED4A4A'}}>
      
      <Tab />
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}
        onPress={() => {this.props.navigation.navigate('Home');}}>

            <Icon style={styles.navItem} name="home" size={25}/>
         
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.navItem} name="flag" size={25}/>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.navItem} name="location-on" size={25} />
           
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon style={styles.navItem} name="people" size={25} />
           
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}
          onPress={() => {
            navigate('Profile');
          }}>
            <Icon style={styles.navItem} name="person-outline" size={25} />
         
          </TouchableOpacity>
        </View>
        
   

      </SafeAreaView>
      );
  }
};

const styles = StyleSheet.create({

  // defaultColor = '#ED4A4A'
 
   container: {
     flex: 1
   },
   navBar: {
     height: 50,
     backgroundColor: '#ED4A4A',
     elevation: 8,
     paddingHorizontal: 15,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between'
   },
   rightNav: {
     flexDirection: 'row'
   },
   navItem: {
     marginLeft: 25,
     color: 'white',
   },
   noteItem: {
     marginLeft: 10,
     color: 'white',
   },
   postIconItem: {
     marginLeft: 25,
     color: '#ED4A4A',
     alignSelf: 'flex-end', 
   },
   proPicHome: {
     marginLeft: 5,
     height: 50,
     width: 50,
     padding: 20,
     marginTop: 5,
     backgroundColor: 'white',
     borderColor: '#ED4A4A',
     borderWidth: 2,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 10,
     elevation: 5,
   },
   profileName: {
     elevation: 2,
     fontSize: 16,
     alignItems: 'center',
     fontWeight: 'bold',
     color: '#ED4A4A',
     marginLeft: 10,
   },
   
   body: {
     flex: 1,
     backgroundColor: 'lightgrey',
   },
   tabBar: {
     backgroundColor: '#ED4A4A',
     height: 50,
     borderTopWidth: 0.5,
     borderColor: '#E5E5E5',
     flexDirection: 'row',
     justifyContent: 'space-around'
   },
   tabItem: {
     marginRight: 20,
     alignItems: 'center',
     justifyContent: 'center',
   },
   tabTitle: {
     fontSize: 11,
     color: 'white',
     paddingTop: 4
   },
   bodyButt: {
     marginLeft: 20,
     minHeight: 100,
     flex: 1,
     padding: 5,
     paddingTop: 10,
     marginTop: 5,
     backgroundColor: 'white',
     //alignItems: 'center',
     //justifyContent: 'center',
     margin: 20,
     borderRadius: 10,
     elevation: 2,
   },
   modalButt: {
     width: 200,
     borderColor: 'red',
     borderWidth: 2,
     marginTop: 100,
     marginLeft: 50,
   },
   modalStyle: {
     height: 500,
     width: 375,
     backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'center',
     margin: 20,
     borderRadius: 10,
     marginTop: 100,
     borderWidth: 2,
     borderColor: 'grey',
     elevation: 8,
 
   }
 });