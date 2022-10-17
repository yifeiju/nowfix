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
        <Text>{val}</Text>
        <AirbnbRating count={5} defaultRating={5} onFinishRating={setVal}></AirbnbRating>
      <Rating readonly startingValue={3} style={{marginBottom:500}}></Rating>
      
        </KeyboardAvoidingView>
    )
}
export default Chat;