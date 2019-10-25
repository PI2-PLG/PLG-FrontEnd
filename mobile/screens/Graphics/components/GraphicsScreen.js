import React from 'react';
import { Dimensions, ScrollView , View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container,  Text } from 'native-base';
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  LineChart
} from "react-native-chart-kit";
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import { AreaChart, Grid, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
}


const oi = {
  backgroundColor: "#264510",
  backgroundGradientFrom: "#659146",
  backgroundGradientTo: "#1b300c",
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#1b300c"
  }
}

const data2 = {
  labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  datasets: [{
    data: [ 35, 10, 60, 11, 5, 15, 40, 3 ],
    strokeWidth: 2 // optional
  }]
}

const data3 = {
  labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  datasets: [{
    data: [ 35, 10, 60, 11, 5, 15, 40, 3 ],
    strokeWidth: 2 // optional
  }]
}

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [{
    data: [ 1, 0, 1, 0, 1, 0 ],
    strokeWidth: 2 // optional
  }]
}


class GraphicsScreen extends React.Component {
  render() {
    return (
    <Container>
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LineChart
          data={data}
          width={330}
          height={266}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginTop: 30
          }}
        />
        <LineChart
          data={data2}
          width={330}
          height={290}
          verticalLabelRotation={30}
          chartConfig={oi}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginTop: 10
          }}
        />
      {/* <PieChart
        data={data_pie}
        width={290}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
          <AreaChart
                style={{ height: 200, width: 300 }}
                data={ data_svg }
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid/>
            </AreaChart> */}
               
       </View>
      </ScrollView> 
      <FooterBar screen={tabScreens.graphics} />
    </Container>

    );
  }
}

export default GraphicsScreen;