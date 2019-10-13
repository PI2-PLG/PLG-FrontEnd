import React from 'react';
import { View, Text, Container, Header, Left, Button, Icon, Body, Title, Form, Item, Content, Input, Card, CardItem } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#575757',
    textAlign: 'left',
    marginTop: 10,
    paddingBottom: 15,
    paddingLeft: 20
  },
  button: {
    backgroundColor: '#DD6E42',
  }
});

class CreateAccountScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={{ backgroundColor: '#FFF' }} padder>
        <Header transparent>
          <Left>
              <Button transparent
                onPress={() => navigate(screens.LOGIN)}
              >
                <Icon name='arrow-back' 
                  style={{color: '#DD6E42'}} 
                />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
        </Header>
        <View>
          <Text style={styles.title}>Criar Conta</Text>
        </View>
        <Card transparent>
          <CardItem>
          <Content>
          <Form style={{paddingBottom: 25, paddingTop: 20, }}>
              <Item>
                <Input 
                    placeholder="Nome Completo" 
                    placeholderTextColor="#BDBDBD"
                />
                <Icon 
                    name='account-card-details' 
                    type="MaterialCommunityIcons" 
                    style={{color: '#BDBDBD'}} 
                />
              </Item>
              <Item>
                <Input 
                    placeholder="Email" 
                    placeholderTextColor="#BDBDBD"
                />
                <Icon 
                    name='email' 
                    type="MaterialCommunityIcons" 
                    style={{color: '#BDBDBD'}} 
                />
              </Item>
              <Item>
              <Input 
                  placeholder="Usuário" 
                  placeholderTextColor="#BDBDBD"
              />
              <Icon 
                  name='account' 
                  type="MaterialCommunityIcons" 
                  style={{color: '#BDBDBD'}} 
              />
              </Item>
              <Item last>
              <Input 
                  placeholder="Senha" 
                  placeholderTextColor="#BDBDBD"
                  inputBorderColor="#1C5B2F"   
                  secureTextEntry={true}                          
              />
              <Icon 
                  name='eye-off' 
                  type="MaterialCommunityIcons" 
                  style={{color: '#BDBDBD'}} 
              />
              </Item>
          </Form>
          <Button rounded block style={styles.button}>
              <Text>Cadastrar</Text>
          </Button>
          </Content>

          </CardItem>
      </Card>
      </Container>
    );
  }
}

export default CreateAccountScreen;