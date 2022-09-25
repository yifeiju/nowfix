import React, { useContext, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import SelectionComponent from "./SelectionComponent";
import ServiceComponent from "./ServiceComponent";
import { AppContext } from "../app/Provider";
import { fb } from "../app/firebase";
import { selectAllServices } from "../app/store/states/services/selectors";
import { useAppSelector } from "../app/store";

const SelectService = () => {
  const services = useAppSelector(selectAllServices);
  const [state, setState] = useContext(AppContext);
  const { user } = state;
  const [selections, setSelections] = useState([]);
  const [servicesPrice, setServicesPrice] = useState();
  const onConfirm = () => {
    if (selections.length && servicesPrice) {
      fb.user
        .updateUserData({
          id: user.id,
          services: selections,
          servicesPrice: Number(servicesPrice),
        })
        .then(async (res) => {
          console.log({ res });
          const data = await fb.user.getUserData(user.id);
          setState((prevState = {}) => ({ ...prevState, user: data }));
        });
    }
  };
  return (
    <View>
      <ScrollView>
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
