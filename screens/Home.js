import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import globalStyles from "../app/globalStyles";
import logo from "../assets/logo.png";
import { useAppSelector } from "../app/store";
import { selectAllServices } from "../app/store/states/services/selectors";
import Location from "../components/Location";
import { selectCurrentUser } from "../app/store/states/user/selectors";

const Home = ({ navigation, route }) => {
  const services = useAppSelector(selectAllServices);
  const user = useAppSelector(selectCurrentUser);
  console.log({ user });
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <ScrollView style={globalStyles.container}>
        <View style={styles.center}>
          <Image source={logo} style={{ width: 266, height: 80 }} />
        </View>
        <Text style={styles.siempre}>Siempre cerca de ti.</Text>
        {user.userType?.id === "client" && (
          <View style={styles.flexbox}>
            {services.map((service = {}) => {
              let icon;
              try {
                icon = service.icon;
              } catch (error) {}
              return (
                <View style={styles.profesional} key={service.id}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("service", service)}
                    style={styles.prof}
                  >
                    <View style={styles.prof}>
                      <Text>{service.name}</Text>

                      <Image
                        source={{ uri: icon }}
                        style={{
                          width: service.width,
                          height: service.height,
                          marginTop: 10,
                        }}
                      ></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
        {user.userType?.id === "professional" && (
          <>
            <TouchableOpacity style={styles.prompt} onPress={() => {}}>
              <View style={[globalStyles.btnyellow]}>
                <Text
                  style={[styles.negrita, globalStyles.white, styles.txtcenter]}
                >
                  Estoy de servicio
                </Text>
              </View>
            </TouchableOpacity>
            <Location />
            <TouchableOpacity style={styles.prompt} onPress={() => {}}>
              <View style={[globalStyles.btnyellow]}>
                <Text
                  style={[styles.negrita, globalStyles.white, styles.txtcenter]}
                >
                  Compartir ubicación
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Home;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
  },

  prompt: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
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
    height: 144,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.3,
    elevation: 3,
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 50,
    marginBottom: 50,
  },
  prof: {
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: 6,
  },
  siempre: {
    color: "#041E42",
    textAlign: "center",
    fontSize: 23,
    marginTop: 48,
  },
});
