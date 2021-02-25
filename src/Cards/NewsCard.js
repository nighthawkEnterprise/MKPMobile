import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, Icon } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import {Divider} from 'react-native-paper';
class NewsCard extends Component {
  render() {
    title = this.props.title;
    imgSrc = this.props.imgSrc;
    body = this.props.body;
    return(
      <View style={{padding: 10, borderRadius: 1}}>
          <Card style={{marginTop: 20, shadowColor: 'black',backgroundColor: '#e8e8e8', shadowOffset:{width: 10, height: 12}, shadowRadius: 2, shadowOpacity: .8, padding: 15, borderColor: '#ACB0AB', borderWidth: .4, borderRadius: 5}}>
            <CardImage
              source={{uri: imgSrc}}
            />
            <CardTitle
              title={title}  style={{fontSize: 10}}
             />
            <CardContent text={body} textStyle={{fontSize: 12}} />

          </Card>
      </View>
    );
  }
}
export default NewsCard;
