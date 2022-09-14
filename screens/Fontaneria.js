import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight, } from 'react-native';
import globalStyles from '../app/globalStyles';
import back from '../assets/back.png'

const Fontaneria=({navigation, route})=>{
    return(
        
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <View style={globalStyles.back}>
                <TouchableOpacity  onPress={()=>navigation.navigate("Home")}>
                    <Image source={back} style={globalStyles.btnback}></Image>
                </TouchableOpacity>
            </View>
            <Text style={globalStyles.title}>Fontaneria</Text>
        </View>
        </KeyboardAvoidingView>
        
    )
}
export default Fontaneria;