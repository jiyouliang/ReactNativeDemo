import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';



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
            </View>
        );
    }
}

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
