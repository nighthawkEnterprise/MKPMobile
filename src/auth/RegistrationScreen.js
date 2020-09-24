import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index';
export class RegistrationScreen  extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Registration" navigation={this.props.navigation}/>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Please Register</Text>
      </View>
      </SafeAreaView>
    );
  }
}
