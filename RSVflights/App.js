import React from 'react';
// import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SingUp from './src/screens/SingUp';
import Home from './src/screens/MyFlights';
import LogIn from './src/screens/LoginForm';
import Booking from './src/screens/Booking';
import Booking_fly from './src/screens/BookingDestination';
import Date from './src/screens/BookingDate';
import Passenger from './src/screens/BookingPassengers';
import Result from './src/screens/BookingResult';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking_fly"
          component={Booking_fly}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Date"
          component={Date}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Passenger"
          component={Passenger}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
