import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, Icon } from 'react-native';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Card } from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';

class MensCard extends Component {
  render() {

    title= this.props.title;
    frequency= this.props.frequency;
    night= this.props.night;
    meetingTime= this.props.meetingTime;
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 81,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f8dc94',
      }}>
        <View style={{width: '40%', height: 80, backgroundColor: '#f8dc94', justifyContent: 'center'}}>
          <UserAvatar style={{alignSelf:'center', fontSize: 20, width: 90}} size={80} name={title}  />
        </View>
        <View style={{width: '60%', height: 80,flexDirection: 'column', alignItems: 'center',justifyContent: 'space-around',backgroundColor: '#5573AA'}}>
          <Text style={{color:'white', letterSpacing: 2,  textAlign: 'center', fontSize: 11}}> {title} </Text>
            <Text style={{color:'white', fontWeight: 'bold', letterSpacing: 2, fontSize: 12}}> {frequency} - {night} </Text>
            <Text style={{color:'white', letterSpacing: 1, textAlign: 'center', fontSize: 11}}> {meetingTime} </Text>
        </View>
      </View>
    );
  }
}
export default MensCard;
