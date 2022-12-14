import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  
} from "react-native";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";
import logo from '../assets/logo.png'

const Acerca = ({ navigation, route = {} }) => {
    
    return (
      <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
        <View style={globalStyles.container}>
          <View style={globalStyles.titleview}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={back} style={globalStyles.btnback}></Image>
            </TouchableOpacity>
            <Text style={globalStyles.title1}>Acerca de Nowfix</Text>
            <View></View>
          </View>
          <ScrollView>
            <View style={styles.center}>
              <Image source={logo} style={{width:266, height:80}}></Image>
            </View>
            <Text style={{lineHeight:30,margin:20}}>Nowfix es una app nace de la necesidad de facilitar la búsqueda y contratación de servicios de reparación a domicilio de la manera más rápida y sencilla. 
Con Nowfix podrás, encontrar  tus especialistas más cercanos al radio de tu domicilio, recibir notificaciones del proceso de contratación y contactar vía chat con los profesionales para proporcionar una mayor seguridad a nuestros clientes.</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  };
  export default Acerca;
  
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
  