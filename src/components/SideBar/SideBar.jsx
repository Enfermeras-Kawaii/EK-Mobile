import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function SideBar() {
  return (
    <View style={styles.container}>
      <Entypo name="menu" style={{ fontSize: 65, textAlign: "center", position: "absolute", top: 20 }} />
      <Ionicons name="log-out-outline" style={{ fontSize: 65, textAlign: "center", position: "absolute", bottom: 20, transform: [{ scaleX: -1 }] }} />
    </View>
  );
}

export default SideBar;
