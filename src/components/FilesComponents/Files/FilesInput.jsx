import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CameraScreen from "../../../pages/Register/CameraScreen/CameraScreen";
import styles from "./styles";

function FilesInput({ imageUri }) {
  return (
    <View>
      <View>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
    </View>
  );
}
export default FilesInput;
