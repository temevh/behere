import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckboxInput = ({ title, updateCheckboxValue }) => {
  return (
    <View>
      <BouncyCheckbox
        size={100}
        fillColor="red"
        unFillColor="#FFFFFF"
        text="Custom Checkbox"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked) => {
          console.log(isChecked);
        }}
      />
    </View>
  );
};

export default CheckboxInput;
