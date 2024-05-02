import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AboutTheApp from "../components/AboutTheApp";
export default function about() {
  return (
    <View style={styles.container}>
      <AboutTheApp></AboutTheApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
