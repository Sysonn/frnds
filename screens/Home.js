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

import styles from '../styles/home';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {connect} from 'react-redux';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const Post = t.struct({
  frndForm: t.String,
});

const options = {
  auto: 'none',
  
}

//t.form.Form.stylesheet.text.normal.color = '#000000';
//const formValue = this._form.getValue();

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    //this.state = { isLoading: true, refreshing: false, dataSource: [] }
  }


  componentDidMount() {
    this.props.fetchPosts();
}


    state = {
      postcontent: "",
      updatePostId: null,
    }
    
    resetForm = () => {
      this.setState({postcontent: "", updatePostId: null});
    }
    
    selectForEdit = (id) => {

      let post = this.props.posts[id];
      this.setState({postcontent: post.postcontent, updatePostId: id});

    }
    
    handleSubmit = () =>{

      const formValue = this._form.getValue();
     
      if(formValue === null){
        console.log('formValue is null: ',formValue)
        this.resetForm();
      }else{

          console.log('formValue: ',formValue)
          finalValue = formValue.frndForm;
      
          this.state.postcontent = finalValue;
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

        <ScrollView style={styles.body}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={this.state.refreshing}
        //     onRefresh={this._onRefresh}
        //   />
        // }
        >

        <View style={styles.postButt}>
        <Text style={{fontSize: 24, color: '#ED4A4A',}}>Add Post</Text>
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


  
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

  