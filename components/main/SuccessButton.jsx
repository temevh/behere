import React from "react";
import { Text, StyleSheet, Button } from "react-native";

const SuccessButton = ({ successPressed }) => {
  return (
    <Button
      style={styles.buttonStyle}
      onPress={successPressed}
      title="I did it!"
    />
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
