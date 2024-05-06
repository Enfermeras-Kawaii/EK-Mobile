import React from "react";
import {
  View,
  Text,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import SideBar from "../../../components/SideBar/SideBar";
import RegisterInput from "../../../components/RegisterComponents/RegisterInput/RegisterInput";
import NextButton from "../../../components/RegisterComponents/NextButton/NextButton";
import BackButton from "../../../components/RegisterComponents/BackButton/BackButton";
import styles from "../styles";
function ExtraData() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    handleSubmit,
    control,
    formState: { errors: hookFormErrors },
  } = useForm();
  const provData = route.params?.data;

  const handleNavigate = handleSubmit((data) => {
    if (provData) {
      const detalles_ultimo_trabajo = `${data.empresa}, ${data.razon}, ${data.jefe}, ${data.puesto}`;
      provData.experiencias_previas = data.experiencias;
      provData.detalles_ultimo_trabajo = detalles_ultimo_trabajo;
      navigation.navigate("Files", { provData });
    }
  });
  const goBack = () => {
    navigation.goBack();
  };
  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <SideBar />
        <View style={styles.content}>
          <View style={styles.boxContainer}>
            <Image
              source={require("../../../../assets/logo.png")}
              style={{
                width: 61,
                height: 71,
                resizeMode: "contain",
                marginBottom: 20,
                alignSelf: "flex-start",
                position: "absolute",
              }}
            />
            <Text style={styles.title}>Otros Datos de Interes</Text>
            <View style={styles.secondaryContainer}>
              <View style={styles.column}>
                <View style={styles.contentContainer}>
                  <Text>Experiencias Previas</Text>
                  <RegisterInput
                    control={control}
                    name="experiencias"
                    multiline={true}
                    numberOfLines={4}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.experiencias && (
                    <Text style={styles.errorText}>
                      Las experiencias previas son requeridas
                    </Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Nombre de la Empresa</Text>
                  <RegisterInput
                    control={control}
                    name="empresa"
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.empresa && (
                    <Text style={styles.errorText}>
                      El nombre de la empresa es requerido
                    </Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Nombre del Anterior Jefe</Text>
                  <RegisterInput
                    control={control}
                    name="jefe"
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.jefe && (
                    <Text style={styles.errorText}>
                      El nombre del jefe es requerido
                    </Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>¿Por qué ya no trabaja ahí?</Text>
                  <RegisterInput
                    control={control}
                    name="razon"
                    multiline={true}
                    numberOfLines={4}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.jefe && (
                    <Text style={styles.errorText}>La razon es requerida</Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Puesto</Text>
                  <RegisterInput
                    control={control}
                    name="puesto"
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.jefe && (
                    <Text style={styles.errorText}>El puesto es requerido</Text>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                  <BackButton text="Atras" onPress={goBack} />
                </View>
                <View style={styles.buttonContainer}>
                  <NextButton text="Siguiente" onPress={handleNavigate} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ExtraData;
