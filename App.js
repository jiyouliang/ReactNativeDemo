/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AppContainer} from './navigations/AppNavigation'

// 屏蔽底部deprecated警告
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        console.log(this.props.message)
        console.log(this.props.img)
        return (
            <AppContainer 
            messageProp={this.props.message}
            imgProp={this.props.img}/>
        );
    }
}

