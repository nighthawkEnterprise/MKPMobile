import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index';
export class EventScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Events Screen" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Events Screen!</Text>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('EventScreenDetail')}>
          <Text> This is  the Events Screen Card </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}
