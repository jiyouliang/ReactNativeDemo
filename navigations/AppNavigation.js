import React from 'react';
import {Button, View, Text} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import HomePage from './HomePage';
import PropsPage from './PropsPage';
import StatePage from './StatePage';


class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen>>>>>></Text>

            </View>
        );
    }
}

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
