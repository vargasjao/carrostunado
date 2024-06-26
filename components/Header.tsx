import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
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
