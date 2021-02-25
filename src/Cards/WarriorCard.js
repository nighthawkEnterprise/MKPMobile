import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, TouchableOpacity, Linking, Platform} from 'react-native';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Card, Icon } from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';
import call from 'react-native-phone-call';
import Communications from 'react-native-communications';
// import Icon from 'react-native-vector-icons/FontAwesome';

class WarriorCard extends Component {
  makeCall(phone) {
    console.log(phone);
    // const args = {
    //   number: phone,
    //   prompt: true,
    // }
    // call(args).catch(console.error);
    Communications.phonecall(phone, true);
  }
  makeText(phone, firstName) {
    console.log(phone + ' IN text');
    console.log(firstName);
    let bodyMessage = `Hi ${firstName},`;
    Communications.textWithoutEncoding(phoneNumber = phone, body = bodyMessage);
  }
  makeEmail(email) {
    console.log(email);
    Communications.email([email], null, null, null, null)

  }
  render() {
    fname= this.props.fname;
    lname= this.props.lname;
    city= this.props.city;
    phone= this.props.phone;
    fullname = this.props.fname + " " + this.props.lname;
    srcImage = this.props.image;
    sizeRound= 80;
    header = "http://drupal7.mkp.org/sites/default/files/pictures/"
    {srcImage === '' ? sizeRound=120: sizeRound = 120}
    {srcImage === '' ? srcImage= '' : srcImage = srcImage}
    return(
      <View Style = {{flexDirection: 'column',marginLeft: 10,  marginRight: 10}}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            height: 120,
          }}>
            <View style={{borderBottomWidth: .2, borderColor: 'black',width: '33.1%', height: 124, backgroundColor: 'white', justifyContent: 'flex-start', borderColor: '#ACB0AB'}}>
              <UserAvatar style={{borderRadius: 0}} size={125} name={fullname}  src={srcImage} imageStyle={{borderRadius: 0, width: '100%'}}/>
            </View>
            <View style={{borderBottomWidth: .2, borderColor: 'black', width: '67%', height: 120,flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'space-around',backgroundColor: 'white', opacity: 1}}>
                <Text style={{color:'#444644', fontWeight: 'bold', fontFamily: 'sans-serif-condensed', letterSpacing: 2, textAlign: 'left', fontSize: 13}}> {fullname} </Text>
                <Text style={{color:'#444644', fontFamily: 'sans-serif-condensed', letterSpacing: 2,fontSize: 13}}> {city}</Text>
                <Text style={{color:'#444644', fontFamily: 'sans-serif-condensed', letterSpacing: 2, fontSize: 13}}> {phone} </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: "flex-start", backgroundColor: "white", height: 35, alignItems: 'center'}}>
            <TouchableOpacity style={{ flex: 1, height: '100%', justifyContent: 'center', opacity: .7}} onPress={() => this.makeEmail(this.props.email, this.props.fname)}>
               <Icon name="email" size={25} color="#3457d5" />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: '100%', justifyContent: 'center', backgroundColor: 'white', opacity: .7}} onPress={() => this.makeText(this.props.phone, this.props.fname)}>
                <Icon name="message" size={25} color="#3457d5" />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: '100%', justifyContent: 'center', backgroundColor: 'white', opacity: .6}} onPress={() => this.makeCall(this.props.phone)}>
                  <Icon name="phone" size={25} color="#3457d5"  />
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
export default WarriorCard;
