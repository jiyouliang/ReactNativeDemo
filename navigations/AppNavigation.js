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
import ListViewPage from './ListViewPage';
import ActivityIndicatorPage from './ActivityIndicatorPage';
import NetworkManagerPage from './NetworkManagerPage';

export default class HomePage extends React.Component {
    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'stretch'}}>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('PropsPage')}>Props属性</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('StatePage')}>State状态</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('WidthHeightPage')}>宽度和高度</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('FlexWidthHeightPage')}>flex宽度和高度</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('JustifyContentPage')}>justifyContent</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('MixedLayoutPage')}>ReactNative实现复杂布局</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('MixedLayoutPage2')}>ReactNative实现复杂布局(样式抽取)</Text>

                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('AlignItemsWrapper')}>alignItems</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('AlignSelfPage')}>alignSelf</Text>

                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('FlexWrapPage')}>flexWrap</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('ListViewPage')}>ListView（Deprecated）</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('ActivityIndicatorPage')}>ActivityIndicator</Text>
                <Text style={styles.itemStyle}
                      onPress={() => this.props.navigation.navigate('NetworkManagerPage')}>网络请求相关</Text>


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
        WidthHeightPage: {
            screen: WidthHeightPage
        },
        FlexWidthHeightPage: {
            screen: FlexWidthHeightPage
        },
        MixedLayoutPage: {
            screen: MixedLayoutPage
        },

        JustifyContentPage: {
            screen: JustifyContentPage
        },
        AlignItemsWrapper: {
            screen: AlignItemsWrapper
        },
        AlignSelfPage: {
            screen: AlignSelfPage,
        },
        MixedLayoutPage2: {
            screen: MixedLayoutPage2,
        },
        FlexWrapPage: {
            screen: FlexWrapPage,
        },
        ListViewPage: {
            screen: ListViewPage,
        },
        ActivityIndicatorPage: {
            screen: ActivityIndicatorPage,
        },
        NetworkManagerPage: {
            screen: NetworkManagerPage,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export const AppContainer = createAppContainer(appStackNavigator);

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

