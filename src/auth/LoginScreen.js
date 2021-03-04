import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Image, StatusBar, StyleSheet} from 'react-native';
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
  componentDidMount() {
    console.log("PLATFORM: ", Platform.OS);
  }
  render() {
    StatusBar.setHidden(true, 'none');
    let ios = false;
    Platform.OS === 'ios' ? ios = true : ios= false
    console.log("IOS: ", ios);
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
                {!ios ? <Button title="Login" color='#224077' onPress={() => this.login()}/> :
                    ( <AppButton title="Login" size="sm" backgroundColor="#224077" onPress={() => this.login()}/>)
                }
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
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#224077",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
