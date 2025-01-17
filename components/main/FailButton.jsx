import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

const FailButton = () => {
  const router = useRouter();

  const handlePress = () => {
    console.log("fail");
  };
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={handlePress}>
      <View style={styles.whiteContainer}></View>
      <Text style={styles.textStyle}>Not yet...</Text>
    </TouchableOpacity>
  );
};

export default FailButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 160,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f14722",
    position: "relative",
  },
  whiteContainer: {
    height: 44,
    width: 154,
    borderRadius: 16,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
  },
  textStyle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 24,
    fontFamily: "RobotoMono",
    zIndex: 2,
  },
});
