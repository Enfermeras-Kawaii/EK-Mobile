import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
function SideBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuLogo}>
        <SimpleLineIcons name="menu" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.handShakeLogo}>
        <Image
          source={require("../../../assets/SideBar/HandShake.png")}
          style={styles.handShakeImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutLogo}>
        <SimpleLineIcons name="logout" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default SideBar;
