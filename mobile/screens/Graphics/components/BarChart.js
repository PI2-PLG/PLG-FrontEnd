import React from "react";
import { Content, Card, CardItem, Text } from 'native-base';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";

export default class BarChart extends React.Component {
    render(){
        const { data, width, x, y, theme, title} = this.props;
        return(
            <Content>
              <Card style={{ borderRadius: 20 }}>
                  <CardItem header style={{ alignSelf: "center", borderRadius: 20}}>
                    <Text style={{color: '#525252'}}>{title}</Text>
                  </CardItem>
                <CardItem style={{borderRadius: 20}}>
                     <VictoryChart width={width} theme={theme} domainPadding={{ x: 25 }} height={150} padding={{left: 50, bottom: 30, top: 10}}
                     >
                        <VictoryBar 
                            data={data} 
                            x={x} 
                            y={y}
                            style={{ 
                                data:{ 
                                    fill: '#fad284',
                                    stroke: '#fad284',
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
