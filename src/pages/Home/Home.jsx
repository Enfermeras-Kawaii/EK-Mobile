import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles.js";

function Home() {
  const route = useRoute();
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

export default Home;
