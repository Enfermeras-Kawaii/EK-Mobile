import React from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import SideBar from "../../components/SideBar/SideBar";
import RegisterInput from "../../components/RegisterComponents/RegisterInput/RegisterInput";
import NextButton from "../../components/RegisterComponents/NextButton/NextButton";
import RegisterPicker from "../../components/RegisterComponents/RegisterPicker/RegisterPicker";
import RegisterCalendar from "../../components/RegisterComponents/RegisterCalendar/RegisterCalendar";
import { useForm } from "react-hook-form";
import styles from "./styles";

function Register() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors: hookFormErrors },
  } = useForm();

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const data = [
    {
      label: "Cuidador",
      value: "cuidador",
    },
    {
      label: "Enfermero",
      value: "enfermero",
    },
  ];
  const genero = [
    {
      label: "Hombre",
      value: "hombre",
    },
    {
      label: "Mujer",
      value: "mujer",
    },
    {
      label: "Otro",
      value: "otro",
    },
  ];

  const onChangeDate = (date) => {
    setFechaNacimiento(date);
  };

  const handleNavigate = handleSubmit((data) => {
    const sendedData = {
      nombre: data.nombre,
      apellido_paterno: data.apellidop,
      apellido_materno: data.apellidom,
      puesto: data.rol.value,
      fecha_nacimiento: data.fechaNacimiento,
      rfc: data.rfc,
      correo_electronico: data.email,
      telefonos: [data.telefonoP, data.telefonoF].filter(Boolean),
      salario_hora: data.sueldo,
      genero: data.genero.value,
      domicilio: data.direccion,
    };

    navigation.navigate("ExtraData", { data: sendedData });
  });
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <SideBar />
        <View style={styles.content}>
          <View style={styles.boxContainer}>
            <Image
              source={require("../../../assets/logo.png")}
              style={{
                width: 61,
                height: 71,
                resizeMode: "contain",
                marginBottom: 20,
                alignSelf: "flex-start",
                position: "absolute",
              }}
            />
            <Text style={styles.title}>Registro</Text>
            <View style={styles.secondaryContainer}>
              <View style={styles.column}>
                <View style={styles.contentContainer}>
                  <Text>Nombre</Text>
                  <RegisterInput
                    control={control}
                    name={"nombre"}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.nombre && (
                    <Text style={styles.errorText}>El nombre es requerido</Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Apellido Materno</Text>
                  <RegisterInput
                    control={control}
                    name={"apellidom"}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.apellidom && (
                    <Text style={styles.errorText}>
                      El apellido materno es requerido
                    </Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Rol Deseado</Text>
                  <RegisterPicker
                    control={control}
                    data={data}
                    placeholder={"Seleccionar Rol"}
                    name={"rol"}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.rol && (
                    <Text style={styles.errorText}>El rol es requerido</Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Correo Electronico</Text>
                  <RegisterInput
                    control={control}
                    name={"email"}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.email && (
                    <Text style={styles.errorText}>El email es requerido</Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Percepciones de Sueldo</Text>
                  <RegisterInput
                    control={control}
                    name={"sueldo"}
                    rules={{ required: true }}
                    type={"numeric"}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.sueldo && (
                    <Text style={styles.errorText}>El sueldo es requerido</Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Direccion</Text>
                  <RegisterInput
                    control={control}
                    name={"direccion"}
                    rules={{ required: true }}
                    Direccion={true}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.direccion && (
                    <Text style={styles.errorText}>
                      La direccion es requerida
                    </Text>
                  )}
                </View>
              </View>

              <View style={styles.column}>
                <View style={styles.contentContainer}>
                  <Text>Apellido Paterno</Text>
                  <RegisterInput
                    control={control}
                    name={"apellidop"}
                    rules={{ required: true }}
                    errors={hookFormErrors}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.apellidop && (
                    <Text style={styles.errorText}>
                      El apellido paterno es requerido
                    </Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>RFC</Text>
                  <RegisterInput
                    control={control}
                    name={"rfc"}
                    rules={{ required: true }}
                    errors={hookFormErrors}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.rfc && (
                    <Text style={styles.errorText}>El rfc es requerido</Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Fecha de nacimiento</Text>
                  <RegisterCalendar
                    control={control}
                    name={"fechaNacimiento"}
                    onDateChange={onChangeDate}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.fechaNacimiento && (
                    <Text style={styles.errorText}>
                      La fecha de nacimiento es requerida
                    </Text>
                  )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Numero telefonico personal</Text>
                  <RegisterInput
                    control={control}
                    name={"telefonoP"}
                    rules={{
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    }}
                    type={"numeric"}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.telefonoP &&
                    hookFormErrors.telefonoP.type === "required" && (
                      <Text style={styles.errorText}>
                        El telefono personal es requerido
                      </Text>
                    )}
                  {hookFormErrors.telefonoP &&
                    hookFormErrors.telefonoP.type === "minLength" && (
                      <Text style={styles.errorText}>
                        La longitud debe ser de 10 digitos
                      </Text>
                    )}
                  {hookFormErrors.telefonoP &&
                    hookFormErrors.telefonoP.type === "maxLength" && (
                      <Text style={styles.errorText}>
                        La longitud debe ser de 10 digitos
                      </Text>
                    )}
                </View>

                <View style={styles.contentContainer}>
                  <Text>Numero telefonico Fijo (Opcional)</Text>
                  <RegisterInput
                    control={control}
                    name={"telefonoF"}
                    rules={{
                      minLength: 10,
                      maxLength: 10,
                    }}
                    type={"numeric"}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.telefonoF &&
                    hookFormErrors.telefonoF.type === "minLength" && (
                      <Text style={styles.errorText}>
                        La longitud debe ser de 10 digitos
                      </Text>
                    )}
                  {hookFormErrors.telefonoF &&
                    hookFormErrors.telefonoF.type === "maxLength" && (
                      <Text style={styles.errorText}>
                        La longitud debe ser de 10 digitos
                      </Text>
                    )}
                </View>
                <View style={styles.contentContainer}>
                  <Text>Genero</Text>
                  <RegisterPicker
                    control={control}
                    data={genero}
                    placeholder={"Seleccionar Genero"}
                    name={"genero"}
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {hookFormErrors.genero && (
                    <Text style={styles.errorText}>El genero es requerido</Text>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.buttonContainer}>
                <NextButton text="Siguiente" onPress={handleNavigate} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Register;
