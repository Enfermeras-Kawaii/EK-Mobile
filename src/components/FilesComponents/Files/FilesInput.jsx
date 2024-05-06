import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

function FilesInput({ imageUri, onPress }) {
  return (
    <View>
      <View>
        {!imageUri && (
          <TouchableOpacity style={styles.views} onPress={onPress}>
            <AntDesign name="camerao" size={30} color="#F75590" />
            <Text style={styles.text}>Presione para sacar una foto</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Seleccionar imagen</Text>
            </View>
          </TouchableOpacity>
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </View>
  );
}
export default FilesInput;
