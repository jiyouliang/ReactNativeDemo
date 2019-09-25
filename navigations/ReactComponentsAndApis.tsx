import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
// import HomePage from './HomePage';
import PropsPage from './PropsPage';
import StatePage from './StatePage';
import WidthHeightPage from './WidthHeightPage';
import FlexWidthHeightPage from './FlexWidthHeightPage';
import MixedLayoutPage from './MixedLayoutPage';
import JustifyContentPage from './JustifyContentPage';
import AlignItemsHome from './AlignItemsHome';
import AlignItemsWrapper from './AlignItemsWrapper';
import AlignSelfPage from './AlignSelfPage';
import MixedLayoutPage2 from './MixedLayoutPage2';
import FlexWrapPage from './FlexWrapPage';

export default class ReactComponentsAndApis extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'stretch'}}>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('Components')}>Components</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('Apis')}>Apis</Text>


            </View>
        );
    }
}


const appStackNavigator = createStackNavigator(
    {

        Components: {
            screen: ComponentPages,
        },
        Apis: {
            screen: ApiPages,
        },

    },
    {
        initialRouteName: 'Components',
    }
);

export const ReactComponentsAndApisContainer = createAppContainer(appStackNavigator);

const styles = StyleSheet.create({

    itemStyle: {
        marginTop: 10,
        height: 30,
        backgroundColor: '#c3c3c3',
        lineHeight: 30,
        textAlign: 'center',
        fontWeight: 'bold'

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

