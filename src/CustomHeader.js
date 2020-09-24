import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class CustomHeader extends Component {
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
            <TouchableOpacity  style={{flexDirection: 'row', marginTop: 10}} onPress={() => navigation.goBack()}>
              <Image style={{width: 25, height: 25, marginLeft: 5,  }} source={require('./images/arrow.png')} resizeMode="contain" />
            </TouchableOpacity>
         </View>

       }

        <View style={{flex: 1.5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center',  color:'white', letterSpacing: 3,fontSize: 15}}> {title} </Text>
        </View>
        <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={{width: 30, height: 30,  alignSelf: 'flex-end', marginRight: 15, marginTop: 10,}}
                  source={require('./images/menu.png')}
                  resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
