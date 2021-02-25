import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import {CustomHeader} from '../index';
import getDirections from 'react-native-google-maps-directions';

export class MensScreenDetail extends Component {
  handleGetDirections = () => {
    console.log("IN GET DIRECTIONS");
    const latitude = this.props.route.params.latitude;
    const longitude = this.props.route.params.longitude;
    console.log("HANDLE: ", latitude);
    console.log("HANDLE: ", longitude);

    const data = {
      destination: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
    }
    console.log("DATA.destination:", data.destination);
    getDirections(data);
  }
  render() {
    console.log(this.props.route.params.latitude);
    console.log(this.props.route.params.longitude);

    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Mens Groups" navigation={this.props.navigation}/>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is a Men's Group Detail</Text>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
      </SafeAreaView>
    );
  }
}
