import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Atlas extends Component {

  state = {
    modalVisible: false,
  };
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#C43F3F"
        barStyle="light-content"
      />
        <View style={styles.navBar}>
          {/* <Image source={require('./images/flogo.png')} style={{ width: 100, height: 50 }} /> */}
          <Icon style={styles.noteItem} name="notifications" size={25} />
          <Text style={{alignItems: 'center', justifyContent: 'center', color: 'white', marginLeft: 60, fontSize: 24, fontWeight:'bold'}} >Categories</Text>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon style={styles.navItem} name="more-vert" size={25} />
            </TouchableOpacity>
          </View>
        </View>

    

        <ScrollView style={styles.body}>
        <Text> </Text>
        {/* ***************************************************************************** */}
        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>

            <Icon style={{color: 'grey', }} name="music-note" size={32}/>
            <Text style={styles.profileName}>
              Music
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon style={{color: 'grey', }} name="movie" size={32}/>
            <Text style={styles.profileName}>
              Movies
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon style={{color: 'grey', }} name="videogame-asset" size={32}/>
            <Text style={styles.profileName}>
              Video Games
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon style={{color: 'grey', }} name="video-library" size={32}/>
            <Text style={styles.profileName}>
              Media
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon style={{color: 'grey', }} name="brush" size={32}/>
            <Text style={styles.profileName}>
              Art
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon style={{color: 'grey', }} name="usb" size={32}/>
            <Text style={styles.profileName}>
              Technology
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon style={{color: 'grey', }} name="directions-car" size={32}/>
            <Text style={styles.profileName}>
              Cars
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.bodyButt}>
          <View style={{flexDirection: 'row', flex: 1}}>
          <Icon style={{color: 'grey', }} name="watch" size={32}/>
            <Text style={styles.profileName}>
              Fashion
            </Text>
          </View>
  
        <Icon style={styles.postIconItem} name="more-vert" size={30}/>
        </View>
        </TouchableOpacity>
        {/* ***************************************************************************** */}
       

       </ScrollView>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({

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
    fontSize: 24,
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#ED4A4A',
    marginLeft: 10,
  },
  
  body: {
    flex: 1,
    backgroundColor: '#BC4444',
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