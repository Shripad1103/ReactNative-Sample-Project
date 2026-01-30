import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addItem, deleteItem, updateItem} from '../redux/itemsSlice'

const CreateScreen = () => {
  const [itemName, setitemName] = useState('')
  const [stockAmt, setstockAmt] = useState('')
  const [edit, setedit] = useState(false)
  const [selctedId, setselctedId] = useState(null)

  let data = useSelector(state=>state.items)
  let dispatch = useDispatch();

  let DeleteHandle = (id) =>{
    dispatch(deleteItem(id));
  }

  let editHandle = (item) => {
    setitemName(item.name)
    setstockAmt(item.stock.toString())
    setedit(true);
    setselctedId(item.id)
  }

  function editItemHandle() {
  let obj = {
    id: selctedId,
    name: itemName,
    stock: Number(stockAmt)
  };

  dispatch(updateItem(obj));  
  setitemName("");
  setstockAmt("");
  setedit(false);
  setselctedId(null);
}


  let AddItemHandle = () => {
    if(itemName === "" || stockAmt === "") return;
    let obj = {
      id:Date.now(),
      name:itemName,
      stock:stockAmt
    }
    dispatch(addItem(obj))
    setitemName("");
    setstockAmt("");
    setedit(false);
  }
  

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          placeholder='Enter name of new item...'
          placeholderTextColor="#333"
          style={styles.input}
          value={itemName}
          onChangeText={(item)=>setitemName(item)}
        />
        <TextInput
          placeholder='Enter stockAmt...'
          placeholderTextColor="#333"
          style={styles.input2}
          value={stockAmt}
          onChangeText={(amt)=>setstockAmt(amt)}
        />

        <Pressable style={styles.button} onPress={edit ? editItemHandle : AddItemHandle}>
          <Text style = {styles.text}>{edit ? "Edit ITEM" : "ADD ITEM"}</Text>
        </Pressable>
      </View>

      <View style={{ flex: 1, marginTop:30}}>
      
      
            <View style={styles.heading}>
              <Text style={styles.headingText}>Total Items</Text>
            </View>
      
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              style={{ flex: 1 }}
              renderItem={({ item }) => (
                  <View style={[styles.itemContainer, {backgroundColor: item.stock < 10 ? "#FFCCCC" : "#72C37AFF"}]}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <View style={{flexDirection:"row", gap:20}}>
                      <Text style={styles.itemText}>{item.stock}</Text>
                      <Pressable onPress={()=> editHandle(item)}><Text>Edit</Text></Pressable>
                      <Pressable onPress={()=>DeleteHandle(item.id)}><Text>Delete</Text></Pressable>
                    </View>
                  </View>
              )}
              contentContainerStyle={{gap:10}}
              />
      
      
          </View>


    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container:{
    padding:4,
    marginTop:10,
    gap:10
  },
  input:{
    paddingVertical:10,
    borderWidth:1.5,
    borderRadius:10,
    fontSize:13,
    borderColor:"#72C37AFF"
  },
  input2:{
    paddingVertical:10,
    borderWidth:1.5,
    borderRadius:10,
    fontSize:13,
    borderColor:"#72C37AFF"
  },
  button:{
    backgroundColor:"rgb(94, 127, 174)",
    
    padding:2,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10
  },
  text:{
    fontSize:17,
    color:'white'
  },
   heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom:10
  },
  headingText: {
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
    fontSize: 15
  }
})