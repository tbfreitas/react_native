import React, { Component } from 'react';
import { AppRegistry, View, ListView } from 'react-native';
import { Container, Header,Left,Content, Button, Text,Icon , Body, Title, Right} from 'native-base';
import Row from './Component/row';
import Normativas from './Mock/normativas.json';

class awesome extends Component {

  constructor(props){

    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var customData = require('./Mock/normativas.json');


    this.state = {
      dataSource: ds.cloneWithRows(customData)
    };

  }  

 render() {
     return (
        <View>

          <Header>
              <Left/>
              <Body>
                  <Title>Normas</Title>
              </Body>
              <Right />
          </Header>
          
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => 
              <View>
                  <Text>{data.name}</Text>
                  <Text>{data.descr}</Text>
              </View>
            }
          />
        </View>
      );
    }
  }

AppRegistry.registerComponent('awesome', () => awesome);