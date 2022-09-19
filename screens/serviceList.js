import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";

const ServiceList = ({ navigation, route = {} }) => {
  const service = route.params ?? {};
  
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text style={globalStyles.title1}>{service.name}</Text>
          <View>
            
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ServiceList;
