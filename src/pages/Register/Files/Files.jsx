import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import SideBar from "../../../components/SideBar/SideBar";
import NextButton from "../../../components/RegisterComponents/NextButton/NextButton";
import FilesInput from "../../../components/FilesComponents/Files/FilesInput";
import supabase from "../../../config/initSupabase";
import axios from "../../../api/axios";
import BackButton from "../../../components/RegisterComponents/BackButton/BackButton";
import Loading from "../../../components/Loading/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  const [loading, setLoading] = useState(false);

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
  useEffect(() => {
    async function saveData() {
      if (provData) {
        await AsyncStorage.setItem("datosAnteriores", JSON.stringify(provData));
      }
    }
    saveData();
  }, []);
  const setObject = (state) => {
    const timeStamp = new Date().getTime();
    const fileName = `${timeStamp}-${state.pdfURI.substring(
      state.pdfURI.lastIndexOf("/") + 1
    )}`;
    const filePath = `${fileName}`;
    const PDF = {
      uri: state.pdfURI,
      name: fileName,
      type: "application/pdf",
    };
    return { filePath, PDF };
  };
  const handleSendImages = async (filePath, PDF, carpeta) => {
    let { error: uploadError } = await supabase.storage
      .from("enfermeritas")
      .upload(`${carpeta}/${filePath}`, PDF, {
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
    setLoading(true);
    try {
      const formData = new FormData();
      const urls = {
        ine: "",
        curp: "",
        acta_nacimiento: "",
        titulo_tecnico: "",
        titulo_profesional: "",
        referencias_personales: "",
      };
      if (INE) {
        const { filePath, PDF } = setObject(INE);
        formData.append("ine", PDF);
        const url = await handleSendImages(filePath, PDF, "ine");
        urls.ine = `ine/${filePath}`;
      }
      if (CURP) {
        const { filePath, PDF } = setObject(CURP);
        formData.append("curp", PDF);
        const url = await handleSendImages(filePath, PDF, "curp");
        urls.curp = `curp/${filePath}`;
      }
      if (tecnico) {
        const { filePath, PDF } = setObject(tecnico);
        formData.append("titulo_tecnico", PDF);
        const url = await handleSendImages(filePath, PDF, "titulo_tecnico");
        urls.titulo_tecnico = `titulo_tecnico/${filePath}`;
      }
      if (acta) {
        const { filePath, PDF } = setObject(acta);
        formData.append("acta_nacimiento", PDF);
        const url = await handleSendImages(filePath, PDF, "acta_nacimiento");
        urls.acta_nacimiento = `acta_nacimiento/${filePath}`;
      }
      if (referencias) {
        const { filePath, PDF } = setObject(referencias);
        formData.append("referencias_personales", PDF);
        const url = await handleSendImages(
          filePath,
          PDF,
          "referencias_personales"
        );
        urls.referencias_personales = `referencias_personales/${filePath}`;
      }
      if (profesional) {
        const { filePath, PDF } = setObject(profesional);
        formData.append("titulo_profesional", PDF);
        const url = await handleSendImages(filePath, PDF, "titulo_profesional");
        urls.titulo_profesional = `titulo_profesional/${filePath}`;
      }

      const datosGuardados = await AsyncStorage.getItem("datosAnteriores");
      const datosGuardadosObj = JSON.parse(datosGuardados);
      console.log(datosGuardadosObj);
      const dataToSend = {
        nombre: datosGuardadosObj?.nombre,
        apellido_paterno: datosGuardadosObj?.apellido_paterno,
        apellido_materno: datosGuardadosObj?.apellido_materno,
        fecha_nacimiento: datosGuardadosObj?.fecha_nacimiento,
        correo_electronico: datosGuardadosObj?.correo_electronico,
        experiencias_previas: datosGuardadosObj?.experiencias_previas,
        detalles_ultimo_trabajo: datosGuardadosObj?.detalles_ultimo_trabajo,
        rfc: datosGuardadosObj?.rfc,
        domicilio: datosGuardadosObj?.domicilio,
        genero: datosGuardadosObj?.genero,
        puesto: datosGuardadosObj?.puesto,
        salario_hora: datosGuardadosObj?.salario_hora,
        telefonos: datosGuardadosObj?.telefonos,
        ine: urls.ine,
        acta_nacimiento: urls.acta_nacimiento,
        curp: urls.curp,
        referencias_personales: urls.referencias_personales,
        titulo_profesional: urls.titulo_profesional,
        titulo_tecnico: urls.titulo_tecnico,
      };
      console.log(dataToSend);
      const res = await axios.post("/solicitudTablet", dataToSend);
      console.log(res.data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <SideBar />
      <View style={styles.content}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>Registro</Text>
          <View style={styles.secondaryContainer}>
            <View style={styles.column}>
              <View style={styles.contentContainer}>
                <Text>INE</Text>
                <FilesInput
                  imageUri={INE?.uri}
                  onPress={() =>
                    navigation.navigate("Camera", {
                      input: "INE",
                    })
                  }
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>CURP</Text>
                <FilesInput
                  imageUri={CURP?.uri}
                  onPress={() =>
                    navigation.navigate("Camera", { input: "CURP" })
                  }
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Titulo Tecnico</Text>
                <FilesInput
                  imageUri={tecnico?.uri}
                  onPress={() =>
                    navigation.navigate("Camera", {
                      input: "TECNICO",
                    })
                  }
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.contentContainer}>
                <Text>Acta de Nacimiento</Text>
                <FilesInput
                  imageUri={acta?.uri}
                  onPress={() =>
                    navigation.navigate("Camera", { input: "ACTA" })
                  }
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Referencias Personales</Text>
                <FilesInput
                  imageUri={referencias?.uri}
                  onPress={() =>
                    navigation.navigate("Camera", {
                      input: "REFERENCIAS",
                    })
                  }
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Titulo Profesional</Text>
                <FilesInput
                  imageUri={profesional?.uri}
                  onPress={() =>
                    navigation.navigate("Camera", {
                      input: "PROFESIONAL",
                    })
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.buttonRow}>
              <View style={styles.buttonContainer}>
                <BackButton text="Atras" onPress={goBack} />
              </View>
              <View style={styles.buttonContainer}>
                <NextButton text="Siguiente" onPress={handleSendPDFs} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Files;
