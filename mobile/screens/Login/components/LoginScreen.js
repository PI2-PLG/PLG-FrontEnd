import React from 'react';
import { Container, Card, Content, Form, Item, Input, CardItem, Body, H1, View, Text, Right,} from 'native-base';
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
        backgroundColor: 'rgba(3, 33, 37, 0.61)'
    }
  });

class LoginScreen extends React.Component {
    render() {
        return (
        <ImageBackground source={require('../../../assets/images/forest.jpg')} style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}>
            <View style={{backgroundColor: 'rgba(3, 33, 37, 0.61)', flex: 1}}>
                <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Row size={50}>
                        <Image source={require('../../../assets/images/logo.jpeg')} style={styles.image}/>
                    </Row>
                    <Row size={50}>
                        <Content style={{margin: 10, paddingBottom: 50}}>
                            <Card >
                                <CardItem>
                                <Content>
                                <Form>
                                    <Item>
                                    <Input placeholder="Usuário" />
                                    </Item>
                                    <Item last>
                                    <Input placeholder="Senha" />
                                    </Item>
                                </Form>
                                </Content>

                                </CardItem>
                            </Card>
                        </Content>
                    </Row>
                </Grid>
            </View>
        </ImageBackground>
        );
    }
}

export default LoginScreen;