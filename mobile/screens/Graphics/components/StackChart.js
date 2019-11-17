import React from "react";
import { Content, Card, CardItem, Text } from 'native-base';
import { VictoryBar, VictoryChart, VictoryStack, VictoryGroup } from "victory-native";

export default class BarChart extends React.Component {
    render(){
        const { data1, data2, data3, width, theme, title} = this.props;

        return(
            <Content>
              <Card style={{ borderRadius: 20 }}>
                  <CardItem header style={{ alignSelf: "center", borderRadius: 20}}>
                    <Text style={{color: '#525252'}}>{title}</Text>
                  </CardItem>
                <CardItem style={{borderRadius: 20}}>
                <VictoryChart width={width} theme={theme} domainPadding={{ x: 35 }} height={150} padding={{left: 20, bottom: 30, top: 10}} >
                    <VictoryGroup offset={20}
                    >
                        <VictoryBar
                        data={data1} 
                        style={{ 
                            data:{ 
                                fill: '#a9eec2',
                                stroke: '#a9eec2',
                                fillOpacity: 0.7,
                                strokeWidth: 3
                            },

                        }}
                        />
                        <VictoryBar
                        data={data2} 
                        style={{ 
                            data:{ 
                                fill: '#fad284',
                                stroke: '#fad284',
                                fillOpacity: 0.7,
                                strokeWidth: 3
                            },

                        }}
                        />
                        <VictoryBar
                        data={data3} 
                        style={{ 
                            data:{ 
                                fill: '#64ccda',
                                stroke: '#64ccda',
                                fillOpacity: 0.7,
                                strokeWidth: 3
                            },

                        }}
                        />
                    </VictoryGroup>
                    </VictoryChart>
                </CardItem>
              </Card>
            </Content>
        );
    }
}
