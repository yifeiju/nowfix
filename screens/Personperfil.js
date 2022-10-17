import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  Pressable
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import globalStyles from "../app/globalStyles";
import back from "../assets/back.png";
import fotoperfil from "../assets/Fotoperfil.png";
import chat from "../assets/chaticon.png";
import valoracion from "../assets/Valoraciones.png";
import { Start } from "../components/Start";
import { useAppDispatch, useAppSelector } from "../app/store";
import { selectCurrentUser } from "../app/store/states/user/selectors";
import { requestUpdateUserData } from "../app/store/states/user/thunks";
import { fb } from "../app/firebase";
import { Rating } from 'react-native-ratings';
import { AirbnbRating } from 'react-native-ratings';
import { async } from "@firebase/util";

const Personperfil = ({ navigation: { goBack }, route = {} }) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const professional = route.params ?? {};
  const isFavorite = user.favoriteProfessionals?.includes(professional.id);
  const [txt, setTxt] = useState();
  const [comentario, setComentario] = useState([]);
  const comentarioList = comentario.slice(0, 5);
  const [list, setList] = useState([]);
  const [val, setVal] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [ratingList, setRatingList] = useState([])
  
  const onFavoriteChanges = (isSelected) => {
    let favoriteProfessionals = [...(user.favoriteProfessionals ?? [])];
    if (isSelected) favoriteProfessionals.push(professional.id);
    else {
      favoriteProfessionals = favoriteProfessionals.filter(
        (id) => id !== professional.id
      );
    }
    dispatch(
      requestUpdateUserData({
        userId: user.id,
        data: {
          favoriteProfessionals,
        },
      })
    );
  };
  const requestList = async () => {
    fb.history.getProfessionalHistory(professional.id).then(setList)
  };
  useEffect(() => {
    requestList();
  }, [professional.id]);

  const contactPress = () => {
    fb.history.createHistory({
      clientId: user.id,
      professionalId: professional.id,
      date: new Date(),
    });
    
    setModalVisible(true)
  };
  const commentPress = () => {
    fb.comment.createComment({
      clientId: user.id,
      professionalId: professional.id,
      date: new Date(),
      comment: txt,
    });
  };
  const requestUserList = async () => {
    fb.comment.getUserComment(professional.id).then(setComentario);
  };
  useEffect(() => {
    requestUserList();
  }, [professional.id]);
  const requestRatingList = async () => {
    fb.rating.getUserRating(professional.id).then(setRatingList)
  };
  useEffect(() => {
    requestRatingList();
  }, [professional.id]);
  return (
    <KeyboardAvoidingView behavior="height" style={globalStyles.screen}>
      <View style={[globalStyles.container]}>
        <View style={globalStyles.titleview}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={back} style={globalStyles.btnback}></Image>
          </TouchableOpacity>
          <Text></Text>
          <View></View>
        </View>
        <ScrollView>
          <View style={styles.center}>
            <Image
              source={fotoperfil}
              style={{ height: 96, width: 96, alignItems: "center" }}
            ></Image>
          </View>
          <Text
            style={{ textAlign: "center", marginTop: 10, fontWeight: "bold" }}
          >
            {professional?.name}
          </Text>
          {professional.location && (
            <Text
              style={{ color: "#626262", textAlign: "center", marginTop: 10 }}
            >
              a {professional?.location} km de ti
            </Text>
          )}
          <View
            style={{
              width: "100%",
              height: 50,
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View></View>
            <View></View>
            <TouchableOpacity>
              <Image source={chat} style={{ height: 40, width: 40 }}></Image>
            </TouchableOpacity>

            <Start initialState={isFavorite} onChange={onFavoriteChanges} />

            <View></View>
            <View></View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.bluetext}>Precio</Text>
            <Text style={styles.orangetext}>
              {professional.servicesPrice}€/h
            </Text>
          </View>
          <Text style={styles.bluetext}>Horarios</Text>
          <Text style={[styles.gristext, styles.margintop, styles.marginbot]}>
            {professional.information}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.bluetext}>Servicios prestados</Text>
            <Text style={styles.orangetext}>{list.length}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.bluetext}>Valoraciones</Text>
            <Text style={[styles.gristext, styles.paddingtop]}>60</Text>
          </View>
          <View style={styles.center}>
            <Image
              source={valoracion}
              style={{ height: 50, width: 215, margin: 20 }}
            ></Image>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 7,
            }}
          >
            <Text style={styles.bluetext}>Reseñas</Text>
            <Text style={[styles.gristext, styles.paddingtop]}>{comentario.length}</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTxt(text)}
            placeholder='Dejar un comentario'
          ></TextInput>
          <TouchableOpacity style={styles.prompt} onPress={commentPress}>
            <View style={[styles.btnyellow]}>
              <Text style={[styles.negrita, globalStyles.white]}>
                Compartir
              </Text>
            </View>
          </TouchableOpacity>
          {comentarioList.map((item, index) => (
            <CommentCard
              key={`comment${index}`}
              item={item}
              isLastChild={comentarioList.length - 1 === index}
            />
          ))}
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
            <AirbnbRating count={5} defaultRating={3} onFinishRating={setVal}></AirbnbRating>
               
              <View style={styles.flex}>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.buttonpop1}
                >
                  <Text style={styles.negrita}>Cancelar</Text>
                </Pressable>
                <Pressable onPress={() => {
                  fb.rating.createRating({
                    clientId: user.id,
                    professionalId: professional.id,
                    rating:val,
                  })
                  setModalVisible(!modalVisible);
                  }} style={styles.buttonpop}>
                  <Text style={[styles.negrita, globalStyles.white]}>
                    Rating
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={[styles.prompt, styles.politica]}
          onPress={contactPress}
        >
          <View style={[globalStyles.btnyellow]}>
            <Text style={[styles.negrita, globalStyles.white]}>Contactar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const CommentCard = ({ item, isLastChild }) => {
  if (!item?.clientId) return null;

  const [user, setUser] = useState();

  useEffect(() => {
    fb.user.getUserData(item.clientId).then(setUser);
    console.log({ item });
  }, [item.clientId]);
  return (
    <View
      style={{
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        padding: 5,
        ...(isLastChild && { marginBottom: 50 }),
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Image source={fotoperfil} style={{ width: 25, height: 25 }}></Image>
        <Text style={{ fontSize: 16, marginLeft: 10 }}>{user?.name}</Text>
      </View>
      {item?.date && <Text>{new Date(item.date.toDate()).toDateString()}</Text>}
      <Text style={{ marginTop: 5 }}>{item.comment}</Text>
    </View>
  );
};
export default Personperfil;

const styles = StyleSheet.create({
  margin: {
    marginBottom: 32,
    alignItems: "center",
    width: "100%",
  },
  politica: {
    alignItems: "center",
    position: "absolute",
    textAlign: "center",
    width: "100%",
    bottom: 25,
    margin: "auto",
    left: 25,
  },
  negrita: {
    fontWeight: "bold",
    textAlign: "center",
  },
  bluetext: {
    fontWeight: "bold",
    color: "#054091",
    fontSize: 20,
    marginRight: 50,
  },
  orangetext: {
    fontWeight: "bold",
    color: "#FF8200",
    fontSize: 24,
  },
  gristext: {
    color: "#626262",
  },
  paddingtop: {
    paddingTop: 7,
  },
  margintop: {
    marginTop: 10,
  },
  marginbot: {
    marginBottom: 10,
  },
  center: {
    justifyContent: "center",
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
    backgroundColor: "rgba(0,0,0,0.5)",
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
  prompt: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    width: "40%",
    margin: "auto",
  },
  btnyellow: {
    width: "100%",
    height: 48,
    backgroundColor: "#FF8200",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 37,
  },
});
