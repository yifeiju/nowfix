import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import SelectionComponent from "./SelectionComponent";
import ServiceComponent from "./ServiceComponent";
import { selectAllServices } from "../app/store/states/services/selectors";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { requestUpdateUserData } from "../app/store/states/user/thunks";
import { useNavigation } from "@react-navigation/native";

const SelectService = () => {
  const navigation = useNavigation();

  const services = useAppSelector(selectAllServices);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const [selections, setSelections] = useState([]);
  const [servicesPrice, setServicesPrice] = useState();

  const onConfirm = () => {
    if (selections.length && servicesPrice) {
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
