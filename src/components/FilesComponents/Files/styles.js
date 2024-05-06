import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#B8B8C8",
  },
  views: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#B8B8C8",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#A5A5AA",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
  },
  button: {
    backgroundColor: "#7F75FF",
    borderRadius: 20,
    padding: 5,
  },
});

export default styles;
