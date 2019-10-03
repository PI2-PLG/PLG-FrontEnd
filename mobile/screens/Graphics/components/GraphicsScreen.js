import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container } from 'native-base';
import FooterBar, { tabScreens } from '../../../shared/components/FooterBar';


class GraphicsScreen extends React.Component {
  render() {
    return (
    <Container>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Gráficooos</Text>
        </View>
        <FooterBar screen={tabScreens.graphics} />
    </Container>

    );
  }
}

export default GraphicsScreen;