import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const Task = ( props ) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}/>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item :{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20

    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
square :{
    backgroundColor:'#55BCF6',
    width:24,
    height:24,
    opacity:.4,
    borderRadius:5,
    marginRight:15,
},
itemText :{
    maxWidth:'80%',
},
circular :{
    width:12,
    height:12,
    borderColor:'#55BCf6',
    borderWidth:2,
    borderRadius:5,
},
});

export default Task