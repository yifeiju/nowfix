import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight, } from 'react-native';
import globalStyles from '../app/globalStyles';

const Cristaleria=()=>{
    return(
        
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <Text>Cristaleria</Text>
        </View>
        </KeyboardAvoidingView>
        
    )
}
export default Cristaleria;