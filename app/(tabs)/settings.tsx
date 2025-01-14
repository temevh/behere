import { StyleSheet, View, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <View>
      <Text style={styles.text}>Settings view</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
  },
});
