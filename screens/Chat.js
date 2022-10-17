import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight,} from 'react-native';
import globalStyles from '../app/globalStyles';
import RatingModal from 'react-native-rating-modal-box';

const Chat=()=>{
    const [isOpenRating, setOpenRating] = useState(true);
    return(
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>chat</Text>
        </View>
        <RatingModal
        onClose={() => setOpenRating(false)}
        visible={isOpenRating}
        
        ratingConfirm={selectedRating => {
          console.log('Selected rating', selectedRating);
        }}
      />
        </KeyboardAvoidingView>
    )
}
export default Chat;