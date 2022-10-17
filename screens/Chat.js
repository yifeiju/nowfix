import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight,} from 'react-native';
import globalStyles from '../app/globalStyles';
import RatingModal from 'react-native-rating-modal-box';
import { Rating } from 'react-native-ratings';
import { AirbnbRating } from 'react-native-ratings';

const Chat=()=>{
  const[val, setVal]=useState()
    return(
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>chat</Text>
        </View>
        </KeyboardAvoidingView>
    )
}
export default Chat;