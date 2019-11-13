import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NetworkPagesContainer } from "../NetworkPages";

export default class SimpleReduxPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  //增加
  private increase = () => {
    this.setState({
      value: this.state.value + 1,
    });
  }

  private decrease = () => {
    this.setState({
      value: this.state.value - 1,
    });
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.decrease}>
          <Text style={styles.title}>-</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{this.state.value}</Text>
        <TouchableOpacity onPress={this.increase}>
          <Text style={styles.title}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "red",
    paddingLeft: 10,
    paddingRight: 10
  },
  value: {
    fontSize: 30,
    color: "#080808"
  }
});
