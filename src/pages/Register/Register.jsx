import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SideBar from "../../components/SideBar/SideBar";
import RegisterInput from "../../components/RegisterComponents/RegisterInput/RegisterInput";
import NextButton from "../../components/RegisterComponents/NextButton/NextButton";
import RegisterPicker from "../../components/RegisterComponents/RegisterPicker/RegisterPicker";
import RegisterCalendar from "../../components/RegisterComponents/RegisterCalendar/RegisterCalendar";
import styles from "./styles";
function Register() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  const [apellidop, setApellidop] = useState("");
  const [apellidom, setApellidom] = useState("");
  const [rol, setRol] = useState(null);
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [RFC, setRFC] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sueldo, setSueldo] = useState("");

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
  const onChangeDate = (date) => {
    setFechaNacimiento(date);
  };
  const handleNavigate = () => {
    const data = {
      nombre,
      apellido_paterno: apellidop,
      apellido_materno: apellidom,
      rol: rol.value,
      fecha_nacimiento: fechaNacimiento,
      rfc: RFC,
      correo_electronico: email,
      telefono,
      salario_hora: sueldo,
    };
    navigation.navigate("ExtraData", { data });
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
                <Text>Nombre</Text>
                <RegisterInput value={nombre} onChangeText={setNombre} />
              </View>
              <View style={styles.contentContainer}>
                <Text>Apellido Materno</Text>
                <RegisterInput value={apellidom} onChangeText={setApellidom} />
              </View>
              <View style={styles.contentContainer}>
                <Text>Rol Deseado</Text>
                <RegisterPicker
                  data={data}
                  placeholder={"Seleccionar Rol"}
                  onChange={setRol}
                  value={rol}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Correo Electronico</Text>
                <RegisterInput
                  type={"email"}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Percepciones de Sueldo</Text>
                <RegisterInput
                  type={"numeric"}
                  value={sueldo}
                  onChangeText={setSueldo}
                />
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.contentContainer}>
                <Text>Apellido Paterno</Text>
                <RegisterInput value={apellidop} onChangeText={setApellidop} />
              </View>
              <View style={styles.contentContainer}>
                <Text>RFC</Text>
                <RegisterInput value={RFC} onChangeText={setRFC} />
              </View>
              <View style={styles.contentContainer}>
                <Text>Fecha de nacimiento</Text>
                <RegisterCalendar onDateChange={onChangeDate} />
              </View>
              <View style={styles.contentContainer}>
                <Text>Numero telefonico personal</Text>
                <RegisterInput
                  type={"numeric"}
                  value={telefono}
                  onChangeText={setTelefono}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Numero telefonico Fijo (Opcional)</Text>
                <RegisterInput
                  type={"numeric"}
                  value={telefono}
                  onChangeText={setTelefono}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.contentContainer}>
              <Text>Direccion</Text>
              <RegisterInput
                type={"numeric"}
                value={telefono}
                onChangeText={setTelefono}
                Direccion={true}
              />
            </View>
            <View style={styles.butonContainer}>
              <NextButton text="Siguiente" onPress={handleNavigate} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Register;
