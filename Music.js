import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default class FlatDemo extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://www.cjlly.com:3041/record';
    this.max = 10;
    this.state = { data: [], albums: [] };
  }

  componentDidMount () {
    fetch(this.url, { method: 'GET' })
      .then(resp => resp.json())
      .then(albums => {
        this.setState({ albums: albums });
      });
  }

  _del = id => {
    let data = this.state.albums.splice(0);
    let index = data.findIndex(album => album.id === id);
    data.splice(index, 1);
    this.setState({ albums: data });
  };

  _goItem = item => {
    let params = { item: item };
    this.props.navigation.navigate('详情', params);
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{ color: '#000', fontSize: 20 }}>{item.id}</Text>

        <TouchableOpacity onPress={() => this._goItem(item)}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.img }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._goItem(item)}>
          <Text style={{ width: 120, height: 80, lineHeight: 80, fontSize: 16 }}>
            {item.name}
          </Text>
        </TouchableOpacity>

        <Button onPress={() => this._del(item.id)} title="删除" />
      </View>
    );
  };
  _ItemSeparatorComponent = () => {
    return <View style={{ height: 1, backgroundColor: 'gray' }} />;
  };

  _refresh = () => {
    let d = Math.floor(Math.random() * 100 + 80);
    let data = this.state.data.splice(0);
    data.unshift(d);
    this.setState({ data: data });
  };
  _reachEnd = () => {
    let data = this.state.data.splice(0);
    data.push(++this.max);
    this.setState({ data: data });
  };

  render () {
    return (
      <View>
        <FlatList
          ListEmptyComponent={<Text>没有需要的音乐数据</Text>}
          keyExtractor={({ item, index }) => index}
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          data={this.state.albums}
          renderItem={this._renderItem}
          refreshing={false}
          onRefresh={this._refresh}
          onEndReached={this._reachEnd}
          onEndReachedThreshold={0.2}
        />
      </View>
    );
  }
}
