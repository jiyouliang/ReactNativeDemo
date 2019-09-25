/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AlignItemsHomeContainer} from './AlignItemsHome'



type Props = {};
export default class App extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            header:null,
        };
    };
    render() {
        return (
            <AlignItemsHomeContainer/>
        );
    }
}

