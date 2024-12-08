import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screen/home'
import Details from './src/screen/details'
import Root from './src/Root'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
store
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
     </Provider>
  )
}

export default App