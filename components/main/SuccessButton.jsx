import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

const SuccessButton = () => {
  const router = useRouter();

  const handlePress = () => {
    console.log("succeed");
    router.push("/(tabs)/reviewView/TaskSucceeded");
  };

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={handlePress}>
      <View style={styles.whiteContainer}></View>
      <Text style={styles.textStyle}>I did it!</Text>
    </TouchableOpacity>
  );
};

export default SuccessButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 80,
    width: 170,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#13ae5c",
    position: "relative",
  },
  whiteContainer: {
    height: 70,
    width: 160,
    borderRadius: 24,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
  },
  textStyle: {
    fontWeight: "bold",
    color: "black",
    opacity: 1,
    fontSize: 34,
    zIndex: 2,
  },
});
