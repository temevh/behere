import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Checkbox from "expo-checkbox";

const CheckboxInput = ({ title, updateCheckboxValue }) => {
  const [isChecked, setChecked] = useState(false);

  const checkboxPressed = (isChecked) => {
    updateCheckboxValue(isChecked);
    setChecked(isChecked);
  };

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={(newValue) => {
          checkboxPressed(newValue);
        }}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CheckboxInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "white",
    fontFamily: "RobotoMono",
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  checkbox: {
    height: 40,
    width: 40,
    margin: 8,
  },
});
