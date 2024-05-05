import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    backgroundColor: "white",
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
    marginTop: 30,
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
    marginTop: 50,
    marginBottom:10
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonContainer: {
    marginTop: 50,
    width: "25%",
    padding: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20, // Ajusta este valor según sea necesario
  },
  footer: {
    alignSelf: "stretch",
    paddingStart: 5,
  },
});

export default styles;
