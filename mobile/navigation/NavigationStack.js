import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/Home';
import GraphicsScreen from '../screens/Graphics';
import NotificationFeed from '../screens/Notifications'


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

const GraphicsStack = createStackNavigator(
    {
        Graphics: GraphicsScreen,
    },
    {
        initialRouteName: 'Graphics',
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
);

const NotificationsStack = createStackNavigator(
    {
        Notifications: NotificationFeed,
    },
    {
        initialRouteName: 'Notifications',
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
);
const switchStacks = createSwitchNavigator(
    {
        HomeScreen: HomeStack,
        GraphicsScreen: GraphicsStack,
        NotificationFeed: NotificationsStack,
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
