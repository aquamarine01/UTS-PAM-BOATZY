import React from 'react';
import {View, Text} from 'react-native';
import Searchscreen from './Searchscreen';

const Homescreen = ({navigation})=>{
    return(
        <View>
            <Searchscreen navigation={navigation}/>
        </View>
    );
}

export default Homescreen;