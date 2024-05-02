import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { Colors } from "react-native/Libraries/NewAppScreen";
import logo from "..assets/logo.png";
import Menu from "./Menu";

const Header = (props: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      <Menu></Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    maxWidth: 200,
    maxHeight: 200,
    display: "flex",
    
  },
});
export default Header;
