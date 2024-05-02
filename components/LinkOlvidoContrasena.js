import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LinkOlvidoContrasena = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#7D50FF',
    textDecorationLine: 'underline',
    
  },
});



export default LinkOlvidoContrasena;
