import React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import SingUp from './src/screens/SingUp';
import Home from './src/screens/Home';
import LogIn from './src/screens/LogIn';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="SingUp" component ={SingUp} options= {{headerShown: false}} />
        <Stack.Screen name ="Home" component ={Home}   />
        <Stack.Screen name ="LogIn" component ={LogIn}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;