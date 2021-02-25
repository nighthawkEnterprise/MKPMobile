import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator, StatusBar, PermissionsAndroid } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {CustomHeader} from '../index';
import axios from 'axios';
import MensCard from '../Cards/MensCard'
import DelayInput from "react-native-debounce-input";
import { computeDestinationPoint } from 'geolib';

export class MensScreen extends Component {
  constructor(props) {
    super(props);
    // console.log("PROPS.LOCATION:", this.props.location);
    console.log("Navigation: ", this.props.navigation.location);
    this.state = {
      groups: [],
      current_latitude: null,
      current_longitude: null,
      loading: true,
      search: '',
      noResults: false,
      location_permission: false,
    };
    this.getLocation = this.getLocation.bind(this);
    this.setGroupsFromLocation = this.setGroupsFromLocation.bind(this);
    this.setFunction = this.setFunction.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.requestLocationPermission = this.requestLocationPermission.bind(this);
  }
  async componentDidMount() {
    this.requestLocationPermission();
  }
  requestLocationPermission = async () => {
    try {
       const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
         {
           title: "Location Access",
           message:
             "MKP Mobile needs your current location " +
             "so that it can find the closest I-groups near you",
           buttonNeutral: "Ask Me Later",
           buttonNegative: "Cancel",
           buttonPositive: "OK"
         }
       );
       console.log("GRANTED! " , granted);
       console.log("GRANTED! " , PermissionsAndroid.RESULTS.GRANTED);
       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         this.searchGroups();
       } else {
         this.searchGroups();
       }
     } catch (err) {
       console.warn(err);
     }
  }
  componentDidUpdate() {
     if(this.state.loading && !this.state.noResults) {
        console.log('searching groups');
        this.searchGroups();
      }
  }
  async getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setGroupsFromLocation(position);
    });
  }
  setGroupsFromLocation(position) {
    console.log('location: ', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("LATITUDE: ", latitude);
    console.log("Longitude: ", longitude);
    axios.get(`http://drupal7.mkp.org/api/mobile-igroup/${latitude},${longitude}`)
    .then(res => {
      console.log('res.datga: ', res.data);
      this.setFunction(res.data,latitude, longitude);
    })
  }
  setFunction(groups, latitude, longitude) {

    let groupSet = groups.igroups;
    console.log("groupset: ", groupSet.length);
    this.setState({groups: groupSet, current_latitude: latitude, current_longitude: longitude, loading: false})
  }


  updateSearch(search) {
    this.setState({search: search, loading: true, noResults: false})
  }
  searchGroups() {
    console.log("SEARCHING");
    if(this.state.search != '') {
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
    } else {
    axios.get(`http://drupal7.mkp.org/api/mobile-igroup/${this.state.current_latitude},${this.state.current_longitude}`)
      .then(res => {
        this.setState({groups: res.data.igroups, loading: false})
      })
    }
  }



  render() {
    StatusBar.setHidden(true, 'none');
    let latitude= this.state.current_latitude;
    let longitude= this.state.current_longitude;
    console.log('latitude: ', latitude);
    console.log('longitude: ', longitude);
    // console.log("this.state.groups: ", this.state.groups);
    return (
      <SafeAreaView style={{ flex: 1}}>
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
                    currentLatitude={latitude}
                    currentLongitude={longitude}
                    groupLatitude={item.igroup.latitude}
                    groupLongitude={item.igroup.longitude}

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

      </SafeAreaView>
    );
  }
}
