import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";

class TitleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      tcolor: "#FF4E2A"
    };
  }

  private increase = () => {
    this.setState({
      age: this.state.age + 1,
      tcolor: this.state.tcolor === "#FF4E2A" ? "#FFFFFF" : "#FF4E2A"
    });
  };

  render() {
    return (
      <View style={{ alignItems: "stretch" }}>
        <Text
          style={{
            height: 40,
            lineHeight: 40,
            backgroundColor: "#c3c3c3",
            marginTop: 10,
            color: this.state.tcolor
          }}
          onPress={this.increase}
        >
          {this.props.name}年龄{this.state.age}，点击自增，颜色改变
        </Text>
      </View>
    );
  }
}

export default class StatePage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>state状态用来存储可以修改的数据</Text>
        <TitleView name="张三" />
        <TitleView name="李四" />
        <TitleView name="王五" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 40,
    lineHeight: 40,
    backgroundColor: "#c3c3c3",
    marginTop: 10
  }
});
