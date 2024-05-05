  import React, { useState } from "react";
  import { View, Text, TextInput } from "react-native";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import SideBar from "../../../components/SideBar/SideBar";
  import RegisterInput from "../../../components/RegisterComponents/RegisterInput/RegisterInput";
  import NextButton from "../../../components/RegisterComponents/NextButton/NextButton";
  import styles from "../styles";
  import { Image } from "react-native";
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
        <SideBar>

        </SideBar>
        <View style={styles.content}>
          <View style={styles.boxContainer}>
          <Image
          source={require("../../../../assets/logo.png")} // O utiliza una URL si la imagen está en línea
          style={{ width: 100, // Ancho de la imagen
          height: 100, // Altura de la imagen
          resizeMode: "contain", // Modo de redimensionamiento
          marginBottom: 20, // Margen inferior opcional
          alignSelf:"flex-start",
          position:"absolute"
        }}
        />
            <Text style={styles.title}>Registro</Text>
            <View style={styles.secondaryContainer}>
              <View style={styles.column}>
                <View style={styles.contentContainer}>
                  <Text>Experiencias Previas</Text>
                  <TextInput
                    value={experiencias}
                    onChangeText={setExperiencias}
                    multiline={true} // Permitir múltiples líneas
                    numberOfLines={4} // Número de líneas visibles
                    style={{
                      width: "80%",
                      borderWidth: 1,
                      borderColor: "#ccc",
                      padding: 10,
                      marginBottom: 20,
                    }}
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
                  <Text>¿Por qué ya no trabaja ahí?</Text>
                  <TextInput
                    value={razon}
                    onChangeText={setRazon}
                    multiline={true}
                    numberOfLines={4}
                    style={{
                      width: "80%",
                      borderWidth: 1,
                      borderColor: "#ccc",
                      padding: 10,
                      marginBottom: 20,
                    }}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <Text>Puesto</Text>
                  <RegisterInput value={puesto} onChangeText={setPuesto} />
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                  <NextButton text="Siguiente" onPress={handleNavigate} />

                </View>
                <View style={styles.buttonContainer}>
                  <NextButton text="Atrás" onPress={handleNavigate} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  export default ExtraData;
