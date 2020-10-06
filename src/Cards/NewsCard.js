import React, {Component} from 'react';
import { Text, View, SafeAreaView, Button, Icon } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
class NewsCard extends Component {
  render() {
    title = this.props.title;
    imgSrc = this.props.imgSrc;
    body = this.props.body;
    return(
      <View style={{padding: 10}}>
          <Card style={{marginTop: 20,padding: 15, shadowColor: 'black', shadowOffset:{width: 10, height: 12}, shadowRadius: 2, shadowOpacity: .8, padding: 15}}>
            <CardImage
              source={{uri: imgSrc}}
              title={title}
            />
            <CardTitle
              title={title}
              subtitle={body}
             />
            <CardContent text={body} />

          </Card>
      </View>
    );
  }
}
export default NewsCard;
