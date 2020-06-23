import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  NavigationScreenProps
} from "react-navigation"; // Version can be specified in package.json
// import HomePage from './HomePage';
import PropsPage from "./PropsPage";
import StatePage from "./StatePage";
import WidthHeightPage from "./WidthHeightPage";
import FlexWidthHeightPage from "./FlexWidthHeightPage";
import MixedLayoutPage from "./MixedLayoutPage";
import JustifyContentPage from "./JustifyContentPage";
import AlignItemsHome from "./AlignItemsHome";
import AlignItemsWrapper from "./AlignItemsWrapper";
import AlignSelfPage from "./AlignSelfPage";
import MixedLayoutPage2 from "./MixedLayoutPage2";
import MixedLayoutPage3 from "./MixedLayoutPage3";
import FlexWrapPage from "./FlexWrapPage";
import ListViewPage from "./ListViewPage";
import ActivityIndicatorPage from "./ActivityIndicatorPage";
import NetworkManagerPage from "./NetworkManagerPage";
import LoginPage from "./LoginPage";
import ReactPassToRN from "./ReactPassToRN";
import { NavigationStackScreenOptions } from "react-navigation-stack/src/types";
import FlatListPage from "./FlatListPage";
import { ScrollView } from "react-native-gesture-handler";
import SimpleReduxPage from "./redux/SimpleReduxPage";
import NativeCallbackRN from "./NativeCallbackRN"
import OrientationAndSizeScreen from './OrientationAndSizeScreen'

export interface HomePageProps {
  messageProp?: string;
  imgProp?: string;
}

export interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  public static navigationOptions = (
    props: NavigationScreenProps
  ): NavigationStackScreenOptions => {
    const { params } = props.navigation.state;

    return {
      header: null
    };
  };

  constructor(props: HomePageProps) {
    super(props);
  }

  render() {
    const { message, img } = this.props;
    console.log("message=" + message + ",img=" + img);
    return (
      <View style={{ flexDirection: "column", flex: 1, alignItems: "stretch" }}>
        <ScrollView style={{marginBottom:20}}>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("PropsPage")}
        >
          Props属性
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("StatePage")}
        >
          State状态
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("WidthHeightPage")}
        >
          宽度和高度
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("FlexWidthHeightPage")}
        >
          flex宽度和高度
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("JustifyContentPage")}
        >
          justifyContent
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("MixedLayoutPage")}
        >
          ReactNative实现复杂布局
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("MixedLayoutPage3")}
        >
          ReactNative实现复杂布局3
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("MixedLayoutPage2")}
        >
          ReactNative实现复杂布局(样式抽取)
        </Text>

        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("AlignItemsWrapper")}
        >
          alignItems
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("AlignSelfPage")}
        >
          alignSelf
        </Text>

        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("FlexWrapPage")}
        >
          flexWrap
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("ListViewPage")}
        >
          ListView（Deprecated）
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() =>
            this.props.navigation.navigate("ActivityIndicatorPage")
          }
        >
          ActivityIndicator
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("NetworkManagerPage")}
        >
          网络请求相关
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("LoginPage")}
        >
          navigation导航器相关
        </Text>

        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("ReactPassToRN")}
        >
          RN获取android数据
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("FlatListPage")}
        >
          FlatList
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("SimpleReduxPage")}
        >
          SimpleReduxPage
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("NativeCallbackRN")}
        >
          Native回调RN
        </Text>
        <Text
          style={styles.itemStyle}
          onPress={() => this.props.navigation.navigate("OrientationAndSizeScreen")}
        >
          屏幕方向、大小
        </Text>
        
        </ScrollView>
        
      </View>
    );
  }
}

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage
    },
    PropsPage: {
      screen: PropsPage
    },
    StatePage: {
      screen: StatePage
    },
    WidthHeightPage: {
      screen: WidthHeightPage
    },
    FlexWidthHeightPage: {
      screen: FlexWidthHeightPage
    },
    MixedLayoutPage: {
      screen: MixedLayoutPage
    },

    JustifyContentPage: {
      screen: JustifyContentPage
    },
    AlignItemsWrapper: {
      screen: AlignItemsWrapper
    },
    AlignSelfPage: {
      screen: AlignSelfPage
    },
    MixedLayoutPage2: {
      screen: MixedLayoutPage2
    },
    MixedLayoutPage3: {
      screen: MixedLayoutPage3
    },
    FlexWrapPage: {
      screen: FlexWrapPage
    },
    ListViewPage: {
      screen: ListViewPage
    },
    ActivityIndicatorPage: {
      screen: ActivityIndicatorPage
    },
    NetworkManagerPage: {
      screen: NetworkManagerPage
    },
    LoginPage: {
      screen: LoginPage
    },
    FlatListPage: {
      screen: FlatListPage
    },
    SimpleReduxPage:{
      screen:SimpleReduxPage
    },
    ReactPassToRN,
    NativeCallbackRN,
    OrientationAndSizeScreen,
  },
  {
    initialRouteName: "Home"
  }
);

export const AppContainer = createAppContainer(appStackNavigator);

const styles = StyleSheet.create({
  itemStyle: {
    marginTop: 10,
    height: 30,
    backgroundColor: "#c3c3c3",
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "bold"
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default HomePage;
