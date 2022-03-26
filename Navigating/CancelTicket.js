import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CancelTicket = ({navigation})=> {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        }}>
        <Text style={{
          fontSize:25,
          fontFamily:'sans-serif-bold',
        }}>
          Tidak ada pembatalan tiket
          </Text>
          <Image source={require('../asset/img/nocancel.jpg')} style={{width: 200, height: 200}}/>
      </View>
    );
  }

export default CancelTicket;