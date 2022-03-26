import * as React from 'react';
import { Text, View, Modal, useState, StyleSheet, Pressable } from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);
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
  );
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <NavigationContainer>
      <MyTabs/>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal ditutup");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>NYESEL AMBIL PAM</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>TUTUP INI</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:50
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:50,
  }
});