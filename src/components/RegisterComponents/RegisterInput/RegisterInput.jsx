import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

function RegisterInput({ value, onChangeText, type }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      inputMode={type}
      style={styles.input}
    />
  );
}

export default RegisterInput;
