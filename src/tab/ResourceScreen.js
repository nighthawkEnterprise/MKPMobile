import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';

export class ResourceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    console.log("making the call");
    // axios.get(`http://drupal7.mkp.org/api/mobile-event`)
    // .then(response => {
    //   console.log("Response: ", response.data);
    //   console.log("RESPONSE: ", response.data.event);
    //   // console.log("RESPONSE: ", response.data.eventlisting[0].event.start_date);
    //   // console.log("RESPONSE: ", response.data.eventlisting[0].event.type);
    //   // console.log("RESPONSE: ", response.data.eventlisting[0].event.title);
    //   const events= response.data.event;
    //   this.setState({events: events});
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }
  render() {
    StatusBar.setHidden(true, 'none');
    return (
      <View style={{ flex: 1}}>
      <CustomHeader title="Events" isHome={true} navigation={this.props.navigation}/>
      <SearchBar placeholder="Search Resources..." inputContainerStyle={{backgroundColor: '#F5F5F5', marginTop: 5}} inputStyle={{backgroundColor: '#F5F5F5'}} platform={Platform.OS}/>
      // {this.state.events.length > 0 ?
        // <FlatList
        //   data={this.state.events}
        //   keyExtractor={result => result.event.title}
        //   renderItem={({item}) => {
        //     return ()
        //         <TouchableOpacity style={{marginTop: 20}}
        //           onPress={() => this.props.navigation.navigate('EventScreenDetail', {id: item.event.id})}>
        //           <EventCard
        //             title={item.event.title}
        //             start={item.event.start_date}
        //             area={item.event.area}
        //             type={item.event.type}/>
        //         </TouchableOpacity>
        //     )
          // }} />
          // :
          // <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>}
      </View>
    );
  }
}
