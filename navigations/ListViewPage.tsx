import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    Image,
    View,
    RefreshControl,
    TouchableOpacity

} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'




export default class ListViewPage extends React.Component {
    constructor(props) {
        super(props);
        // 创建datasource数据源
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            // 用相应的clone方法设置datasource的初始值
            dataSource: ds.cloneWithRows(data.result),//data.result为模拟的数据或服务端得到的数据
            isLoading: true
        }
        this.onLoad()
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}//关联state中的datasource
                    renderRow={(item) => this.renderRow(item)}//制定listView的显示效果
                    //行与行之间的分割线，用renderSeparator实现
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
                        this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)
                    }
                    //页脚，底部的图片和文字，提示性，图片和文字都可以
                    renderFooter={() => this.renderFooter()}
                    // 下拉刷新，要用到RefreshControl，需要导入
                    refreshControl={
                        <RefreshControl refreshing={this.state.isLoading} onRefresh={() => this.onLoad()}/>
                    }
                />
                <Toast
                    ref={toast => {
                        this.toast = toast
                    }}
                />
            </View>
        );
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View key={rowID} style={styles.line}></View>
    }

    renderFooter() {
        // return <Image style={{width:400,height:100}} source={{uri:'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png'}}></Image>
        return <View style={{justifyContent: "center", height: 20, alignItems: 'center'}}>
            <Text style={styles.tip}>我是有底线的</Text>
        </View>
    }

    renderRow(item) {
        return <View style={styles.row}>
            <TouchableOpacity onPress={() => {//点击一行显示姓名，要用到TouchableOpacity组件,需要导入
                this.toast.show('你单击了：' + item.fullName, DURATION.LENGTH_LONG)
            }}>
                <Text style={styles.text1}>姓名：{item.fullName}</Text>
                <Text style={styles.text2}>邮箱：{item.email}</Text>
                <Text style={styles.text3}>time：{item.time}</Text>
            </TouchableOpacity>
        </View>
    }

    // 刷新的状态，时间2s
    onLoad() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }

}

var data = {
    "result": [
        {
            "fullName": "张三",
            "email": "e.moore@thompson.org",
            "time": "2018-10-10"
        },
        {
            "fullName": "李四",
            "email": "r.jackson@johnson.edu",
            "time": "2018-10-10"
        },
        {
            "fullName": "王五",
            "email": "c.perez@lewis.org",
            "time": "2018-10-10"
        },
        {
            "fullName": "赵六",
            "email": "k.jackson@martinez.net",
            "time": "2018-10-10"
        },
        {
            "fullName": "冯七",
            "email": "f.jackson@miller.edu",
            "time": "2018-10-10"
        },
        {
            "fullName": "小明",
            "email": "o.brown@hernandez.gov",
            "time": "2018-10-10"
        },
        {
            "fullName": "小长",
            "email": "e.hernandez@martinez.org",
            "time": "2018-10-10"
        },
        {
            "fullName": "小红",
            "email": "n.moore@thompson.io",
            "time": "2018-10-10"
        },
        {
            "fullName": "小明",
            "email": "x.brown@thomas.co.uk",
            "time": "2018-10-10"
        },
        {
            "fullName": "小丽",
            "email": "j.gonzalez@davis.net",
            "time": "2018-10-10"
        },
        {
            "fullName": "张三张三",
            "email": "d.lopez@thompson.io",
            "time": "2018-10-10"
        },
        {
            "fullName": "张三张三张三张三张三",
            "email": "x.brown@thomas.co.uk",
            "time": "2018-10-10"
        },
        {
            "fullName": "张三张三张三",
            "email": "j.gonzalez@davis.net",
            "time": "2018-10-10"
        }
    ]
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 7
    },
    text2: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 7
    },
    text3: {
        fontSize: 14,
        marginLeft: 250,
        marginTop: -16,
    },
    icon: {
        height: 22,
        width: 22,
    },
    row: {
        height: 60,
    },
    line: {
        height: 1,
        backgroundColor: '#F0F0F0'
    },
    tip: {
        fontSize: 10
    }
});
