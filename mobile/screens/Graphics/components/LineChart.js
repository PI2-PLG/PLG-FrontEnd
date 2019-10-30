import { LineChart } from "react-native-chart-kit";
import React from "react";
import { Content, Card, CardItem, Text } from 'native-base';
import 'babel-polyfill'

const chartConfig = {
    backgroundColor: '#FFF',
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(251, 154, 117, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 4, 12, ${opacity})`,
    style: {
    borderRadius: 16
    }
}

const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style
}

export default class BezierLineChart extends React.Component {
    render() {
        const { data, width, height, title } = this.props;
        return (
            <Content>
              <Card style={{ borderRadius: 20 }}>
                  <CardItem header style={{ alignSelf: "center", borderRadius: 20}}>
                    <Text style={{color: '#525252'}}>{title}</Text>
                  </CardItem>
                <CardItem style={{borderRadius: 20}}>
                        <LineChart
                        data={data}
                        width={width}
                        height={height}
                        chartConfig={chartConfig}
                        bezier
                        style={graphStyle}
                    />
                </CardItem>
              </Card>
            </Content>
        );
    }
}

