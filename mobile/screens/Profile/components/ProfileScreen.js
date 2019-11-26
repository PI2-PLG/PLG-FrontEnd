import React, { Component } from 'react';
import { logout } from '../../Login/action';
import {
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { Container, View, Text, Content, Card, CardItem, Body, Button } from 'native-base';
import { connect } from 'react-redux';


class ProfileScreen extends Component {

  constructor(props){
    super(props);
    
    this.props = props;

  }

  __logout() {
    const { dispatch } = this.props;
    dispatch(logout());
    this.props.navigation.navigate(screens.LOGIN);
}

  render() {
    const B = (props) => <Text style={{fontWeight: 'bold', color: '#696969'}}>{props.children}</Text>
    const { username, name, email } = this.props;
    return (
    <Container>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <Text style={styles.title}>Perfil</Text>
      <View style={{flex: 1}}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.info}>{email}</Text>
              <Text style={styles.description}><B>Usuário:</B>{username}</Text>
              <Text style={styles.description}><B>Módulos cadastrados:</B> 3</Text>
              <Button style={styles.buttonContainer}
                onPress = {() => this.__logout()}
              >
                <Text>Sair</Text> 
              </Button>
            </View>
        </View>
      </View>
      <FooterBar screen={tabScreens.profile} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#DD6E42",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:60,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#DD6E42",
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#575757',
    textAlign: 'center',
    marginTop: 50,
  },
});

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