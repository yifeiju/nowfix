import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight} from 'react-native';
import globalStyles from '../app/globalStyles';

const Chat=()=>{
    return(
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <Text>chat</Text>
        </View>
        </KeyboardAvoidingView>
    )
}
export default Chat;