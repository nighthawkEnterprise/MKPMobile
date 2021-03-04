import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, Image,  Icon, TouchableOpacity } from 'react-native';
import { CardTitle, CardContent, CardAction, CardButton, CardImage,  } from 'react-native-material-cards'
import {Card } from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';

class EventCard extends Component {
  render() {

    title= this.props.title;
    start= this.props.start;
    area= this.props.area;
    type= this.props.type;
    image= this.props.image;
    link = this.props.link;
    if(image === '') {
      image = `http://drupal7.mkp.org/sites/default/files/event_images/2020-NWTA.png`;
    }
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 320,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: '#f8dc94',
        width: '95%',
        justifyContent: 'center',
        borderRadius: 20

      }}>
        <View style={{height: 180}}>
          <Image
          style={{width: '100%', height: 180}}
          source={{uri: image}}
          />
        </View>
        <View style={{ height: 140,padding: 10, width: '100%',flexDirection: 'column', borderWidth:.4, borderColor: '#ACB0AB',alignItems: 'center',justifyContent: 'space-around',backgroundColor: 'white'}}>
            <Text style={{color:'#444644', letterSpacing: 2,  textAlign: 'center', fontSize: 11, fontWeight: 'bold'}}> {title} </Text>
            <Text style={{color:'#444644', letterSpacing: 1, textAlign: 'center', fontSize: 11}}> {area} </Text>
            <Text style={{color:'#444644', letterSpacing: 2,  textAlign: 'center', fontSize: 11}}> {type} </Text>
            <Text style={{color:'#444644', fontWeight: 'bold', letterSpacing: 2, fontSize: 10, textAlign: 'center'}}> {start} </Text>
        </View>


      </View>
    );
  }
}
export default EventCard;
