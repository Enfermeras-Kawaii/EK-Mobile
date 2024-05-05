import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import SideBar from "../../../components/SideBar/SideBar";
import NextButton from "../../../components/RegisterComponents/NextButton/NextButton";
import FilesInput from "../../../components/FilesComponents/Files/FilesInput";
// import supabase from "../../../config/initSupabase";
import axios from "axios";
import styles from "./styles";

function Files() {
  const navigation = useNavigation();
  const route = useRoute();
  const photo = route.params?.photo;
  const provData = route.params?.provData;

  const [INE, setINE] = useState(null);
  const [CURP, setCURP] = useState(null);
  const [acta, setActa] = useState(null);
  const [referencias, setReferencias] = useState(null);
  const [tecnico, setTecnico] = useState(null);
  const [profesional, setProfesional] = useState(null);

  useEffect(() => {
    if (photo) {
      switch (photo.input) {
        case "INE":
          setINE(photo);
          console.log(photo.pdfURI);
          break;
        case "ACTA":
          setActa(photo);
          break;
        case "CURP":
          setCURP(photo);
          break;
        case "REFERENCIAS":
          setReferencias(photo);
          break;
        case "TECNICO":
          setTecnico(photo);
          break;
        case "PROFESIONAL":
          setProfesional(photo);
          break;
        default:
          break;
      }
    }
  }, [photo]);
  const setObject = (state) => {
    const timeStamp = new Date().getTime();
    const fileName = `${timeStamp}-${state.pdfURI.substring(
      state.pdfURI.lastIndexOf("/") + 1
    )}`;
    const filePath = `${fileName}`;
    const PDF = {
      uri: INE.pdfURI,
      name: fileName,
      type: "application/pdf",
    };
    return { filePath, PDF };
  };
  const handleSendImages = async (filePath, PDF) => {
    let { error: uploadError } = await supabase.storage
      .from("enfermeritas")
      .upload(filePath, PDF, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      return console.log(uploadError);
    }
    const { data: supabaseURL, error: getURLErr } = supabase.storage
      .from("enfermeritas")
      .getPublicUrl(filePath);
    if (getURLErr) {
      return console.log(getURLErr);
    }
    return supabaseURL;
  };
  const handleSendPDFs = async () => {
    const formData = new FormData();
    const urls = {};
    if (INE) {
      const { filePath, PDF } = setObject(INE);
      formData.append("file", PDF);
      const url = await handleSendImages(filePath, PDF);
      provData["ine"] = url.publicUrl;
    }
    if (CURP) {
      const { filePath, PDF } = setObject(CURP);
      formData.append("file", PDF);
      const url = await handleSendImages(filePath, PDF);
      provData["curp"] = url.publicUrl;
    }
    if (tecnico) {
      const { filePath, PDF } = setObject(tecnico);
      formData.append("file", PDF);
      const url = await handleSendImages(filePath, PDF);
      provData["titulo_tecnico"] = url.publicUrl;
    }
    if (acta) {
      const { filePath, PDF } = setObject(acta);
      formData.append("file", PDF);
      const url = await handleSendImages(filePath, PDF);
      provData["acta_nacimiento"] = url.publicUrl;
    }
    if (referencias) {
      const { filePath, PDF } = setObject(referencias);
      formData.append("file", PDF);
      const url = await handleSendImages(filePath, PDF);
      provData["referencias_personales"] = url.publicUrl;
    }
    if (profesional) {
      const { filePath, PDF } = setObject(profesional);
      formData.append("file", PDF);
      const url = await handleSendImages(filePath, PDF);
      provData["titulo_profesional"] = url.publicUrl;
    }
    try {
      const res = await axios.post("/solicitudTablet", prevParams);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Home", { urls });
  };
  return (
    <View style={styles.container}>
      <SideBar />
      <View style={styles.content}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>Registro</Text>
          <View style={styles.secondaryContainer}>
            <View style={styles.column}>
              <View style={styles.contentContainer}>
                <Text
                  onPress={() =>
                    navigation.navigate("Camera", { input: "INE" })
                  }
                >
                  INE
                </Text>
                <FilesInput imageUri={INE?.uri} />
              </View>
              <View style={styles.contentContainer}>
                <Text
                  onPress={() =>
                    navigation.navigate("Camera", { input: "CURP" })
                  }
                >
                  CURP
                </Text>
                <FilesInput imageUri={CURP?.uri} />
              </View>
              <View style={styles.contentContainer}>
                <Text
                  onPress={() =>
                    navigation.navigate("Camera", { input: "TECNICO" })
                  }
                >
                  Titulo Tecnico
                </Text>
                <FilesInput imageUri={tecnico?.uri} />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.contentContainer}>
                <Text
                  onPress={() =>
                    navigation.navigate("Camera", { input: "ACTA" })
                  }
                >
                  Acta de Nacimiento
                </Text>
                <FilesInput imageUri={acta?.uri} />
              </View>
              <View style={styles.contentContainer}>
                <Text
                  onPress={() =>
                    navigation.navigate("Camera", { input: "REFERENCIAS" })
                  }
                >
                  Referencias Personales
                </Text>
                <FilesInput imageUri={referencias?.uri} />
              </View>
              <View style={styles.contentContainer}>
                <Text
                  onPress={() =>
                    navigation.navigate("Camera", { input: "PROFESIONAL" })
                  }
                >
                  Titulo Profesional
                </Text>
                <FilesInput imageUri={profesional?.uri} />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.butonContainer}>
              <NextButton text="Siguiente" onPress={handleSendPDFs} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Files;
