import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { fb } from "../app/firebase";
import globalStyles from "../app/globalStyles";
import { AppContext } from "../app/Provider";

const Profile = () => {
  const [state = {}] = useContext(AppContext);
  const { user } = state;
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Profile</Text>
        <Text style={{ textAlign: "center", marginTop: 30, marginBottom: 55 }}>
          {user?.name}
        </Text>
        <TouchableOpacity>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text>Favoritos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text>Historial de servisios</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text>Ajustes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => fb.auth.logout()}>
          <View style={[globalStyles.btnyellow, styles.margin]}>
            <Text>Cerrar sessión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  margin: {
    marginBottom: 32,
  },
});
