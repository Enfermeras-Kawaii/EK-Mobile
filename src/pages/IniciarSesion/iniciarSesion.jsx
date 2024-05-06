// Pages/InicioSesion.js InicioSesion
// Pages/InicioSesion.js
import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import TextMostarCorreo from "../../components/LoginComponents/TextMostrarCorreo";
import TextContrasena from "../../components/LoginComponents/TextContrasena";
import Texto from "../../components/LoginComponents/TextNormal/Texto";
import Titles from "../../components/LoginComponents/Titles/Titles";
import TextDown from "../../components/LoginComponents/TextDown/TextDown";
import Input from "../../components/LoginComponents/Input/Input";
import Link from "../../components/LoginComponents/Link/Link";
import Boton from "../../components/LoginComponents/Boton/Boton";

const InicioSesion = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleInicioSesion = () => {
    // Lógica para iniciar sesión con correo y contraseña
    console.log("Correo:", correo);
    console.log("Contraseña:", contrasena);
  };

  return (
    <View style={styles.container}>
      <Titles>Iniciar Sesion</Titles>

      <View style={styles.foo}>
        <View style={styles.inputContainer}>
          <TextMostarCorreo styles={styles.alignItems} />
          <Input
            value={correo}
            onChangeText={setCorreo}
            placeholder="Correo electrónico"
          ></Input>
          <TextDown>Introduce tu correo electrónico</TextDown>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.contrasenaContainer}>
            <TextContrasena style={[styles.textContrasena, styles.espaciado]} />
            <View style={styles.linkcontainer}>
              <Link style={styles.linkOlvidoContrasena}>
                ¿Olvidaste tu contraseña?
              </Link>
            </View>
          </View>
          <Input
            value={contrasena}
            onChangeText={setContrasena}
            placeholder="Contraseña"
            secureTextEntry={true}
          >
            {" "}
          </Input>
          <TextDown>Introduce tu contraseña</TextDown>
        </View>
      </View>
      <Boton onPress={handleInicioSesion} text="Iniciar"></Boton>
      <View style={styles.inputContainer}>
        <View style={styles.contrasenaContainer}>
          <Texto>¿Aún no tienes una cuenta?</Texto>
          <View tyle={styles.linkcontainer}>
            <Link style={styles.linkOlvidoContrasena}>Registrate</Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InicioSesion;
