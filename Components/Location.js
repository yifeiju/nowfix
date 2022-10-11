import React, { useState } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
  } from "react-native";
  import loc from '../assets/loc.png'
  import mapa from '../assets/mapa.png'

  const Location = () => {
    
    return (
    <View>
        <View style={styles.searchContainer}>
          <Image source={loc} style={{ width: 24, height: 24 }}></Image>
          <TextInput
            underlineColorAndroid="transparent"
            style={{ marginLeft: 10, width: "85%", height: "80%" }}
          ></TextInput>
        </View>
        <View style={styles.center}>
            <Image source={mapa} style={{ width:300, height: 300 }}></Image>
        </View>
    </View>
      
    );
  };
  export default Location;

  const styles = StyleSheet.create({
    center: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
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
  
    prompt: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    prompt2: {
      marginTop: 20,
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
      textAlign: "center",
      alignItems: "center",
    },
    siempre: {
      color: "#041E42",
      textAlign: "center",
      fontSize: 23,
      marginTop: 48,
      marginBottom: 30,
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
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    searchContainer: {
      height: 48,
      borderRadius: 6,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 10,
      backgroundColor: "#D9D9D9",
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
  });
  