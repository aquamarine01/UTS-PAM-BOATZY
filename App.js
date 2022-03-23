import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Home() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
      }}>
      <Text style={{
        fontSize:50,
      }}>
        MASUKIN HOME KE SINI
      </Text>
    </View>
  );
}

function MyTicket() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
      }}>
      <Text style={{
        fontSize:50,
      }}>
        MASUKIN PESANANAN SAYA KESINI
        </Text>
    </View>
  );
}

function CancelTicket() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
      }}>
      <Text style={{
        fontSize:50,
      }}>
        MASUKIN PEMBATALAN KESINI
        </Text>
    </View>
  );
}
function Other() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
      }}>
      <Text style={{
        fontSize:50,
      }}>
        MASUKIN LAINNYA KESINI
        </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome 
            name="home" 
            color='orange'
            size={35}
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
            size={35}
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
            size={35}
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
            size={35}
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