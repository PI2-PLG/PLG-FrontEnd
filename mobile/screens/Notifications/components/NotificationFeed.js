import React from 'react';
import { View, Text, Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import NotificationCard from './NotificationCard';
import { StyleSheet, Alert, BackHandler } from 'react-native';


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
  render() {
    return (
      <Container style={{ backgroundColor: '#FFF', paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text style={styles.title}>Notificações</Text>
        </View>
        <NotificationCard />
        <FooterBar screen={tabScreens.notifications} />
      </Container>
    );
  }
}

export default NotificationFeed;