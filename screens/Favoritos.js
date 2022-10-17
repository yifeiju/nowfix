import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { fb } from "../app/firebase";
import globalStyles from "../app/globalStyles";
import { useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import back from "../assets/back.png";
import fotoperfil from "../assets/Fotoperfil.png";
import { AppConstants } from "../app/utils/constants";
import { Rating } from "react-native-ratings";

const Favoritos = ({ navigation, route = {} }) => {
  const user = useAppSelector(selectCurrentUser);
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(AppConstants.LIST.MAX_LIMIT);

  const requestUserList = async () => {
    fb.user
      .getFavoriteProfessionals({
        favoriteProfessionals: user.favoriteProfessionals,
        listLimit: limit,
      })
      .then(setUsers);
  };
  
  useEffect(() => {
    requestUserList();
  }, [limit, user.favoriteProfessionals]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Personperfil", item);
      }}
    >
      <View
        style={{
          width: "100%",
          height: 130,
          borderBottomWidth: 1,
          borderBottomColor: "#D9D9D9",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "30%",
            height: "100%",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Image
            source={fotoperfil}
            style={{ width: 100, height: 100 }}
          ></Image>
        </View>
        <View style={{ width: "70%", height: "100%", padding: 10 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 10 }}>{item?.name}</Text>
            <Text
              style={{ color: "#FF8200", fontSize: 20, fontWeight: "bold" }}
            >
              {item?.servicesPrice}€/h
            </Text>
          </View>
          {item.location && (
            <Text style={{ color: "#626262" }}>
              a {item?.location} km de ti
            </Text>
          )}
          <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
            <Text></Text>
          <Rating
            readonly
            startingValue={item?.rating?.avg}
            type="custom"
            style={{ marginTop: 20 }}
            ratingColor="#ff8200"
          ></Rating>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={[globalStyles.titleview, styles.marginbot]}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text style={globalStyles.title1}>Favoritos</Text>
          <View></View>
        </View>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Favoritos;

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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    padding: 35,
    alignItems: "center",
    width: "80%",
  },

  prompt: {
    marginTop: 40,
    paddingLeft: "5%",
    paddingRight: "5%",
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
  marginbot: {
    marginBottom: 30,
  },
});
