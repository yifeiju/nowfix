import React, { useState } from "react";
import { KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  Pressable, } from "react-native";
import SelectionComponent from "./SelectionComponent";
import ServiceComponent from "./ServiceComponent";
import { selectAllServices } from "../app/store/states/services/selectors";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { requestUpdateUserData } from "../app/store/states/user/thunks";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../app/globalStyles";


const SelectService = () => {
  const navigation = useNavigation();
  const services = useAppSelector(selectAllServices);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [selections, setSelections] = useState(user.services);
  const [servicesPrice, setServicesPrice] = useState(user.servicesPrice);

  const onConfirm = () => {
    if (selections.length || servicesPrice) {
      dispatch(
        requestUpdateUserData({
          userId: user.id,
          data: {
            services: selections,
            servicesPrice: Number(servicesPrice),
          },
          onSuccess: navigation.goBack,
        })
      );
    }
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop:20,
        }}
      >
        <SelectionComponent
          lists={services}
          selectedIDs={user.services}
          itemComponent={ServiceComponent}
          onSelectionUpdate={setSelections}
        />
      </View>
      
      <TextInput
        keyboardType="number-pad" 
        onChangeText={number => setServicesPrice(number)}
        style={styles.input}
        placeholder="precio por hora"
        defaultValue={servicesPrice}
      ></TextInput>

      <TouchableOpacity onPress={onConfirm} style={styles.prompt}>
        <View style={[globalStyles.btnyellow]}>
          <Text style={[styles.negrita, globalStyles.white]}>confirm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SelectService;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  prompt: {
    marginTop: 40,
    marginBottom:40,
    alignItems: "center",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF8200",
    borderRadius: 8,
    marginTop: 40,
    height: 50,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  negrita: {
    fontWeight: "bold",
    textAlign: "center",
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
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
