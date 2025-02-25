import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppText() {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Welcome to React Native!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customText:{
        fontSize: 22,
        fontFamily: Platform.OS === "ios" ? "Chalkduster" : "monospace",
        fontStyle: "italic",
        fontWeight: "bold",
        color:'tomato',
        textTransform: "capitalize",

        
    }
})