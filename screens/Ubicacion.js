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
import logo from '../assets/logo.png';
import Location from "../components/Location";

const Ubicacion = ({ navigation, route = {} }) => {
    
    return (
      <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
        <View style={globalStyles.container}>
          <View style={globalStyles.titleview}>
            <TouchableOpacity onPress={() => navigation.navigate("Ajustes")}>
              <Image source={back} style={globalStyles.btnback}></Image>
            </TouchableOpacity>
            <Text style={globalStyles.title1}>Ubicación</Text>
            <View></View>
          </View>
          <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:80,marginBottom:30}}>Cambiar ubicación</Text>
          <><Location /></>
          <TouchableOpacity
            style={styles.prompt}
            onPress={() => {}}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Aplicar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };
  export default Ubicacion;
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    prompt: {
      marginTop: 40,
      alignItems: "center",
      width: "100%",
    },
    input: {
      borderWidth: 1,
      borderColor: "#FF8200",
      borderRadius: 8,
      marginTop: 40,
      height: 50,
      width: "90%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 15,
    },
    negrita: {
      fontWeight: "bold",
      textAlign: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "80%",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.5)',
    },
    buttonpop: {
      width: "40%",
      height: 48,
      borderRadius: 37,
      backgroundColor: "#FF8200",
      textAlign: "center",
      justifyContent: "center",
  
      marginTop: 35,
    },
    buttonpop1: {
      width: "40%",
      height: 48,
      borderRadius: 37,
      borderColor: "#FF8200",
      borderWidth: 1,
      textAlign: "center",
      justifyContent: "center",
      marginTop: 35,
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
  });
  