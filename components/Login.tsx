import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import caricon from "../assets/caricon.png";
import { router, useRouter } from "expo-router";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const router = useRouter();

  const handleGoToHome = () => {
    if (Username == "teste" && Password == "123") router.push("/home");
    else alert("Usuário ou senha inválidos");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={"white"}
        value={Username}
        onChangeText={setUsername}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"white"}
        secureTextEntry
        value={Password}
        onChangeText={setPassword}
      ></TextInput>
      <Pressable style={styles.button} onPress={handleGoToHome}>
        <Image source={require("../assets/caricon.png")} style={styles.icon} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    color: "white",
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 32,
  },
  icon: {
    alignItems: "center",
    width: 32,
    height: 32,
  },
  button: {
    backgroundColor: "#0CFF00",
    borderRadius: 16,
    alignItems: "center",
    padding: 16,
  },
});
