import React,{ useState} from 'react';
import {View, Button, Text} from 'react-native';
import { StyleSheet } from 'react-native';

const TextCorreo = () => {
    return(
        <View>
            <Text>Introduce tu correo electrónico</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    }
});



export default TextCorreo;