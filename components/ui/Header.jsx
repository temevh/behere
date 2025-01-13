import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Behere</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
});

export default Header;
