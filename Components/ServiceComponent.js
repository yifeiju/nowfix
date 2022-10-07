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
        margin: 5,
        height: 96,
      }}
    >
      <View
        style={{
          backgroundColor: isSelected ? "#FF8200" : "transparent",
          borderWidth: 1,
          height:96,
          borderColor: "#FF8200",
          borderRadius:37,
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
        }}
      >
        <Text style={{textAlign:'center',alignItems:'center',fontWeight:'bold',color:isSelected ? 'white' : 'black'}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceComponent;
