// Pages/InicioSesion.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import InputCorreo from '../Componentes/InputCorreo';
import InputContrasena from '../Componentes/InputContrasena';

const InicioSesion = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleInicioSesion = () => {
    // Lógica para iniciar sesión con correo y contraseña
    console.log('Correo:', correo);
    console.log('Contraseña:', contrasena);
  };

  return (
    <View>
      
      <Button title="Iniciar Sesión" onPress={handleInicioSesion} />
    </View>
  );
};

export default InicioSesion;
