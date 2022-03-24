import React from 'react';
import {View, Text} from 'react-native';
import Searchscreen from './Searchscreen';

const Home = ({navigation})=>{
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
export default Home;