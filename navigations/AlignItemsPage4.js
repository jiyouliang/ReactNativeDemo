import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default class AlignItemsPage4 extends React.Component {
    render() {
        return (
            <View>

                <Text style={{marginTop: 20}}>1、alignItems:stretch</Text>
                <View style={styles.container}>
                    <Text style={[styles.item, {width:50}]}>Item1(固定尺寸无法拉伸)</Text>
                    <Text style={[styles.item]}>Item2,没有设置宽度</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'stretch',
    },
    item: {
        height:50,
        marginTop:10,
        textAlign:'center',
        lineHeight:50,
        backgroundColor: 'skyblue',
        marginLeft: 10
    },
});
