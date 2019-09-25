import React from "react";
import {Button, ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {Image} from 'react-native-elements';
import Toast, {DURATION} from 'react-native-easy-toast'


// 图片
class ImageView extends React.Component {
    render() {
        return (
            <Image style={styles.imageStyle} source={{uri: "http://47.106.182.74/demo/images/phone1.webp"}}/>
        );
    }
}

// 价格
class PriceView extends React.Component {

    render() {
        return (
            <View style={[styles.horizontalContainer]}>
                <Text style={styles.price}>{this.props.currency} {this.props.price}</Text>
                <Text style={[styles.pricePoint, {alignSelf: 'flex-end'}]}>.{this.props.point}</Text>

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


const URL = 'http://47.106.182.74:8000/fmap/test/testProduct';
export default class AsyncGetNetDataPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            data: {},
            proUri:''
        }
        this.asyncHttp(URL);
    }

    requestData(url) {
        this.loading();
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

    async asyncHttp(url) {
        const obj = this;
        const jsonOjb = await this.requestData(url).then(function (response) {

            // 服务器返回数据太快，延时为了看loading
            setTimeout(function () {
                // 修改数据，刷新页面
                obj.setState({
                    isLoading: false,
                    data: response["data"],
                });
            }, 1000);
            return response;
        }, function (err) {
            // 服务器返回数据太快，延时为了看loading
            setTimeout(function () {

                console.debug("请求失败>>>" + err.toString());
                obj.setState({
                    error: true
                });
            }, 1000);
        });
        console.debug("getJSON获取并返回数据>>>>>>>>>  " + JSON.stringify(jsonOjb));
    }

    loading() {
        return (
            <View style={{alignItems: 'center', alignContent: 'center'}}>
                <ActivityIndicator animating={true} color='skyblue' size='large'/>
            </View>
        );
    }

    showError() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Button title='请求失败'
                        onPress={() => {
                            this.setState({
                                isLoading: true,
                                error: false
                            });
                            this.asyncHttp(URL);
                        }}
                        style={{
                            alignSelf: 'center',
                            fontSize: 20,
                            borderRadius: 4,
                            backgroundColor: 'skyblue',
                            color: 'white'
                        }}/>
            </View>
        );
    }

    // 成功
    readerView() {
        let data = this.state.data;
        let imgUrl = data['img_url'];
        let infoList = this.state.data["info_list"];

        return (
            <View style={styles.container}>
                <ImageView/>
                <View style={styles.textContainer}>
                    <View style={[styles.horizontalContainer, styles.marginBtm, {alignItems: 'center'}]}>
                        <Image style={{width: 50, height: 16}}
                               source={{uri: 'https://img11.360buyimg.com/jdphoto/s88x28_jfs/t1/66511/3/2872/1955/5d118f22Edc5c0ea0/dd426d77193773bc.png'}}/>

                        <Text style={styles.phoneName}>{data['title']}</Text>
                    </View>
                    <View style={[styles.horizontalContainer, styles.marginBtm]}>
                        <ConfitText title={infoList[0]}/>
                        <ConfitText title={infoList[1]}/>
                        <ConfitText title={infoList[2]}/>
                    </View>
                    <DescView title={this.state.data['desc']}/>
                    <PriceView currency='¥' price={data["price"].split('.')[0]} point={data["price"].split('.')[1]}/>
                </View>
            </View>
        );
    }

    render() {
        if (this.state.isLoading && !this.state.error) {
            //显示加载中
            return this.loading();
        } else if (this.state.error) {
            //失败
            return this.showError();
        }
        return this.readerView();
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
