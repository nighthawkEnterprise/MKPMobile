import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';
import WarriorCard from '../Cards/WarriorCard'
export class WarriorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warriors: [],
    };
  }
  componentDidMount() {
    console.log("making the call");
    axios.get(`http://drupal7.mkp.org/api/mobile-warrior`)
    .then(response => {
      const warriors= response.data.warriorlisting;
      console.log(warriors[0].warrior);
      console.log(warriors[0].warrior.id);
      console.log(warriors[0].warrior.firstname);
      console.log(warriors[1].warrior.email);
      console.log(warriors[1].warrior.phone);
      console.log(warriors[1].warrior.id);

      this.setState({warriors: warriors});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Warrior" isHome={true} navigation={this.props.navigation}/>
      <SearchBar placeholder="Search Warrior Brother..." inputContainerStyle={{backgroundColor: '#F5F5F5', marginTop: 5}} inputStyle={{backgroundColor: '#F5F5F5'}} platform={Platform.OS}/>

      {this.state.warriors.length > 0 ?
        <FlatList
          data={this.state.warriors}
          keyExtractor={result => result.warrior.id}
          renderItem={({item}) => {
            return (
                <TouchableOpacity style={{marginTop: 20}}
                  onPress={() => this.props.navigation.navigate('WarriorScreenDetail')}>
                  <WarriorCard
                    fname={item.warrior.firstname}
                    lname={item.warrior.lastname}
                    city={item.warrior.city}
                    phone={item.warrior.phone}/>
                </TouchableOpacity>
            )
          }} />
          :
          <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>}


      </View>
    );
  }
}
