import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import AlignItemsPage from './AlignItemsPage';
import AlignItemsPage2 from './AlignItemsPage2';
import AlignItemsPage3 from './AlignItemsPage3';
import AlignItemsPage4 from './AlignItemsPage4';
import AlignItemsPage5 from './AlignItemsPage5';

export default class AlignItemsHome extends React.Component {
    render() {
        return (
            <View>
                <Text style={{lineHeight: 20}}>当前主轴方向:column,alignItems控制次轴方向:flex-start, flex-end, center,
                    stretch</Text>
                <View style={{flexDirection: 'column', flex: 1, alignItems: 'stretch'}}>

                    <Text style={styles.itemStyle}
                          onPress={() => this.props.navigation.navigate('AlignItemsPage')}>alignItems:flex-start</Text>
                    <Text style={styles.itemStyle}
                          onPress={() => this.props.navigation.navigate('AlignItemsPage2')}>alignItems:flex-end</Text>
                    <Text style={styles.itemStyle}
                          onPress={() => this.props.navigation.navigate('AlignItemsPage3')}>alignItems:center</Text>
                    <Text style={styles.itemStyle}
                          onPress={() => this.props.navigation.navigate('AlignItemsPage4')}>alignItems:stretch(x轴方向拉伸)</Text>
                    <Text style={styles.itemStyle}
                          onPress={() => this.props.navigation.navigate('AlignItemsPage5')}>alignItems:stretch(y轴方向拉伸)</Text>

                </View>
            </View>
        );
    }
}


const appStackNavigator = createStackNavigator(
    {
        home: {
            screen: AlignItemsHome,
        },
        AlignItemsPage: {
            screen: AlignItemsPage,
        },
        AlignItemsPage2: {
            screen: AlignItemsPage2,
        },
        AlignItemsPage3: {
            screen: AlignItemsPage3,
        },
        AlignItemsPage4: {
            screen: AlignItemsPage4,
        },
        AlignItemsPage5: {
            screen: AlignItemsPage5,
        },

    },
    {
        initialRouteName: 'home',
    }
);

export const AlignItemsHomeContainer = createAppContainer(appStackNavigator);

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

