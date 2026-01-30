import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const AllItems = () => {
  let data = useSelector(state=>state.items)
  console.log(data);
  return (
    <View style={{ flex: 1 }}>


      <View style={styles.heading}>
        <Text style={styles.text}>Items</Text>
        <Text style={styles.text}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
            <View style={[styles.itemContainer, {backgroundColor: item.stock < 10 ? "#FFCCCC" : "#72C37AFF"}]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.stock}</Text>
            </View>
        )}
        contentContainerStyle={{gap:10}}
        
        />


    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom:10
  },
  text: {
    fontWeight: '500',
    fontSize: 19
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    padding:10,
    borderRadius:20
  },
  itemText: {
    fontWeight: '400',
    fontSize: 17
  }
})
