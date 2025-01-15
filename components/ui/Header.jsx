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
    marginTop: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 36,
  },
});

export default Header;
