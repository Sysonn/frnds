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


export default class Profile extends Component{

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
          <Text style={{alignItems: 'center', justifyContent: 'center', color: 'white', marginLeft: 60, fontSize: 20, fontWeight:'bold'}} >Profile</Text>
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

          <TouchableOpacity>
          <View style={styles.bloonRight}>
          <Icon style={styles.bloonIcon} name="radio-button-checked" size={25}/>
          <Text style={styles.bloonTxt}>1,230</Text>
          </View>
          </TouchableOpacity>

          {/* <View style={styles.ProfileCon}> */}
          <View style={{alignItems: 'center'}}>
              <View style={styles.proPic}>
               {/* <Image source={require('./images/default.png')} style={{ width: 100, height: 100, borderRadius: 50, }} /> */}
               <Image source={require('../images/nondefault/profilenon.png')} style={{ width: 100, height: 100, borderRadius: 50, }} />
              </View>
          </View>
            <View style={styles.ProfilePost}>
              <Text style={styles.profileSub}>
              @Derek
              </Text>
         

          
              <Text style={{fontSize: 18, marginTop: 100, height: 20}}>Hi, I'm Derek.</Text>
              <Text style={{fontSize: 18, marginTop: 80, color:'#ED4A4A'}}>Interests:</Text>
              <Image style={{width: 200, resizeMode: 'contain', marginTop: -50,}} source={require('../images/interests.png')} />
              {/* <Image style={{width: 200, resizeMode: 'contain', marginTop: -120,}} source={require('./images/interests.png')} /> */}
            </View>
          {/* </View> */}


         <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}
          style={{backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modalStyle}>
              <View style={{ width: 30, height: 30, marginTop: -380, marginRight: -320}}>
              {/* <View style={{backgroundColor:'#ED4A4A', width: 30, height: 30, marginTop: -380, marginRight: -310, borderRadius: 50, alignItems: 'center',justifyContent: 'center'}}> */}
              <TouchableHighlight 
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Icon style={{color: '#ED4A4A'}} name="close" size={30} />
                    {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>X</Text> */}
              </TouchableHighlight>
              </View>

            <View style={{alignItems: 'center',justifyContent: 'center', margin: 20}}>
            <Text style={{fontSize: 22, color:'#ED4A4A', fontWeight: 'bold'}}>Settings</Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight style={styles.settingsButt}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{fontSize: 18, color:'#ED4A4A', fontWeight: 'bold'}}><Icon style={{color: '#ED4A4A'}} name="settings" size={15} />  Settings</Text>
        </TouchableHighlight>
        {/* <Image style={{width: 450, height: 1200, flex: 1, marginTop: -1000}} source={require('./images/cover-default.png')} /> */}
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
  ProfileCon: {
    flex: 1,
    //margin: 20,
    marginTop: -10,
    //alignItems: 'center',
  },
  ProfileName: {
    //marginLeft: -20,
    //marginRight: -20,
    height: 400,
    //width: 350,
    flex: 1,
    padding: 20,
    marginTop: -80,
    backgroundColor: 'white',
    borderColor: '#ED4A4A',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    elevation: 2,
   
  },
  ProfilePost: {
    //marginLeft: -20,
    //marginRight: -20,
    height: 400,
    //width: 350,
    flex: 1,
    padding: 20,
    marginTop: -80,
    backgroundColor: 'white',
    borderColor: '#ED4A4A',
    borderWidth: 2,
    alignItems: 'center',
    //justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    elevation: 2,
   
  },
  proPic: {
    marginLeft: 20,
    height: 110,
    width: 110,
    padding: 20,
    marginTop: 0,
    backgroundColor: 'white',
    borderColor: '#ED4A4A',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 100,
    elevation: 10,
  },
  profileSub: {
    marginTop: 60,
    flex: 1,
    elevation: 2,
    fontSize: 24,
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#ED4A4A',
    marginBottom: 50,
    position: 'absolute',
    zIndex: 5,
  },
  bloonRight: {
    width: 100,
    height: 40,
    backgroundColor: '#ED4A4A',
    alignSelf: 'flex-end',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 8,
    //position: 'absolute', // add if dont work with above 
    flexDirection: 'row',
  },
  bloonIcon: {
    marginTop: 6,
    marginLeft: 15,
    color: '#FCB71A'
  },
  bloonTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    marginLeft: 6,
  },
  bodyButt: {
    marginLeft: 20,
    //width: 350,
    flex: 1,
    padding: 20,
    marginTop: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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

  },
  settingsButt: {
    marginLeft: 20,
    //width: 350,
    flex: 1,
    padding: 20,
    marginTop: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    elevation: 2,
  },
});