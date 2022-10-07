import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";
import fotoperfil from '../assets/Fotoperfil.png'
import chat from '../assets/chaticon.png'
import star from '../assets/star.png'

const Personperfil = ({ navigation, route = {} }) => {
    const user = route.params ?? {};
    return (
      <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
        <View style={globalStyles.container}>
          <View style={globalStyles.titleview}>
            <TouchableOpacity onPress={() => navigation.navigate("service")}>
              <Image source={back} style={globalStyles.btnback}></Image>
            </TouchableOpacity>
            <Text ></Text>
            <View></View>
          </View>
          <ScrollView>
            <View style={styles.center}>
              <Image source={fotoperfil} style={{height:96, width:96,alignItems:'center' }}></Image>
          </View>
          <Text style={{ textAlign: "center", marginTop: 10 , fontWeight:'bold'}}>
            {user?.name}
          </Text>
          {user.location && (<Text style={{color:'#626262', textAlign:'center', marginTop:10}}>a {user?.location} km de ti</Text>)}
          <View style={{width:'100%',height:50,marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View></View>
            <View></View>
            <Image source={chat} style={{height:40, width:40}}></Image>
            <Image source={star} style={{height:40, width:40}}></Image>
            <View></View>
            <View></View>
          </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  };
  export default Personperfil;

  const styles = StyleSheet.create({
    margin: {
      marginBottom: 32,
      alignItems: "center",
    },
    negrita: {
      fontWeight: "bold",
      textAlign: "center",
    },
    center: {
      justifyContent: "center",
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
    negrita: {
      fontWeight: "bold",
      textAlign: "center",
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
  });
  