import React, { Component } from 'react';
import { logout } from '../../Login/action';
import {
  StyleSheet,
  Image,
  StatusBar,
  BackHandler
} from 'react-native';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { Container, View, Text, Content, Card, CardItem, Body, Button } from 'native-base';
import { connect } from 'react-redux';


class ProfileScreen extends Component {

  constructor(props){
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    
    this.props = props;

    this.state = { isLoading: true }

  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
      this.props.navigation.navigate(screens.HOME);
      return true;
  }

  handleBackButton(){
    this.props.navigation.popToTop();
    return true;
  }

  __logout() {
    const { dispatch } = this.props;
    dispatch(logout());
    this.props.navigation.navigate(screens.LOGIN);
  }

  async componentDidMount(){
    return fetch('http://loboguara.eastus.cloudapp.azure.com:8000/total-modules')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.modules_count,
        }, function(){
        });

      })
      .catch((error) =>{
        console.error(error);
      });

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
          <Image style={styles.avatar} source={require('../../../assets/images/user.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.info}>{email}</Text>
              <Text style={styles.description}><B>Usuário:</B>{username}</Text>
              <Text style={styles.description}><B>Módulos cadastrados:</B> {this.state.dataSource}</Text>
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
    height:150,
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
    marginTop:90,
    marginBottom: 10
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