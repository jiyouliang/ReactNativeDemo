import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {createStore} from 'redux';
import { Provider } from 'react-redux';

/**
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */

 

export default class AppCounter extends React.Component {
  state = {
    value: 0
  };

  //增加
  private increase = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  private decrease = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

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
