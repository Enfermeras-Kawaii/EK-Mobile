import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';

const TextContrasena = () => {
    return(
        <View>
            <Text>Contraseña</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    }
});


export default TextContrasena;