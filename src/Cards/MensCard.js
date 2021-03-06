import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, TouchableOpacity, StatusBar } from 'react-native';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {Card, Icon } from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';
import getDirections from 'react-native-google-maps-directions';
import Communications from 'react-native-communications';
import { getDistance, getPreciseDistance } from 'geolib';

class MensCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
      dis: ' '
    };
  }
  makeCall(phone) {
    console.log(phone);
    Communications.phonecall(phone, true);

  }
  makeText(phone, firstName) {
    let bodyMessage = `Hi ${firstName},`;
    Communications.textWithoutEncoding(phone, body = bodyMessage);
  }
  makeEmail(email) {
    console.log(email);
    Communications.email([email], null, null, null, null)

  }
  handleGetDirections(latitude, longitude) {
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
    getDirections(data);
    console.log("In get Directions");
  }
  componentDidMount() {
    this.calculate();
  }
  calculate = () => {
    console.log("hello");
    latitude = this.props.latitude;
    longitude = this.props.longitude;
    contactName = this.props.contactName;
    contactPhone = this.props.contactPhone;
    contactEmail = this.props.contactEmail;
    currentLatitude = this.props.currentLatitude;
    currentLongitude = this.props.currentLongitude;
    groupLatitude= this.props.groupLatitude;
    groupLongitude= this.props.groupLongitude;
    if(currentLatitude !== null && currentLongitude !== null) {
      let dis = getDistance(
        {latitude: currentLatitude, longitude: currentLongitude},
        {latitude: groupLatitude, longitude: groupLongitude},
      );
      console.log('dis::', dis);
      dis = (dis/1609.34).toFixed(2);
      dis = dis + ' miles';
      this.setState({
        dis: dis
      })
    }


  }
  render() {
    StatusBar.setHidden(true, 'none');
    // console.log("PROPS: ", this.props);
    title= this.props.title;
    frequency= this.props.frequency;
    night= this.props.night;
    meetingTime= this.props.meetingTime;
    latitude = this.props.latitude;
    longitude = this.props.longitude;
    contactName = this.props.contactName;
    contactPhone = this.props.contactPhone;
    contactEmail = this.props.contactEmail;
    currentLatitude = this.props.currentLatitude;
    currentLongitude = this.props.currentLongitude;
    groupLatitude= this.props.groupLatitude;
    groupLongitude= this.props.groupLongitude;
    console.log('currentLatitude: ', currentLatitude);
    console.log('currentLatitude: ', currentLongitude);
    console.log('this.state.dis: ', this.state.dis);
    return(
      <View style= {{ flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', marginRight: 10}}>
      <View style={{
      flex: 1,
      flexDirection: 'row',
      height: 120,
      backgroundColor: 'white',
       }}>
      <View style={{width: '33.1%',
      borderBottomWidth: .2,
      borderColor: 'black',height: 120, backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'column'}}>
          <UserAvatar style={{alignSelf:'center', borderRadius: 0}} size={122} name={night}  imageStyle={{borderRadius: 0}}/>
      </View>
      <View style={{width: '66.9%', borderBottomWidth: .2, borderColor: 'black',height: 120,flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'space-around',backgroundColor: 'white' }}>
          <Text style={{color:'#3a3d42', fontFamily: 'sans-serif', fontWeight: 'bold', letterSpacing: 2,  textAlign: 'center', fontSize: 12}}> {title} </Text>
          <Text style={{color:'black', fontFamily: 'sans-serif', letterSpacing: 1, textAlign: 'center', fontSize: 13}}> {meetingTime} </Text>
          <Text style={{color:'black', fontFamily: 'sans-serif', letterSpacing: 2, fontSize: 13}}> {frequency} - {night} </Text>
          <Text style={{color:'black', fontFamilly: 'sans-serif', letterSpacing: 1, textAlign: 'center', fontSize: 13}}> Contact: {contactName} </Text>
      </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: "center", backgroundColor: "white", height: 35, alignItems: 'center'}}>
      <TouchableOpacity style={{flex: 2, height: '100%',alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', opacity: .7}} disabled>
            <Text style={{fontWeight: 'bold'}}> {this.state.dis} </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, height: '100%', justifyContent: 'center', opacity: .7}} onPress={() => this.makeEmail(this.props.contactEmail, this.props.contactName)}>
         <Icon name="email" size={25} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={{flex: 1, height: '100%', justifyContent: 'center', backgroundColor: 'white', opacity: .7}} onPress={() => this.makeText(this.props.contactPhone, this.props.contactName)}>
          <Icon name="message" size={25} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={{flex: 1, height: '100%', justifyContent: 'center', backgroundColor: 'white', opacity: .6}} onPress={() => this.makeCall(this.props.contactPhone)}>
            <Icon name="phone" size={25} color="blue"  />
      </TouchableOpacity>
    </View>
      </View>
    );
  }
}
export default MensCard;
