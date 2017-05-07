import React, { Component } from 'react';
import {  View , Text} from 'react-native';

export default class ChatScreen extends React.Component {
  
  static navigationOptions = {
    header : null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View >
        <Text onPress={() => navigate('Home')}>Chat with Lucy</Text>
      </View>
    );
  }
}