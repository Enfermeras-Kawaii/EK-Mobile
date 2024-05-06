import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  boxContainer: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    elevation: 6,
    padding: 10,
    width: width * 0.75,
    alignSelf: "flex-end",
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  secondaryContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  column: {
    flex: 1,
    padding: 5,
  },
  contentContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 50,
    width: "25%",
    padding: 5,
    alignSelf: "flex-end",
  },
  footer: {
    alignSelf: "stretch",
    paddingStart: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
export default styles;
