import React from 'react';
import { View, Text, Container, Header, Left, Button, Icon, Body, Title, Form, Item, Content, Input, Card, CardItem } from 'native-base';
import { usernameValidator, passwordValidator, nameValidator, emailValidator} from '../validations'
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
});

class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
        name: '',
        nameError: "",
        email: '',
        emailError: "",
        username: '',
        usernameError: "",
        password: '',
        passwordError: ""
    }
  }
  __changeUsernameInput(username) {
    this.setState(usernameValidator(username));
    this.setState({ username });
  }

  __changePasswordInput(password) {
      this.setState(passwordValidator(password));
      this.setState({ password })
  }
  __changeEmailInput(email) {
    this.setState(emailValidator(email));
    this.setState({ email })
  }
  __changeNameInput(name) {
    this.setState(nameValidator(name));
    this.setState({ name })
  }
  render() {
    const { navigate } = this.props.navigation;

    isDisabled = (
      (this.state.name && !this.state.nameError) && 
      (this.state.email && !this.state.emailError) &&
      (this.state.username && !this.state.usernameError) &&
      (this.state.password && !this.state.passwordError) ? false : true
    );

    btnStyle = !isDisabled ? {backgroundColor: '#DD6E42'} : {backgroundColor: '#E8E8E8'};

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
                    value={this.state.name}
                    onChangeText={(value) => this.__changeNameInput(value)}
                    error={this.state.nameError}    
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
                    value={this.state.email}
                    onChangeText={(value) => this.__changeEmailInput(value)}
                    error={this.state.emailError}      
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
                  value={this.state.username}
                  onChangeText={(value) => this.__changeUsernameInput(value)}    
                  error={this.state.usernameError}  
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
                  value={this.state.password}
                  onChangeText={(value) => this.__changePasswordInput(value)}   
                  error={this.state.passwordError}  
              />
              <Icon 
                  name='eye-off' 
                  type="MaterialCommunityIcons" 
                  style={{color: '#BDBDBD'}} 
              />
              </Item>
          </Form>
          <Button rounded block style={btnStyle}>
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