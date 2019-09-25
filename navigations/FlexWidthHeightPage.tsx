import React from "react";
import {Text, View, StyleSheet} from "react-native";

class FlexItemView extends React.Component {

    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }
}

export default class FlexWidthHeightPage extends React.Component {
    render() {
        return (
            <View>
                <Text style={{lineHeight:22}}>通过flex和alignItem:stretch控制子控件拉伸，设置固定尺寸的宽度或者高度将无法拉伸</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                }}>
                    <Text style={{width: 100, height: 50, backgroundColor: 'powderblue', marginBottom:10}}>width: 100, height: 50</Text>
                    <Text style={{height: 50, backgroundColor: 'skyblue', marginBottom: 10}}>width不设置，height: 50</Text>
                    <Text style={{width: 100, backgroundColor: 'steelblue', lineHeight:22}}>height不设置，width:100,这里height方向没有拉伸，因为父控件View设置了flexDirection:column</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    flexWidth: {
        height: 50,
        flex: 1,
        backgroundColor: 'powderblue',
        fontWeight: 'bold'
    },
    tvItem1: {
        width: 50,
        marginRight: 10,
        height: 50,
        backgroundColor: 'skyblue'
    },

});
