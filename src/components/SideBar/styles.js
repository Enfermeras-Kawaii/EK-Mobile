import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.2,
    height: "100%",
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
