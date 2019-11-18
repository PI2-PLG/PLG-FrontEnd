import React from "react";
import { Content, Card, CardItem, Text, View } from 'native-base';
import { VictoryBar, VictoryChart, VictoryGroup } from "victory-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
    SquareShapeGreen: {
  
      width: 20,
      height: 20,
      backgroundColor: '#a9eec2',
      alignSelf: 'center'
  
    },

    SquareShapeBlue: {
  
        width: 20,
        height: 20,
        backgroundColor: '#64ccda',
        alignSelf: 'center'
    
      },

    SquareShapeOrange: {
  
        width: 20,
        height: 20,
        backgroundColor: '#fad284',
        alignSelf: 'center'
    
      },
  
   });


export default class BarChart extends React.Component {
    render(){
        const { data1, data2, data3, width, theme, title} = this.props;

        return(
            <Content>
              <Card style={{ borderRadius: 20, width: 337 }}>
                  <CardItem header style={{ alignSelf: "center", borderRadius: 20}}>
                    <Text style={{color: '#525252'}}>{title}</Text>
                  </CardItem>
                  <CardItem style={{ alignSelf: "center"}}>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <View style={styles.SquareShapeGreen} />
                                </Col>
                                <Col>
                                    <Text style={{fontSize: 12}}>Humidade</Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <View style={styles.SquareShapeOrange} />
                                </Col>
                                <Col>
                                    <Text style={{fontSize: 12}}>Temperatura</Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <View style={styles.SquareShapeBlue} />
                                </Col>
                                <Col>
                                    <Text style={{fontSize: 12}}>Co2</Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                  </CardItem>
                <CardItem style={{borderRadius: 20}}>
                {/* <VictoryChart width={width} theme={theme} height={200}>
                    <VictoryGroup offset={20}
                        colorScale={"qualitative"}
                    >
                        <VictoryBar
                        data={data1}
                        />
                        <VictoryBar
                        data={data2}
                        />
                        <VictoryBar
                        data={data3}
                        />
                    </VictoryGroup>
                </VictoryChart> */}
                <VictoryChart theme={theme} domainPadding={{ x: 35 }} width={350} height={250}>
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
