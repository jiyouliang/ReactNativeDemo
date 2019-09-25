import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default class AlignItemsPage5 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.item, {height:50}]}>Item1</Text>
                <Text style={[styles.item, {backgroundColor: 'skyblue'}]}>Item2(不设置height可拉伸)</Text>
                <Text style={[styles.item, {width: 100, backgroundColor: 'steelblue'}]}>Item3(不设置height可拉伸)</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    item: {
        width: 50,
        backgroundColor: 'powderblue',
    }
});
