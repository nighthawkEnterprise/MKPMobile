import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';
import EventCard from '../Cards/EventCard'
import DelayInput from "react-native-debounce-input";

export class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      search: '',
      loading: true,
      noResults: false,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.callEvents = this.callEvents.bind(this);
  }
  updateSearch(search) {
    this.setState({search: search, loading: true, noResults: false});
  }
  componentDidUpdate() {
    if(this.state.loading === true) {
      this.callEvents(this.state.search);
    }
  }
  callEvents() {
    let finalSearch ='';
    let search = this.state.search;
    for(var i =0 ; i < search.length; i++) {
      if(search[i] == ' ') {
        finalSearch += '+';
      } else {
        finalSearch += search[i]
      }
    }
    axios.get(`http://drupal7.mkp.org/api/mobile-event?combine=${finalSearch}`)
    .then(response => {
      const events= response.data.event;
      if(events.length > 0 ) {
        this.setState({events: events, loading: false, noResults: false});
      } else {
        this.setState({events: events, noResults: true, loading: false})
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  componentDidMount() {
    this.callEvents();
  }
  render() {
    StatusBar.setHidden(true, 'none');
    console.log("this.state.loading: ", this.state.loading);
    // <SearchBar placeholder="Search Upcoming Events..." inputContainerStyle={{backgroundColor: '#F5F5F5', marginTop: 5}} inputStyle={{backgroundColor: '#F5F5F5'}} platform={Platform.OS}/>
    return (
      <View style={{ flex: 1}}>
      <CustomHeader title="Events" isHome={true} navigation={this.props.navigation}/>
      <View style={{backgroundColor: 'white', padding: 5}}>
        <DelayInput placeholder="Search Events..."  onChangeText={this.updateSearch} delayedTimeout={500} style={{height: 50, fontSize: 18,  backgroundColor: '#F5F5F5'}} minLength={3} />
      </View>
      {!this.state.loading && this.state.events.length > 0 ?
        <FlatList
          data={this.state.events}
          keyExtractor={result => result.event.title}
          renderItem={({item}) => {
            console.log("Event Image: ", item.event.image);
            return (
                  <EventCard
                    title={item.event.title}
                    start={item.event.start_date}
                    area={item.event.area}
                    type={item.event.type}
                    image={item.event.image}
                    link={item.event["registration-link"]}
                    />
            )
          }} />
          :
          (
            !this.state.noResults ?
              <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>
            :
              (<View>
                <Text> No Results Found </Text>
              </View>)
          )
        }
      </View>
    );
  }
}
