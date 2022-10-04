import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  
} from "react-native";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";

const Personperfil = ({ navigation, route = {} }) => {
    
    return (
      <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
        <View style={globalStyles.container}>
          <View style={globalStyles.titleview}>
            <TouchableOpacity onPress={() => navigation.navigate("service")}>
              <Image source={back} style={globalStyles.btnback}></Image>
            </TouchableOpacity>
            <Text style={globalStyles.title1}>Personperfil</Text>
            <View></View>
          </View>
          
        </View>
      </KeyboardAvoidingView>
    );
  };
  export default Personperfil;
  