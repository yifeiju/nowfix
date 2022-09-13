import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight, } from 'react-native';
import globalStyles from '../app/globalStyles';

const Informatica=()=>{
    return(
        
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <Text>Informatica</Text>
        </View>
        </KeyboardAvoidingView>
        
    )
}
export default Informatica;