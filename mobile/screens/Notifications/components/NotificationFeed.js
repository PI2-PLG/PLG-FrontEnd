import React from 'react';
import { View, Text, Container, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import NotificationCard from './NotificationCard';
import { StyleSheet, ScrollView, BackHandler, ActivityIndicator } from 'react-native';


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

class NotificationFeed extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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
    return (
      <Container>
      <ScrollView>
        <View style={{ backgroundColor: '#FFF', paddingTop: 25, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View>
            <Text style={styles.title}>Notificações</Text>
          </View>
          <NotificationCard
            dataSource={this.state.dataSource}
          />
          <NotificationCard
            dataSource={this.state.dataSource}
          />
        </View>
      </ScrollView>
      <FooterBar screen={tabScreens.notifications} />
      </Container>
    );
  }
}

export default NotificationFeed;