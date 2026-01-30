import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const VirtualizedListExample = () => {
    const [users, setusers] = useState([])

    useEffect(()=>{
      getUsers();
    },[])

    async function getUsers(){
      let response = await axios.get('https://dummyjson.com/users?limit=200');
      setusers(response.data.users)
    }
  return (
    <View style={{flex:1}}>
      <VirtualizedList 
        data={users}
        getItem={(data, i)=>(data[i])}
        getItemCount={data => data.length}
        renderItem={({item})=>(
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.firstName}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default VirtualizedListExample

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
