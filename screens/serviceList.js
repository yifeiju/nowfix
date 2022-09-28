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
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";

const ServiceList = ({ navigation: { goBack }, route = {} }) => {
  const service = route.params ?? {};
  const navigations = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(AppConstants.LIST.MAX_LIMIT);
  const [filters, setFilters] = useState({});
  const [locationRange, setLocationRange] = useState(0);
  const [starsRange, setStarsRange] = useState(0);
  const [priceRange, setPriceRange] = useState(0);

  const requestUserByFilter = async () => {
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
  };
  
  useEffect(() => {
    requestUserByFilter();
  }, [limit]);

  const onLastChildReached = () => {
    setLimit(limit + AppConstants.LIST.MAX_LIMIT);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text style={globalStyles.title1}>{service.name}</Text>
          <Text></Text>
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
              <Text style={{ fontSize: 20, color: "#054091" }}>Proximidad</Text>
              <Slider
                style={{ width: "90%", height: 50 }}
                onValueChange={(value) => setLocationRange(value)}
                minimumValue={0}
                maximumValue={1}
                thumbTintColor={"#FF8200"}
                minimumTrackTintColor={"#FF8200"}
              ></Slider>
              <Text>{Math.floor(locationRange * 4)}</Text>
              <Text style={{ fontSize: 20, color: "#054091" }}>
                Valoraciones
              </Text>
              <Slider
                style={{ width: "90%", height: 50 }}
                onValueChange={(value) => setStarsRange(value)}
                minimumValue={0}
                maximumValue={1}
                thumbTintColor={"#FF8200"}
                minimumTrackTintColor={"#FF8200"}
              ></Slider>
              <Text>{Math.floor(starsRange * 4)}</Text>
              <Text style={{ fontSize: 20, color: "#054091" }}>Precio</Text>
              <Slider
                style={{ width: "90%", height: 50 }}
                onValueChange={(value) => setPriceRange(value)}
                minimumValue={0}
                maximumValue={1}
                thumbTintColor={"#FF8200"}
                minimumTrackTintColor={"#FF8200"}
              ></Slider>
              <Text>{Math.floor(priceRange * 100)}/h</Text>
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
    marginTop: 20,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
