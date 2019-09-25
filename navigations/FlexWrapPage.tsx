import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default class FlexWrapPage extends React.Component {
    render() {
        return (
           <View>
               <Text style={{lineHeight:20}}>flexWrap用来控制子控件超出flex container如何显示：</Text>
               <Text style={{lineHeight:20}}>取值范围：nowrap、wrap</Text>

               <Text style={{lineHeight:20, marginTop:20}}>flexWrap默认nowrap：下面例子10个Item，超出不自动换行显示</Text>
               <View style={styles.container}>
                   <Text style={styles.item}>Item1</Text>
                   <Text style={styles.item}>Item2</Text>
                   <Text style={styles.item}>Item3</Text>
                   <Text style={styles.item}>Item4</Text>
                   <Text style={styles.item}>Item5</Text>
                   <Text style={styles.item}>Item6</Text>
                   <Text style={styles.item}>Item7</Text>
                   <Text style={styles.item}>Item8</Text>
                   <Text style={styles.item}>Item9</Text>
                   <Text style={styles.item}>Item10</Text>
               </View>

               <Text style={{lineHeight:20, marginTop:100}}>flexWrap:wrap，下面例子10个Item，超出自动换行显示</Text>
               <View style={[styles.container, {flexWrap:'wrap'}]}>
                   <Text style={styles.item}>Item1</Text>
                   <Text style={styles.item}>Item2</Text>
                   <Text style={styles.item}>Item3</Text>
                   <Text style={styles.item}>Item4</Text>
                   <Text style={styles.item}>Item5</Text>
                   <Text style={styles.item}>Item6</Text>
                   <Text style={styles.item}>Item7</Text>
                   <Text style={styles.item}>Item8</Text>
                   <Text style={styles.item}>Item9</Text>
                   <Text style={styles.item}>Item10</Text>
               </View>
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
        lineHeight:50,
        textAlign:'center',
        marginTop:10,
        marginRight:10,
        backgroundColor: 'powderblue',
    }
});
