import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.2,
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#8B8DFF",
    alignItems: "center",
    paddingVertical: height * 0.02,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  menuLogo: {
    marginTop: height * 0.04,
  },
  handShakeLogo: {
    marginBottom: height * 0.5,
  },
  handShakeImage: {
    height: 40,
    width: 40,
  },
  logoutLogo: {
    marginBottom: height * 0.04,
  },
});

export default styles;
