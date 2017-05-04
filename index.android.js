import React, { Component } from 'react';
import { AppRegistry, View, ListView , StyleSheet} from 'react-native';
import { Container, Header,Left,Content, Button, Text,Icon , Body, Title, Right , Footer, FooterTab} from 'native-base';
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
        <Container >
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Normas Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                                      
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) =>                        
                      <Row data={data}>                        
                      </Row>
                    }
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                  />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
      );
    }
  }
  

const styles = StyleSheet.create({
    separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#3c3b3b',
  },
});



AppRegistry.registerComponent('awesome', () => awesome);