import React from 'react';
import { Container, Content, Card, CardItem, Body, Header, Left, Button, Icon, Right } from 'native-base';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';


export default class NotificationCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
    
    
      render(){
    
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
              keyExtractor={({id}, index) => id}
            />
          </View>
        );
      }
    // render(){
      
    //     return(
    //     <Content>
    //         <Card style={{ width: 320}}>
    //           <CardItem>
    //                 <Left>
    //                 <Icon 
    //                     type='FontAwesome' 
    //                     name="thermometer" 
    //                     style={{ fontSize: 50}}
                    
    //                 />
    //                 </Left>
    //           </CardItem>
    //           <CardItem>
    //           <Left>
    //             <Button transparent textStyle={{color: '#87838B'}}>
    //               <Icon type='MaterialCommunityIcons' name="alert" />
    //               <Text>1,926 stars</Text>
    //             </Button>
    //           </Left>
    //         </CardItem>
    //         </Card>
    //       </Content>
    //     );
    // }
}