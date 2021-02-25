import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, ScrollView,ActivityIndicator, StatusBar} from 'react-native';
import {CustomHeader} from '../index';
import CardComponent from '../Cards/NewsCard';
import axios from 'axios';
import AwesomeLoading from 'react-native-awesome-loading';
import { getDistance, getPreciseDistance } from 'geolib';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    StatusBar.setHidden(true, 'none');
    axios.get(`http://drupal7.mkp.org/api/news`)
    .then(response => {
      const news= response.data.news;
      this.setState({news: news});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {

    return (
      <View style={{ flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
        {this.state.news.length > 0 ?
          <FlatList
            data={this.state.news}
            keyExtractor={result => result.article.id}
            renderItem={({item}) => {
              return (
                   <CardComponent style={{flex: 1}} title={item.article.title} body={item.article.body} imgSrc={item.article.image.src}/>
              )
            }} />
            :
        <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>}

      </View>
    );
  }
}
