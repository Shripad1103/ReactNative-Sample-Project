import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'
import LowStock from './LowStock'
import FlatListExample from './FlatlistExample'
import VirtualizedListExample from './VirtualizedListExample'
import SwitchBar from './SwitchBar'




const HomeScreen = () => {

    const [view, setView] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>DashBoard</Text>

      <View style={styles.options}>
        <Pressable onPress={()=>setView(0)} style={[styles.button, view === 0 ? {backgroundColor:'#72C37AFF'} : null]}>
            <Text style={[styles.text, view === 0 ? {color:'white'} : null]}>All Items</Text>
        </Pressable>
        <Pressable onPress={()=>setView(1)} style={[styles.button, view === 1 ? {backgroundColor:'#72C37AFF'} : null]}>
            <Text style={[styles.text, view === 1 ? {color:'white'} : null]}>Low Stock</Text>
        </Pressable>
        <Pressable onPress={()=>setView(2)} style={[styles.button, view === 2 ? {backgroundColor:'#72C37AFF'} : null]}>
            <Text style={[styles.text, view === 2 ? {color:'white'} : null]}>Create </Text>
        </Pressable>
        <Pressable onPress={()=>setView(3)} style={[styles.button, view === 3 ? {backgroundColor:'#72C37AFF'} : null]}>
            <Text style={[styles.text, view === 3 ? {color:'white'} : null]}>1 </Text>
        </Pressable>
        <Pressable onPress={()=>setView(4)} style={[styles.button, view === 4 ? {backgroundColor:'#72C37AFF'} : null]}>
            <Text style={[styles.text, view === 4 ? {color:'white'} : null]}>2 </Text>
        </Pressable>
      </View>


      {view === 0 && <AllItems  />}
      {view === 1 && <LowStock  />}
      {view === 2 && <CreateScreen />}
      {view === 3 && <FlatListExample />}
      {view === 4 && <VirtualizedListExample />}
      {/* <SwitchBar /> */}





    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title : {
    fontSize : 24,
    fontWeight : 'bold',
    color:"#333333"
  },
  options : {
    flexDirection: 'row',
    gap : 10,
    marginTop:10,
    marginBottom : 10
  },
  button:{
    paddingVertical:5,
    paddingHorizontal:12,
    borderRadius:50,
    borderWidth:1,
    borderColor:'#72C37AFF',
    backgroundColor:'#ffffff'
  },
  text:{
    fontSize : 15,
    fontWeight : '400',
    color:'green'
  },

})