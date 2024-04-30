import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import SideBar from "../../../components/SideBar/SideBar";
import RegisterInput from "../../../components/RegisterComponents/RegisterInput/RegisterInput";
import NextButton from "../../../components/RegisterComponents/NextButton/NextButton";
import styles from "../styles";

function ExtraData() {
  const navigation = useNavigation();
  const route = useRoute();
  const provData = route.params?.data;

  const [experiencias, setExperiencias] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [jefe, setJefe] = useState("");
  const [razon, setRazon] = useState("");
  const [puesto, setPuesto] = useState(provData.rol);
  const handleNavigate = () => {
    if (provData) {
      const detalles_ultimo_trabajo = `${empresa}, ${razon}, ${jefe}, ${puesto}`;
      provData.experiencias_previas = experiencias;
      provData.detalles_ultimo_trabajo = detalles_ultimo_trabajo;
      navigation.navigate("Files", { provData });
    }
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
                <Text>Experiencias Previas</Text>
                <RegisterInput
                  value={experiencias}
                  onChangeText={setExperiencias}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Nombre de la Empresa</Text>
                <RegisterInput value={empresa} onChangeText={setEmpresa} />
              </View>
              <View style={styles.contentContainer}>
                <Text>Nombre del Anterior Jefe</Text>
                <RegisterInput value={jefe} onChangeText={setJefe} />
              </View>
              <View style={styles.contentContainer}>
                <Text>¿Por qué ya no tabaja ahi?</Text>
                <RegisterInput value={razon} onChangeText={setRazon} />
              </View>
              <View style={styles.contentContainer}>
                <Text>Puesto</Text>
                <RegisterInput value={puesto} onChangeText={setPuesto} />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.butonContainer}>
              <NextButton text="Siguiente" onPress={handleNavigate} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ExtraData;
