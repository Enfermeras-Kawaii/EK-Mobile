// Componentes/InputContrasena.js
import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

const InputContrasena = ({ value, onChangeText }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Contraseña"
      secureTextEntry={true}
      style={styles.contenedor}
    />
  );
};

const styles = StyleSheet.create({
  contenedor: {
    borderWidth: 1, // Ancho del borde
    borderColor: 'gray', // Color del borde
    padding: 20, // Espacio interno
    borderRadius: 10, // Radio de borde
    width: 654,
    height: 74,
  },
  
});

export default InputContrasena;
