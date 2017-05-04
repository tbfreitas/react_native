import React, { Component } from 'react';
import { AppRegistry, View ,StyleSheet, Text} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';


export default class AppContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(props){
        return (
           
            <View style={styles.row}>
                <Text style={styles.name}>{this.props.data.name}</Text>
                <Text style={styles.descr}>{this.props.data.descr} </Text>
            </View>

        );
    }
    
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'column',
      padding: 12,
      
    },
    name:{
        fontSize : 20,
        color : '#3c3b3b'
    },
    descr:{
         fontSize : 10,
          color : '#3c3b3b'
  
    }
});

