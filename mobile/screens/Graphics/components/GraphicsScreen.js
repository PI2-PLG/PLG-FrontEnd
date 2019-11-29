import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { VictoryTheme } from "victory-native";
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';
import BarChart from './BarChart';
import BezierLineChart from './LineChart';
import ChartPie from './PieChart';
import StackChart from './StackChart'
import { Container, Segment, Button, Text, Content, Picker } from "native-base";
import { BackHandler, ActivityIndicator, StatusBar, Image  } from 'react-native';

const mycharts = [
  {
    "module_name": "Módulo A",
    "type": "bar_chart",
    "title": "Módulo A - Temperatura x Humidade x Co2",
    "data": [
      { "info": 'Temperatura °', "value": 26 },
      { "info": 'Umidade °', "value": 25 },
      { "info": 'Co2 (PPM)', "value": 28 },
    ]
  },
  {
    "module_name": "Módulo A",
    "type": "pie_chart",
    "title": "Módulo A - Porcentagem por status",
    "data": [
      { "name": 'Alerta', "population": 10, "color": '#a9eec2', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
      { "name": 'Offline', "population": 2, "color": '#fad284', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
      { "name": 'Online', "population": 4, "color": '#f38181', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
    ]
  },
  {
    "module_name": "Módulo A",
    "type": "line_chart",
    "title": "Módulo A - Temperatura x Dias",
    "data": {

      "labels": ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'],
      "datasets": [
        {
          "data": [
            28,
            31,
            24,
            29,
            19,
            26,
            27
          ]
        }
      ]
    }
  },
  {
    "module_name": "Módulo A",
    "type": "line_chart",
    "title": "Módulo A - Umidade x Dias",
    "data": {
      "labels": ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'],
      "datasets": [
        {
          "data": [
            50,
            46,
            20,
            16,
            24,
            60,
            45
          ]
        }
      ]
    }
  },
  {
    "module_name": "Módulo A",
    "type": "line_chart",
    "title": "Módulo A - Co2 x Dias",
    "data": {

      "labels": ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'],
      "datasets": [
        {
          "data": [
            245,
            400,
            300,
            200,
            120,
            234,
            222
          ]
        }
      ]
    }
  },
  {
    "module_name": "Módulo B",
    "type": "bar_chart",
    "title": "Módulo B - Temperatura x Humidade x Co2",
    "data": [
      { "info": 'Temperatura °', "value": 26 },
      { "info": 'Umidade °', "value": 25 },
      { "info": 'Co2 (PPM)', "value": 28 },
    ]
  },
  {
    "module_name": "Módulo B",
    "type": "pie_chart",
    "title": "Módulo B - Porcentagem por status",
    "data": [
      { "name": 'Alerta', "population": 10, "color": '#a9eec2', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
      { "name": 'Offline', "population": 2, "color": '#fad284', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
      { "name": 'Online', "population": 4, "color": '#f38181', "legendFontColor": '#7F7F7F', "legendFontSize": 10 },
    ]
  },
  {
    "module_name": "Módulo B",
    "type": "line_chart",
    "title": "Módulo B - Temperatura x Dias",
    "data": {

      "labels": ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'],
      "datasets": [
        {
          "data": [
            28,
            31,
            24,
            29,
            19,
            26,
            27
          ]
        }
      ]
    }
  },
  {
    "module_name": "Módulo B",
    "type": "line_chart",
    "title": "Módulo B - Umidade x Dias",
    "data": {

      "labels": ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'],
      "datasets": [
        {
          "data": [
            50,
            46,
            20,
            16,
            24,
            60,
            45
          ]
        }
      ]
    }
  },
  {
    "module_name": "Módulo B",
    "type": "line_chart",
    "title": "Módulo B - Co2 x Dias",
    "data": {
      "labels": ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'],
      "datasets": [
        {
          "data": [
            245,
            400,
            300,
            200,
            120,
            234,
            222
          ]
        }
      ]
    }
  },
  
]

function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

const Item = Picker.Item;

export default class GraphicsScren extends React.Component {

  constructor(props) {
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.props = props;

    this.state = {
        isLoading: true,
        selectedItem: undefined,
        selected1: 'key0',
        dataSource: '',
        results: {
            items: []
        }
    }
  }
  
  onValueChange (value) {
    this.setState({
        isLoading: true,
        selected1 : value,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 100);
  }
  async componentDidMount(){
    return fetch('http://168.62.37.157:8000/all-charts')
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
    
  //   let serviceItems = this.state.dataSource.map( (s, i) => {
  //     return <Picker.Item key={i} value={s} label={s} />
  // });

    if(this.state.isLoading == false) {

      chartList = this.state.dataSource.map(function(chart, i) {
        console.log(chart.type)
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
          width={350}
          height={220}
          title={chart.title}
          />  
        } else if(chart.type == 'bar_chart') {
          return <BarChart
            key={i}
            data={chart.data}
            width={300}
            theme={VictoryTheme.material}
            x="info"
            y="value"
            title={chart.title}
          />
        }
  
    }.bind(this));

    }

   
    let chart;
    if(this.state.selected1 == 'key1') {
      if(this.state.isLoading){
        return(
          <Container>
          <StatusBar backgroundColor="blue" barStyle="dark-content" />
            <Text style={styles.title}>Gráficos</Text>

          <View style={{marginTop: 20, borderWidth: 1, borderColor: '#DD6E42', width: 250, alignSelf: "center", marginBottom: 10}}>
            <Picker
                style={{width: 250, alignSelf: "center"}}
                mode='dropdown'
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item color="#DD6E42" label='Selecione uma opção' value='key0' />
                <Item label='Módulo A' value='key1' />
                <Item label='Módulo B' value='key2' />
                <Item label='Módulo C' value='key3' />
                <Item label='Dados Históricos' value='key4' />
                <Item label='Geral' value='key5' />
            </Picker>
          </View>
            <View  style={styles.container}>
              <ActivityIndicator/>
            </View>
            <FooterBar screen={tabScreens.graphics} />
          </Container>
        )
      } 
      
      else {
        chart = chartList
      } 

    } else if (this.state.selected1 === 'key0'){
      chart = <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 100, height: 100, marginTop: '50%', opacity: 0.3}}
          source={require('./../../../assets/images/search.png')}
        />
      </View>
    }

    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
          <Text style={styles.title}>Gráficos</Text>
        <View style={{marginTop: 20, borderWidth: 1, borderColor: '#DD6E42', width: 250, alignSelf: "center", marginBottom: 10}}>

          <Picker
                style={{width: 250, alignSelf: "center"}}
                mode='dropdown'
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item color="#DD6E42" label='Selecione uma opção' value='key0' />
                <Item label='Módulo A' value='key1' />
                <Item label='Módulo B' value='key2' />
                <Item label='Módulo C' value='key3' />
                <Item label='Dados Históricos' value='key4' />
                <Item label='Geral' value='key5' />
            </Picker>
        </View>
        {/* <Segment style={{marginTop: 30, backgroundColor: 'white'}}>
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
        </Segment> */}
          <ScrollView>

              <View style={styles.container}>
                {/* {chartList} */}
                {chart}
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
  },
  border: {
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#575757',
    textAlign: 'center',
    marginTop: 50,
  },
});