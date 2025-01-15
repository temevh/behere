import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = ({ title, updateCheckboxValue }) => {
  const checkboxPressed = (isChecked) => {
    updateCheckboxValue(isChecked);
  };

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={40}
        text="Custom Checkbox"
        innerIconStyle={{ borderRadius: 0 }}
        onPress={(isChecked) => {
          checkboxPressed(isChecked);
        }}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
