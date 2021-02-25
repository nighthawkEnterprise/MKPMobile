import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button, Modal } from 'react-native';
import CustomHeader from './CustomHeader';
export class CustomDrawerContent  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }

  }
  clickNo = () => {
    this.setState({
      modal: false
    })
  }
  clickYes = () => {
    this.setState({
      modal: false
    })
    this.props.navigation.navigate('Login');
  }
  logOut = () => {
    console.log('logout!');
    this.setState({
      modal: true
    })
  }
  render() {
    console.log('PROPS: ', this.props);
    console.log('PROPS: ', this.props.navigation);

    return (
      <SafeAreaView style={{flex:1}}>
      <Modal visible={this.state.modal} animationType="fade" backdropOpacity={0.3} transparent>
          <View style={{height: "100%", justifyContent: 'center', alignItems: 'center', }}>
            <View style={{backgroundColor: '#e8e8e8', width: '60%', height: '15%', opacity: .9, borderRadius: 10, padding: 5, display: 'flex', flexDirection: 'column', borderWidth: 1}}>
              <View style={{ height: '80%', justifyContent: 'center', alignItems: 'center'}}>
                <Text> Are you sure you want to log out? </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{marginLeft: 10}} onPress={() => this.clickNo()}><Text>No</Text></TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10}} onPress={() => this.clickYes()}><Text>Yes</Text></TouchableOpacity>
              </View>
            </View>
          </View>
      </Modal>
        <View style={{height: 100, alignItems: 'center', justifyContent:'center'}}>
          <Image source={require('./images/user.png')} style={{height:80, width:80, borderRadius: 60}} />
        </View>
        <ScrollView style={{marginRight: 5, textAlign: 'center'}}>

          <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('NotificationsScreen')}>
            <Text style={{textAlign: 'center'}}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20, marginLeft: 5}} onPress={() => this.logOut()}>
            <Text style={{textAlign: 'center'}}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
