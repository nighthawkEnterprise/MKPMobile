import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index';
export class EventScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Events Detail" navigation={this.props.navigation}/>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Events Screen Detail</Text>

      </View>
      </SafeAreaView>
    );
  }
}
