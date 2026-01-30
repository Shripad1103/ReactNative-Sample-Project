import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from './src/screens/HomeScreen'
import { Provider } from 'react-redux'
import {store, persistor} from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
})

