import * as React from 'react';
import { Text, View } from 'react-native';

const CancelTicket = ({navigation})=> {
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

export default CancelTicket;