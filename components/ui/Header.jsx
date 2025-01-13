import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>BeHere</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  headerText: {
    color: "white",
    fontSize: 36,
  },
});

export default Header;
