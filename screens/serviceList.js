import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";
import filtro from "../assets/filtro.png";
import busca from "../assets/busca.png";
import { fb } from "../app/firebase";
import { AppConstants } from "../app/utils/constants";
import { getUsersFilteredForServiceScreen } from "../app/utils/formats";

const ServiceList = ({ navigation, route = {} }) => {
  const service = route.params ?? {};
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(AppConstants.LIST.MAX_LIMIT);
  const [filters, setFilters] = useState({});
  useEffect(() => {
    const extraQueries = Object.values(filters).length
      ? getUsersFilteredForServiceScreen({
          maxPrice: filters.maxPrice,
          minStars: filters.minStars,
        })
      : [];

    fb.user
      .getUsersByServiceId({
        serviceId: service?.id,
        listLimit: limit,
        extraQueries,
      })
      .then(setUsers);
  }, [limit]);

  const onLastChildReached = () => {
    setLimit(limit + AppConstants.LIST.MAX_LIMIT);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text style={globalStyles.title1}>{service.name}</Text>
          <View></View>
        </View>
        <View style={styles.searchContainer}>
          <Image source={busca} style={{ width: 24, height: 24 }}></Image>
          <TextInput
            underlineColorAndroid="transparent"
            style={{ marginLeft: 10, width: "85%", height: "80%" }}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.prompt2}
          onPress={() => setModalVisible(true)}
        >
          <View style={[globalStyles.btnyellow2, styles.prompt]}>
            <Text style={[styles.negrita, globalStyles.white]}>Filtro</Text>
            <Image source={filtro} style={{ width: 30, height: 34 }}></Image>
          </View>
        </TouchableOpacity>
        {users.map((user) => (
          <Text key={user?.id}>{user?.name}</Text>
        ))}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={globalStyles.modalView}>
              <Text style={styles.negrita}>Filtro</Text>
              <View style={styles.flex}>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.buttonpop1}
                >
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable onPress={() => {}} style={styles.buttonpop}>
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Aceptar
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ServiceList;

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
  searchContainer: {
    height: 48,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "#D9D9D9",
    marginTop: 20,
  },
});
