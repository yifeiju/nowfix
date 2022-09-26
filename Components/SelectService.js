import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import SelectionComponent from "./SelectionComponent";
import ServiceComponent from "./ServiceComponent";
import { selectAllServices } from "../app/store/states/services/selectors";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { requestUpdateUserData } from "../app/store/states/user/thunks";

const SelectService = () => {
  const services = useAppSelector(selectAllServices);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [selections, setSelections] = useState([]);
  const [servicesPrice, setServicesPrice] = useState();
  const onConfirm = () => {
    if (selections.length && servicesPrice) {
      dispatch(
        requestUpdateUserData({
          id: user.id,
          services: selections,
          servicesPrice: Number(servicesPrice),
        })
      );
    }
  };
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <SelectionComponent
          lists={services}
          selectedIDs={user.services}
          itemComponent={ServiceComponent}
          onSelectionUpdate={setSelections}
        />
      </ScrollView>
      <TextInput
        keyboardType="number-pad"
        onChangeText={(number) => setServicesPrice(number)}
      ></TextInput>
      <TouchableOpacity onPress={onConfirm}>
        <View style={{ width: 200, height: 200, borderWidth: 1 }}>
          <Text>confirm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SelectService;
