import React, {Component} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, ScrollView,ActivityIndicator } from 'react-native';
import {CustomHeader} from '../index';
import CardComponent from '../Cards/NewsCard';
import axios from 'axios';
import AwesomeLoading from 'react-native-awesome-loading';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    console.log("making the call");
    axios.get(`http://drupal7.mkp.org/api/news`)
    .then(response => {
      const news= response.data.news;
      console.log(news[0].article);
      console.log(news[0].article.body);
      console.log(news[0].article.Image.src);
      // console.log(news[0].node.title);

      this.setState({news: news});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30}}>
      <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
        {this.state.news.length > 0 ?
          <FlatList
            data={this.state.news}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('HomeDetail')}}>
                   <CardComponent style={{flex: 1}} title={item.article.title} body={item.article.body} imgSrc={item.article.Image.src}/>
                </TouchableOpacity>

              )
            }} />
            :
        <ActivityIndicator size="large"  color="red" style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>}

      </View>
    );
  }
}
