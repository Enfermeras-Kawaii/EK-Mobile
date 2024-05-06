import React from "react";
import { SafeAreaView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Controller } from "react-hook-form";
import styles from "./styles";

function RegisterPicker({
  data,
  searchPlaceholder,
  placeholder,
  name,
  rules,
  control,
}) {
  return (
    <SafeAreaView>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown
            style={styles.dropdown}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            searchPlaceholder={searchPlaceholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        name={name}
        rules={rules}
      />
    </SafeAreaView>
  );
}

/* */

export default RegisterPicker;
