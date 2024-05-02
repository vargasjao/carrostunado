import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import { useEffect } from "react";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import {
  ActionSheetProvider,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import Title from "../components/Title";
import List from "../components/List";


export default function home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({});
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Title></Title>
      <List></List>
    </View>
  );
  const { showActionSheetWithOptions } = useActionSheet();
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 40,
  },
});
