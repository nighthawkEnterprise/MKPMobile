import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, Icon } from 'react-native';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Card } from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';

class EventCard extends Component {
  render() {

    title= this.props.title;
    start= this.props.start;
    area= this.props.area;
    type= this.props.type;
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f8dc94',
      }}>
        <View style={{width: '40%', height: 100, backgroundColor: '#f8dc94', justifyContent: 'center'}}>
          <UserAvatar style={{alignSelf:'center', width: 130}} size={60} name={title}  />
        </View>
        <View style={{width: '60%', height: 100,flexDirection: 'column', alignItems: 'center',justifyContent: 'space-around',backgroundColor: '#5573AA'}}>
            <Text style={{color:'white', letterSpacing: 2,  textAlign: 'center', fontSize: 11, fontWeight: 'bold'}}> {title} </Text>
            <Text style={{color:'white', letterSpacing: 1, textAlign: 'center', fontSize: 11}}> {area} </Text>
            <Text style={{color:'white', letterSpacing: 2,  textAlign: 'center', fontSize: 11}}> {type} </Text>
            <Text style={{color:'white', fontWeight: 'bold', letterSpacing: 2, fontSize: 10, textAlign: 'center'}}> {start} </Text>
        </View>
      </View>
    );
  }
}
export default EventCard;
