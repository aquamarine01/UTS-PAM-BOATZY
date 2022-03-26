import React, { useState } from 'react';
import { Text, View, Modal, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import MyTicket from './MyTicket';
import Other from './Other';
import CancelTicket from './CancelTicket';
import Confirmation from './Confirmation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Searchscreen = ({navigation}) =>{
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <NavigationContainer>
            <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         // Alert.alert("Modal ditutup");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>THE MAKER</Text>
            <Image source={require('../asset/img/ayato.png')} style={{width: 100, height: 100}}/>
            <Text style={styles.modalText}>M. Ammar Fadhila Ramadhan</Text>
            <Text style={styles.modalText}>11940029</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
              tabBarLabel: 'Home',
              headerShown: false,
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
              headerShown: false,
              tabBarLabel: 'Tiket Saya',
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
              headerShown: false,
              tabBarLabel: 'Batal Pesanan',
              tabBarIcon: () => (
                <MaterialCommunityIcons 
                name="book-cancel" 
                color='orange'
                size={30}
                />
              ),
            }}
          />
           <Tab.Screen listeners={ () => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            setModalVisible(true);
                        },
                    })}
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
        <Stack.Screen name="Confirmation" component={Confirmation}/>
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "green",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight:'bold'
    }
  });

export default Searchscreen;