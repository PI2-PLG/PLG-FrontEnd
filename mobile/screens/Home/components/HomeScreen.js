import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, Container } from 'native-base';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { StyleSheet, Dimensions, Image, StatusBar, ActivityIndicator } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

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

    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
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
              marker: markers,
              isLoading: true,
              dataSource: '',
        }
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

            this.setState({
                isLoading: false,
                dataSource: markers,
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
                <View style={{flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <ActivityIndicator/>
                </View>
                <FooterBar screen={tabScreens.home} />
              </Container>
            )
          }

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
                {this.state.dataSource.map((marker, i) => (
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
                <View style={styles.cardLegend}>
                    <Grid>
                        <Col>
                            <Row>
                                <Image source={require('../../../assets/images/location.png')} style={{ width: 25, height: 25 }} />
                                <Text style={styles.textLegend}>Ativo</Text>
                            </Row>
                            <Row>
                                <Image source={require('../../../assets/images/location_desactivate.png')} style={{ width: 25, height: 25 }} />
                                <Text style={styles.textLegend}>Inativo</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Image source={require('../../../assets/images/location_fire.png')} style={{ width: 25, height: 25 }} />
                                <Text style={styles.textLegend}>Perigo</Text>
                            </Row>
                            <Row>
                                <Image source={require('../../../assets/images/location1.png')} style={{ width: 25, height: 25 }} />
                                <Text style={styles.textLegend}>Movimento</Text>
                            </Row>
                        </Col>
                    </Grid>
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
  cardLegend:{
    padding: 15,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    height: 90,
    width: 180,
    position: 'absolute',
    top: 40,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  textLegend: {
    fontSize: 10
  }
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
