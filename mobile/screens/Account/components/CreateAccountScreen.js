import React from 'react';
import { View, Text, Container, Header, Left, Button, Icon, Body, Title, Form, Item, Content, Input, Card, CardItem } from 'native-base';
import { usernameValidator, passwordValidator, nameValidator, emailValidator} from '../validations'
import InputField from '../../../shared/components/InputField'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Alert, BackHandler } from 'react-native';


const PUSH_ENDPOINT = 'http://192.168.15.6:8000/new-user/';


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
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

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
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
      this.props.navigation.navigate(screens.LOGIN);
      return true;
  }

  handleBackButton(){
    this.props.navigation.popToTop();
    return true;
  }

  async registerForPushNotificationsAsync(name, password, username, email) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
  
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }
  
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    const { navigate } = this.props.navigation;
  
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: {
          notification_token: token,
        },
        user: {
          username: username,
          password: password,
          email: email,
          name: name,
        },
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.response == 'user_successfully_created'){
        Alert.alert(
          'Cadastro feito com sucesso!',
          'Agora é só fazer o login.',
          [
            {text: 'OK', onPress: () => navigate(screens.LOGIN)},
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'O usuário já existe!',
          'Escolha outro usuário e tente novamente',
          [
            {text: 'OK'},
          ],
          {cancelable: false},
        );
      }
    });
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
              <InputField
                    value={this.state.name}
                    onChangeFunction={(value) => this.__changeNameInput(value)}
                    error={this.state.nameError}
                    iconName='account-card-details'
                    iconType='MaterialCommunityIcons'
                    placeholder='Nome Completo'
                    secure={false}
              />
              <InputField
                    value={this.state.email}
                    onChangeFunction={(value) => this.__changeEmailInput(value)}
                    error={this.state.emailError}
                    placeholder='Email'
                    iconName='email'
                    iconType='MaterialCommunityIcons'
                    secure={false}
              />
              <InputField
                value={this.state.username}
                onChangeFunction={(value) => this.__changeUsernameInput(value)}
                error={this.state.usernameError}
                placeholder='Usuário'
                iconName='account'
                iconType='MaterialCommunityIcons'
                secure={false}
              />

              <InputField
                value={this.state.password}
                onChangeFunction={(value) => this.__changePasswordInput(value)}
                error={this.state.passwordError}
                placeholder='Senha'
                iconName='eye-off'
                iconType='MaterialCommunityIcons'
                secure={true}
              />
          </Form>
          <Button rounded block style={btnStyle}
            onPress={() => this.registerForPushNotificationsAsync(this.state.name, this.state.password, this.state.username, this.state.email)}
          >
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