import {CustomHeader} from '../index';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as React from 'react';
import {Component} from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
export class NotificationsScreen extends Component {
  render(){
    return (
      <View >
      <CustomHeader style={{marginTop: 20}}/>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title title="Card Title" subtitle="Card Subtitle"/>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>The ManKind Project has a presence in more than 21 nations. The ManKind Project (MKP) is a global brotherhood of nonprofit charitable organizations [501 (c)(3) in the USA] that conducts challenging and highly rewarding programs for men at every stage of life. The ManKind Project currently has 11 regions: Australia, Belgium, Canada, French Speaking Europe, Germany, New Zealand, Nordic (Norway, Denmark, Sweden, Finland), South Africa, Switzerland, the United Kingdom & Ireland, and the United States. There are also a number of developing regions: Costa Rica, Mexico, Netherlands, China, India, and the Central Africa (DRC, Cameroon).
          </Paragraph>
        </Card.Content>
      </Card>
      </View>
    );
  }


}
