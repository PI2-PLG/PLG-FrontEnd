import React from 'react';
import { View, Text, Container, Content, Card, CardItem, Body, Header, Left, Button, Icon, Right } from 'native-base';

export default class NotificationCard extends React.Component {
    render(){
      
        return(
        <Content>
            <Card style={{ width: 320}}>
              <CardItem>
                    <Left>
                    <Icon 
                        type='FontAwesome' 
                        name="thermometer" 
                        style={{ fontSize: 50}}
                    
                    />
                    </Left>
              </CardItem>
              <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type='MaterialCommunityIcons' name="alert" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
            </Card>
          </Content>
        );
    }
}