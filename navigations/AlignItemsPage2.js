import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default class AlignItemsPage2 extends React.Component {
    render() {
        return (
            <View>

                <Text style={{marginTop: 20}}>1、alignItems:flex-end</Text>
                <View style={styles.container}>
                    <Text style={[styles.item]}>Item1</Text>
                    <Text style={styles.item}>Item2</Text>
                    <Text style={styles.item}>Item3</Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'flex-end',
    },
    item: {
        margin:5,
        width:50,
        height:50,
        textAlign:'center',
        lineHeight:50,
        backgroundColor: 'skyblue',
        marginLeft: 10
    },
});
