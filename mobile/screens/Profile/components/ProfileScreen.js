import React from 'react';
import { View, Text, Container, Card, CardItem, Body, Content, Form, Button } from 'native-base';
import { connect } from 'react-redux';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { Image, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import InputField from '../../../shared/components/InputField'


const styles = StyleSheet.create({
    titleNotificatoin: {
      fontSize: 19,
      color: '#575757',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
    },
    border: {
        borderTopColor: 'black',
        borderTopWidth: 30,
    },
    leftContainer:{
        flex:1,
        backgroundColor: '#ca8afa',    
    },
    rightContainer:{
        flex:1,
        backgroundColor: '#96d0e3'
  
    }
  });

class ProfileScreen extends React.Component {
    render() {
      const { username, name, email } = this.props;
      return (
          <View style={{flex: 1}}>
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={50} style={{backgroundColor: '#f1d6ab', alignItems: 'center'}}>
                    <Col>
                        <Image
                            style={{width: 90, height: 90, alignSelf: 'center'}}
                            source={require('./../../../assets/images/user.png')}
                        />
                        <Text style={styles.titleNotificatoin}>Taynara Carvalho</Text>
                    </Col>

                </Row>
                <Row size={50}>
                <Content style={{margin: 10, paddingBottom: 50}}>
                    <Card>
                        <CardItem>
                        <Content>
                        <Form style={{paddingBottom: 25, paddingTop: 20, }}>
                            <InputField

                            />
                            <InputField

                            />
                        </Form>
                        <Button rounded block
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
                    >Cadastre-se
                </Text>
                </Content>
                </Row>
            </Grid>
            <FooterBar screen={tabScreens.profile} />
          </View>
        // <Container style={{ backgroundColor: '#FFF' }}>
        //     <Content padder>
        //     <Card transparent>
        //         <CardItem>
        //         <Body>
        //         <Image
        //             style={{width: 90, height: 90}}
        //             source={require('./../../../assets/images/user.png')}
        //         />
        //         <Text style={styles.titleNotificatoin}>Taynara Carvalho</Text>
        //         </Body>
        //         </CardItem>
        //     </Card>
        //     </Content>
        //   <FooterBar screen={tabScreens.profile} />
        // </Container>
      );
    }
  }
  
  const mapStateToProps = state => {
    const { login } = state;
    const { username, email, name } = login.currentUser;
  
    return {
        isAuthenticated: login.isAuthenticated,
        username: username,
        email: email,
        name: name,
    }
  }
  
  export default connect(mapStateToProps)(ProfileScreen);