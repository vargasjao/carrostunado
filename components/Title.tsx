import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars for Sale</Text>
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
  title: {
    marginTop: 70,
    fontWeight: "bold",
    color: "#0CFF00",
    fontSize: 32,
  },
});
