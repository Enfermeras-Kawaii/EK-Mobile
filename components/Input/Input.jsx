
import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputCorreo = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="email-address"
      autoCapitalize="none"
      style={styles.contenedor}
    />
  );
};

export default InputCorreo;