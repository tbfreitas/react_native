import React, { Component } from 'react';
import {  View  ,StyleSheet, Text} from 'react-native';
import { Container, Header,Left,Content, Button, Icon , Body, Title, Right , Footer, FooterTab, Badge, H1, List, ListItem ,Separator} from 'native-base';


export default class ChatScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.nome  = this.props.navigation.state.params.name;
  }

  static navigationOptions = {
    header : null
  };

  render() {

    const { navigate } = this.props.navigation;
    const customData  = setMock(this.nome); 
      
    return (
       <Container >
          <Header>
              <Left>
                <Button transparent onPress={() => navigate('Home')}>
                   <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                  <Title>{customData.name}</Title>
              </Body>
              <Right />
          </Header>
          <Content>

              <List>
                    <Separator bordered>
                        <Text>Artigo</Text>
                    </Separator>             
                    <ListItem >
                        <Text style={styles.artigo}>{customData.artigo}</Text>
                    </ListItem>

                     <Separator bordered>
                        <Text>Paragrafo</Text>
                    </Separator> 
            
                      <ListItem >
                        <Text style={styles.paragrafo}>{customData.paragrafo}</Text>
                    </ListItem>

                    <Separator bordered>
                        <Text>Incisos</Text>
                    </Separator> 

                    <ListItem>
                        <Text style={styles.paragrafo}>{customData.inciso}</Text>
                    </ListItem>
              </List>
          </Content>                     
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    artigo :{
      fontSize : 18,
      padding : 8,
      letterSpacing : 0.1,
      color : '#3c3b3b'
      
   },
   inciso: {
     
   },
   paragrafo :{
      fontSize : 16,
      padding : 10,
      marginLeft : 10,
      letterSpacing : 0.1,
      color : '#3c3b3b'
   }
  });

function setMock(name){

  switch(name){
    case 'Norma institucional 1':
      return require('../Mock/norma1.json');
      break;
    case 'Norma institucional 2':
      return require('../Mock/norma2.json');
      break;
    case 'Norma institucional 3':
      return require('../Mock/norma3.json');
      break;
    case 'Norma institucional 4':
      return require('../Mock/norma4.json');
      break;
    case 'Norma institucional 5':
      return require('../Mock/norma5.json');
      break;
    case 'Norma institucional 6':
      return require('../Mock/norma6.json');
      break;
    case 'Norma institucional 7':
      return require('../Mock/norma7.json');
      break;
    case 'Norma institucional 8':
      return require('../Mock/norma8.json');
      break;
  }
}

