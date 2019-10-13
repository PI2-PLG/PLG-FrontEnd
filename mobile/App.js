import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppContainer from './navigation';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
      };
    }
  
    async componentDidMount() {
      await Font.loadAsync({
        Entypo: require('./assets/fonts/Entypo.ttf'),
        RubikBlack: require('./assets/fonts/Rubik-Black.ttf'),
        EvilIcons: require('./assets/fonts/EvilIcons.ttf'),
        AntDesign: require('./assets/fonts/AntDesign.ttf'),
        Foundation: require('./assets/fonts/Foundation.ttf'),
        Roboto_medium: require('./assets/fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ isReady: true });
    }
  
    render() {
      if (!this.state.isReady) {
        return <AppLoading />;
      }
  
      return (
        <AppContainer /> 
      );
    }
  }