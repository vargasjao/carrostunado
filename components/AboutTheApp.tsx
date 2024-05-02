import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function AboutTheApp() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      <Text style={styles.text}>Version 1.0</Text>
      <Text style={styles.text}>Developed by :</Text>
      <Text style={styles.text2}>João Pedro Cieslak Vargas</Text>
      <Text style={styles.text}>GitHub : https://github.com/vargasjao/carrostunado.git</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems:"center"
  },
  logo: {
    width: 300,
    height: 300,
  },
  text: {
    marginBottom : 16,
    color: "#0CFF00",
    alignSelf: "center",
  },
  text2: {
    fontWeight: "bold",
    color: "#0CFF00",
    alignSelf: "center",
    fontSize:16,
    marginTop : 32
  },
});
