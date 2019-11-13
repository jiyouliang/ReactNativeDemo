// 演示navigation导航器相关功能
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { NavigationStackScreenOptions } from "react-navigation-stack/src/types";

export interface LoginPageProps {
  message?: string;
}

export interface LoginPageState {}

class ReactPassToRN extends React.Component<LoginPageProps, LoginPageState> {
  public static navigationOptions = (props): NavigationStackScreenOptions => {
    return {
      header: null
    };
  };

  constructor(props: LoginPageProps) {
    super(props);
  }

  
  render() {
    return (
      <View style={{flex:1, flexDirection:'column', justifyContent:'center', padding:20}}>
        <Text>以下数据来自Android</Text>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

export default ReactPassToRN;
