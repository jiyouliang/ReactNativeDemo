import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default class AlignSelfPage extends React.Component {
    render() {
        return (
           <View>
               <Text style={{lineHeight:20}}>alignSelf类似alignItems:</Text>
               <Text style={{lineHeight:20}}>不过alignItems属性用在父控件作用于子控件</Text>
               <Text style={{lineHeight:20}}>而alignSelf用在子控件作用于自己本身</Text>
               <Text style={{lineHeight:20, fontWeight:'bold'}}>取值范围：flex-start、flex-end、center、stretch</Text>
               <View style={styles.container}>
                   <Text style={[styles.item, {width:100, height:100, alignSelf: 'flex-start', marginTop:10}]}>alignSelf:flex-start</Text>
                   <Text style={[styles.item, {backgroundColor: 'skyblue',alignSelf: 'flex-end'}]}>alignSelf:flex-end,这里alignItems:stretch失效</Text>
                   <Text style={[styles.item, {height: 100, backgroundColor: 'steelblue', alignSelf:'center', marginTop:10}]}>alignSelf:center</Text>
                   <Text style={[styles.item, {height: 100, backgroundColor: '#ff7687', alignSelf:'stretch', marginTop:10}]}>alignSelf:stretch</Text>
               </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    item: {
        height: 50,
        backgroundColor: 'powderblue',
    }
});
