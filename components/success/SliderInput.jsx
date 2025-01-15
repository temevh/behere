import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const SliderInput = ({ title, updateSliderValue }) => {
  const ValueChanged = (newValue) => {
    updateSliderValue(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {/*<Text style={styles.valueText}>{value}</Text>*/}
      <View style={styles.sliderContainer}>
        <Text style={styles.minMaxText}>1</Text>
        <Slider
          style={{ flex: 1, height: 40 }}
          minimumValue={1}
          maximumValue={6}
          step={1}
          thumbTintColor="white"
          onValueChange={(newValue) => ValueChanged(newValue)}
        />
        <Text style={styles.minMaxText}>6</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "white",
    fontFamily: "RobotoMono",
    padding: 16,
    textAlign: "center",
  },
  valueText: {
    fontSize: 22,
    color: "white",
    fontFamily: "RobotoMono",
  },
  container: {
    backgroundColor: "darkgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
  },
  minMaxText: {
    fontSize: 20,
    color: "white",
    marginHorizontal: 16,
    fontFamily: "RobotoMono",
  },
});

export default SliderInput;
