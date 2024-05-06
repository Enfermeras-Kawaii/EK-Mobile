import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <ActivityIndicator size="large" color="rgba(255, 0, 255, 0.5)" />
      </View>
    </View>
  );
}

export default Loading;
