import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  capButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 10,
  },
  captureButton: {
    backgroundColor: "#333",
    borderRadius: 40,
    padding: 20,
    margin: 10,
  },
  otherButtonContainer: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelButton: {
    marginLeft: 16,
    marginTop: "auto",
  },
  reverseButton: {
    marginRight: 16,
    marginTop: "auto",
  },
});

export default styles;
