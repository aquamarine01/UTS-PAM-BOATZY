import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Navigating/Home';
import MyTicket from './Navigating/MyTicket';
import CancelTicket from './Navigating/CancelTicket';
import Other from './Navigating/Other';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor:'grey',
        tabBarHideOnKeyboard:'True',
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: () => (
            <FontAwesome 
            name="home" 
            color='orange'
            size={30}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Pesanan Saya"
        component={MyTicket}
        options={{
          tabBarLabel: 'Pesanan Saya',
          tabBarIcon: () => (
            <MaterialCommunityIcons 
            name="book" 
            color='orange'
            size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={CancelTicket}
        options={{
          tabBarLabel: 'Pembatalan',
          tabBarIcon: () => (
            <MaterialCommunityIcons 
            name="book-cancel" 
            color='orange'
            size={30}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Lainnya"
        component={Other}
        options={{
          tabBarLabel: 'Lainnya',
          tabBarIcon: () => (
            <MaterialCommunityIcons 
            name="menu" 
            color='orange'
            size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}