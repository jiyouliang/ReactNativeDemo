import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';


// 图片
class ImageView extends React.Component {
    render() {
        return (
            <Image style={styles.imageStyle} source={require('../img/phone.jpg')}/>
        );
    }
}

// 价格
class PriceView extends React.Component {

    render() {
        return (
            <View style={[styles.horizontalContainer]}>
                <Text style={styles.price}>{this.props.currency} {this.props.price}</Text>
                <Text style={[styles.pricePoint, {alignSelf: 'flex-end'}]}>.00</Text>

            </View>
        );
    }
}

// 描述
class DescView extends React.Component {
    render() {
        return (
            <Text style={[styles.commonText, styles.marginBtm]}>{this.props.title}</Text>
        );
    }
}

// 灰色背景文字
class ConfitText extends React.Component {
    render() {
        return (<Text style={styles.grayBgTest}>{this.props.title}</Text>);
    }
}



export default class AsyncGetNetDataPage extends React.Component {

    request(url) {
        console.debug("request>>>>>>>>>>>");
        const promise = new Promise(function (resolve, reject) {
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

        });

        return promise;
    }

    onSuccess(response){

    }

    async asyncHttp(url) {
        const jsonOjb = await this.request(url).then(function (response) {
            return response;
        });
        console.debug("getJSON获取并返回数据>>>>>>>>>  " + JSON.stringify(jsonOjb));
    }

    render() {
        const url = 'http://47.106.182.74:8000/fmap/test/testProduct';
        this.asyncHttp(url);
        return (
            <View style={styles.container}>
                <ImageView/>
                <View style={styles.textContainer}>
                    <View style={[styles.horizontalContainer, styles.marginBtm, {alignItems: 'center'}]}>
                        <Image style={{width: 50, height: 16}}
                               source={{uri: 'https://img11.360buyimg.com/jdphoto/s88x28_jfs/t1/66511/3/2872/1955/5d118f22Edc5c0ea0/dd426d77193773bc.png'}}/>
                        <Text style={styles.phoneName}>一加 7</Text>
                    </View>
                    <View style={[styles.horizontalContainer, styles.marginBtm]}>
                        <ConfitText title='6.4英寸'/>
                        <ConfitText title='8G运存'/>
                        <ConfitText title='256G'/>
                    </View>
                    <DescView title='高通骁龙855 双立体声扬声器'/>
                    <PriceView currency='¥' price='3999'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10
    },
    horizontalContainer: {
        flexDirection: 'row'
    },
    verticalContainer: {
        flexDirection: 'column'
    },
    textContainer: {
        flexDirection: 'column',
    }
    ,
    imageStyle: {
        marginLeft: 10,
        width: 100,
        height: 100
    },
    phoneName: {
        color: '#030303',
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 16
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
    price: {
        fontSize: 18,
        color: '#e93b3d',

    },
    // 价格小数点
    pricePoint: {
        fontSize: 13,
        color: '#e93b3d',

    }
});
