import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF", // Cuadrado blanco
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Bordes redondeados
  },
});
export default styles;
