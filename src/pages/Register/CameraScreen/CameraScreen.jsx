import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PDFDocument } from "pdf-lib";
import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";
import Loading from "../../../components/Loading/Loading";
import styles from "./styles";

const CameraScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);

  const input = route.params.input;
  const provData = route.params?.provData;

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
        const photo = await cameraRef.takePictureAsync();
        setLoading(true);
        const pdfDoc = await PDFDocument.create();
        const imageBase64 = await FileSystem.readAsStringAsync(photo.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        const imageBytes = Buffer.from(imageBase64, "base64");
        const image = await pdfDoc.embedJpg(imageBytes);
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });

        const pdfUri = `${FileSystem.cacheDirectory}${input}.pdf`;
        const pdfBytes = await pdfDoc.save();
        await FileSystem.writeAsStringAsync(
          pdfUri,
          pdfBytes.toString("base64"),
          {
            encoding: FileSystem.EncodingType.Base64,
          }
        );
        setLoading(false);
        setCameraRef(null);
        navigation.navigate("Files", {
          photo: { uri: photo.uri, input, pdfURI: pdfUri, provData },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCancel = () => {
    navigation.navigate("Files");
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
      {loading && <Loading />}
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.otherButtonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
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

export default CameraScreen;
