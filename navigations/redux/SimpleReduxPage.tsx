import React from "react";
import { NavigationScreenProps } from "react-navigation";
import { NavigationStackScreenOptions } from "react-navigation-stack/src/types";
import AppCounter from "./AppCounter";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const reducer = () => {

}

const store = createStore(reducer)

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
      <Provider store={store}>
        <AppCounter />
      </Provider>
    );
  }
}

