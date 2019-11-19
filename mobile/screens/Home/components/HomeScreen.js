import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, Container } from 'native-base';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { StyleSheet, Dimensions, Image, StatusBar } from 'react-native';

var mapStyle =[
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ff8515"
            },
            {
                "weight": "10.00"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "3.47"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "48"
            },
            {
                "color": "#aeaeae"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "3.42"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f8f3ec"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#faf3eb"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "28"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "weight": "4.29"
            },
            {
                "gamma": "10"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "28"
            },
            {
                "gamma": "0.00"
            },
            {
                "weight": "7.19"
            },
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f3f1f1"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fff6d4"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffdda0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "invert_lightness": true
            },
            {
                "weight": "2.12"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
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
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
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
        <View style={{backgroundColor: 'white', width: 30, height: 30}}>
            <Text>Oi</Text>
        </View>
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
