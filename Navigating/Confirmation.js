import React, { useState } from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Confirmation = ({navigation})=>{
    return(
        <View style={formStyle.box}>
      <Text style={{
        fontSize:35,
        fontFamily:'sans-serif-bold',
        color:'orange',
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
      }}>Boatzy</Text> </View>
    );
}

const formStyle = StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 50,
        paddingTop: 10,
        paddingBottom: 20,
        width: '80%',
        position: 'absolute',
        top: '1%',
        left: '10%',
        shadowColor: '#000',
        elevation: 10,
    },
    package:{
        marginTop: 10,
    },
    formSingle:{
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 5,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    Icon:{
        padding: 10,
    },
    Input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed7c31',
        borderRadius: 5,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        color: '#fff',
    },
    usia:{
      fontSize : 15,
      fontWeight :"bold",
      
    },
    TextUsia :{
      height : 30,
      width : 230,
      borderRadius : 5,
      backgroundColor :"#eff4f4",
      marginTop :10,
      alignItems : "center",
      fontWeight : 'bold'
    },
})

export default Confirmation;