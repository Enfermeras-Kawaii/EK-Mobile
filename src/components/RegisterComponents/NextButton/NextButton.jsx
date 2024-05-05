import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

function NextButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.buttonText}>{text}</Text>
        <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
}

export default NextButton;
