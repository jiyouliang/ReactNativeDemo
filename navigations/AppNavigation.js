import React from 'react';
import {Button, View, Text} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import HomePage from './HomePage';
import PropsPage from './PropsPage';
import StatePage from './StatePage';
import WidthHeightPage from './WidthHeightPage';


const appStackNavigator = createStackNavigator(
    {
        Home: {
            screen: HomePage,
        },
        PropsPage: {
            screen: PropsPage,
        },
        StatePage: {
            screen: StatePage,
        },
        WidthHeightPage:{
            screen: WidthHeightPage
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export const AppContainer = createAppContainer(appStackNavigator);

// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//     }
// }
