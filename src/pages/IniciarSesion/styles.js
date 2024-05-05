import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  inputContainer: {
    alignItems: 'flex-start', // Alinea los elementos a la izquierda
    marginBottom: 60,
  },
  alignItems: {
    marginRight: 10,
  },
  espaciado:{
    margin: 10
  },
  espaciadoabajodebotoniniciar:{
    margin: 20
  },
  textContrasena: {
    marginRight: 20,
    padding: 10 // Espacio entre TextContrasena y LinkOlvidoContrasena
  },
  contrasenaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alinea los elementos verticalmente en el centro
    marginBottom: 10, // Añade un margen inferior para separarlo del siguiente componente
    
  },
  textContrasena: {
    marginRight: 10,
  },
  textNoCuenta:{
    marginRight: 30,
  },
  linkOlvidoContrasena: {
    alignSelf: 'flex-end',



  },
  linkcontainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
