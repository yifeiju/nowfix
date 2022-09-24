import React, { useContext } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
const ServiceComponent = ({
  isSelected = false,
  item = {},
  onSelection = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onSelection}>
      <View
        style={{
          backgroundColor: isSelected ? "blue" : "none",
          width: 100,
          height: 100,
          borderWidth: 1,
        }}
      >
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceComponent;
