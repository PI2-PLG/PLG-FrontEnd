import React from 'react';
import { Container, Card, Content, Form, Item, Input, CardItem, Button, H1, View, Text, Icon} from 'native-base';
import { Image, StyleSheet, ImageBackground  } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
    render() {
        const { navigate } = this.props.navigation;

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
                                    <Item>
                                    <Input 
                                        placeholder="Usuário" 
                                        placeholderTextColor="#BDBDBD"
                                    />
                                    <Icon 
                                        name='account' 
                                        type="MaterialCommunityIcons" 
                                        style={{color: '#1E3F20'}} 
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
                                        style={{color: '#1E3F20'}} 
                                    />
                                    </Item>
                                </Form>
                                <Button rounded block style={styles.button}>
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

export default LoginScreen;