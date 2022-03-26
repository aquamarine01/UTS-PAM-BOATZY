import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Searchscreen from './Navigating/Searchscreen';
import CancelTicket from './Navigating/CancelTicket';
import MyTicket from './Navigating/MyTicket';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(){
   return(
     <Searchscreen/>
  );
}

export default App;