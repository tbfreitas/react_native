import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import   AppContainer   from './Component/AppContainer';

class awesome extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      // <View></View>
      <AppContainer></AppContainer>
    );
  }
}

AppRegistry.registerComponent('awesome', () => awesome);