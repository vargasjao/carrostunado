import { StyleSheet, Text, View } from "react-native";
import Login from "../components/Login";
import Logo from "../components/Logo";
import { Stack, useNavigation } from "expo-router";
import { useEffect } from 'react';

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Login></Login>
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
