import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import AsyncGetNetDataPage from './AsyncGetNetDataPage';

export default class NetworkPages extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('AsyncGetNetDataPage')}>async请求网络数据</Text>

            </View>
        );
    }
}


const appStackNavigator = createStackNavigator(
    {
        home: {
            screen: NetworkPages,
        },

        AsyncGetNetDataPage: {
            screen: AsyncGetNetDataPage,
        },



    },
    {
        initialRouteName: 'home',
    }
);

export const NetworkPagesContainer = createAppContainer(appStackNavigator);

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

