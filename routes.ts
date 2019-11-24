import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Welcome, Login, Profile, Event } from './js/Screens';

const AppNavigator = createStackNavigator({
        Welcome: {
            screen: Welcome
        },
        Login: {
            screen: Login
        },
        Profile: {
            screen: Profile
        },
        Event: {
            screen: Event
        }
    },
    {
        initialRouteName: 'Welcome',
        defaultNavigationOptions: {
            header: null
        }
    }
);
  
export default createAppContainer(AppNavigator);