import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";
import lapiz from "../assets/lapiz.png";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { requestUpdateUserData } from "../app/store/states/user/thunks";

const Ajustes = ({ navigation, route = {} }) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [nombre, setNombre] = useState(user.name);

  const changeName=()=>{
    dispatch(
      requestUpdateUserData({
        userId: user.id,
        data: {
          name:nombre,
        },
        onSuccess: setModalVisible(!modalVisible),
      })
    )
  }

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={[globalStyles.container]}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text style={globalStyles.title1}>Ajustes</Text>
          <View></View>
        </View>
        <View style={styles.center}>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setModalVisible(true)}
          >
            <Text></Text>
            <Text style={{ textAlign: "center", alignItems: "center" }}>
              {user?.name}
            </Text>
            <Image source={lapiz} style={{ width: 24, height: 24 }}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.prompt}
            onPress={() => setModalVisible1(true)}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Cambiar contraseña
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.prompt}
            onPress={() => setModalVisible2(true)}
          >
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Eliminar cuenta
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
              <Text style={styles.negrita}>Cambiar nombre</Text>
              <TextInput style={styles.input} defaultValue={nombre} onChangeText={text=>setNombre(text)}></TextInput>

              <View style={styles.flex}>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.buttonpop1}
                >
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable onPress={changeName} style={styles.buttonpop}>
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Aceptar
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.negrita}>Cambiar contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Nueva contraseña"
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Repetir contraseña"
              ></TextInput>
              <View style={styles.flex}>
                <Pressable
                  onPress={() => {
                    setModalVisible1(!modalVisible1);
                  }}
                  style={styles.buttonpop1}
                >
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable onPress={() => {}} style={styles.buttonpop}>
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Confirmar
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.negrita}>¿Desea eliminar la cuenta?</Text>

              <View style={styles.flex}>
                <Pressable
                  onPress={() => {
                    setModalVisible2(!modalVisible2);
                  }}
                  style={styles.buttonpop1}
                >
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable onPress={() => {}} style={styles.buttonpop}>
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Eliminar
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
export default Ajustes;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  prompt: {
    marginTop: 40,
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
