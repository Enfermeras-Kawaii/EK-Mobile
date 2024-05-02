// Pages/InicioSesion.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import InputCorreo from '../../../components/InputCorreo';
import InputContrasena from '../../../components/InputContrasena';
import { styles } from './styles';
import TextCorreo from '../../../components/TextCorreo';
import TextMostarCorreo from '../../../components/TextMostrarCorreo';
import TextContrasena from '../../../components/TextContrasena';
import LinkOlvidoContrasena from '../../../components/LinkOlvidoContrasena';
import Texto from '../../../components/TextNormal/Texto';
import Titles from '../../../components/Titles/Titles';
import TextDown from '../../../components/TextDown/TextDown';
import Input from '../../../components/Input/Input'
import Link from '../../../components/Link/Link';

const Home = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleInicioSesion = () => {
    // Lógica para iniciar sesión con correo y contraseña
    console.log('Correo:', correo);
    console.log('Contraseña:', contrasena);
  };

  return (
   
    <View style={styles.container}>
      <Titles>Iniciar Sesion</Titles>
      
      <View style={styles.foo}>
      
      <View style={styles.inputContainer}>
        <TextMostarCorreo styles={styles.alignItems} />
        <Input value={correo} onChangeText={setCorreo} placeholder="Correo electrónico"></Input>
        <TextDown>Introduce tu correo electrónico</TextDown>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.contrasenaContainer}>
          <TextContrasena style={[styles.textContrasena, styles.espaciado]} />
          <View style={styles.linkcontainer}>
          <Link style={styles.linkOlvidoContrasena}>¿Olvidaste tu contraseña?</Link>

          </View>
        </View>
        <Input  value={contrasena} onChangeText={setContrasena} placeholder="Contraseña"> </Input>
        <TextDown>Introduce tu contraseña</TextDown>
      </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.contrasenaContainer}>
          
        </View>
      <Button title="Iniciar Sesión" onPress={handleInicioSesion} />
      <Texto>¿Aún no tienes una cuenta?</Texto>
      <Link style={styles.linkOlvidoContrasena}>Registrate</Link>

      </View>
      
    </View>

    
  );
};

export default Home;
