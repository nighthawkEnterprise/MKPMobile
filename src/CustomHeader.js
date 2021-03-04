import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export class CustomHeader extends Component {
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
    let {navigation, isHome, title} = this.props;
    return(
      <View style={{flexDirection: 'row', height: 50, backgroundColor: '#224077', justifyContent: 'center'}}>
       {
         this.props.isHome ?
         <View style={{flex: 1,  color:'white'}}>
         </View>
         :
         <View style={{flex: 1}}>
            <TouchableOpacity  style={{flexDirection: 'row'}} onPress={() => navigation.goBack()}>
              <Image style={{width: 25, height: 25, marginLeft: 5 }} source={require('./images/arrow.png')} resizeMode="contain" />
            </TouchableOpacity>
         </View>

       }
        <Modal visible={this.state.modal} animationType="slide" backdropOpacity={0.3} transparent>
          <View style={{height: "100%", justifyContent: 'center', alignItems: 'center', }}>
            <View style={{backgroundColor: 'white', width: '60%', height: '15%', opacity: .9, borderRadius: 10, padding: 5, display: 'flex', flexDirection: 'column', borderWidth: 1}}>
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
        <View style={{flex: 1.5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center',  color:'white', letterSpacing: 3,fontSize: 15}}> {title} </Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => this.logOut()}>
            <Icon name='sign-out' color="#dfdfe5" style={{width:20, height: 20, alignSelf: 'flex-end', marginTop: 15, marginRight: 15, backgroundColor: 'transparent'}} resizeMode="contain" size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
