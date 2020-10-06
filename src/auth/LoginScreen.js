import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import {Input} from 'react-native-elements';
import {CustomHeader} from '../index';
export class LoginScreen  extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30, backgroundColor: 'white'}}>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, backgroundColor: '#F5F5F5', height: 200}}>
            <View style={{justifyContent: 'center', alignItems: 'center',padding: 100, width: 300, backgroundColor: 'white'}}>
              <Image source={require('../images/MKP.jpg')} />
              <TextInput
                label="username"
                placeholder="Enter username"
                underlineColorAndroid="transparent"
                style={{width: 250,borderBottomWidth: 1, marginTop: 60, borderColor: '#7a42f4', height: 30}}
              />
              <TextInput
                label="Email"
                placeholder="Enter password"
                style={{width: 250,borderBottomWidth: 1, marginTop: 30, borderColor: '#7a42f4'}}
                secureTextEntry={true}
              />
              <View style={{ width: 250, marginTop: 50}}>
                <Button title="Login" color='#224077' onPress={() => this.props.navigation.navigate('HomeApp')}/>
              </View>
              <View style={{marginTop: 20, width: 250}}>
                <Button title="Guest Login" color='#f8dc94' onPress={() => this.props.navigation.navigate('HomeApp')}/>
              </View>
            </View>

      </View>
      </SafeAreaView>
    );
  }
}
