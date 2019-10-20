import React from 'react';
import { View, Text, Container } from 'native-base';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';

class HomeScreen extends React.Component {
  render() {
    const { username, name, email } = this.props;
    console.log(this.props)
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Olá {name} </Text>
        </View>
        <FooterBar screen={tabScreens.home} />
      </Container>
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

export default connect(mapStateToProps)(HomeScreen);