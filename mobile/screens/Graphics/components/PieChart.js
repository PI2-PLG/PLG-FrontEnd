import { PieChart } from "react-native-chart-kit";
import React from "react";
import { Content, Card, CardItem, Text } from 'native-base';
import 'babel-polyfill'

const chartConfig = {
    backgroundColor: '#FFF',
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
    borderRadius: 16
    }
}

const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style
}

export default class ChartPie extends React.Component {
    render() {
        const { data, width, height, title } = this.props;
        return (
            <Content>
              <Card style={{ borderRadius: 20 }}>
                  <CardItem header style={{ alignSelf: "center", borderRadius: 20}}>
                    <Text style={{color: '#525252'}}>{title}</Text>
                  </CardItem>
                    <CardItem style={{borderRadius: 20}}>
                        <PieChart
                            data={data}
                            height={height}
                            width={width}
                            chartConfig={chartConfig}
                            accessor="population"
                            style={graphStyle}
                            backgroundColor="transparent"
                            paddingLeft="15"
                        />
                    </CardItem>
              </Card>
            </Content>
        );
    }
}

