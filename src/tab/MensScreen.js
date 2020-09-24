import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';
import MensCard from '../Cards/MensCard'
export class MensScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    console.log("making the call");
    axios.get(`http://drupal7.mkp.org/api/mobile-igroup`)
    .then(response => {
      // console.log("RESPONSE: ", response);
      const events= response.data.nodes;
      console.log(events[2]);
      console.log(events[1].node.Title);
      console.log(events[1].node.["Field frequency value"]);
      console.log(events[1].node.["Field night value"]);
      console.log(events[1].node.["Field meeting time value"]);

      console.log(events[0].node.Title);

      this.setState({events: events});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="I-Groups" isHome={true} navigation={this.props.navigation}/>
      <SearchBar placeholder="Search I-Groups..." inputContainerStyle={{backgroundColor: '#F5F5F5', marginTop: 5}} inputStyle={{backgroundColor: '#F5F5F5'}} platform={Platform.OS}/>
      {this.state.events.length > 0 ?
        <FlatList
          data={this.state.events}
          keyExtractor={result => result.node.["NID"]}
          renderItem={({item}) => {
            return (
                <TouchableOpacity style={{marginTop: 20}}
                  onPress={() => this.props.navigation.navigate('MensScreenDetail')}>
                  <MensCard
                    title={item.node.Title}
                    frequency={item.node.["Field frequency value"]}
                    night={item.node.["Field night value"]}
                    meetingTime={item.node.["Field meeting time value"]}/>
                </TouchableOpacity>
            )
          }} />
          :
          <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>}
      </View>
    );
  }
}
