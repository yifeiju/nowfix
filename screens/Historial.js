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
import { useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { AppConstants } from "../app/utils/constants";
import back from "../assets/back.png";
import fotoperfil from "../assets/Fotoperfil.png";
import { fb } from "../app/firebase";



const Historial = ({ navigation, route = {} }) => {
  

    return (
      <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
        <View style={globalStyles.container}>
          <View style={globalStyles.titleview}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={back} style={globalStyles.btnback}></Image>
            </TouchableOpacity>
            <Text style={globalStyles.title1}>Historial de clientes</Text>
            <View></View>
          </View>
        
        </View>
      </KeyboardAvoidingView>
    );
  };
  export default Historial;
  
  const styles = StyleSheet.create({
    center: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 55,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      padding: 35,
      alignItems: "center",
      width:'80%'
    },
  
    prompt: {
      marginTop: 40,
      paddingLeft:'5%',
      paddingRight:'5%'
      
    },
  
    txtcenter: {
      textAlign: "center",
      color: "white",
    },
  
    input: {
      padding: 12,
      fontSize: 16,
      color: "#626262",
      backgroundColor: "#D9D9D9",
      borderRadius: 8,
      marginTop: 40,
      height: 40,
      width: "100%",
    },
    white: {
      color: "white",
      marginBottom: 20,
    },
  
    negrita: {
      fontWeight: "bold",
      textAlign:'center',
      alignItems:'center'
    },
    siempre: {
      color: "#041E42",
      textAlign: "center",
      fontSize: 23,
      marginTop: 48,
      marginBottom: 30,
    },
    buttonpop:{
      width:'100%',
      height:96,
      borderRadius:37,
      backgroundColor:'#FF8200',
      textAlign:'center',
      justifyContent: 'center', 
      marginBottom:35,
      marginTop:35
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });
  