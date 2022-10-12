import React, { useEffect, useState, useCallback } from "react";
import isEqual from "lodash/isEqual";
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
  FlatList,
} from "react-native";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";
import filtro from "../assets/filtro.png";
import busca from "../assets/busca.png";
import fotoperfil from "../assets/Fotoperfil.png";
import { fb } from "../app/firebase";
import { AppConstants } from "../app/utils/constants";
import { getUsersFilteredForServiceScreen } from "../app/utils/formats";
import Slider from "@react-native-community/slider";

const locationConstants = {
  range: [1, 5, 15, 30],
};

const filterInitialState = {
  locationRange: 0,
  stars: 1,
  price: 0,
};

const formatLocationRange = (locationIndex = 0) => {
  const range = locationConstants.range[locationIndex];
  return range ? `${range}km` : `Sin Límite`;
};

const ServiceList = ({ navigation, route }) => {
  const service = route.params ?? {};
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(AppConstants.LIST.MAX_LIMIT);
  const [filters, setFilters] = useState(filterInitialState);

  const updateFilter = useCallback((key = "") => {
    return (value) => {
      return setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    };
  });

  const requestUserList = async (extraQueries) => {
    fb.user
      .getUsersByServiceId({
        serviceId: service?.id,
        listLimit: limit,
        ...(extraQueries && { extraQueries }),
      })
      .then(setUsers);
  };

  const closeModal = () => setModalVisible(false);

  const onAcceptFilter = () => {
    closeModal();

    const extraQueries = Object.values(filters).length
      ? getUsersFilteredForServiceScreen({
          maxPrice: filters.price,
          //minStars: filters.stars,
        })
      : [];
    requestUserList(extraQueries);
  };

  const onCancelFilter = () => {
    closeModal();
    requestUserList();
  };

  useEffect(() => {
    requestUserList();
  }, [limit]);

  const onLastChildReached = () => {
    setLimit(limit + AppConstants.LIST.MAX_LIMIT);
  };

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
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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

        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={globalStyles.modalView}>
              <Text style={{ fontSize: 20, color: "#054091" }}>Proximidad</Text>
              <Slider
                style={{ width: "90%", height: 50 }}
                onValueChange={updateFilter("locationRange")}
                minimumValue={0}
                step={1}
                maximumValue={4}
                thumbTintColor={"#FF8200"}
                minimumTrackTintColor={"#FF8200"}
              ></Slider>
              <Text>{formatLocationRange(filters.locationRange)}</Text>
              <Text style={{ fontSize: 20, color: "#054091" }}>
                Valoraciones
              </Text>
              <Slider
                style={{ width: "90%", height: 50 }}
                onValueChange={updateFilter("stars")}
                minimumValue={1}
                step={1}
                maximumValue={5}
                value={filters.stars}
                thumbTintColor={"#FF8200"}
                minimumTrackTintColor={"#FF8200"}
              ></Slider>
              <Text>{filters.stars} estrellas</Text>
              <Text style={{ fontSize: 20, color: "#054091" }}>Precio</Text>
              <Slider
                style={{ width: "90%", height: 50 }}
                onValueChange={updateFilter("price")}
                minimumValue={0}
                step={5}
                maximumValue={100}
                thumbTintColor={"#FF8200"}
                minimumTrackTintColor={"#FF8200"}
              ></Slider>
              <Text>{filters.price}€/h</Text>
              <View style={styles.flex}>
                <Pressable onPress={onCancelFilter} style={styles.buttonpop1}>
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable onPress={onAcceptFilter} style={styles.buttonpop}>
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Aplicar
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
