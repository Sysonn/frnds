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
 } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const Post = t.struct({
  frndForm: t.String,
});

const options = {
  auto: 'none'
}

t.form.Form.stylesheet.textbox.normal.color = "#ffffff";
//const formValue = this._form.getValue();

class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
    //this.state = { isLoading: true, refreshing: false, dataSource: [] }
  }


  componentDidMount() {
    this.props.fetchPosts();
}


    state = {
      text: "",
      updatePostId: null,
    }
    
    resetForm = () => {
      this.setState({text: "", updatePostId: null});
    }
    
    selectForEdit = (id) => {

      let post = this.props.posts[id];
      this.setState({text: post.postcontent, updatePostId: id});

    }
    
    handleSubmit = () =>{

      const formValue = this._form.getValue();
     
      if(formValue === null){
        console.log('formValue is null: ',formValue)
        this.resetForm();
      }else{

          console.log('formValue: ',formValue)
          finalValue = formValue.frndForm;
      
          this.state.text = finalValue;
          console.log('State text: ', this.state.postcontent);
      
      
          if (this.state.updatePostId === null) {
            console.log('update === null, ID=', this.state.updatePostId);
            console.log('Val: ', finalValue);
            this.props.addPost(finalValue).then(this.resetForm);
          } else {
            console.log('update != null, ID=', this.state.updatePostId);
            console.log('state.text = ', this.state.postcontent);
            this.props.updatePost(this.state.updatePostId, finalValue);
          }
          this.resetForm();
      
          }

      }

    // submitFrnd = (e) => {
    //   e.preventDefault();
    //   this.props.addFrnd(this.state.text);
    //   this.setState({text: ""});
    // }
    
 
    render() {

      return (
        <View style={styles.container}>
        <StatusBar
          backgroundColor="#C43F3F"
          barStyle="light-content"
        />
          <View style={styles.navBar}>
            {/* <Image source={require('./images/flogo.png')} style={{ width: 100, height: 50 }} /> */}
            <Icon style={styles.noteItem} name="notifications" size={25} />
            <Text style={{alignItems: 'center', justifyContent: 'center', color: 'white', marginLeft: 60, fontSize: 20, fontWeight:'bold', }} >Frnds</Text>
            <View style={styles.rightNav}>
              <TouchableOpacity>
                <Icon style={styles.navItem} name="search" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Icon style={styles.navItem} name="more-vert" size={25} />
              </TouchableOpacity>
            </View>
          </View>

        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={this.state.refreshing}
        //     onRefresh={this._onRefresh}
        //   />
        // }
        >

        <View style={{flex: 1, width: 350}}>
        <Text style={{fontSize: 24, color: 'white',}}>Add Post</Text>
          <Form 
          ref={c => this._form = c}
          type={Post}
          options={options} 
          />

          <Button
            title="Add"
            onPress={this.handleSubmit}
          />
          <View style={{marginTop: 15, marginBottom: 25}}>
          <Button 
            style ={{backgroundColor: "red"}}
            title="Reset"
            onPress={this.resetForm}
          />
          </View>

        </View>

          {this.props.posts.map((post, id) => (
         
         
          <View style={styles.bodyButt} key={`post_${id}`}>
          <Text style={styles.profileName}>{post.id}</Text>
          <Text style={styles.emailName}>{post.postcontent}</Text>
          
          <View style={{marginTop: 10, marginBottom: 10}}>
          <Button title="Delete"  onPress={() => this.props.deletePost(id)}></Button>
          </View>
          <Button title="Edit" onPress={() => this.selectForEdit(id)}></Button>
          </View>
          ))}


        </ScrollView>
        </View>
      );
    }
  }

 
const mapStateToProps = state => {
    return {
      posts: state.posts,
    }
  }
  
  import {posts} from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    addPost: (postcontent) => {
     return dispatch(posts.addPost(postcontent));
    },
    updatePost: (id, postcontent) => {
      dispatch(posts.updatePost(id, postcontent));
    },
    deletePost: (id) => {
      dispatch(posts.deletePost(id));
    },
    fetchPosts: () => {
      dispatch(posts.fetchPosts());
    },
  }
}


  
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

   const styles = StyleSheet.create({
  
   // defaultColor = '#ED4A4A'
  
    container: {
      flex: 1,
      backgroundColor: '#BC4444',
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
      fontSize: 22,
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#ED4A4A',
      marginLeft: 10,
    },
    emailName: {
      elevation: 2,
      fontSize: 16,
      alignItems: 'center',
      fontWeight: 'bold',
      color: 'grey',
      marginLeft: 10,
    },
    
    body: {
      flex: 1,
      backgroundColor: '#BC4444',
      
    },
    tabBar: {
      backgroundColor: '#ED4A4A',
      height: 50,
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
     color: 'white',
    },
    tabTitle: {
      fontSize: 11,
     
      paddingTop: 4
    },
    bodyButt: {
      width: 350,
      marginLeft: 10,
      minHeight: 100,
      flex: 1,
      padding: 5,
      paddingTop: 5,
      paddingBottom: 25,
      marginTop: 0,
      backgroundColor: 'white',
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