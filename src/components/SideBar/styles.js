import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.2,
    height: "100%",
    backgroundColor: "#8b8dff",
    alignItems: "center",
    justifyContent: "center",
    // borderTopRightRadius:"50%",
  },
});

export default styles;
