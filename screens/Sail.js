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
  StatusBar,
  Dimensions,
  Animated,
  PanResponder
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Users = [
  {id: "1", name: "@Derek", desc: "Description goes here", uri: require('../images/nondefault/1.png')},
  {id: "2", name: "@Derek2", desc: "Description goes here", uri: require('../images/nondefault/2.jpg')},
  {id: "3", name: "@SShaun", desc: "Description goes here", uri: require('../images/nondefault/shaun.jpg')},
  {id: "4", name: "@Sana", desc: "Description goes here", uri: require('../images/nondefault/sana.jpg')},
  {id: "5", name: "@Sannna", desc: "Description goes here", uri: require('../images/nondefault/sana2.jpg')},
  {id: "6", name: "@Bob", desc: "Description goes here", uri: require('../images/nondefault/bob.jpg')},
  {id: "7", name: "@Porter", desc: "Description goes here", uri: require('../images/nondefault/porter.jpg')},
  {id: "8", name: "@Chrissy", desc: "Description goes here", uri: require('../images/nondefault/chrissy.jpg')},
  {id: "9", name: "@Mau5", desc: "Description goes here", uri: require('../images/nondefault/mau5.jpg')},
  {id: "10", name: "@PeterP", desc: "Description goes here", uri: require('../images/nondefault/spiderman.jpg')},
]

export default class Sail extends Component{

  state = {
    modalVisible: false,
  };
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  constructor(){
    super()

    this.position = new Animated.ValueXY()
    this.state={
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
      outputRange:['-10deg','0deg','10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform:[{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
      outputRange:[0,0,1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
      outputRange:[1,0,0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
      outputRange:[1,0,1],
      extrapolate: 'clamp'
    }) 
    this.nextCardScale = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
      outputRange:[1,0.8,1],
      extrapolate: 'clamp'
    })      
  }
  componentWillMount(){
    this.PanResponder = PanResponder.create({
      
      onStartShouldSetPanResponder:(evt,gestureState) =>true,
      onPanResponderMove:(evt,gestureState) =>{
          this.position.setValue({x:gestureState.dx,y:gestureState.dy})
      },
      onPanResponderRelease:(evt,gestureState) =>{
          if(gestureState.dx>120){
            Animated.spring(this.position,{
              toValue:{x:SCREEN_WIDTH+100,y:gestureState.dy}
            }).start(()=>{
              this.setState({currentIndex:this.state.currentIndex+1}, ()=>{
                this.position.setValue({x:0, y:0})
              })
            })
          } else if(gestureState.dx< -120){
            Animated.spring(this.position,{
              toValue:{x:-SCREEN_WIDTH-100,y:gestureState.dy}
            }).start(()=>{
              this.setState({currentIndex:this.state.currentIndex+1}, ()=>{
                this.position.setValue({x:0, y:0})
              })
            })
          }else{
            Animated.spring(this.position,{
              toValue: {x: 0, y: 0},
              friction: 4
            }).start()
          }
      }
    })
  }

  renderUsers = () =>{

    return Users.map((item, i) =>{
      if( i < this.state.currentIndex)
        {
          return null
        }
        else if( i == this.state.currentIndex)
        {

        
      return(
        <Animated.View 
        {...this.PanResponder.panHandlers}

        key={item.id} 
        style={[this.rotateAndTranslate,
        {height:SCREEN_HEIGHT-250, 
        width: SCREEN_WIDTH - 20, 
        flex: 1,
        padding: 10, 
        margin: 10,
        position: 'absolute',
        backgroundColor: 'white', 
        borderWidth: 3, 
        borderColor:'#ED4A4A', 
        borderRadius: 10,
        marginTop: -20,
        alignItems: 'center',
        elevation: 8,  
        }]}>


        <Animated.View style={{opacity:this.likeOpacity, transform:[{rotate:'-20deg'}], zIndex: 1000, position:'absolute', top: 40, left: 40}}>
       <Text style={{borderWidth:3, borderRadius: 20, borderColor: 'lightgreen', color: 'lightgreen', fontSize: 32, fontWeight:'800', padding: 10}}>Ahoy!</Text>
     </Animated.View>

     <Animated.View style={{opacity:this.dislikeOpacity, transform:[{rotate:'20deg'}], zIndex: 1000, position:'absolute', top: 40, right: 20}}>
       <Text style={{borderWidth:3, borderRadius: 20, borderColor: '#FCB71A', color: '#FCB71A', fontSize: 32, fontWeight:'800', padding: 10}}>Ahoy.</Text>
     </Animated.View>
     
      
        
        <Animated.View style={{
          marginLeft: 20,
          height: 150,
          width: 150,
          padding: 2,
          marginTop: 0,
          backgroundColor: 'white',
          borderColor: '#ED4A4A',
          borderWidth: 4,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          borderRadius: 1000,
          elevation: 10,
          zIndex: 5

        }}>
        <Image
          style={{flex: 1, width: 140, height: 145, resizeMode: 'cover',  borderRadius:1000}}
          source={item.uri}/>
        </Animated.View>

        <Text style={{fontSize: 24, color:'#ED4A4A', fontWeight: 'bold',}}>{item.name}</Text>
        <Text style={{fontSize: 18, marginTop: 50}}>{item.desc}</Text>
        <Text style={{fontSize: 18, marginTop: 50, color:'#ED4A4A'}}>Common Interests:</Text>
        <Image style={{width: 200, resizeMode: 'contain', marginTop: -50,}} source={require('../images/interests.png')} />
        </Animated.View>
        
      )
    } 
    else {
      return(
      <Animated.View 
      {...this.PanResponder.panHandlers}
      key={item.id} style={[{opacity:this.nextCardOpacity, transform:[{scale: this.nextCardScale}], 
      
      height:SCREEN_HEIGHT-250, 
      width: SCREEN_WIDTH - 20, 
      flex: 1,
      padding: 10, 
      margin: 10,
      position: 'absolute',
      backgroundColor: 'white', 
      borderWidth: 3, 
      borderColor:'#ED4A4A', 
      borderRadius: 10,
      marginTop: -20,
      alignItems: 'center',
      //elevation: 8, 
      
      }]}>
     
     {/* <Animated.View style={{opacity:this.likeOpacity, transform:[{rotate:'-20deg'}], zIndex: 1000, position:'absolute', top: 40, left: 40}}>
       <Text style={{borderWidth:3, borderRadius: 10, borderColor: 'lightgreen', color: 'lightgreen', fontSize: 32, fontWeight:'800', padding: 10}}>LIKE</Text>
     </Animated.View>

     <Animated.View style={{opacity:this.dislikeOpacity, transform:[{rotate:'20deg'}], zIndex: 1000, position:'absolute', top: 40, right: 40}}>
       <Text style={{borderWidth:3, borderRadius: 10, borderColor: 'red', color: 'red', fontSize: 32, fontWeight:'800', padding: 10}}>PASS</Text>
     </Animated.View>
      */}
     
     <Animated.View style={{
          marginLeft: 20,
          height: 150,
          width: 150,
          padding: 2,
          marginTop: 0,
          backgroundColor: 'white',
          borderColor: '#ED4A4A',
          borderWidth: 4,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          borderRadius: 1000,
          elevation: 10,

        }}>
        <Image
          style={{flex: 1, width: 140, resizeMode: 'cover', height: 145, borderRadius: 1000}}
          source={item.uri}/>
        </Animated.View>

        <Text style={{fontSize: 24, color:'#ED4A4A', fontWeight: 'bold',}}>{item.name}</Text>
        <Text style={{fontSize: 18, marginTop: 50}}>{item.desc}</Text>
        <Text style={{fontSize: 18, marginTop: 50, color:'#ED4A4A'}}>Common Interests:</Text>
        <Image style={{width: 200, resizeMode: 'contain', marginTop: -50,}} source={require('../images/interests.png')} />
      </Animated.View>
      )  
  }
    }).reverse()
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
          {/* <Image source={require('../images/flogo.png')} style={{ width: 100, height: 50 }} /> */}
          <Icon style={styles.noteItem} name="notifications" size={25} />
          <Text style={{alignItems: 'center', justifyContent: 'center', color: 'white', marginLeft: 60, fontSize: 20, fontWeight:'bold'}} >Sail</Text>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon style={styles.navItem} name="more-vert" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <View style={{height:60}}>
          
          </View>
          <View style={{flex:1, marginTop: 20,}}>
            {this.renderUsers()}
           
          </View>

          <View style={{flex: 1, alignItems: 'center', }}><Text style={{zIndex: -900, fontSize: 22, fontWeight: '800', color:'white'}}>Come back later!</Text></View>
          
          <View style={{height:60}}>
          
          </View>

          
        

        </View>
     
        
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
  ProfilePost: {
    //marginLeft: -20,
    //marginRight: -20,
    height: 350,
    //width: 350,
    flex: 1,
    padding: 20,
    marginTop: -100,
    backgroundColor: 'white',
    borderColor: '#ED4A4A',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    elevation: 2,
   
  },
  proPic: {
    marginLeft: 20,
    height: 120,
    width: 120,
    padding: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: '#ED4A4A',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    elevation: 10,
  },
  profileSub: {
    marginTop: 70,
    flex: 1,
    elevation: 2,
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#ED4A4A',
  },
  bloonRight: {
    width: 100,
    height: 40,
    backgroundColor: '#ED4A4A',
    alignSelf: 'flex-end',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 10,
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

  }
});