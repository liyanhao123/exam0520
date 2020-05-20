import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
export default class MusicDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
        <Image
          style={{ width: 180, height: 180, marginTop: 20 }}
          source={{ uri: this.props.route.params.item.img }}
        />
        <Text>歌曲名称：{this.props.route.params.item.name}</Text>
        <Text style={{ marginTop: 10 }}>
          歌手：{this.props.route.params.item.singer}
        </Text>
      </View>
    );
  }
}
