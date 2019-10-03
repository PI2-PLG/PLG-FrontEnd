import React from 'react';
import { View, Text, Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';

class NotificationFeed extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Notificações</Text>
        </View>
        <FooterBar screen={tabScreens.notifications} />
      </Container>
    );
  }
}

export default NotificationFeed;