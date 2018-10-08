import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class StoreScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#FCB71A'}}>
        <View style={styles.navBar}>
          <Icon style={styles.noteItem} name="notifications" size={25} color='white' />
          <Text style={{alignItems: 'center', justifyContent: 'center', color: 'white', marginLeft: 60, fontSize: 20, fontWeight:'bold'}} >Store</Text>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon style={styles.navItem} name="more-vert" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: 90}}>
        <TouchableOpacity style={{width: 150, backgroundColor:'transparent'}}>
          <View style={styles.bloonRight}>
          <Icon style={styles.bloonIcon} name="radio-button-checked" size={30}/>
          <Text style={styles.bloonTxt}>1,230</Text>
          </View>
          </TouchableOpacity>
          <View style={{alignSelf: 'flex-end', marginTop: -40, marginRight: 20,}}>
          <Image source={require('../../images/store/cart.png')} style={{width: 45, height: 40,}} />
          </View>
        </View>
          
          <ScrollView >
            <View style={{flex: 1, margin: 0, marginBottom: 50}}>

                <Text style={styles.storeTitles}>Themes</Text>
                <ScrollView horizontal={true} style={{backgroundColor: 'white',}}>
                <View style={{justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10}}>

                  <View style={{alignItems: 'center',marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/galaxytheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Galaxy Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/nauticaltheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Nautical Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/oasistheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Oasis Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                </ScrollView>

                <Text style={styles.storeTitles}>Stickers</Text>
                <ScrollView horizontal={true} style={{backgroundColor: 'white',}}>
                <View style={{justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10}}>

                  <View style={{alignItems: 'center',marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/boxheads.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>BoxHead Stickers</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/smilesticker.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Smile Stickers</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/pizza.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Pizza Pack Stickers</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/sloth.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>iSloth Stickers</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/panda.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>EvilPanda Pack</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                </ScrollView>

                <Text style={styles.storeTitles}>Atlas Items</Text>
                <ScrollView horizontal={true} style={{backgroundColor: 'white',}}>
                <View style={{justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10}}>

                  <View style={{alignItems: 'center',marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/sloth.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Sloth</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/panda.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Panda</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/pizza.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Pizza Pack Stickers</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/sloth.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>iSloth Stickers</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/panda.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>EvilPanda Pack</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                </ScrollView>

                <Text style={styles.storeTitles}>Premium Themes</Text>
                <ScrollView horizontal={true} style={{backgroundColor: 'white',}}>
                <View style={{justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10}}>

                  <View style={{alignItems: 'center',marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/oasistheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Oasis Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/galaxytheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Galaxy Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/oasistheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Oasis Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'center', marginRight: 30, marginLeft: 20,}}>
                    <Image source={require('../../images/store/stargazetheme.png')} style={styles.storeThumbs} />
                    <Text style={styles.itemTxt}>Stargaze Theme</Text>
                    <TouchableOpacity style={styles.priceButt}>
                    <Icon style={styles.priceIcon} name="radio-button-checked" size={15}/>
                    <Text style={styles.priceTxt}> 50</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                </ScrollView>

            </View>
           

          </ScrollView>


        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    storeThumbs:{
     width: 80,
     height: 80,
     borderRadius: 15
    },
    storeTitles: {
      fontSize: 24,
      color: '#ED4A4A',
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 30,
      marginLeft: 20
    },
    itemTxt:{
      fontSize: 12,
      marginTop: 5,
    },
    priceButt: {
      width: 60,
      height: 30,
      backgroundColor: '#ED4A4A',
      marginTop: 10,
      borderRadius: 10,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    priceIcon: {
      color: '#FCB71A'
    },
    priceTxt: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
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
    bloonRight: {
      width: 150,
      height: 50,
      backgroundColor: '#ED4A4A',
      alignSelf: 'flex-start',
      marginTop: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
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
      fontSize: 25,
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
  });