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
} from "react-native";
import logo from "../assets/logo.png";
import globalStyles from "../app/globalStyles";
import { fb } from "../app/firebase";


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <TextInput
          style={styles.input}
          placeholder="contraseña"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity>
          <Text style={styles.txtcenter}>¿Has olvidado la contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.prompt} onPress={() => fb.auth.signIn(email, password)}>
          <View style={[globalStyles.btnyellow]}>
            <Text style={[styles.negrita, globalStyles.white]}>Iniciar sessión</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
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
    marginTop: 40,
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
