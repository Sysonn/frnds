import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  
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
     postButt: {
      marginLeft: 10,
      minHeight: 100,
      flex: 1,
      padding: 5,
      paddingTop: 25,
      marginTop: 0,
      //backgroundColor: 'white',
      //alignItems: 'center',
      //justifyContent: 'center',
      margin: 10,
      borderRadius: 10,
      elevation: 2,
    },
    loginButt: {
      marginLeft: 10,
      minHeight: 100,
      flex: 1,
      padding: 5,
      paddingTop: 25,
      marginTop: 0,
      //backgroundColor: 'white',
      //alignItems: 'center',
      //justifyContent: 'center',
      margin: 10,
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