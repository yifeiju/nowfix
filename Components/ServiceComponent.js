import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
const ServiceComponent = ({
  isSelected = false,
  item = {},
  onSelection = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onSelection}
      style={{
        width: "90%",
        margin: 20,
      }}
    >
      <View
        style={{
          backgroundColor: isSelected ? "#FF8200" : "transparent",
          height: 96,
          borderWidth: 1,
          borderColor: "#FF8200",
        }}
      >
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceComponent;
