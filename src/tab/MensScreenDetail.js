import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index';
export class MensScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Mens Groups" navigation={this.props.navigation}/>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is a Men's Group Detail</Text>
      </View>
      </SafeAreaView>
    );
  }
}
