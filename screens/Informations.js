import { set } from "lodash";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  
} from "react-native";
import globalStyles from "../app/globalStyles";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { requestUpdateUserData } from "../app/store/states/user/thunks";
import back from "../assets/back.png";

const Información = ({ navigation, route = {} }) => {
    const user = useAppSelector(selectCurrentUser);
    const dispach = useAppDispatch();
    const [information,setInformation] = useState(user.information);
    

    const confirm = ()=>{
        dispach(
            requestUpdateUserData({
              userId: user.id,
              data: {
                information:information,
              },
              onSuccess: navigation.navigate("Ajustes"),
            })
        )
    }
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => navigation.navigate("Ajustes")}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text style={globalStyles.title1}>Horarios</Text>
          <View></View>
        </View>
        <ScrollView>
          <TextInput onChangeText={setInformation} value={`${information}`} multiline numberOfLines={4} textAlign='center' style={styles.input} >

          </TextInput>
          <TouchableOpacity style={styles.prompt} onPress={confirm}>
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Guardar
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Información;

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
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      margin: 20,
      padding: 35,
      alignItems: "center",
      width: "80%",
    },
  
    prompt: {
      marginTop: 40,
      alignItems: "center",
    },
  
    txtcenter: {
      textAlign: "center",
      color: "white",
    },
  
    input: {
      padding: 12,
      fontSize: 16,
      color: "#626262",
      backgroundColor: "white",
      borderRadius: 8,
      marginTop: 40,
      height: 200,
      width: "100%",
    },
    white: {
      color: "white",
      marginBottom: 20,
    },
  
    negrita: {
      fontWeight: "bold",
      textAlign: "center",
    },
    siempre: {
      color: "#041E42",
      textAlign: "center",
      fontSize: 23,
      marginTop: 48,
      marginBottom: 30,
    },
    buttonpop: {
      width: "100%",
      height: 96,
      borderRadius: 37,
      backgroundColor: "#FF8200",
      textAlign: "center",
      justifyContent: "center",
      marginBottom: 35,
      marginTop: 35,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  