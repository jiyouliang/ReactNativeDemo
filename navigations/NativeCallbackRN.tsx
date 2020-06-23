import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationStackScreenOptions } from 'react-navigation-stack/src/types'
import { NavigationScreenProps } from 'react-navigation'

export interface NativeCallbackRNProps {
}
export interface NativeCallbackRNState {
}

export default class NativeCallbackRN extends React.Component<NativeCallbackRNProps, NativeCallbackRNState> {
  public static navigationOptions = (props: NavigationScreenProps): NavigationStackScreenOptions => {
      return {
          header: null
      }
  }
  constructor(props: NativeCallbackRNProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>NativeCallbackRN Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
    }
})