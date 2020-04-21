import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddEntry from './components/AddEntry'
import History from './components/History'
import reducer from './reducers'

export default function App() {
  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 25 }} />
        {/* <AddEntry /> */}
        <History />
      </View>
    </Provider>
  )
}