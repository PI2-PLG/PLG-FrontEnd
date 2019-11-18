import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, Container } from 'native-base';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { StyleSheet, Dimensions, Image } from 'react-native';

var mapStyle = [
  {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#747474"
          },
          {
              "lightness": "23"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#f38eb0"
          }
      ]
  },
  {
      "featureType": "poi.government",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ced7db"
          }
      ]
  },
  {
      "featureType": "poi.medical",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffa5a8"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#c7e5c8"
          }
      ]
  },
  {
      "featureType": "poi.place_of_worship",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#d6cbc7"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#c4c9e8"
          }
      ]
  },
  {
      "featureType": "poi.sports_complex",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#b1eaf1"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": "100"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "lightness": "100"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffd4a5"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffe9d2"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "weight": "3.00"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "weight": "0.30"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#747474"
          },
          {
              "lightness": "36"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#e9e5dc"
          },
          {
              "lightness": "30"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "lightness": "100"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#d2e7f7"
          }
      ]
  }
]

let image = <Image source={require('../../../assets/images/location.png')} style={{ width: 50, height: 50 }} />

const markers = [
  {
    coordinate: {
      latitude: -15.98932261,
      longitude: -48.04509044,
    },
    title: "Módulo A",
    description: "Temperatura 50º",
  },
  {
    coordinate: {
      latitude: -15.990846,
      longitude: -48.045164,
    },
    title: "Módulo B",
    description: "Temperatura 28º",
  },
  {
    coordinate: {
      latitude: -15.989804,
      longitude: -48.043127,
    },
    title: "Módulo C",
    description: "Temperatura 31º",
  }
]


class HomeScreen extends React.Component {

  state = {
    camera: {
      center:{
        latitude: -15.9896383,
        longitude: -48.0440679,
      },
      altitude: 1216,
      pitch: 3,
      heading: 3,
      zoom: 17,
    },
  };


  render() {
    const { username, name, email } = this.props;
    return (
      <Container>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider={MapView.PROVIDER_GOOGLE}
          onRegionChange={this._handleMapRegionChange}
          camera={this.state.camera}
          customMapStyle={mapStyle}
        >
        {markers.map((marker, i) => (
          <Marker
            key={i}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
          <Image source={require('../../../assets/images/location.png')} style={{ width: 50, height: 50 }} />
          </Marker>
        ))}
        </MapView>
      </View>
      <FooterBar screen={tabScreens.home} />
      </Container>

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
