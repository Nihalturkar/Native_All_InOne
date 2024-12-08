import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screen/home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../screen/details'
import Login from '../screen/login'
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
     <Stack.Navigator>
 <Stack.Screen 
 options={{
  headerShown:false
 }
 }
      name='Login'
      component={Login}
      />
      <Stack.Screen 
      name='Home'
      component={Home}
      />
       <Stack.Screen 
      name='Details'
      component={Details}
      />
     </Stack.Navigator>
  )
}

export default Root