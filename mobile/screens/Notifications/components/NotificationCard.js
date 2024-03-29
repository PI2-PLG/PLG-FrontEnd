import React from 'react';
import { Container, Content, Card, CardItem, Body, Header, Left, Button, Icon, Right } from 'native-base';
import TreeIcon from './../../../assets/images/burning.png'
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet  } from 'react-native';


const styles = StyleSheet.create({
  footerText: {
    color: 'gray'
  },
  titleNotificatoin: {
    fontSize: 14,
    color: '#575757',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default class NotificationCard extends React.Component {   
  constructor(props) {
    super(props);
      this.state = {
        bgColor: [
          '#f8f8f8',
          '#fff4e4',
          '#ecfcff',
        ],
        selectedColor: '',
      };
    }
    componentDidMount() {
      this._getRandomColor()
    }
    _getRandomColor(){
      var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
      this.setState({
        selectedColor: item,
      })
    }   
    render(){
        const { type, message, temperature, humidity, date, hour } = this.props;

        const B = (props) => <Text style={{fontWeight: 'bold', color: 'black'}}>{props.children}</Text>

        let image;

        if (type == 'alert') {
          image = <Content>
          <Card style={{ width: 350, borderRadius: 20, backgroundColor: '#f8f8f8'}}>
            <CardItem style={{borderRadius: 20, backgroundColor: '#f8f8f8', alignItems: 'center', alignContent: 'center'}}>
              <Left style={{flex:0.5}}>
                    <Image
                      style={{width: 60, height: 60}}
                      source={require('./../../../assets/images/burning.png')}
                    />
                  </Left>
                  <Body>
                  <Text style={styles.titleNotificatoin}>{ message }</Text>
                  </Body>
              </CardItem>
              <CardItem footer bordered style={{borderRadius: 20, backgroundColor: '#f8f8f8'}}>
                <Body>
                  <Text style={{alignSelf: 'center', color: '#f77754', fontWeight: 'bold'}}>
                        Temperatura: <B>{ temperature }</B>
                  </Text>
                  <Text style={{alignSelf: 'center', color: '#49beb7', fontWeight: 'bold'}}>Umidade: <B>{ humidity }</B></Text>
                </Body>
                <Right>
                  <Text style={styles.footerText}>{date} {hour}</Text>
                </Right>
            </CardItem>
          </Card>
        </Content>
        } else if(type == 'off') {
          image = <Content>
          <Card style={{ width: 350, borderRadius: 20, backgroundColor: '#f8f8f8'}}>
            <CardItem style={{borderRadius: 20, backgroundColor: '#f8f8f8', alignItems: 'center', alignContent: 'center'}}>
              <Left style={{flex:0.5}}>
                    <Image
                      style={{width: 60, height: 60}}
                      source={require('./../../../assets/images/switch-off.png')}
                    />
                  </Left>
                  <Body>
                  <Text style={styles.titleNotificatoin}>{ message }</Text>
                  </Body>
              </CardItem>
              <CardItem footer bordered style={{borderRadius: 20, backgroundColor: '#f8f8f8'}}>
                <Body>
                </Body>
                <Right>
                  <Text style={styles.footerText}>{date} {hour}</Text>
                </Right>
            </CardItem>
          </Card>
        </Content>
        } else if(type == 'inmotion') {
          image = <Content>
          <Card style={{ width: 350, borderRadius: 20, backgroundColor: '#f8f8f8'}}>
            <CardItem style={{borderRadius: 20, backgroundColor: '#f8f8f8', alignItems: 'center', alignContent: 'center'}}>
              <Left style={{flex:0.5}}>
                    <Image
                      style={{width: 60, height: 60}}
                      source={require('./../../../assets/images/robbery.png')}
                    />
                  </Left>
                  <Body>
                  <Text style={styles.titleNotificatoin}>{ message }</Text>
                  </Body>
              </CardItem>
              <CardItem footer bordered style={{borderRadius: 20, backgroundColor: '#f8f8f8'}}>
                <Body>
                </Body>
                <Right>
                  <Text style={styles.footerText}>{date} {hour}</Text>
                </Right>
            </CardItem>
          </Card>
        </Content>
        }
        return(
        <Content>
            { image }
        </Content>
        );
    }
}
