import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router, useRouter } from "expo-router";

type LoginProps = {
  onLogin?: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const router = useRouter();

  const handleGoToHome = () => {
    onLogin?.();
    if (Username == "teste" && Password == "123") {
      router.push("/home");
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={"white"}
        value={Username}
        onChangeText={setUsername}
        testID="username-input"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"white"}
        secureTextEntry
        value={Password}
        onChangeText={setPassword}
        testID="password-input"
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={handleGoToHome}
        testID="login-button"
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
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
