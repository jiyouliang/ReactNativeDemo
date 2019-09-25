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

export default class PropsPage extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>props属性一经声明，在指定组件的声明周期将不会发生改变，所以只能用来声明不能改变的数据</Text>
                <TitleView name='张三'/>
                <TitleView name='李四'/>
                <TitleView name='王五'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 40,
        lineHeight: 40,
        backgroundColor: '#c3c3c3',
        marginTop: 10
    },
});


