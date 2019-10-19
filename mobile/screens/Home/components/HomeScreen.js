import React from 'react';
import MapView from 'react-native-maps';
import { View, Text, Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { StyleSheet, Dimensions } from 'react-native';

class HomeScreen extends React.Component {

  state = {
    camera: {
      center:{
        latitude: -15.98932261,
        longitude: -48.04509044,
      },
      altitude: 1216,
      pitch: 3,
      heading: 3,
      zoom: 17,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider={MapView.PROVIDER_GOOGLE}
          onRegionChange={this._handleMapRegionChange}
          camera={this.state.camera}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default HomeScreen;