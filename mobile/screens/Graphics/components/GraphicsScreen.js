import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLine } from "victory-native";
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";
import BarChart from './BarChart'
import { Container } from "native-base";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class GraphicsScren extends React.Component {
  render() {
    const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ];

    return (
      <Container>
      <ScrollView>
        <View style={styles.container}>
          <BarChart
            data={data}
            width={300}
            x='quarter'
            y = 'earnings'
            theme={VictoryTheme.material}
            title = 'Quarter x Earnings'
          >
          </BarChart>
          {/* <BarChart
            data={data}
            width={300}
            x='quarter'
            y = 'earnings'
            theme={VictoryTheme.material}
          >
          </BarChart>
          <BarChart
            data={data}
            width={300}
            x='quarter'
            y = 'earnings'
            theme={VictoryTheme.material}
          >
          </BarChart> */}
          {/* <VictoryPie
            animate={{
              duration: 2000
            }}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
            labels={({ datum }) => datum.y}
            data={[
              { x: "Cats", y: 35 },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 }
            ]}
          />
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={310} // from react-native
    height={220}
    yAxisLabel={"$"}
    yAxisSuffix={"k"}
    chartConfig={{
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
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  /> */}
        </View>
      </ScrollView>
      <FooterBar screen={tabScreens.graphics} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 35
  }
});