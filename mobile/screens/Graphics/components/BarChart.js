import React from "react";
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { VictoryBar, VictoryChart } from "victory-native";

export default class BarChart extends React.Component {
    render(){
        const { data, width, x, y, theme, title} = this.props;
        return(
            <Content>
              <Card style={{padding: 0}}>
                  <CardItem header style={{ alignSelf: "center"}}>
                    <Text>{title}</Text>
                  </CardItem>
                <CardItem>
                     <VictoryChart width={width} theme={theme} domainPadding={{ x: 25 }} height={200} padding={{left: 50, bottom: 30}}>
                        <VictoryBar data={data} x={x} y={y} 
                            style={{ 
                                data:{ 
                                    fill: '#F2CABA',
                                    stroke: '#F2CABA',
                                    fillOpacity: 0.7,
                                    strokeWidth: 3
                                },

                            }}/>
                    </VictoryChart>
                </CardItem>
              </Card>
            </Content>
        );
    }
}
