import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight, } from 'react-native';
import globalStyles from '../app/globalStyles';
import back from '../assets/back.png'

const Lampisteria=({navigation, route})=>{
    return(
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <View style={globalStyles.titleview}> 
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Image source={back} style={globalStyles.btnback}></Image>
                </TouchableOpacity>
                <Text style={globalStyles.title1}>Lampisteria</Text><View></View>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}
export default Lampisteria;