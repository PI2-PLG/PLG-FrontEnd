import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, Content, Form, Item, Input, CardItem, Button, H1, View, Text, Icon} from 'native-base';
import { usernameValidator, passwordValidator} from '../../../screens/Account/validations'
import { login, getCurrentUser } from '../action';
import { Image, StyleSheet, ImageBackground  } from 'react-native';
import InputField from '../../../shared/components/InputField'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Dimensions } from "react-native";

const PUSH_ENDPOINT = 'http://192.168.15.9:8000/login/';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 50,
        borderRadius: 40,
        backgroundColor: 'rgba(3, 33, 37, 0.61)',
        width: 150,
        height: 150,
        opacity: 0.7
    },
    button: {
        backgroundColor: '#DD6E42',
        alignSelf: 'center', 
    }
  });

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    
        this.props = props;
    
        this.state = {
            username: '',
            usernameError: "",
            password: '',
            passwordError: "",
            isLoading: true
        }
    }

    __submit(username, password){
        const { dispatch } = this.props;
        return fetch(PUSH_ENDPOINT, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                  username: username,
                  password: password,
                },
              }),
        } ).then((response) => response.json())
          .then((responseJson) => {
            dispatch(login());
            if(responseJson.response == 'successfully_login'){
                dispatch(getCurrentUser(responseJson));
                this.props.navigation.navigate(screens.HOME);
              }
   
          })
          .catch((error) =>{
            console.error(error);
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
    render() {
        const { navigate } = this.props.navigation;
        

        isDisabled = (
            (this.state.username && !this.state.usernameError) &&
            (this.state.password && !this.state.passwordError) ? false : true
          );
      
          btnStyle = !isDisabled ? {backgroundColor: '#DD6E42'} : {backgroundColor: '#E8E8E8'};

        return (
        <ImageBackground source={require('../../../assets/images/forest.jpg')} style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
            <View style={{backgroundColor: 'rgba(3, 33, 37, 0.61)', flex: 1}}>
                <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Row size={50}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../../assets/images/logo.jpeg')} style={styles.image}/>
                            <H1 style={{fontFamily: 'RubikBlack', 
                                color: '#1E3F20', 
                                backgroundColor: 'white', 
                                marginTop: 10, 
                                marginBottom: 3,
                                borderRadius:5,
                                padding: 5
                            }}>PROJETO</H1>
                            <H1 style={{fontFamily: 'RubikBlack', 
                                color: '#DD6E42', 
                                backgroundColor: 'white', 
                                borderRadius: 5,
                                padding: 5
                            }}>LOBO-GUARÁ</H1>
                        </View>
                    </Row>
                    <Row size={50}>
                        <Content style={{margin: 10, paddingBottom: 50}}>
                            <Card>
                                <CardItem>
                                <Content>
                                <Form style={{paddingBottom: 25, paddingTop: 20, }}>
                                    <InputField
                                            value={this.state.username}
                                            onChangeFunction={(value) => this.__changeUsernameInput(value)}
                                            error={this.state.usernameError}
                                            iconName='account-card-details'
                                            iconType='MaterialCommunityIcons'
                                            placeholder='Usuário'
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
                                    onPress = {() => this.__submit(this.state.username, this.state.password)}
                                >
                                    <Text>Entrar</Text>
                                </Button>
                                <Text
                                    style={{
                                        fontWeight: 'bold', 
                                        color: '#BDBDBD',
                                        fontSize: 14,
                                        textDecorationLine: 'underline',
                                        textAlign: 'center',
                                        marginTop: 10
                                    }}
                                >
                                    Esqueceu sua senha?
                                </Text>
                                </Content>

                                </CardItem>
                            </Card>
                            <Text
                            style={{
                                fontWeight: 'bold', 
                                alignSelf: 'center',
                                color: '#FFF',
                                textDecorationLine: 'underline',
                                opacity: 0.8,
                                marginTop: 30
                            }}
                            onPress={() => navigate(screens.CREATE_ACCOUNT)}
                            >Cadastre-se
                        </Text>
                        </Content>
                    </Row>
                </Grid>
            </View>
        </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    return { 
        username: state.username,
        email: state.email,
        name: state.name 
    }
}

export default connect(mapStateToProps)(LoginScreen);
