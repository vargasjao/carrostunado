import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import Header from "../components/Header";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Menu from "../components/Menu";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          header: Header,

        }}
      />
    </ActionSheetProvider>
  );
}
