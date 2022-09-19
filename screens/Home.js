import React, { useContext } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import globalStyles from "../app/globalStyles";
import logo from "../assets/logo.png";
import busca from "../assets/busca.png";
import { AppContext } from "../app/Provider";

const Home = ({ navigation, route }) => {
  const [state] = useContext(AppContext);
  const { services = [] } = state;
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <View style={styles.center}>
          <Image source={logo} style={{ width: 266, height: 74 }} />
        </View>

        <View style={styles.searchContainer}>
          <Image source={busca} style={{ width: 24, height: 24 }}></Image>
          <TextInput
            underlineColorAndroid="transparent"
            style={{ marginLeft: 10, width: "85%", height: "80%" }}
          ></TextInput>
        </View>
        <View style={styles.flexbox}>
          {services.map((service = {}) => {
            let icon;
            try {
              icon =  service.icon;
            } catch (error) {}
            return (
              <View style={styles.profesional} key={service.id}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(service.name, service)}
                  style={styles.prof}
                >
                  <View style={styles.prof}>
                    <Text>{service.name}</Text>
                    {
                      console.log(icon)
                    }
                    
                    <Image
                      source= {{uri:icon}}
                      style={{ width: service.width, height: service.height, marginTop: 10 }}
                    ></Image>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Home;

const styles = StyleSheet.create({
  center: {
    justifyContet: "center",
    alignItems: "center",
    marginTop: 55,
  },

  prompt: {
    alignItems: "center",
    marginTop: 80,
  },

  txtcenter: {
    textAlign: "center",
    color: "white",
  },

  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginVertical: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#eee",
    width: "100%",
    borderRadius: 50,
    marginTop: 40,
  },
  white: {
    color: "white",
    marginBottom: 20,
  },

  negrita: {
    fontWeight: "bold",
  },
  searchContainer: {
    height: 48,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "#D9D9D9",
    marginTop: 40,
    marginBottom: 40,
  },
  profesional: {
    width: "45%",
    height: 130,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.3,
    elevation: 3,
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  prof: {
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: 6,
  },
});
