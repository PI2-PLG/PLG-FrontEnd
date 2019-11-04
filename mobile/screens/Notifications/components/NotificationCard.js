import React from 'react';
import { Container, Content, Card, CardItem, Body, Header, Left, Button, Icon, Right } from 'native-base';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';


export default class NotificationCard extends React.Component {   
      render(){
    
        const { dataSource } = this.props;

        return(
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList
              data={dataSource}
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