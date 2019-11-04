import React from 'react';
import { Container, Content, Card, CardItem, Body, Header, Left, Button, Icon, Right } from 'native-base';
import TreeIcon from './../../../assets/images/burning.png'
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet  } from 'react-native';


const styles = StyleSheet.create({
  footerText: {
    color: 'gray'
  },
  titleNotificatoin: {
    fontSize: 18,
    color: '#575757',
    fontWeight: 'bold',
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
      // render(){
    
      //   const { dataSource } = this.props;

      //   return(
      //     <View style={{flex: 1, paddingTop:20}}>
      //       <FlatList
      //         data={dataSource}
      //         renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
      //         keyExtractor={({id}, index) => id}
      //       />
      //     </View>
      //   );
      // }
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
      
        return(
        <Content>
            <Card style={{ width: 320, borderRadius: 20, backgroundColor: '#f8f8f8'}}>
              <CardItem style={{borderRadius: 20, backgroundColor: '#f8f8f8', alignItems: 'center', alignContent: 'center'}}>
                <Left style={{flex:0.5}}>
                  <Image
                      style={{width: 60, height: 60}}
                      source={require('./../../../assets/images/burning.png')}
                    />
                </Left>
                <Body>
                <Text style={styles.titleNotificatoin}>Tá pegando fogo bixo!</Text>
                <Text>
                  Temperatura: 39º
                </Text>
                <Text>Umidade: 1%</Text>
                </Body>
              </CardItem>
              <CardItem footer bordered style={{borderRadius: 20, backgroundColor: '#f8f8f8'}}>
                <Body>

                </Body>
                <Right>
                  <Text style={styles.footerText}>04/11/2019 11:32</Text>
                </Right>
            </CardItem>
              {/* <CardItem style={{borderRadius: 20}}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type='MaterialCommunityIcons' name="alert" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem> */}
            </Card>
          </Content>
        );
    }
}