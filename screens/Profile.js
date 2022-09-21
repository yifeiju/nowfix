import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import { fb } from "../app/firebase";
import globalStyles from "../app/globalStyles";
import { AppContext } from "../app/Provider";
import fotoperfil from "../assets/Foto perfil.png"

const Profile = () => {
  const [state = {}] = useContext(AppContext);
  const { user } = state;
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Profile</Text>
        <View style={{alignItems:'center', justifyContent:'center', marginTop:30}}>
          <Image source={fotoperfil} style={{width:96,height:96}}></Image>
        </View>
        <Text style={{ textAlign: "center", marginTop: 30,  }}>
          {user?.name}
        </Text>
        <Text style={{ textAlign: "center", marginTop: 30, marginBottom: 55 }}>
          {user?.email}
        </Text>
        <TouchableOpacity>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text style={[styles.negrita, globalStyles.white]}>Favoritos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text style={[styles.negrita, globalStyles.white]}>Historial de servisios</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text style={[styles.negrita, globalStyles.white]}>Ajustes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => fb.auth.logout()}>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text style={[styles.negrita, globalStyles.white]}>Cerrar sessión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  margin: {
    marginBottom: 32,
  },
  negrita: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
