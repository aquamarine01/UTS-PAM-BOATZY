import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ticket } from '../asset/data/Ticket';

const MyTicket= ({})=> (
  <View style={ticketstyle.box}>
    <Text style={ticketstyle.text}>DETAIL</Text>
    <Text style={ticketstyle.text}>{Ticket[0].keberangkatan}      ----------{">"}     {Ticket[0].tujuan}</Text>
    <Text style={ticketstyle.text}></Text>
    <Text style={ticketstyle.text}>TANGGAL DAN JAM MASUK</Text>
    <Text style={ticketstyle.text}>{Ticket[0].tanggal}</Text>
    <Text style={ticketstyle.text}>{Ticket[0].jam}</Text>
    <Text style={ticketstyle.text}></Text>
    <Text style={ticketstyle.text}>KELAS</Text>
    <Text style={ticketstyle.text}>{Ticket[0].kelas}</Text>
    <Text style={ticketstyle.text}></Text>
    <Text style={ticketstyle.text}>HARGA</Text>
    <Text style={ticketstyle.text}>{Ticket[0].harga}</Text>
    <Text style={ticketstyle.text}></Text>
    <Text style={ticketstyle.text}>STATUS</Text>
    <Text style={ticketstyle.text}>Ready</Text>
    <Text style={ticketstyle.text}></Text>
    <Text style={ticketstyle.text}>IDENTITAS</Text>
    <Text style={ticketstyle.text}>{Ticket[0].nama}</Text>
    <Text style={ticketstyle.text}>{Ticket[0].kelamin}</Text>
    <Text style={ticketstyle.text}>{Ticket[0].umur}</Text>
  </View>
)

  const ticketstyle = StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: 10,
    },
    upperText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    bodyBox:{
        marginTop: 10,
        alignContent: 'flex-start',
    },  
    Image:{
        width: null,
        resizeMode: 'contain',
        height: 50,
    },
    underText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    text:{
        fontWeight: 'bold',
        textAlign:'center'
    },
    textBlue:{
        fontWeight: 'bold',
        color: 'blue',
    }
})
export default MyTicket;