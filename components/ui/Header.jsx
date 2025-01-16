import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ backgroundColor }) => {
  return (
    <View style={[styles.headerContainer, { backgroundColor }]}>
      <Text style={styles.headerText}>BeHere</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 34,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  headerText: {
    color: "white",
    fontSize: 36,
  },
});

export default Header;
