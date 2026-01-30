import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SwitchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.options}>All Items</Text>
      <Text>Low Stock</Text>
      <Text>Craete</Text>
    </View>
  )
}

export default SwitchBar

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e3c9c9',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    options:{
    fontSize: 16,
    color: '#333',
    fontWeight: '500'
    }
})