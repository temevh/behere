import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const SliderInput = ({ title, setHard }) => {
  const [value, setValue] = useState(1);
  const ValueChanged = (newValue) => {
    setHard(newValue);
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.valueText}>{value}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={10}
        step={1}
        thumbTintColor="white"
        onValueChange={(newValue) => ValueChanged(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "white",
  },
  valueText: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
  },
  container: {
    backgroundColor: "darkgreen",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SliderInput;
