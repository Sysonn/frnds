import React from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
//import api from './utilities/api';


export default class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
    
    this.state ={ isLoading: true, results:{items: [] }}
  }


    componentDidMount(){
      return fetch('http://159.203.185.162/users/')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({
            isLoading: false,
            dataSource: responseJson[1].username,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
  

    render() {
      
      // JSON.stringify(responseJson);
      // test = reso
      //console.log(fetch('http://159.203.185.162/snippets/2/'));

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{marginBottom: 50, fontSize: 18}}>frnds:</Text>
          {/* <Text>Frnds</Text> */}
          <FlatList
          data={[this.state.dataSource]}
          renderItem={({item}) => <Text style={{fontSize: 18}}>{item}</Text>}
          keyExtractor={({id}) => id}
        />
        </View>
      );
    }
  }