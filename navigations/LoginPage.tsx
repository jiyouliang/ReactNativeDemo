// 演示navigation导航器相关功能
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { NavigationStackScreenOptions } from "react-navigation-stack/src/types";

class HeaderView extends React.Component {

  

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../img/close_modal.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export interface LoginPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface LoginPageState {}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  public static navigationOptions = (props): NavigationStackScreenOptions => {
    const onClose = props.navigation.getParam("onClose");
    return {
      header: (
        <View style={styles.container}>
          <TouchableOpacity style={styles.iconContainer} onPress={onClose}>
            <Image
              style={styles.icon}
              source={require("../img/close_modal.png")}
            />
          </TouchableOpacity>
        </View>
      )
    };
  };

  constructor(props: LoginPageProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.navigation.setParams({
      onClose:this.onClose
    })
  }

  public render() {
    return (
      <View>
        <Text>登录页面</Text>
      </View>
    );
  }

  
  private onClose = () => {
    const { navigation } = this.props
    navigation.goBack()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 44,
    paddingHorizontal: 15,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  iconContainer: {
    flexDirection: "row",
    height: 44,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 16,
    height: 16
  }
});

export default LoginPage;
