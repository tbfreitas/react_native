
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';


export default class AppContainer extends React.Component {
    render(){
        return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?
        <View style={{flex: 1}}>
            <Header></Header>
            <Button transparent block>
                <Icon name='menu' />
            </Button>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
      

        
    
        );
    }
}
