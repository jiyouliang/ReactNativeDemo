import React from "react";
import {StyleSheet, Text, View, ActivityIndicator} from "react-native";


export default class ActivityIndicatorPage extends React.Component {
    render() {
        return (
            <View style={{paddingTop:20}}>
                <Text>animating={true} color='skyblue' size='small'</Text>
                <ActivityIndicator animating={true} color='skyblue' size='small'/>

                <Text style={{marginTop:20}}>animating={true} color='skyblue' size='small'</Text>
                <ActivityIndicator animating={true} color='skyblue' size='large'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    item: {
        height: 50,
        width: 50,
        lineHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginRight: 10,
        backgroundColor: 'powderblue',
    }
});
