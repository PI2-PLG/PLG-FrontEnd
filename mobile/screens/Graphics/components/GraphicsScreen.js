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

const Item = Picker.Item;

export default class GraphicsScren extends React.Component {

  constructor(props) {
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.props = props;

    this.state = {
        isLoading: true,
        selectedItem: undefined,
        selected1: 'key1',
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
    return fetch('http://loboguara.eastus.cloudapp.azure.com:8000/all-charts')
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
    const name_list = []
    if(this.state.isLoading == false) {

      let nameItems = this.state.dataSource.map( (s, i) => {
        name_list.push(s.module_name)
      });

      let pickerItems = name_list.map( (item, i) => {
        return <Picker.Item key={i} value={item} label={item} />
      });
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
                <Item label='Dados Gerais' value='key1' />
                <Item label='Médias' value='key2' />
                <Item label='Status' value='key3' />
            </Picker>
        </View>
          <ScrollView>

              <View style={styles.container}>
                {this.state.isLoading == true &&
                <View style={{flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', marginTop: '50%'}}>
                  <ActivityIndicator/>
                </View>

                } 
                {this.state.isLoading == false &&
                  this.state.selected1 == 'key1' &&
                  this.state.dataSource.map(function(chart, i) {
                    if(chart.type == 'bar_chart'){
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
                  })
                }
                {this.state.isLoading == false &&
                  this.state.selected1 == 'key2' &&
                  this.state.dataSource.map(function(chart, i) {
                    if(chart.type == 'line_chart'){
                        return <BezierLineChart
                        key={i}
                        data={chart.data}
                        width={320}
                        height={220}
                        title={chart.title}
                        />   
                    }
                  })
                }
                {this.state.isLoading == false &&
                  this.state.selected1 == 'key3' &&
                  this.state.dataSource.map(function(chart, i) {
                    if(chart.type == 'pie_chart'){
                        return <ChartPie
                        key={i}
                        data={chart.data}
                        width={300}
                        height={200}
                        title={chart.title}
                      />    
                    }
                  })
                }

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