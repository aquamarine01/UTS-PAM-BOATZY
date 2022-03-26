import React, { useState } from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Home = ({navigation})=>{
  const [text, onChangeText] = useState({
    keberangkatan: '',
    tujuan: '',
    Kelas: '',
    tanggal: '',
    jam: '',
});
  const clickHandler = (textInput) => {
    return (value) => {
        onChangeText({ ...text, [textInput]: value });
    }
  }
  const [selectedValueAwal, setselectedValueAwal] = useState("Pilih pelabuhan awal");
  const [selectedValueTujuan, setselectedValueTujuan] = useState("Pilih pelabuhan tujuan");
  const [selectedValueKelas, setselectedValueKelas] = useState("Pilih kelas");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  

  return (
    <View style={formStyle.box}>
      <Text style={{
        fontSize:35,
        fontFamily:'sans-serif-bold',
        color:'orange',
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
      }}>Boatzy</Text>
        <View style={formStyle.package}>
            <Text style={formStyle.text}>Pelabuhan Awal</Text>
            <View style={formStyle.formSingle}>
                <MaterialCommunityIcons style={formStyle.Icon} 
                name="sail-boat" 
                size={20} 
                color="gray"/>
                <Picker
                    style={formStyle.Input}
                    placeholder="Pelabuhan Awal"
                    selectedValue={selectedValueAwal}
                    onValueChange={(itemValue, itemIndex) =>
                      setselectedValueAwal(itemValue)}
                    value={text.keberangkatan}
                    onChangeText={clickHandler('keberangkatan')}
                    underlineColorAndroid="transparent"
                >
                <Picker.Item label="Bakauheni" value="Bakauheni" />
                <Picker.Item label="Merak" value="Merak" />
                </Picker>
            </View>
        </View>
        
        <View style={formStyle.package}>
            <Text style={formStyle.text}>Pelabuhan Tujuan</Text>
            <View style={formStyle.formSingle}>
                <Fontisto style={formStyle.Icon}
                 name="sait-boat" 
                 size={20}
                  color="gray"/>
                <Picker
                    style={formStyle.Input}
                    placeholder="Pelabuhan Tujuan"
                    selectedValue={selectedValueTujuan}
                    onValueChange={(itemValue, itemIndex) =>
                      setselectedValueTujuan(itemValue)}
                    value={text.tujuan}
                    onChangeText={clickHandler('tujuan')}
                    underlineColorAndroid="transparent"
                >
                <Picker.Item label="Bakauheni" value="Bakauheni" />
                <Picker.Item label="Merak" value="Merak" />
                </Picker>
            </View>
        </View>

        <View style={formStyle.package}>
            <Text style={formStyle.text}>Kelas Pelayanan</Text>
            <View style={formStyle.formSingle}>
                <MaterialCommunityIcons 
                style={formStyle.Icon}
                name="human-male" 
                size={25} 
                color="gray"/>
                <Picker
                    style={formStyle.Input}
                    placeholder="kelas Pelayanan"
                    selectedValue={selectedValueKelas}
                    onValueChange={(itemValue, itemIndex) =>
                      setselectedValueKelas(itemValue)}
                    value={text.Kelas}
                    onChangeText={clickHandler('Kelas')}
                    underlineColorAndroid="transparent"
                >
                <Picker.Item label="Ekonomi" value="Ekonomi" />
                <Picker.Item label="Bisnis" value="Bisnis" />
                <Picker.Item label="Elite" value="Elite" />
              </Picker>
            </View>
        </View>
        <View style={formStyle.package}>
            <Text style={formStyle.text}>Tanggal Masuk</Text>
            <View style={formStyle.formSingle}>
                <MaterialCommunityIcons 
                style={formStyle.Icon}
                name="calendar-check" 
                size={20} 
                color="gray"/>
               <Button title="Tanggal Masuk" onPress={showDatePicker} />
               <DateTimePickerModal
               isVisible={isDatePickerVisible}
               mode="date"
               value={text.tanggal}
               onConfirm={clickHandler('tanggal')}
               onCancel={hideDatePicker}
               />
            </View>
        </View>
        <View style={formStyle.package}>
            <Text style={formStyle.text}>Jam Masuk</Text>
            <View style={formStyle.formSingle}>
                <MaterialCommunityIcons 
                style={formStyle.Icon}
                name="clock" 
                size={20} 
                color="gray"/>
                <Button title="Jam Masuk" onPress={showTimePicker} />
               <DateTimePickerModal
               isVisible={isTimePickerVisible}
               mode="time"
               value={text.jam}
               onConfirm={clickHandler('jam')}
               onCancel={hideTimePicker}
               />
               
            </View>
        </View>
        <View style={formStyle.usia}>
            <Text style={formStyle.TextUsia}>
              Dewasa                                   1 orang
            </Text>
          </View>

        <View style={formStyle.package}>
            <TouchableOpacity 
                style={formStyle.button}
                onPress={() => navigation.navigate('Pesanan Saya', {data: text})}
            >
                <Text style={formStyle.textButton}>Buat Tiket</Text>
            </TouchableOpacity>
        </View>
    </View>
)
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
export default Home;