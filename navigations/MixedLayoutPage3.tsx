import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';


export default class MixedLayoutPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={require('../img/phone.jpg')}/>
                <View style={styles.textContainer}>
                    <View style={[styles.horizontalContainer, styles.marginBtm, {alignItems: 'center'}]}>
                        <Image style={{width: 50, height: 16}}
                               source={{uri: 'https://img11.360buyimg.com/jdphoto/s88x28_jfs/t1/66511/3/2872/1955/5d118f22Edc5c0ea0/dd426d77193773bc.png'}}/>
                        <Text style={styles.phoneName}>一加 7</Text>
                    </View>
                    <View style={[styles.horizontalContainer, styles.marginBtm]}>
                        <Text style={styles.grayBgTest}>6.4英寸</Text>
                        <Text style={styles.grayBgTest}>8G运存</Text>
                        <Text style={styles.grayBgTest}>256G</Text>
                    </View>
                    <Text numberOfLines={1} style={[styles.commonText,styles.marginBtm]}>高通骁龙855  双立体声扬声器,高通骁龙855  双立体声扬声器</Text>
                    <View style={[styles.horizontalContainer]}>
                        <Text style={styles.price}>¥ 2999</Text>
                        <Text style={[styles.pricePoint, {alignSelf:'flex-end'}]}>.00</Text>

                    </View>
                </View>
                <View style={{width:30, alignItems:'center', justifyContent:'center'}}>
                    <Image style={styles.imageArrow} source={require('../img/arrow_right.png')}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent:'flex-end',
    },
    horizontalContainer: {
        flexDirection: 'row'
    },
    verticalContainer: {
        flexDirection: 'column'
    },
    textContainer: {
        flexDirection: 'column',
        flex:1,
        borderColor:"#FF0",
        borderWidth:1
    }
    ,
    imageStyle: {
        marginLeft: 10,
        width: 100,
        height: 100,
        borderWidth:1,
        borderColor:'pink'
    },
    imageArrow: {
        marginRight: 0,
        width: 20,
        height: 20
    },
    phoneName: {
        color: '#030303',
        marginLeft: 10,
        textAlign: 'center',
        fontSize:16
    },
    commonText: {
        color: '#333333',
    },
    grayBgTest: {
        paddingLeft: 3,
        paddingRight: 3,
        color: '#999999',
        marginRight: 4,
        backgroundColor: '#f2f2f7',
    },
    marginBtm: {
        marginBottom: 4
    },
    //价格
    price:{
        fontSize: 18,
        color:'#e93b3d',

    },
    // 价格小数点
    pricePoint:{
        fontSize: 13,
        color:'#e93b3d',

    }
});
