import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight, } from 'react-native';
import globalStyles from '../app/globalStyles';
import back from '../assets/back.png'

const Cerrajeria=({navigation, route})=>{
    return(
        
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
        <TouchableOpacity style={globalStyles.back} onPress={()=>navigation.navigate("Home")}>
                <Image source={back} style={globalStyles.btnback}></Image>
            </TouchableOpacity>
            <Text style={globalStyles.title}>Cerrajeria</Text>
        </View>
        </KeyboardAvoidingView>
        
    )
}
export default Cerrajeria;