import React from "react";
import { Controller } from "react-hook-form";
import { TextInput, Text } from "react-native";
import styles from "./styles";

function RegisterInput({
  type,
  Direccion = false,
  control,
  name,
  placeholder,
  rules,
  multiline = false,
  numberOfLines,
}) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            inputMode={type}
            onBlur={onBlur}
            multiline={multiline}
            numberOfLines={numberOfLines}
            style={[
              !Direccion && !multiline ? styles.input : null,
              Direccion ? styles.inputDireccion : null,
              multiline ? styles.inputMultiline : null,
            ]}
          />
        )}
        name={name}
        rules={rules}
      />
    </>
  );
}

export default RegisterInput;
