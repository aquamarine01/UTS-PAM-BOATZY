import * as React from 'react';
import { Text, View } from 'react-native';

const Other= ({navigation})=> {
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

export default Other;