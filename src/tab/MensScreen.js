import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';
import MensCard from '../Cards/MensCard'
import DelayInput from "react-native-debounce-input";
import { computeDestinationPoint } from 'geolib';

export class MensScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      loading: true,
      search: '',
      noResults: false,
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.searchGroups = this.searchGroups.bind(this);
  }
  componentDidMount() {
    this.searchGroups();
  }
  componentDidUpdate() {
     if(this.state.loading && !this.state.noResults) {
        this.searchGroups();
      }
  }
  updateSearch(search) {
    this.setState({search: search, loading: true, noResults: false})
  }
  searchGroups() {
    console.log('In search: ');
      axios.get(`http://drupal7.mkp.org/api/mobile-igroup2?combine=${this.state.search}`)
      .then(res => {
        console.log("SOMETHING: ", res.data.igroups);
        console.log(res.data.igroups.length)
        if(res.data.igroups.length != 0 ) {
          this.setState({
            loading: false,
            groups: res.data.igroups,

          })
        } else {
          this.setState({
            noResults: true,
            groups: res.data.igroups,
          })
        }
      })
  }



  render() {
    StatusBar.setHidden(true, 'none');
    return (
      <View style={{ flex: 1}}>
      <CustomHeader title="I-Groups" isHome={true} navigation={this.props.navigation}/>
      <View style={{backgroundColor: 'white', padding: 5}}>
        <DelayInput autoCorrect={false} autoCapitalize="none" placeholder="Search I-Groups..."  delayedTimeout={500} style={{height: 50, fontSize: 18,  backgroundColor: '#F5F5F5'}} onChangeText={this.updateSearch} minLength={3} value={this.state.search}/>
      </View>

      {!this.state.loading && this.state.groups.length > 0  ?
        <FlatList
          data={this.state.groups}
          keyExtractor={result => result.igroup.id}
          renderItem={({item}) => {
            return (
                <View style={{marginTop: 20}}>
                  <MensCard
                    title={item.igroup.title}
                    night={item.igroup.dow}
                    frequency={item.igroup.frequency}
                    contactName={item.igroup.contact_fname}
                    contactEmail={item.igroup.contact_email}
                    contactPhone={item.igroup.contact_phone}
                    meetingTime={item.igroup.time}
                    />
                </View>
            )
          }} />
          :
          (
            !this.state.noResults ?
            <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/> :
              <View>
                <Text> No Results Found... </Text>
              </View>
          )
      }

      </View>
    );
  }
}
