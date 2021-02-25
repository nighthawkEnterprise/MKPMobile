import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,StatusBar, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';
import WarriorCard from '../Cards/WarriorCard';
import SendSMS from 'react-native-sms';
import DelayInput from "react-native-debounce-input";
import {Permissions, Contacts } from 'expo';

export class WarriorScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        warriors: [],
        search: '',
        loading: true,
        noResults: false,
      };
      this.updateSearch = this.updateSearch.bind(this);
      this.callWarriors = this.callWarriors.bind(this);
    }
    callWarriors(search) {
      let finalSearch ='';
      for(var i =0 ; i < search.length; i++) {
        if(search[i] == ' ') {
          finalSearch += '+';
        } else {
          finalSearch += search[i]
        }
      }

      axios.get(`http://drupal7.mkp.org/api/mobile-warrior?combine=${finalSearch}`)
      .then(response => {
        const warriors= response.data.warrior;
        console.log('warriors: ', warriors.length);
        if(warriors.length > 0) {
          this.setState({warriors: warriors, loading: false, noResults: false});
        } else {
          this.setState({noResults: true, loading: false, warriors: warriors});
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    updateSearch(search) {
      this.setState({search: search, loading: true, noResults: false});
    }

    componentDidMount() {
      this.callWarriors(this.state.search);
    }
    componentDidUpdate() {
      if(this.state.loading === true) {
        this.callWarriors(this.state.search);
      }
    }
    render() {
      // <DelayInput placeholder="Search Warrior Brother..." inputContainerStyle={{backgroundColor: '#F5F5F5', marginTop: 5}} inputStyle={{backgroundColor: '#F5F5F5'}} platform={Platform.OS} onChangeText={this.updateSearchDelayed} value={this.state.search}/>
      StatusBar.setHidden(true, 'none');
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Warrior" isHome={true} navigation={this.props.navigation}/>
        <View style={{backgroundColor: 'white', padding: 5}}>
        <DelayInput placeholder="Search Warrior Brother..."  onChangeText={this.updateSearch} delayedTimeout={500} style={{height: 50, fontSize: 18,  backgroundColor: '#F5F5F5'}} minLength={3} value={this.state.search}/>
        </View>
        {!this.state.loading && this.state.warriors.length > 0 ?
          <FlatList
            data={this.state.warriors}
            keyExtractor={result => result.warrior.id}
            renderItem={({item}) => {
              return (
                  // <TouchableOpacity style={{marginTop: 20}}
                  //   onPress={() => this.props.navigation.navigate('WarriorScreenDetail', {id: item.warrior.id})}>
                  <View style={{marginTop: 20, marginLeft: 5, marginRight: 5}}>
                    <WarriorCard
                      fname={item.warrior.firstname}
                      lname={item.warrior.lastname}
                      city={item.warrior.city}
                      phone={item.warrior.phone}
                      email={item.warrior.email}
                      image={item.warrior.image}/>
                    </View>
                  // </TouchableOpacity>
              )
            }} />
            :
            (
              !this.state.noResults ?
                <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>
                :
                <Text> No Results Found </Text>

            )
      }


        </View>
      );
    }
}
