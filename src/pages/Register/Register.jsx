import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
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
  const [Disponibilidad, setDisponibilidad] = useState(1);
  const [diasSeleccionados, setDiasSeleccionados] = useState(Array.from({ length: Disponibilidad }, () => []));
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
  const dias = [
    { label: "Lunes", value: 1 },
    { label: "Martes", value: 2 },
    { label: "Miércoles", value: 3 },
    { label: "Jueves", value: 4 },
    { label: "Viernes", value: 5 },
    { label: "Sábado", value: 6 },
    { label: "Domingo", value: 7 }
  ];

  const onChangeDate = (date) => {
    setFechaNacimiento(date);
  };

  const onChangeDispo = (t) => {
    if (t === "") {
      setDisponibilidad(0);
    }
    else if (t < 1) {
      setDisponibilidad(1);
    }
    else if (t > 7) {
      setDisponibilidad(7);
    } else {
      setDisponibilidad(t);
    }
    setDiasSeleccionados(Array.from({ length: Disponibilidad }, () => []));
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

  const addDia = (nuevoDia, index) => {
    const nuevosDias = [...diasSeleccionados];
    nuevosDias[index] = nuevoDia;
    setDiasSeleccionados(nuevosDias);
  };

  return (
    <View style={styles.container}>
      <SideBar/>
      <View style={styles.content}>
        <View style={styles.boxContainer}>
          <Image
            source={require("../../../assets/logo.png")}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              marginBottom: 20,
              alignSelf: "flex-start",
              position: "absolute"
            }}
          />
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
              <Text>Disponibilidad</Text>

              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <View style={styles.inputContainer}>
                  <AntDesign name="clockcircleo" style={{ marginLeft: -100, fontSize: 15, color: "#f36cbc", position: "absolute" }} />

                  <TextInput
                    inputMode={"numeric"}
                    value={Disponibilidad.toString()}
                    onChangeText={onChangeDispo}
                    max="7"
                    min="1"
                    style={{
                      borderColor: "#B8B8C8",
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 60,
                      height: 35,
                      padding: 10,
                      marginLeft: -130
                    }}
                  />

                  <AntDesign name="calendar" style={{ fontSize: 20, color: "#f36cbc", position: "absolute", right: 8, top: 5 }} />
                  <TextInput
                    inputMode={"numeric"}
                    value={rol}
                    placeholder="hrs"
                    onChangeText={setRol}
                    max="7"
                    min="1"
                    style={{
                      borderColor: "#B8B8C8",
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 70,
                      height: 35,
                      padding: 3,
                      paddingLeft: 5,
                    }}
                  />
                </View>
                {diasSeleccionados.map((diasSeleccionadosDeInput, index) => (
                  <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                    <RegisterPicker
                      data={dias}
                      placeholder={"Días"}
                      onChange={(value) => addDia(value, index)}
                      value={diasSeleccionadosDeInput}
                    />
                    <AntDesign name="calendar" style={{ fontSize: 20, color: "#f36cbc", marginLeft: 80, position: "absolute" }} />

                  </View>
                ))}
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
    </View >
  );
}

export default Register;
