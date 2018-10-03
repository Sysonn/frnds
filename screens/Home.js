import React from 'react';
import {
    AppRegistry,
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
//import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

  export default class HomeScreen extends React.Component {

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
            <Text style={{alignItems: 'center', justifyContent: 'center', color: 'white', marginLeft: 60, fontSize: 20, fontWeight:'bold', }} >Home</Text>
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
          <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/1.png')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
                @Derek
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>This is a post. #1</Text>
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
  
          <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/sana.jpg')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
                @Sana
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>This is a post. #2</Text>
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
  
          <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/mau5.jpg')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
                @Mau5
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>
          This is a post. #3:
          what in the hill billy yeehaw john deer tractor dip chewing sister bangin' confederate flag are these folks doing 
          </Text>
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
  
          <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/mau5.jpg')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
              @Mau5
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>To be fair, you have to have a very high IQ to understand Rick and Morty. The humour is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation- his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realise that they're not just funny- they say something deep about LIFE. As a consequence people who dislike Rick & Morty truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Rick's existential catchphrase "Wubba Lubba Dub Dub," which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons. I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon's genius wit unfolds itself on their television screens. What fools.. how I pity them. 😂
  
  And yes, by the way, i DO have a Rick and Morty tattoo. And no, you cannot see it. It's for the ladies' eyes only- and even then they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand. Nothin personnel kid 😎</Text>
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
  
          <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/bob.jpg')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
               @Bob
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>This is a post. #5</Text>
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
  
          <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/chrissy.jpg')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
                @Chrissy
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>This is a post. #6</Text>
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
  
           <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/chrissy.jpg')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
                @Chrissy
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>Look at this neat pic!</Text>
          <Image source={require('../images/cover-default.png')} style={{ marginTop: 10, marginLeft: 70, width: 200, height: 300 }} />
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
  
          <View style={styles.bodyButt}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.proPicHome}>
              <Image source={require('../images/nondefault/1.png')} style={{ width:45, height: 45, borderRadius: 50 }} />
              </View>
              <Text style={styles.profileName}>
                @Derek
              </Text>
            </View>
          <Text style={{marginLeft: 70, marginTop: -20 }}>This is a post. #8</Text>
          {/* <Icon style={styles.postIconItem} name="more-vert" size={25}/> */}
          </View>
          {/* ***************************************************************************** */}
           {/* <Modal
            transparent={true}
            animationType="slide"
            visible={this.state.modalVisible}
            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={styles.modalStyle}>
              <View>
                <Text>Hello World!</Text>
  
                <TouchableHighlight 
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
  
          <TouchableHighlight style={styles.bodyButt}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
          </TouchableHighlight> */}
  
         </ScrollView>
  
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
  
   // defaultColor = '#ED4A4A'
  
    container: {
      flex: 1
    },
    navBar: {
      height: 50,
      backgroundColor: '#ED4A4A',
      elevation: 5,
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
      borderRadius: 50,
      elevation: 5,
    },
    profileName: {
      elevation: 2,
      //fontFamily:'varelaround',
      fontSize: 16,
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#ED4A4A',
      marginLeft: 10,
    },
    
    body: {
      flex: 1,
      //backgroundColor: '#EFEFEF',
      backgroundColor: '#BC4444',
      
    },
    tabBar: {
      //backgroundColor: 'white',
      backgroundColor: '#ED4A4A',
      height: 50,
      // borderTopWidth: 2,
      //borderColor: '#ED4A4A',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    tabItem: {
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabnavItem: {
      marginLeft: 25,
     // color:  '#ED4A4A',
     color: 'white',
    },
    tabTitle: {
      fontSize: 11,
     
      paddingTop: 4
    },
    bodyButt: {
      marginLeft: 10,
      minHeight: 100,
      flex: 1,
      padding: 5,
      paddingTop: 5,
      marginTop: 0,
      backgroundColor: 'white',
      //alignItems: 'center',
      //justifyContent: 'center',
      margin: 10,
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