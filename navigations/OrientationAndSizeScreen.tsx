import * as React from "react";
import { View, StyleSheet, Text, Dimensions, Platform } from "react-native";
import { NavigationStackScreenOptions } from "react-navigation-stack/src/types";
import { NavigationScreenProps } from "react-navigation";
import Orientation from 'react-native-orientation-locker'

export interface OrientationAndSizeScreenProps {}
export interface OrientationAndSizeScreenState {
  orientation: string;
  width: number;
  height: number;
}

/**
 * 获取屏幕方向、屏幕大小
 *
 * @export
 * @class OrientationAndSizeScreen
 * @extends {React.Component<OrientationAndSizeScreenProps, OrientationAndSizeScreenState>}
 */
export default class OrientationAndSizeScreen extends React.Component<
  OrientationAndSizeScreenProps,
  OrientationAndSizeScreenState
> {
  public static navigationOptions = (
    props: NavigationScreenProps
  ): NavigationStackScreenOptions => {
    return {
      header: null
    };
  };
  constructor(props: OrientationAndSizeScreenProps) {
    super(props);
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;
    this.state = {
      orientation: "PORTRAIT",
      // float转int
      width: Math.floor(width),
      height: Math.floor(height)
    };
  }

  private _onOrientionChange =(orientation:string) => {
    console.log("_onOrientionChange:orientation="+orientation)
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;
    this.setState({
      orientation:orientation,
      width: Math.floor(width),
      height: Math.floor(height)
    })
  }

  public componentDidMount(){
    Orientation.addOrientationListener(this._onOrientionChange);
  }

  public render() {
    const { orientation, width, height } = this.state;
    return (
      <View style={styles.container}
      >
        <View>
          <Text>屏幕方向:{orientation}</Text>
          <Text>width:{width}, height:{height}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
