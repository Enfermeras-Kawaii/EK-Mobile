import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home/Home.jsx";
import Register from "./src/pages/Register/Register.jsx";
import Files from "./src/pages/Register/Files/Files.jsx";
import CameraScreen from "./src/pages/Register/CameraScreen/CameraScreen.jsx";
import ExtraData from "./src/pages/Register/ExtraData/ExtraData.jsx";
import InicioSesion from "./src/pages/IniciarSesion/iniciarSesion";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InicioSesion"
          component={InicioSesion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExtraData"
          component={ExtraData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Files"
          component={Files}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

