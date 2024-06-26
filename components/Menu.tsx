import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router, usePathname, useRouter } from "expo-router";
import { Image } from "react-native";

export default function Menu() {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const pathname = usePathname();

  const onPress = () => {
    let options = ["Logout", "About"];
    const destructiveButtonIndex = 0;
    showActionSheetWithOptions(
      {
        destructiveButtonIndex,
        options,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 1:
            router.push("/about");
            break;

          case 0:
            router.dismissAll();

            break;
        }
      }
    );
  };
  return (
    <View>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Image source={require("../assets/burguer.png")} style={styles.icon} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  pressable: {
    justifyContent: "center",
    backgroundColor: "#0CFF00",
    borderRadius: 8,
    padding: 24,
    marginHorizontal: 30,
    marginLeft: 80,
    marginVertical: 90,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
