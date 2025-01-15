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
    height: 70,
    width: 200,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#13ae5c",
    position: "relative",
    overflow: "hidden",
  },
  whiteContainer: {
    height: 60,
    width: 190,
    borderRadius: 24,
    backgroundColor: "black",
    position: "absolute",
    zIndex: 1,
    opacity: 0.3,
  },
  textStyle: {
    color: "white",
    fontSize: 26,
    zIndex: 2,
    fontFamily: "RobotoMono",
  },
});
