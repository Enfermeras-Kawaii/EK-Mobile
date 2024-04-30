import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
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
  },
  button: {
    borderColor: "#B8B8C8",
    borderWidth: 1,
    borderRadius: 5,
    width: 120,
    height: 35,
    padding: 3,
    paddingLeft: 5,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default styles;
