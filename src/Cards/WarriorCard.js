import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, Icon } from 'react-native';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Card } from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';

class WarriorCard extends Component {
  render() {
    fname= this.props.fname;
    lname= this.props.lname;
    city= this.props.city;
    phone= this.props.phone;
    fullname = this.props.fname + " " + this.props.lname;
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 81,
        marginLeft: 10,
        marginRight: 10,
      }}>
        <View style={{width: '40%', height: 80, backgroundColor: '#f8dc94', justifyContent: 'center'}}>
          <UserAvatar style={{alignSelf:'center'}}size={80} name={fullname} />
        </View>
        <View style={{width: '60%', height: 80,flexDirection: 'column', alignItems: 'center',justifyContent: 'space-around',backgroundColor: '#5573AA'}}>
            <Text style={{color:'white', fontWeight: 'bold', letterSpacing: 2,  textAlign: 'center'}}> {fullname} </Text>
            <Text style={{color:'white', letterSpacing: 1}}> {city}</Text>
            <Text style={{color:'white', letterSpacing: 1}}> {phone} </Text>
        </View>
      </View>
    );
  }
}
export default WarriorCard;
