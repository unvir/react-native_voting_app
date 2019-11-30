import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Event, Login, Profile, Welcome } from './js/Screens';

const AppNavigator = createStackNavigator({
        Event: {
            screen: Event,
        },
        Login: {
            screen: Login,
        },
        Profile: {
            screen: Profile,
        },
        Welcome: {
            screen: Welcome,
        },
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
        initialRouteName: 'Welcome',
    },
);

export default createAppContainer(AppNavigator);
