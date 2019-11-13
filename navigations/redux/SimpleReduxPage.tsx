import React from "react";
import { NavigationScreenProps } from "react-navigation";
import { NavigationStackScreenOptions } from "react-navigation-stack/src/types";
import AppCounter from "./AppCounter";

export default class SimpleReduxPage extends React.Component {
  public static navigationOptions = (
    props: NavigationScreenProps
  ): NavigationStackScreenOptions => {
    return {
      title: "redux简单实现"
    };
  };
 

  public render() {
    return (
      <AppCounter />
    );
  }
}

