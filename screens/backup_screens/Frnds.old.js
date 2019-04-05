import React from 'react';
import { Text, View } from 'react-native';
import api from './utilities/api';


export default class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: []

    }
  }

  // componentWillMount(){
  //   api.getNames().then((res) => {
  //     this.setState({
  //       email: res.email,
  //     })
  //   })
  // }

  componentDidMount() {
    fetch('http://159.203.185.162/users.json')
      .then(response => response.json())
      .then(email => this.setState({ email }));
  }

    render() {

      console.log("Email: ", this.state.email);
      // console.log("Api val:", api);

      // fetch('http://159.203.185.162/users/')
      // .then(response => {
      //     console.log(response.text());
      //   })

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Frnds</Text>
        </View>
      );
    }
  }