import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList
} from "react-native";
import globalStyles from "../app/globalStyles";
import { useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { AppConstants } from "../app/utils/constants";
import back from "../assets/back.png";
import fotoperfil from "../assets/Fotoperfil.png";
import { fb } from "../app/firebase";



const Historial = ({ navigation, route = {} }) => {
  const user = useAppSelector(selectCurrentUser);
  const [history, setHistory] = useState([]);

  const requestUserList = async () => {
    fb.history.getProfessionalHistory(user.id).then(setHistory)
  };
  
  useEffect(() => {
    requestUserList();
  }, [user.id]);

    return (
      <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
        <View style={globalStyles.container}>
          <View style={[globalStyles.titleview,styles.marginbot]}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={back} style={globalStyles.btnback}></Image>
            </TouchableOpacity>
            <Text style={globalStyles.title1}>Historial de clientes</Text>
            <View></View>
          </View>
        <FlatList
        data={history}
        renderItem={({ item }) => <HistoryCardd item={item} />}
        keyExtractor={(item, index) => `professional_history_${index}`}
        />
        </View>
      </KeyboardAvoidingView>
    );
  };
  const HistoryCardd = ({ item }) => {
    if (!item?.clientId) return null;
    
    const [user, setUser] = useState();
  
    useEffect(() => {
      fb.user.getUserData(item.clientId).then(setUser);
      console.log({item});
    }, [item.clientId]);
    return (
      
        <View
          style={{
            width: "100%",
            height: 130,
            borderBottomWidth: 1,
            borderBottomColor: "#D9D9D9",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "30%",
              height: "100%",
              alignItems: "center",
              padding: 15,
            }}
          >
            <Image
              source={fotoperfil}
              style={{ width: 100, height: 100 }}
            ></Image>
          </View>
          <View style={{ width: "70%", height: "100%", padding: 10 }}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 16, marginBottom: 10 }}>{user?.name}</Text>
              <Text
                style={{ color: "#FF8200", fontSize: 20, fontWeight: "bold" }}
              >
                {user?.servicesPrice}
              </Text>
            </View>
            {user?.location && (
              <Text style={{ color: "#626262" }}>a {user.location} km de ti</Text>
            )}
            {item?.date && <Text>{new Date(item.date.toDate()).toDateString()}</Text>}
          </View>
        </View>
      
    );
  };
  export default Historial;
  
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
      marginTop: 22
    },
    modalView: {
      margin: 20,
      padding: 35,
      alignItems: "center",
      width:'80%'
    },
  
    prompt: {
      marginTop: 40,
      paddingLeft:'5%',
      paddingRight:'5%'
      
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
      textAlign:'center',
      alignItems:'center'
    },
    siempre: {
      color: "#041E42",
      textAlign: "center",
      fontSize: 23,
      marginTop: 48,
      marginBottom: 30,
    },
    buttonpop:{
      width:'100%',
      height:96,
      borderRadius:37,
      backgroundColor:'#FF8200',
      textAlign:'center',
      justifyContent: 'center', 
      marginBottom:35,
      marginTop:35
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    marginbot: {
      marginBottom: 30,
    },
  });
  