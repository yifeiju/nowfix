import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { fb } from "../app/firebase";
import globalStyles from "../app/globalStyles";
import { AppContext } from "../app/Provider";
import fotoperfil from "../assets/Fotoperfil.png";

const Profile = ({ navigation, route }) => {
  const [state = {}] = useContext(AppContext);
  const { user } = state;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Profile</Text>
        <ScrollView>
          <View style={styles.center}>
            <Image
              source={fotoperfil}
              style={{ width: 96, height: 96 }}
            ></Image>
          </View>
          <Text style={{ textAlign: "center", marginTop: 30 }}>
            {user?.name}
          </Text>
          <Text
            style={{ textAlign: "center", marginTop: 30, marginBottom: 55 }}
          >
            {user?.email}
          </Text>
          <TouchableOpacity
            style={styles.margin}
            onPress={() => {
              navigation.navigate("Favoritos");
            }}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Favoritos
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.margin}
            onPress={() => {
              navigation.navigate("Servicios");
            }}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Servicios
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.margin}
            onPress={() => {
              navigation.navigate("Ajustes");
            }}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>Ajustes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.margin}
            onPress={() => {
              navigation.navigate("Acerca");
            }}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Acerca de Nowfix
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.margin}
            onPress={() => setModalVisible(true)}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Cerrar sessión
              </Text>
            </View>
          </TouchableOpacity>

          {user.userType?.id === "client" && (
            <>
            <TouchableOpacity
              style={styles.margin}
              onPress={() => {
                navigation.navigate("Favoritos");
              }}
            >
              <View style={[globalStyles.btnyellow]}>
                <Text style={[styles.negrita, globalStyles.white]}>sadas</Text>
              </View>
            </TouchableOpacity>
            </>
          )}
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.negrita}>¿Desea cerrar sesión?</Text>
              <View style={styles.flex}>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.buttonpop1}
                >
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable
                  onPress={() => fb.auth.logout()}
                  style={styles.buttonpop}
                >
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Cerrar
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
export default Profile;

const styles = StyleSheet.create({
  margin: {
    marginBottom: 32,
    alignItems: "center",
  },
  negrita: {
    fontWeight: "bold",
    textAlign: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
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
    marginTop: 22,
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
  negrita: {
    fontWeight: "bold",
    textAlign: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});


const AppModal =({children, isVisibnle})=>{
  return(
    <Modal>
      <View>
        <View>
          {chil}
        </View>
      </View>
    </Modal>
  )
}