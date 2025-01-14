import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

const SuccessButton = ({ successPressed }) => {
  return (
    <Pressable style={styles.buttonStyle} onPress={successPressed}>
      <View style={styles.whiteContainer} />
      <Text style={styles.textStyle}>I did it!</Text>
    </Pressable>
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
    overflow: "hidden",
  },
  whiteContainer: {
    height: 70,
    width: 160,
    borderRadius: 24,
    backgroundColor: "black",
    position: "absolute",
    zIndex: 1,
    opacity: 0.3,
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 42,
    zIndex: 2,
  },
});
