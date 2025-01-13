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
    height: 100,
    width: 200,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#13ae5c",
    position: "relative",
  },
  whiteContainer: {
    height: 90,
    width: 190,
    borderRadius: 24,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
  },
  textStyle: {
    fontWeight: "bold",
    color: "black",
    opacity: 0.8,
    fontSize: 50,
    fontFamily: "RobotoMono",
    zIndex: 2,
  },
});
