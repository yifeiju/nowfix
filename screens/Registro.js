import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";

import { fb } from "../app/firebase";
import logo from "../assets/logo.png";
import globalStyles from "../app/globalStyles";
import { useAppSelector } from "../app/store";
import { selectAllUserTypes } from "../app/store/states/user/selectors";
import iconprofe from '../assets/iconprofe.png'
import iconclient from '../assets/iconclient.png'

const Registro = () => {
  const userTypes = useAppSelector(selectAllUserTypes);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [userType, setUserType] = useState({});

  const onSignUp = async () => {
    const credendialts = await fb.auth.signUp(email, password);
    try {
      const { user = {} } = credendialts;
      const data = {
        id: user.uid,
        email,
        name,
        userType,
      };
      fb.user.setUserData(data.id, data);
    } catch (error) {}
  };

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <ScrollView>
          <View style={styles.center}>
            <Image source={logo} style={{ width: 266, height: 80 }} />
          </View>
          <Text style={styles.siempre}>Siempre cerca de ti.</Text>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={globalStyles.modalView}>
                {userTypes.map((type = {}) => {
                  return (
                    <Pressable
                      key={type.id}
                      onPress={() => {
                        setModalVisible(!modalVisible), setUserType(type);
                      }}
                      style={styles.buttonpop}
                    >
                      <Image source={{ uri: type.icon }} style={{height:60,width:48}}></Image>
                      <Text style={[styles.negrita, globalStyles.white]}>
                        {type.name}
                      </Text>
                      <Text style={{color:'#FF8200'}}>sdsdaas</Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <TextInput
              editable={false}
              style={styles.input}
              placeholder="Usuario/Profesional"
              autoCapitalize="none"
              value={userType.name ?? ""}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Nombre"
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="E-mail"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="contraseña"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="confirmar contraseña"
            autoCapitalize="none"
            onChangeText={(text) => setConfirm(text)}
          />

          <TouchableOpacity style={styles.prompt} onPress={onSignUp}>
            <View style={[globalStyles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Completar registro
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registro;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    padding: 35,
    alignItems: "center",
    width: "80%",
  },

  prompt: {
    marginTop: 40,
    alignItems: "center",
  },

  txtcenter: {
    textAlign: "center",
    color: "white",
  },

  input: {
    padding: 12,
    fontSize: 16,
    color: "#626262",
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    marginTop: 40,
    height: 40,
    width: "100%",
  },
  white: {
    color: "white",
    marginBottom: 20,
  },

  negrita: {
    fontWeight: "bold",
    textAlign: "center",
  },
  siempre: {
    color: "#041E42",
    textAlign: "center",
    fontSize: 23,
    marginTop: 48,
    marginBottom: 30,
  },
  buttonpop: {
    width: "100%",
    height: 96,
    borderRadius: 37,
    backgroundColor: "#FF8200",
    textAlign: "center",
    alignItems:'center',
    justifyContent: 'space-around',
    marginBottom: 35,
    marginTop: 35,
    display:'flex',
    flexDirection:'row'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
