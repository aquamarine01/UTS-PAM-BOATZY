import * as React from 'react';
import { Text, View } from 'react-native';

const MyTicket= ({navigation})=> {
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
export default MyTicket;