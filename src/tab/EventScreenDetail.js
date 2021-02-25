import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import {CustomHeader} from '../index';
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';
import {Table, Row, Rows} from 'react-native-table-component';
export class EventScreenDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: []
    }
  }
  componentDidMount() {
    const id = this.props.route.params.id;
    console.log('Params: ', this.props.route.params);
    console.log("making the call");
    axios.get(`http://drupal7.mkp.org/api/mobile-event/${id}`)
    .then(response => {
      const selectedEvent = response.data;
      console.log("SelectedEvent: ", selectedEvent);
      this.setState({event: selectedEvent})
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    let tableHead = ["Head"];
    let tableData = [
      ['Event','2'],
      ['Type','b'],
      ['City','2'],
      ['State','b'],
    ]
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 30}}>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', flexDirection:"column"}}>
            <View style={{flex: 1, width: '100%', justifyContent: 'center', padding: 20}}>
              <UserAvatar style={{alignSelf:'center', width: 200, borderRadius: 0}} size={200} name="NIthin Kumar Moorthy" />
            </View>
            <View style={{backgroundColor: 'blue', width: '100%', flex: 1, justifyContent: 'center'}}>
              <View style={{flex: 1, width: '80%', backgroundColor: 'red', justifyContent: 'center'}}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff', width: '100%'}}>
                  <Row data={tableHead} style={{justifyContent: "center"}} />
                  <Rows data={tableData} />
                </Table>
              </View>
            </View>
          </View>

      </SafeAreaView>
    );
  }
}
