import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLine } from "victory-native";
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import {
  LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import BarChart from './BarChart'
import { Container, Header, Left, Segment, Button, Body, Text } from "native-base";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class GraphicsScren extends React.Component {

  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
        seg: 1,
    }
  }
  render() {
    const data = [
      { quarter: 'seg', earnings: 26 },
      { quarter: 'ter', earnings: 25 },
      { quarter: 'qua', earnings: 28 },
      { quarter: 'qui', earnings: 25 },
      { quarter: 'sex', earnings: 30 }
    ];
    const data2 = [
      { quarter: 'seg', earnings: 26 },
      { quarter: 'ter', earnings: 25 },
      { quarter: 'quar', earnings: 28 },
      { quarter: 'qui', earnings: 25 },
      { quarter: 'sex', earnings: 30 }
    ];

    return (
      <Container>
        <Segment style={{marginTop: 30, backgroundColor: 'white'}}>
          <Button
            style={{
              backgroundColor: this.state.seg === 1 ? "#DD6E42" : undefined,
              borderColor: "#DD6E42",
            }}
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text style={{ color: this.state.seg === 1 ? "#FFF" : "#DD6E42" }}>Gráficos</Text>
          </Button>
          <Button
            last
            style={{
              backgroundColor: this.state.seg === 2 ? "#DD6E42" : undefined,
              borderColor: "#DD6E42",
            }}
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text style={{ color: this.state.seg === 2 ? "#FFF" : "#DD6E42" }}>Histórico</Text>
          </Button>
        </Segment>
        { this.state.seg === 1 ?
          (<ScrollView>
            <View style={styles.container}>
              <BarChart
                data={data}
                width={300}
                x='quarter'
                y = 'earnings'
                theme={VictoryTheme.material}
                title = 'Temperatura x Dias'
              >
              </BarChart>
              <BarChart
                data={data}
                width={300}
                x='quarter'
                y = 'earnings'
                theme={VictoryTheme.material}
                title = 'Umidade x Dias'
              >
              </BarChart>
              
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
              />
            </View>
          </ScrollView>
          ): (
            <Container style={{ backgroundColor: '#FFF' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text> Alguma coisa aqui </Text>
            </View>
          </Container>
          )
        }
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
    paddingTop: 10
  }
});