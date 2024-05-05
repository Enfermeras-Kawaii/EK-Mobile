import React from "react";
import { SafeAreaView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "./styles";

function RegisterPicker({
  data,
  value,
  onChange,
  searchPlaceholder,
  placeholder,
}) {
  return (
    <SafeAreaView>
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
      />
      {/* <div style={styles.icono}></div> */}
    </SafeAreaView>
  );
}

export default RegisterPicker;
