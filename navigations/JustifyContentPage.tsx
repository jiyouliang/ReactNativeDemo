import React, {Component} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

class TitleView extends Component {
    render() {
        return (
            <View style={{alignItems: 'stretch'}}>
                <Text style={styles.item}>从props中读取:{this.props.name}</Text>
            </View>
        );
    }
}

export default class JustifyContentPage extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{lineHeight:20}}>justifyContent用于控制主轴方向：子控件之间位置关系,当前主轴方向flexDirection: 'row'</Text>
                <Text style={{marginTop:20}}>1、justifyContent:flex-start(默认值)</Text>
                <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
                    <Text style={[styles.item, {marginLeft: 0}]}>Item1</Text>
                    <Text style={styles.item}>Item2</Text>
                    <Text style={styles.item}>Item3</Text>
                </View>

                <Text style={{marginTop:20}}>2、justifyContent:flex-end</Text>
                <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                    <Text style={[styles.item, {marginLeft: 0}]}>Item1</Text>
                    <Text style={styles.item}>Item2</Text>
                    <Text style={styles.item}>Item3</Text>
                </View>

                <Text style={{marginTop:20}}>3、justifyContent:center</Text>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <Text style={[styles.item, {marginLeft: 0}]}>Item1</Text>
                    <Text style={styles.item}>Item2</Text>
                    <Text style={styles.item}>Item3</Text>
                </View>
                <Text style={{marginTop:20}}>4、justifyContent:space-around</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                    <Text style={[styles.item, {marginLeft: 0}]}>Item1</Text>
                    <Text style={styles.item}>Item2</Text>
                    <Text style={styles.item}>Item3</Text>
                </View>

                <Text style={{marginTop:20}}>5、justifyContent:space-evenly</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <Text style={[styles.item, {marginLeft: 0}]}>Item1</Text>
                    <Text style={styles.item}>Item2</Text>
                    <Text style={styles.item}>Item3</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'skyblue',
        textAlign: 'center',
        lineHeight: 50,
        marginLeft: 10
    },
});


