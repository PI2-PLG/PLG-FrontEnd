import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { VictoryTheme } from "victory-native";
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import BarChart from './BarChart';
import BezierLineChart from './LineChart';
import ChartPie from './PieChart';
import StackChart from './StackChart'
import { Container, Segment, Button, Text } from "native-base";
import { BackHandler, ActivityIndicator } from 'react-native';


const graphics = [
  {
    "type": 'stack_chart',
    "title": 'Módulos',
    "data": [
      [{ 'x': 'A', 'y': 54 }, { 'x': 'B', 'y': 39 }, { 'x': 'C', 'y': 40 }], // humidade
      [{ 'x': 'A', 'y': 30 }, { 'x': 'B', 'y': 26 }, { 'x': 'C', 'y': 29 }], // temperatura
      [{ 'x': 'A', 'y': 60 }, { 'x': 'B', 'y': 55 }, { 'x': 'C', 'y': 50 }], // co2
    ]
  },
  {
    "type": "pie_chart",
    "title": "Módulo 1 - Dados",
    "data": [
      { "name": 'Humidade', "population": 52, "color": '#a9eec2', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
      { "name": 'Temperatura', "population": 29, "color": '#fad284', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
      { "name": 'Co2', "population": 55, "color": '#f38181', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
    ]
  },
  {
    "type": "line_chart",
    "title": "Temperatura x Meses",
    "data": {

      "labels": ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      "datasets": [
        {
          "data": [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }
  },
  {
    "type": "bar_chart",
    "title": "Humidade x Dias",
    "data": [
      { "quarter": 'seg', "earnings": 26 },
      { "quarter": 'ter', "earnings": 25 },
      { "quarter": 'qua', "earnings": 28 },
      { "quarter": 'qui', "earnings": 25 },
      { "quarter": 'sex', "earnings": 30 }
    ]
  },
]

export default class GraphicsScren extends React.Component {

  constructor(props) {
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.props = props;

    this.state = {
        seg: 1,
        isLoading: true
    }
  }
  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
      this.props.navigation.navigate(screens.HOME);
      return true;
  }

  handleBackButton(){
    this.props.navigation.popToTop();
    return true;
  }
  render() {

    chartList = graphics.map(function(chart, i) {

      if(chart.type == 'pie_chart'){
        return <ChartPie
          key={i}
          data={chart.data}
          width={300}
          height={200}
          title={chart.title}
        />       
      }
      else if (chart.type == 'stack_chart') {
          return <StackChart 
          key={i}
          width={300}
          theme={VictoryTheme.material}
          title={chart.title}
          data1 = {chart.data[0]}
          data2 = {chart.data[1]}
          data3 = {chart.data[2]}
        /> 
      }
      else if (chart.type == 'line_chart') {
        return <BezierLineChart
        key={i}
        data={chart.data}
        width={300}
        height={220}
        title={chart.title}
        />  
      }

  }.bind(this));

    if(this.state.isLoading){
      return(
        <Container>
          <View style={{flex: 1, padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator/>
          </View>
          <FooterBar screen={tabScreens.graphics} />
        </Container>
      )
    }

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
              {chartList}
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