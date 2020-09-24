import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export class CustomDrawerContent  extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{height: 100, alignItems: 'center', justifyContent:'center'}}>
          <Image source={require('./images/user.png')} style={{height:80, width:80, borderRadius: 60}} />
        </View>
        <ScrollView style={{marginRight: 5, textAlign: 'center'}}>
          <TouchableOpacity style={{marginTop: 40}} onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={{textAlign: 'center'}}>Menu </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('NotificationsScreen')}>
            <Text style={{textAlign: 'center'}}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20, marginLeft: 5}} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{textAlign: 'center'}}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
