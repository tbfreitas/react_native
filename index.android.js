import React, { Component } from 'react';
import { AppRegistry, View, ListView , StyleSheet} from 'react-native';
import { Container, Header,Left,Content, Button, Text,Icon , Body, Title, Right , Footer, FooterTab, Badge} from 'native-base';
import { StackNavigator } from 'react-navigation';
import Row from './Component/row';
import Normativas from './Mock/normativas.json';
import Pagina from './Pages/paginanorma';  



class Home extends Component {

    static navigationOptions = {
        header : null
    };

  constructor(props){

    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var customData = require('./Mock/normativas.json');
    

    this.state = {
      dataSource: ds.cloneWithRows(customData)
    };
  }    

 render() {
     const { navigate } = this.props.navigation;
     
     return (
        <Container >
                <Header>
                    <Left>
                        <Button transparent  onPress={() => navigate('Pagina')}>
                            <Icon name='arrow-back' />
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

             <Footer >
                      <FooterTab>
                          <Button badge vertical>
                              <Badge><Text>2</Text></Badge>
                              <Icon name="apps" />
                              <Text>Opções</Text>
                          </Button>
                          <Button active badge vertical>
                              <Badge ><Text>51</Text></Badge>
                              <Icon active name="navigate" />
                              <Text>Não lidas</Text>
                          </Button>
                          <Button>
                              <Icon name="person" />
                              <Text>Contatos</Text>
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
    backgroundColor: '#ddd',
  },
});

const awesome = StackNavigator({
  Home: { screen: Home },
  Row : { screen : Row},
  Pagina : {screen : Pagina}
});


AppRegistry.registerComponent('awesome', () => awesome);