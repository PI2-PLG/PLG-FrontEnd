import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/Home';
import GraphicsScreen from '../screens/Graphics';
import NotificationFeed from '../screens/Notifications';
import LoginScreen from '../screens/Login';
import CreateAccountScreen from '../screens/Account';
import ProfileScreen from '../screens/Profile'


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

const LoginStack = createStackNavigator(
    {
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
);

const AccountStack = createStackNavigator(
    {
        CreateAccountScreen: CreateAccountScreen,
    },
    {
        initialRouteName: 'CreateAccountScreen',
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Profile',
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
        LoginScreen: LoginStack,
        CreateAccountScreen: AccountStack,
        ProfileScreen: ProfileStack
    },
    {
        initialRouteName: 'LoginScreen',
        defaultNavigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
);

export default createAppContainer(switchStacks);
