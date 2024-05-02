import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import mylogo from "../assets/logo.png";

export default function Logo() {
  return (
    <View>
        <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    logo : {
        width : 300,
        height : 300
        
    }
})

