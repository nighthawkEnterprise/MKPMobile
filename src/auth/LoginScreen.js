import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Image, StatusBar, PermissionsAndroid} from 'react-native';
import {Input} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';

export class LoginScreen  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      username: '',
      password: '',
    }
    login = this.login.bind(this);
  }
  requestCameraPermission = async () => {
    try {
       const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.CAMERA,
         {
           title: "Location Access",
           message:
             "MKP Mobile needs your current location " +
             "so that it can find the closest I-groups near you",
           buttonNeutral: "Ask Me Later",
           buttonNegative: "Cancel",
           buttonPositive: "OK"
         }
       );
       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         console.log("You can use the camera");
       } else {
         console.log("Camera permission denied");
       }
     } catch (err) {
       console.warn(err);
     }
  }
  componentDidMount() {
    this.requestCameraPermission();
  }
  login = () => {
    axios.get(`http://drupal7.mkp.org/api/auth?uname=${this.state.username}&pw=${this.state.password}`)
    .then(res => {
      console.log('response: ', res.data);
      let loginAttempt = res.data;
      if(loginAttempt[0] != false) {
        this.setState({errorMessage: ""});

        this.props.navigation.navigate('HomeApp', {id: 1});
      } else {
        this.setState({errorMessage: "Username/Password Invalid"});
      }
    })
  }
  handleUserName = (e) => {
    this.setState({username: e})
  }
  handlePassword = (e) => {
    this.setState({password: e})
  }

  render() {
    StatusBar.setHidden(true, 'none');
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', height: 200}}>
            <View style={{justifyContent: 'center', alignItems: 'center',padding: 100, width: 300, backgroundColor: 'white'}}>
              <Image source={require('../images/MKP.jpg')} />
              <TextInput
                label="username"
                placeholder="Enter username"
                underlineColorAndroid="transparent"
                value={this.state.username}
                onChangeText={this.handleUserName}
                style={{width: 250, marginTop: 60, borderColor: '#7a42f4', height: 30, borderBottomWidth: 1}}
              />
              <TextInput
                label="Email"
                placeholder="Enter password"
                value={this.state.password}
                onChangeText={this.handlePassword}
                autoCapitalize='none'
                style={{width: 250,borderBottomWidth: 1, marginTop: 30, borderColor: '#7a42f4'}}
                secureTextEntry={true}
              />
              <View style={{ width: 250, marginTop: 50}}>
                <Button title="Login" color='#224077' onPress={() => this.login()}/>
              </View>
              <View style={{ width: 250, marginTop: 50}}>
                <Button title="Login" color='#224077' onPress={() => this.ask()}/>
              </View>
              <View style={{marginTop: 20, width: 250}}>
               {this.state.errorMessage === '' ? null :  <Button  color="red" style={{opacity: .3}} title={this.state.errorMessage}  />}
              </View>
            </View>

      </View>
      </SafeAreaView>
    );
  }
}
