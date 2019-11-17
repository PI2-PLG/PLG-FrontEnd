import React from 'react';
import { View, Text, Container, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import NotificationCard from './NotificationCard';
import { StyleSheet, ScrollView, BackHandler, ActivityIndicator } from 'react-native';

const notifications = [
  {
    "type": 'alert',
    "message": 'As condições estão favoráveis à ocorrência de incêndios',
    "temperature": 30,
    "humidity": 56,
    "date": '16/11/2019',
    "hour": "22:56"
  },
  {
    "type": 'off',
    "message": 'Não recebemos informações do módulo 1, ele pode estar desligado.',
    "date": '10/11/2019',
    "hour": "10:56"
  },
  {
    "type": 'alert',
    "message": 'As condições estão favoráveis à ocorrência de incêndios',
    "temperature": 20,
    "humidity": 30,
    "date": '16/11/2019',
    "hour": "22:56"
  }
]

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#575757',
    textAlign: 'left',
    marginTop: 20,
    paddingBottom: 15,
    paddingLeft: 20
  },
});

class NotificationFeed extends React.Component {
  constructor(props){
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state ={ isLoading: true}
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
  
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <Container>
          <View style={{flex: 1, padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator/>
          </View>
          <FooterBar screen={tabScreens.notifications} />
        </Container>
      )
    }

    const notificationList = notifications.map((notification, index) => (

      <NotificationCard 
          key={index} 
          type={notification.type}
          message={notification.message}
          temperature={notification.temperature}
          humidity={notification.humidity}
          date={notification.date}
          hour={notification.hour}
      />
    ));
    return (
      <Container>
      <ScrollView>
        <View style={{ backgroundColor: '#FFF', paddingTop: 25, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View>
            <Text style={styles.title}>Notificações</Text>
          </View>
          {notificationList}
        </View>
      </ScrollView>
      <FooterBar screen={tabScreens.notifications} />
      </Container>
    );
  }
}

export default NotificationFeed;