import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import {CustomHeader} from '../index';
import UserAvatar from 'react-native-user-avatar';
import call from 'react-native-phone-call';
import axios from 'axios';
export class WarriorScreenDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warrior: []
    }
  }
  componentDidMount() {
    const id = this.props.route.params.id;
    console.log("making the call");
    axios.get(`http://drupal7.mkp.org/api/mobile-warrior/${id}`)
    .then(response => {
      const selectedWarrior = response.data.warriorlisting[0].warrior;
      
      this.setState({warrior: selectedWarrior});
    })
    .catch(err => {
      console.log(err);
    })
  }
  makeCall(phone) {
    console.log(phone);
    const args = {
      number: phone,
      prompt: true,
    }
    call(args).catch(console.error);
  }
  render() {
    const name = this.state.warrior.firstname + ' ' + this.state.warrior.lastname;
    console.log("Hello", this.state.warrior.length);
    console.log("Name: ", name);
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Warrior" navigation={this.props.navigation}/>
      {typeof this.state.warrior.firstname !== "undefined" ?
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', flexDirection:"column"}}>
          <View style={{flex: 1, width: '100%', justifyContent: 'center', padding: 20}}>
            <UserAvatar style={{alignSelf:'center', width: 200}} size={200} name={name} />
          </View>
          <View style={{width: '100%', flex: 2, justifyContent: 'center', alignItems:'center', backgroundColor: '#f8dc94'}} >
            <View style={{flex: 1, justifyContent: 'center',alignItems:'center', width:'80%',  backgroundColor: '#1f3a6d'}}>
              <Text style={{margin: 20, letterSpacing: 2, fontSize: 20, color: 'white', fontWeight: "bold"}}>{name}</Text>
              <Text style={{margin: 20, fontSize: 20, color: 'white'}}> {this.state.warrior.email} </Text>
              <Text style={{margin: 20, fontSize: 20, color: 'white'}} onPress={() => this.makeCall(this.state.warrior.phone)}> {this.state.warrior.phone} </Text>
              <Text style={{margin: 20, fontSize: 20, color: 'white'}}> {this.state.warrior.address}.{this.state.warrior.city}, {this.state.warrior.state}</Text>
            </View>
          </View>
        </View>
        :
        <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>
      }
      </SafeAreaView>
    );
  }
}
