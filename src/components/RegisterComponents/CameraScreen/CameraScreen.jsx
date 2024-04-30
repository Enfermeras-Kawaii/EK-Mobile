import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export const CameraScreen = ({ onPictureTaken, onCancel }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No se ha otorgado permiso para acceder a la cámara.</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync({ quality: 0.5 });
        const blob = photo.blob;
        onPictureTaken({ base64Photo: blob, uri: photo.uri });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeFacing = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.otherButtonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <MaterialIcons name="cancel" size={32} color="#FF5733" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reverseButton} onPress={changeFacing}>
            <Ionicons name="camera-reverse" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.capButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <MaterialIcons name="camera" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
