import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/Home';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
);
const switchStacks = createSwitchNavigator(
    {
        HomeScreen: HomeStack,
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
);

export default createAppContainer(switchStacks);
