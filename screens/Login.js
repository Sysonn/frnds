import React from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  FlatList, 
  ActivityIndicator, 
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Button,
  Image,
 } from 'react-native';

//import TabBar from './App.js';

import styles from '../styles/home';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {connect} from 'react-redux';
import t from 'tcomb-form-native'; // 0.6.9

import {auth} from "../actions";

const Form = t.form.Form;

const User = t.struct({
  frndForm: t.String,
});

const options = {
  auto: 'none',
  
}

const option2 = {
  auto: 'none',
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};


//t.form.Form.stylesheet.text.normal.color = '#000000';

class LoginScreen extends React.Component {

  // constructor(props){
  //   super(props);
  // }

    // state = {
    //   username: "",
    //   password: null,
    // }
    

    handleSubmit = () =>{

      const formValue1 = this._form1.getValue();
      finalValue1 = formValue1.frndForm;
      const formValue2 = this._form2.getValue();
      finalValue2 = formValue2.frndForm;

      this.props.login(finalValue1, finalValue2);
      console.log(finalValue1, finalValue2);

      
     
      //console.log(formValue1);
      //console.log("Login Pressed");

      }

    // submitFrnd = (e) => {
    //   e.preventDefault();
    //   this.props.addFrnd(this.state.text);
    //   this.setState({text: ""});
    // }
    
 
    render() {

      return (
    //    <TabBar />
        <View style={styles.container}>
        <StatusBar
          backgroundColor="#C43F3F"
          barStyle="light-content"
        />

        <View style={styles.loginButt}>

          <View style={{alignItems: 'center', marginBottom: 50, marginTop: 100}}>
          {/* <Text style={{fontSize: 24, color: 'white', marginBottom: 50}}>Frndship</Text> */}
          <Image source={require('../images/flogo.png')} style={{ width: 280, height: 80,}} />
          </View>

            <Form 
            ref={c => this._form1 = c}
            type={User}
            options={options} 
            />

            <Form 
            ref={c => this._form2 = c}
            type={User}
            options={option2}
            />

            <Button
              title="Login"
              //onPress={this.handleSubmit}
              onPress={this.handleSubmit} 
              color='#BC4444'
            >
          
            </Button>

            <View style={{marginTop: 15, marginBottom: 25}}>
            <Button 
              style ={{backgroundColor: "red"}}
              title="Sign Up"
              onPress={this.handleSubmit}
              color='#BC4444'
            />
            </View>

        </View>
        </View>
       );
     }
  }

 
  const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
      errors = Object.keys(state.auth.errors).map(field => {
        return {field, message: state.auth.errors[field]};
      });
    }
    return {
      errors,
      isAuthenticated: state.auth.isAuthenticated
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (username, password) => {
        return dispatch(auth.login(username, password));
      }
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

  