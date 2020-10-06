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
      groups: [],
    };
  }
  componentDidMount() {
    console.log("making the call");
    axios.get(`http://drupal7.mkp.org/api/mobile-igroup`)
    .then(response => {
      console.log("RESPONSE: ", response);
      const groups= response.data.nodes;
      console.log(groups[2]);
      console.log(groups[1].node.title);
      console.log(groups[1].node.frequency);
      console.log(groups[1].node.dow);
      console.log(groups[1].node.time);

      console.log(groups[0].node.Title);

      this.setState({groups: groups});
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
      {this.state.groups.length > 0 ?
        <FlatList
          data={this.state.groups}
          keyExtractor={result => result.node.id}
          renderItem={({item}) => {
            return (
                <TouchableOpacity style={{marginTop: 20}}
                  onPress={() => this.props.navigation.navigate('MensScreenDetail')}>
                  <MensCard
                    title={item.node.title}
                    frequency={item.node.frequency}
                    night={item.node.dow}
                    meetingTime={item.node.time}/>
                </TouchableOpacity>
            )
          }} />
          :
          <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>}
      </View>
    );
  }
}
