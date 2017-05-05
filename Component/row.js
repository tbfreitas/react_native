import React, { Component } from 'react';
import { AppRegistry, View ,StyleSheet, Text, Image} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';


export default class AppContainer extends React.Component {

    constructor(props){
        super(props);      
    }

    render(props){

        var x = this.props.data.image;
        console.log(x)
        return (
           
            <View style={styles.row}>

                <View style={styles.image}>
                      <Image source={{uri : this.props.data.image }} style={{width: 64, height: 64}}/>
                </View>
              
                <View style={styles.carac}>
                    <Text style={styles.name}>{this.props.data.name}</Text>
                    <Text style={styles.descr}>{this.props.data.descr} </Text>                      
                </View>       
            </View>

        );
    }
    
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      padding: 12,
      
    },
    name:{
        fontSize : 16,
        lineHeight : 24,
        letterSpacing : 0.1,
        color : '#3c3b3b'
    },
    descr:{
         fontSize : 12,
         lineHeight : 20,
         color : '#37474F'
  
    },
    image : {
       width : 64,
       height : 64,

    },
    carac :{
        flex : 2,
        paddingLeft : 10,

    },
  
    
});

