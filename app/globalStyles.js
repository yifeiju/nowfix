import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    padding: 25,
    width: "100%",
    minHeight: "100%",
    backgroundColor:'white'
  },
  btnyellow: {
    width: "90%",
    height: 48,
    backgroundColor: "#FF8200",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 37,
  },
  btnyellow2: {
    width: "100%",
    height: 48,
    backgroundColor: "#FF8200",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 37,
    flexDirection: "row",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
    fontSize:20
  },
  title1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize:20
  },
  titleview: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
  },

  btnback: {
    width: 15,
    height: 20,
  },
  white: {
    color: "white",
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
});

export default globalStyles;
