import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Modal,
  Pressable
} from "react-native";
import logo from "../assets/logo.png";
import globalStyles from "../app/globalStyles";
import { fb } from "../app/firebase";


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [verificarEmail, setVerificarEmail] = useState("");
  const [rr,setRr] = useState(" ");
  

  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <ScrollView>
        <View style={styles.center}>
          <Image source={logo} style={{ width: 266, height: 80 }} />
        </View>
        <Text style={styles.siempre}>Siempre cerca de ti.</Text>
        <Text style={styles.ini}>iniciar sesión :</Text>

        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="E-mail"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.error}>{rr}</Text>

        <TextInput
          style={styles.input}
          placeholder="contraseña"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        
        <TouchableOpacity>
          <Text style={styles.txtcenter} onPress={() => setModalVisible(true)}>¿Has olvidado la contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.prompt} onPress={() => {fb.auth.signIn(email, password).catch(setRr("Usuario o contraseña incorrecta"))}}>
          <View style={[globalStyles.btnyellow]}>
            <Text style={[styles.negrita, globalStyles.white]}>Iniciar sessión</Text>
          </View>
        </TouchableOpacity>
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
              <TextInput style={styles.input} 
              placeholder='Introduce tu correo electrónico'
              onChangeText={(text)=>setVerificarEmail(text)}
              keyboardType="email-address"></TextInput>
              <View style={styles.flex}>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.buttonpop1}
                >
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable  style={styles.buttonpop} onPress={()=>{
                  fb.auth.sentEmailToResetPassword(verificarEmail);
                  setModalVisible(!modalVisible);
                }}>
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Enviar email
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

export default Login;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
  },
  error:{
    color:'red'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
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
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
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
  buttonpop: {
    width: "40%",
    height: 48,
    borderRadius: 37,
    backgroundColor: "#FF8200",
    textAlign: "center",
    justifyContent: "center",

    marginTop: 35,
  },
  prompt: {
    marginTop: 40,
    alignItems:'center',
  },

  txtcenter: {
    textAlign: "center",
    marginTop: 8,
  },

  input: {
    padding: 12,
    fontSize: 16,
    color: "#626262",
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    marginTop: 20,
    height: 40,
    width: "100%",
  },
  ini: {
    marginTop: 76,
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
  },
});
