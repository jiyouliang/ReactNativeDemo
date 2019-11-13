import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import { NavigationStackScreenOptions } from "react-navigation-stack/src/types";
import { NavigationScreenProps } from "react-navigation";

type Props = {};
const TITLES = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M"
];
class FlatLisPage extends Component<Props> {
  public static navigationOptions = (
    props: NavigationScreenProps
  ): NavigationStackScreenOptions => {
    return {
      header: null
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      dataArray: TITLES,
      isLoading: false
    };
  }

  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    );
  }

  loadData(refresh) {
    if (refresh) {
      this.setState({
        isLoading: true
      });
    }
    setTimeout(() => {
      let dataArray = [];
      if (refresh) {
        for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
          dataArray.push(this.state.dataArray[i]);
        }
      } else {
        dataArray = this.state.dataArray.concat(TITLES);
      }
      this.setState({
        dataArray: dataArray,
        isLoading: false
      });
    }, 2000);
  }

  genIndicator() {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          animating={true}
        />
        <Text>正在加载更多</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataArray}
          renderItem={data => this._renderItem(data)}
          // refreshing={this.state.isLoading}
          // onRefresh={() => {
          //     this.loadData();
          // }}
          refreshControl={
            <RefreshControl
              title="Loading..."
              colors={["red"]}
              refreshing={this.state.isLoading}
              onRefresh={() => this.loadData(true)}
              tintColor={"orange"}
            />
          }
          ListFooterComponent={() => this.genIndicator()}
          onEndReached={() => {
            this.loadData();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    height: 100,
    backgroundColor: "#169",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20
  },
  indicatorContainer: {
    alignItems: "center"
  },
  indicator: {
    color: "red",
    margin: 10
  }
});

export default FlatLisPage;
