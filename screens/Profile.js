import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight} from 'react-native';
import globalStyles from '../app/globalStyles';

const Profile=()=>{
    return(
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <Text>Profile</Text>
        </View>
        </KeyboardAvoidingView>
    )
}
export default Profile;