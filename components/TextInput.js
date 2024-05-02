import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';

const InicioSesion = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <View>
      <Text style={styles.titulo}>Inicio de Sesión</Text>
      {/* Aquí podrías agregar tus componentes TextInput */}
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default InicioSesion;
