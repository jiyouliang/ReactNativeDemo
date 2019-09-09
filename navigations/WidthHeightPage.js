import React from "react";
import {Text, View, StyleSheet} from "react-native";


export default class WidthHeightPage extends React.Component{
    render(){
        return (
            <View>
                <Text>通过width和height设置固定宽度和高度</Text>
                <View>
                    <Text style={{width:60, height:60, backgroundColor:'powderblue', fontWeight:'bold'}}>width:50, height:50</Text>
                    <Text style={{width:100, height:100, backgroundColor:'steelblue', fontWeight:'bold'}}>width:100, height:100</Text>
                </View>
            </View>
        );
    }
}
