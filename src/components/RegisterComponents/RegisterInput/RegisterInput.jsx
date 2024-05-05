import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

function RegisterInput({ value, onChangeText, type, Direccion = false }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      inputMode={type}
      style={!Direccion ? styles.input : styles.inputDireccion}
    />
  );
}

export default RegisterInput;
