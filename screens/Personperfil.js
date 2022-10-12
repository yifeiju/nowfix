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
import fotoperfil from "../assets/Fotoperfil.png";
import chat from "../assets/chaticon.png";
import valoracion from "../assets/Valoraciones.png";
import { Start } from "../Components/start";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { requestUpdateUserData } from "../app/store/states/user/thunks";

const Personperfil = ({ navigation, route = {} }) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const professional = route.params ?? {};
  const isFavorite = user.favoriteProfessionals?.includes(professional.id);
  console.log({ professional, user });

  const onFavoriteChanges = (isSelected) => {
    let favoriteProfessionals = [...(user.favoriteProfessionals ?? [])];
    if (isSelected) favoriteProfessionals.push(professional.id);
    else {
      favoriteProfessionals = favoriteProfessionals.filter(
        (id) => id !== professional.id
      );
    }
    dispatch(
      requestUpdateUserData({
        userId: user.id,
        data: {
          favoriteProfessionals,
        },
      })
    );
  };

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => navigation.navigate("service")}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text></Text>
          <View></View>
        </View>
        <ScrollView>
          <View style={styles.center}>
            <Image
              source={fotoperfil}
              style={{ height: 96, width: 96, alignItems: "center" }}
            ></Image>
          </View>
          <Text
            style={{ textAlign: "center", marginTop: 10, fontWeight: "bold" }}
          >
            {professional?.name}
          </Text>
          {professional.location && (
            <Text
              style={{ color: "#626262", textAlign: "center", marginTop: 10 }}
            >
              a {professional?.location} km de ti
            </Text>
          )}
          <View
            style={{
              width: "100%",
              height: 50,
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View></View>
            <View></View>
            <TouchableOpacity>
              <Image source={chat} style={{ height: 40, width: 40 }}></Image>
            </TouchableOpacity>

            <Start initialState={isFavorite} onChange={onFavoriteChanges} />

            <View></View>
            <View></View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.bluetext}>Precio</Text>
            <Text style={styles.orangetext}>
              {professional.servicesPrice}€/h
            </Text>
          </View>
          <Text style={styles.bluetext}>Horarios</Text>
          <Text style={[styles.gristext, styles.margintop, styles.marginbot]}>
            {professional.information}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.bluetext}>Servicios prestados</Text>
            <Text style={styles.orangetext}>180</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.bluetext}>Valoraciones</Text>
            <Text style={[styles.gristext, styles.paddingtop]}>60</Text>
          </View>
          <View style={styles.center}>
            <Image
              source={valoracion}
              style={{ height: 50, width: 215, margin: 20 }}
            ></Image>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 7,
            }}
          >
            <Text style={styles.bluetext}>Reseñas</Text>
            <Text style={[styles.gristext, styles.paddingtop]}>217</Text>
          </View>
        </ScrollView>
        <View style={styles.politica}>
          <TouchableOpacity style={styles.margin} onPress={() => {}}>
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Contratar servicio
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Personperfil;

const styles = StyleSheet.create({
  margin: {
    marginBottom: 32,
    alignItems: "center",
    width: "100%",
  },
  politica: {
    alignItems: "center",
    position: "absolute",
    textAlign: "center",
    width: "100%",
    bottom: 20,
    margin: "auto",
    left: 0,
  },
  negrita: {
    fontWeight: "bold",
    textAlign: "center",
  },
  bluetext: {
    fontWeight: "bold",
    color: "#054091",
    fontSize: 20,
    marginRight: 50,
  },
  orangetext: {
    fontWeight: "bold",
    color: "#FF8200",
    fontSize: 24,
  },
  gristext: {
    color: "#626262",
  },
  paddingtop: {
    paddingTop: 7,
  },
  margintop: {
    marginTop: 10,
  },
  marginbot: {
    marginBottom: 10,
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
    backgroundColor: "rgba(0,0,0,0.5)",
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
